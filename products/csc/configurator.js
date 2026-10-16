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
  const base={w:24,d:12,h:12};
  // Scale the complete CAD assembly so panels that were not caught by name-based
  // transforms also resize. Counter-scale rigid hardware to retain its shape.
  const rigid=/blower|motor|capacitor|controller|switch|connector|screw|bolt|nut|washer|hinge|latch|catch|finger.guard|knob|potentiometer|bracket|gauge|minihelic|magnehelic/i;
  const originals=[];
  model.traverse(node=>{
    if(node===model)return;
    originals.push({node,scale:node.scale.clone(),rigid:node.isMesh&&rigid.test(node.name)});
  });
  draw=s=>{
    const sx=s.w/base.w,sy=s.h/base.h,sz=s.d/base.d;
    model.scale.set(sx,sy,sz);
    // Keep mechanical hardware rigid even as its mounting location follows
    // the changing enclosure envelope. This is a visual approximation.
    for(const item of originals){
      item.node.scale.copy(item.scale);
      if(item.rigid){
        item.node.scale.x/=sx;
        item.node.scale.y/=sy;
        item.node.scale.z/=sz;
      }
    }
    model.updateMatrixWorld(true);
    const bounds=new THREE.Box3().setFromObject(model);
    const extent=bounds.getSize(new THREE.Vector3());
    const focus=bounds.getCenter(new THREE.Vector3());
    const span=Math.max(extent.x,extent.y,extent.z);
    controls.minDistance=Math.max(.1,span*.65);controls.maxDistance=span*8;
    if(!draw.initialized){
      camera.position.set(focus.x+span*1.45,focus.y+span*1.05,focus.z+span*1.75);
      draw.initialized=true;
    }
    controls.target.copy(focus);
    camera.near=Math.max(.001,span*.001);camera.far=span*20;
    camera.updateProjectionMatrix();controls.update();
    $('csc-model-note').textContent='Interactive size visualization based on the 24 × 12 × 12 in. SolidWorks reference. Enclosure components resize with W × D × H; mechanical hardware is shown at nominal size. Final CAD and component placement require engineering review.';
  };
  const resize=()=>{const w=Math.max(1,host.clientWidth),h=Math.max(310,Math.min(500,w*.7));renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(host);
  update();resize();let visible=true;new IntersectionObserver(e=>visible=e[0]?.isIntersecting??true).observe(host);
  function animate(){requestAnimationFrame(animate);if(visible){controls.update();renderer.render(scene,camera)}}animate();
 }catch(e){$('csc-3d').textContent='3D preview unavailable. You can still configure the chamber and request a quote.';console.error(e)}
 update();
})();