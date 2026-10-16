// Parametric web representation based on measured CET_Assembly.glb components.
// SolidWorks remains the manufacturing source of truth.
(async()=>{
 const host=document.getElementById('cet-3d');if(!host)return;
 try{
 const THREE=await import('https://esm.sh/three@0.160.1');
 const {OrbitControls}=await import('https://esm.sh/three@0.160.1/examples/jsm/controls/OrbitControls.js');
 const scene=new THREE.Scene();scene.background=new THREE.Color(0xf5f7fa);
 const camera=new THREE.PerspectiveCamera(35,1,.1,500);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;
 host.appendChild(renderer.domElement);
 scene.add(new THREE.HemisphereLight(0xffffff,0xaab3be,2.1));
 const light=new THREE.DirectionalLight(0xffffff,2);light.position.set(40,75,50);scene.add(light);
 const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.minDistance=35;controls.maxDistance=260;
 const assembly=new THREE.Group();scene.add(assembly);
 // Compact screen-space dimensions stay readable while the model rotates.
 const dimensionToggle=document.getElementById('cet-show-dimensions');
 const dimensionDisplay=document.getElementById('cet-dimension-readout');
 const updateDimensions=(W,D,H)=>{
  if(!dimensionDisplay)return;
  dimensionDisplay.querySelector('[data-dim="w"]').textContent=W+'″';
  dimensionDisplay.querySelector('[data-dim="d"]').textContent=D+'″';
  dimensionDisplay.querySelector('[data-dim="h"]').textContent=H+'″';
 };
 if(dimensionToggle)dimensionToggle.addEventListener('change',()=>{
  if(dimensionDisplay)dimensionDisplay.hidden=!dimensionToggle.checked;
 });
 const steel=new THREE.MeshStandardMaterial({color:0xc6cdd2,metalness:.68,roughness:.29,side:THREE.DoubleSide});
 const dark=new THREE.MeshStandardMaterial({color:0x747e87,metalness:.5,roughness:.4});
 const add=(w,h,d,x,y,z,mat=steel)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);o.position.set(x,y,z);assembly.add(o);return o};
 const cylinders=(x,z,y)=>{const o=new THREE.Mesh(new THREE.CylinderGeometry(.55,.55,1.2,10),dark);o.position.set(x,y,z);assembly.add(o)};
 function build(){
  assembly.clear();
  const W=+document.getElementById('cet-width').value,D=+document.getElementById('cet-depth').value,H=+document.getElementById('cet-height').value;
  const PT=document.getElementById('cet-type').value==='PT',SSTL=document.getElementById('cet-material').value==='SSTL';
  steel.color.setHex(SSTL?0xd4dbe0:0xc6cdd2);
  // Dimensions measured from the supplied 72 x 30 x 30 GLB: 2-inch square frame,
  // legs at +/- (W/2-3.05), +/- (D/2-3.05), top at Y=0.
  const top=0, bottom=-H, lx=W/2-3.05,lz=D/2-3.05;
  // Worksurface: top skin plus turned-down perimeter flanges.
  add(W,.12,D,0,top-.06,0);
  for(const sign of [-1,1]){add(W,1.9,.12,0,-1.01,sign*(D/2-.06));add(.12,1.9,D,sign*(W/2-.06),-1.01,0)}
  // Frame tubing cross sections remain constant while spans vary.
  for(const z of [-D/2+1.05,D/2-1.05])add(W-.1,2,2,0,-1.1,z);
  for(const x of [-W/2+1.05,W/2-1.05])add(2,2,D-4.1,x,-1.1,0);
  for(const x of [-lx,lx])for(const z of [-lz,lz]){
   add(2,H-2.2,2,x,-(H-2.2)/2-1.1,z);
   add(2,1.6,2,x,bottom+1.6,z,dark);
   cylinders(x,z,bottom+.4);
  }
  // Brace centers at 12-inch intervals, symmetric about table center.
  // At W=72, matches the supplied model's five braces at -24,-12,0,12,24.
  const count=Math.max(0,Math.floor((W-12)/12));
  for(let i=0;i<count;i++){const x=(i-(count-1)/2)*12;add(2.16,1,D-.05,x,-.55,0)}
  // Efficient visual perforations: shader-like circular dots on a thin plane,
  // rather than thousands of costly 3D boolean cutouts.
  if(PT){
   const canvas=document.createElement('canvas');canvas.width=512;canvas.height=256;
   const ctx=canvas.getContext('2d');ctx.clearRect(0,0,512,256);
   ctx.fillStyle='#68747d';
   const nx=Math.max(1,Math.floor((W-6)/.5)),nz=Math.max(1,Math.floor((D-6)/.5));
   // Use a bounded texture grid for interactive performance.
   const sx=512/nx,sz=256/nz;
   for(let ix=0;ix<nx;ix++)for(let iz=0;iz<nz;iz++){
    ctx.beginPath();ctx.arc((ix+.5)*sx,(iz+.5)*sz,Math.max(.25,Math.min(sx,sz)*.22),0,Math.PI*2);ctx.fill();
   }
   const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
   const dots=new THREE.Mesh(new THREE.PlaneGeometry(W-6,D-6),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,side:THREE.DoubleSide}));
   dots.rotation.x=-Math.PI/2;dots.position.y=.012;assembly.add(dots);
  }
  updateDimensions(W,D,H);
  camera.position.set(W*.9,H*.95,D*1.65+30);controls.target.set(0,-H*.4,0);controls.update();
 }
 const resize=()=>{const w=host.clientWidth,h=Math.max(300,Math.min(530,w*.63));renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};
 new ResizeObserver(resize).observe(host);
 ['cet-width','cet-depth','cet-height','cet-type','cet-material'].forEach(id=>document.getElementById(id)?.addEventListener('change',build));
 build();resize();
 let active=true;const observer=new IntersectionObserver(es=>{active=es[0]?.isIntersecting??true});observer.observe(host);
 function animate(){requestAnimationFrame(animate);if(active){controls.update();renderer.render(scene,camera)}}animate();
 }catch(err){host.textContent='3D preview unavailable. Configuration and quote tools remain available.';console.error('CET 3D preview:',err)}
})();