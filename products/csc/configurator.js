/* CSC configurator - prototype concept, not a validated engineering model */
(async()=>{
 const root=document.querySelector('.csc-builder');if(!root)return;
 const $=id=>document.getElementById(id);
 const inputs=['csc-width','csc-depth','csc-height','csc-mount','csc-material','csc-door','csc-shelf','csc-gauge','csc-qty'];
 const get=()=>({w:Number($('csc-width').value),d:Number($('csc-depth').value),h:Number($('csc-height').value),air:'RECIRC',mount:$('csc-mount').value,material:$('csc-material').value,door:$('csc-door').value,shelf:$('csc-shelf').checked,gauge:$('csc-gauge').value,qty:Math.max(1,Math.min(999,Math.floor(Number($('csc-qty').value)||1)))});
 const sku=s=>['CSC',s.w+'Wx'+s.d+'Dx'+s.h+'H',s.air,s.material,s.door,s.mount,s.shelf?'SH':'NS',s.gauge].join('-');
 const quote=s=>{const p=new URLSearchParams({product:'csc',sku:sku(s),width:String(s.w),depth:String(s.d),height:String(s.h),quantity:String(s.qty),airflow:s.air,mount:s.mount,material:s.material,door:s.door,shelf:s.shelf?'Yes':'No',gauge:s.gauge});return '/request-a-quote/?'+p.toString()};
 let draw=()=>{};
 function update(){const s=get();$('csc-sku').textContent=sku(s);$('csc-quote').href=quote(s);$('csc-mount-note').hidden=s.mount!=='UNDER';draw(s)}
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
  const parts=new THREE.Group(),dimensions=new THREE.Group();scene.add(parts,dimensions);

  const {GLTFLoader}=await import('https://esm.sh/three@0.160.1/examples/jsm/loaders/GLTFLoader.js');
  const loader=new GLTFLoader();
  const gltf=await loader.loadAsync('/products/csc/CSC_Assembly.glb');
  const model=gltf.scene;
  const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
  model.position.sub(center);
  // Keep CAD geometry proportional: configuration choices never stretch precision components.
  parts.add(model);
  const shelfMaterial=new THREE.MeshStandardMaterial({color:0xaab5be,metalness:.7,roughness:.3});
  const mount=new THREE.Group();parts.add(mount);
  const addShelf=(w,h,d,x,y,z)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),shelfMaterial);mesh.position.set(x,y,z);mount.add(mesh)};
  draw=s=>{
   // This GLB represents a fixed CAD assembly. Do not pretend selected sizes change the geometry.
   mount.clear();
   if(s.mount==='UNDER'){
    const pad=Math.max(.5,size.x*.05),y=-size.y/2-Math.max(1,size.y*.18);
    addShelf(size.x+pad*2,Math.max(.25,size.y*.025),size.z+pad*2,0,y,0);
    for(const x of [-size.x/2,size.x/2])addShelf(Math.max(.3,pad*.5),Math.abs(y+size.y/2),Math.max(.3,pad*.5),x,(y-size.y/2)/2,-size.z/2+pad);
   }

   const span=Math.max(size.x,size.y,size.z);
   controls.minDistance=span*.8;controls.maxDistance=span*8;
   camera.position.set(span*1.45,span*1.05,span*1.75);controls.target.set(0,0,0);camera.near=Math.max(.01,span*.001);camera.far=span*20;camera.updateProjectionMatrix();controls.update();
   $('csc-model-note').textContent='SolidWorks reference assembly shown. Selected W × D × H and other options are recorded for quotation; the CAD geometry remains the reference configuration.';
  };
  const resize=()=>{const w=Math.max(1,host.clientWidth),h=Math.max(310,Math.min(500,w*.7));renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(host);
  update();resize();let visible=true;new IntersectionObserver(e=>visible=e[0]?.isIntersecting??true).observe(host);
  function animate(){requestAnimationFrame(animate);if(visible){controls.update();renderer.render(scene,camera)}}animate();
 }catch(e){$('csc-3d').textContent='3D preview unavailable. You can still configure the chamber and request a quote.';console.error(e)}
 update();
})();