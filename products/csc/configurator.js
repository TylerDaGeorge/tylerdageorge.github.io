/* CSC configurator - prototype concept, not a validated engineering model */
(async()=>{
 const root=document.querySelector('.csc-builder');if(!root)return;
 const $=id=>document.getElementById(id);
 const inputs=['csc-width','csc-depth','csc-height','csc-material','csc-door','csc-shelf','csc-gauge','csc-qty'];
 const get=()=>({w:Number($('csc-width').value),d:Number($('csc-depth').value),h:Number($('csc-height').value),air:'RECIRC',material:$('csc-material').value,door:$('csc-door').value,shelf:$('csc-shelf').checked,gauge:$('csc-gauge').value,qty:Math.max(1,Math.min(999,Math.floor(Number($('csc-qty').value)||1)))});
 const sku=s=>['CSC',s.w+'Wx'+s.d+'Dx'+s.h+'H',s.air,s.material,s.door ,s.shelf?'SH':'NS',s.gauge].join('-');
 const quote=s=>{const p=new URLSearchParams({product:'csc',sku:sku(s),width:String(s.w),depth:String(s.d),height:String(s.h),quantity:String(s.qty),airflow:s.air,material:s.material,door:s.door,shelf:s.shelf?'Yes':'No',gauge:s.gauge});return '/request-a-quote/?'+p.toString()};
 let draw=()=>{};
 function update(){const s=get();$('csc-sku').textContent=sku(s);$('csc-quote').href=quote(s);draw(s)}
 inputs.forEach(id=>$(id).addEventListener('change',update));
 $('csc-qty').addEventListener('input',update);
 $('csc-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(sku(get()));$('csc-copy-status').textContent='SKU copied.'}catch{$('csc-copy-status').textContent='Select the SKU above to copy.'}});
 try{
  const THREE=await import('https://esm.sh/three@0.160.1');
  const {OrbitControls}=await import('https://esm.sh/three@0.160.1/examples/jsm/controls/OrbitControls.js');
  const host=$('csc-3d'),scene=new THREE.Scene();scene.background=new THREE.Color(0xf5f7fa);
  const camera=new THREE.PerspectiveCamera(36,1,.1,400),renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;host.append(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff,0x8b9ba9,2.2));const lamp=new THREE.DirectionalLight(0xffffff,2);lamp.position.set(30,45,55);scene.add(lamp);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.minDistance=23;controls.maxDistance=140;
  const parts=new THREE.Group();scene.add(parts);

  const metalWhite=new THREE.MeshStandardMaterial({color:0xe7e9eb,metalness:.38,roughness:.36});
  const stainless=new THREE.MeshStandardMaterial({color:0xb3bec8,metalness:.8,roughness:.25});
  const dark=new THREE.MeshStandardMaterial({color:0x37434d,metalness:.45,roughness:.44});
  const seal=new THREE.MeshStandardMaterial({color:0x53636d,roughness:.85});
  const glass=new THREE.MeshPhysicalMaterial({color:0xb4dce9,transparent:true,opacity:.26,metalness:.05,roughness:.12,depthWrite:false,side:THREE.DoubleSide});
  const screwMat=new THREE.MeshStandardMaterial({color:0x88939c,metalness:.85,roughness:.28});
  const perforation=new THREE.MeshStandardMaterial({color:0x65717a,metalness:.45,roughness:.65});
  const edge=new THREE.LineBasicMaterial({color:0x88939b,transparent:true,opacity:.38});
  const box=(w,h,d,x,y,z,mat,outline=false)=>{
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);parts.add(mesh);
    if(outline){const e=new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry,24),edge);mesh.add(e)}
    return mesh;
  };
  const cylinder=(radius,depth,x,y,z,mat,rotationX=0)=>{
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,depth,24),mat);
    mesh.rotation.x=rotationX;mesh.position.set(x,y,z);parts.add(mesh);return mesh;
  };
  const screw=(x,y,z)=>cylinder(.075,.055,x,y,z,screwMat,Math.PI/2);
  const rebuild=s=>{
    parts.clear();
    const W=s.w+2.5,D=s.d+3.4,H=s.h+7.0,zoneH=s.h;
    const painted=s.material==='PAINTED';
    const mat=painted?metalWhite:stainless;
    const zFront=D/2,zRear=-D/2;
    const t=.16;
    // Clean staging enclosure: tray floor, outer side skins and solid rear.
    box(W,t,D,0,.08,0,mat,true);
    box(t,zoneH,D,-W/2+t/2,zoneH/2,0,mat,true);
    box(t,zoneH,D,W/2-t/2,zoneH/2,0,mat,true);
    box(W,zoneH,t,0,zoneH/2,zRear+t/2,mat,true);
    // Return-air chutes running vertically along both side walls.
    for(const x of [-W/2+.55,W/2-.55]){
      box(.13,zoneH-.7,D-1.1,x,zoneH/2,0,mat);
      for(let k=0;k<10;k++){
        const zz=zRear+1+(k+.5)*(D-2)/10;
        box(.18,.09,.65,x,1.1,zz,perforation);
      }
    }
    // Perforated floor: a thin deck with inset circular dark perforations.
    box(W-1.2,.16,D-1.2,0,.45,0,mat);
    const pitch=1.05,holesX=Math.floor((W-2.7)/pitch),holesZ=Math.floor((D-2.7)/pitch);
    const dot=new THREE.CylinderGeometry(.095,.095,.012,8);
    for(let i=0;i<holesX;i++)for(let j=0;j<holesZ;j++){
      const mesh=new THREE.Mesh(dot,perforation);mesh.position.set((i-(holesX-1)/2)*pitch,.543,(j-(holesZ-1)/2)*pitch);parts.add(mesh);
    }
    // Overhead HEPA cartridge and dedicated upper plenum / blower housing.
    box(W-.9,.46,D-.9,0,zoneH-.45,0,seal);
    box(W,.22,D,0,zoneH+.08,0,mat,true);
    box(W,6.1,D,0,zoneH+3.25,0,mat,true);
    box(W,.22,D,0,zoneH+6.35,0,mat,true);
    // Top inlet prefilter and concentric blower grille.
    box(Math.min(10,W-3),.10,Math.min(10,D-3),0,zoneH+6.52,0,dark);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(Math.min(3.3,(W-4)/3,(D-4)/3),.10,8,48),dark);
    ring.rotation.x=Math.PI/2;ring.position.set(0,zoneH+6.62,0);parts.add(ring);
    for(let k=0;k<7;k++)box(Math.min(6,W-5),.08,.09,0,zoneH+6.66,-2.4+k*.8,screwMat);
    // Front face door frame and recessed clear glazing.
    const doorZ=zFront+.16,frame=.66;
    box(W,frame,.34,0,zoneH-frame/2,doorZ,mat,true);
    box(W,frame,.34,0,frame/2,doorZ,mat,true);
    for(const x of [-W/2+frame/2,W/2-frame/2])box(frame,zoneH-frame*2,.34,x,zoneH/2,doorZ,mat,true);
    box(W-frame*2,zoneH-frame*2,.10,0,zoneH/2,doorZ+.02,glass);
    // Hinge barrel and latching handle reverse with selected swing.
    const hingeX=s.door==='LH'?-W/2+.2:W/2-.2;
    const handleX=-hingeX+Math.sign(hingeX)*.25;
    for(const yy of [2.3,zoneH-2.3]){
      cylinder(.23,1.05,hingeX,yy,doorZ+.25,screwMat);
    }
    box(.34,2.6,.5,handleX,zoneH/2,doorZ+.65,dark,true);
    // Optional removable shelf with subtle side brackets.
    if(s.shelf){
      box(W-2,.20,D-1.5,0,zoneH*.53,0,stainless,true);
      for(const x of [-W/2+.85,W/2-.85])box(.55,.25,D-2,x,zoneH*.53-.15,0,dark);
    }
    // Optional pressure gauge on upper front fascia.
    if(s.gauge!=='NONE'){
      const gauge=cylinder(s.gauge==='MAGNEHELIC'?1.0:.72,.25,W/2-2.1,zoneH+3.15,doorZ+.08,dark,Math.PI/2);
      const face=cylinder(s.gauge==='MAGNEHELIC'?.78:.52,.27,W/2-2.1,zoneH+3.15,doorZ+.24,metalWhite,Math.PI/2);
      box(.08,.58,.05,W/2-2.1,zoneH+3.15,doorZ+.41,dark);
    }
    // Panel fasteners and removable top access screws.
    for(const x of [-W/2+.4,W/2-.4]){
      for(const y of [1.2,zoneH-1.2,zoneH+1.0,zoneH+5.65])screw(x,y,doorZ+.27);
      for(const z of [zRear+.7,zFront-.7])screw(x,zoneH+6.53,z);
    }
    // Floor feet.
    for(const x of [-W/2+1,W/2-1])for(const z of [zRear+1,zFront-1])box(.8,.35,.8,x,-.22,z,dark);
    const bounds=new THREE.Box3().setFromObject(parts),size=bounds.getSize(new THREE.Vector3()),focus=bounds.getCenter(new THREE.Vector3());
    const span=Math.max(size.x,size.y,size.z);
    controls.minDistance=span*.65;controls.maxDistance=span*7;
    if(!rebuild.initialized){
      camera.position.set(span*1.13,span*.88,span*1.55);
      rebuild.initialized=true;
    }
    controls.target.copy(focus);
    camera.near=.1;camera.far=span*20;camera.updateProjectionMatrix();controls.update();
    $('csc-model-note').textContent='High-detail conceptual CSC model. Enclosure, door, plenum, perforated floor, and optional shelf respond to the selected size. Appearance is illustrative; final engineered geometry and performance require validation.';
  };
  draw=rebuild;
  const resize=()=>{const w=Math.max(1,host.clientWidth),h=Math.max(310,Math.min(500,w*.7));renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(host);
  update();resize();let visible=true;new IntersectionObserver(e=>visible=e[0]?.isIntersecting??true).observe(host);
  function animate(){requestAnimationFrame(animate);if(visible){controls.update();renderer.render(scene,camera)}}animate();
 }catch(e){$('csc-3d').textContent='3D preview unavailable. You can still configure the chamber and request a quote.';console.error(e)}
 update();
})();