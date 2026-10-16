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

  const {GLTFLoader}=await import('https://esm.sh/three@0.160.1/examples/jsm/loaders/GLTFLoader.js');
  const loader=new GLTFLoader();
  const gltf=await loader.loadAsync('/products/csc/CSC_Assembly.glb');
  const model=gltf.scene;
  const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
  model.position.sub(center);
  parts.add(model);
  // CAD reference is 24 W x 12 D x 12 H (inches). Web preview uses
  // panel-specific scaling and anchored component repositioning, not engineering CAD.
  // Export coordinates: X width, Y vertical, Z depth; GLB units are meters.
  const inch=.0254, base={w:24,d:12,h:12};
  const nodes=[];
  model.traverse(node=>{
   if(node===model || !node.name)return;
   const name=node.name.toLowerCase();
   const panel=/panel|bottom|door angle|plenum wrap|gasket|hepa 12|filter upstream|filter downstream/.test(name);
   const hardware=/screw|nut|hinge|catch|latch|connector|capacitor|controller|switch|breaker/.test(name);
   const fixed=/blower|finger guard|bracket/.test(name);
   // Filter unit parent is moved as a unit; its contents are otherwise unchanged.
   const filterParent=/^filter unit/.test(name);
   nodes.push({node,name,panel,hardware,fixed,filterParent,pos:node.position.clone(),scale:node.scale.clone()});
  });
  const modelCenter=center.clone();
  const shellScale=(name,sx,sy,sz)=>{
   if(/side (external|internal) panel|plenum side panel/.test(name))return [1,sy,sz];
   if(/rear external panel/.test(name))return [sx,sy,1];
   if(/front panel|door panel|door angle|latch panel/.test(name))return [sx,sy,1];
   if(/bottom|hepa 12|filter upstream gasket|filter downstream gasket/.test(name))return [sx,1,sz];
   if(/plenum wrap/.test(name))return [sx,1,sz];
   return [1,1,1];
  };
  const move=(v,delta,extent)=>{
   // Move edge-attached parts while retaining central components near their CAD positions.
   const t=Math.min(1,Math.abs(v)/(extent*.5));
   return Math.sign(v)*delta*.5*t;
  };
  draw=s=>{
   const dx=(s.w-base.w)*inch,dy=(s.h-base.h)*inch,dz=(s.d-base.d)*inch;
   const sx=s.w/base.w,sy=s.h/base.h,sz=s.d/base.d;
   for(const item of nodes){
    const {node,name,pos,scale,panel,hardware,fixed,filterParent}=item;
    node.position.copy(pos);node.scale.copy(scale);
    if(panel && node.isMesh){
     const [mx,my,mz]=shellScale(name,sx,sy,sz);
     node.scale.set(scale.x*mx,scale.y*my,scale.z*mz);
    }
    if(filterParent){
     // Upper filtration system follows the height of the chamber.
     node.position.y=pos.y+dy;
    }else if(node.parent===model || node.parent===gltf.scene.children[0]){
     // Hardware and side/front/rear panels move with the corresponding edges.
     if(/side (external|internal) panel|plenum side panel|hinge|catch|latch panel/.test(name))node.position.x=pos.x+move(pos.x,dx,size.x);
     if(/rear external panel/.test(name))node.position.z=pos.z+move(pos.z,dz,size.z);
     if(/front panel|door panel|door angle|hinge|catch/.test(name))node.position.z=pos.z+move(pos.z,dz,size.z);
     if(hardware){
      node.position.x=pos.x+move(pos.x,dx,size.x);
      node.position.z=pos.z+move(pos.z,dz,size.z);
      node.position.y=pos.y+move(pos.y-center.y,dy,size.y);
     }
     if(/front panel|rear external panel|side (external|internal) panel|door panel|door angle/.test(name)){
      node.position.y=pos.y+dy*.5;
     }
    }
   }
   model.updateMatrixWorld(true);
   const currentBox=new THREE.Box3().setFromObject(model),currentSize=currentBox.getSize(new THREE.Vector3()),currentCenter=currentBox.getCenter(new THREE.Vector3());
   const span=Math.max(currentSize.x,currentSize.y,currentSize.z);
   controls.minDistance=span*.8;controls.maxDistance=span*8;
   // Preserve user orbit while changing options; initial view is set only once.
   if(!draw.initialized){
    camera.position.set(currentCenter.x+span*1.45,currentCenter.y+span*1.05,currentCenter.z+span*1.75);
    controls.target.copy(currentCenter);draw.initialized=true;
   }else{controls.target.copy(currentCenter)}
   camera.near=Math.max(.001,span*.001);camera.far=span*20;camera.updateProjectionMatrix();controls.update();
   $('csc-model-note').textContent='Parametric visualization based on the 24 × 12 × 12 in. SolidWorks reference. Chamber panels adjust to selected internal W × D × H. Hardware and filtration remain illustrative; final geometry and filter sizing require engineering review.';
  };
  const resize=()=>{const w=Math.max(1,host.clientWidth),h=Math.max(310,Math.min(500,w*.7));renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(host);
  update();resize();let visible=true;new IntersectionObserver(e=>visible=e[0]?.isIntersecting??true).observe(host);
  function animate(){requestAnimationFrame(animate);if(visible){controls.update();renderer.render(scene,camera)}}animate();
 }catch(e){$('csc-3d').textContent='3D preview unavailable. You can still configure the chamber and request a quote.';console.error(e)}
 update();
})();