/* CSC configurator - prototype concept, not a validated engineering model */
(async()=>{
 const root=document.querySelector('.csc-builder');if(!root)return;
 const $=id=>document.getElementById(id);
 const inputs=['csc-width','csc-airflow','csc-mount','csc-material','csc-door','csc-shelf','csc-tray','csc-gauge','csc-qty'];
 const get=()=>({w:Number($('csc-width').value),d:12,h:12,air:$('csc-airflow').value,mount:$('csc-mount').value,material:$('csc-material').value,door:$('csc-door').value,shelf:$('csc-shelf').checked,tray:$('csc-tray').checked,gauge:$('csc-gauge').value,qty:Math.max(1,Math.min(999,Math.floor(Number($('csc-qty').value)||1)))});
 const sku=s=>['CSC',s.w+'Wx'+s.d+'Dx'+s.h+'H',s.air,s.material,s.door,s.mount,s.shelf?'SH':'NS',s.tray?'TR':'NT',s.gauge].join('-');
 const quote=s=>{const p=new URLSearchParams({product:'csc',sku:sku(s),width:String(s.w),depth:String(s.d),height:String(s.h),quantity:String(s.qty),airflow:s.air,mount:s.mount,material:s.material,door:s.door,shelf:s.shelf?'Yes':'No',tray:s.tray?'Yes':'No',gauge:s.gauge});return '/request-a-quote/?'+p.toString()};
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
  const blue=new THREE.LineBasicMaterial({color:0x2563eb,depthTest:false});
  const line=(a,b)=>{const o=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...a),new THREE.Vector3(...b)]),blue);o.renderOrder=40;dimensions.add(o)};
  const label=(text,pos)=>{const c=document.createElement('canvas');c.width=256;c.height=80;const g=c.getContext('2d');g.fillStyle='rgba(255,255,255,.95)';g.fillRect(0,0,256,80);g.fillStyle='#1d4ed8';g.font='bold 34px Arial';g.textAlign='center';g.textBaseline='middle';g.fillText(text,128,40);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;const o=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true,depthTest:false}));o.position.set(...pos);o.scale.set(7,2.2,1);o.renderOrder=45;dimensions.add(o)};
  const toggle=$('csc-dimensions');toggle.addEventListener('change',()=>{dimensions.visible=toggle.checked});
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
  const dims=new THREE.Vector3();
  const rebuildDims=()=>{
   dimensions.clear();
   const b=new THREE.Box3().setFromObject(model);b.getSize(dims);
   const min=b.min,max=b.max,offset=Math.max(1,Math.max(dims.x,dims.z)*.13);
   // Overall CAD envelope dimensions. Exact interior dimensions remain in selector.
   const yTop=max.y+offset*.6,rear=min.z-offset,right=max.x+offset,front=max.z+offset;
   line([min.x,yTop,rear],[max.x,yTop,rear]);
   line([min.x,max.y,min.z],[min.x,yTop,rear]);line([max.x,max.y,min.z],[max.x,yTop,rear]);
   label('W',[0,yTop+offset*.5,rear]);
   line([right,max.y,min.z],[right,max.y,max.z]);line([max.x,max.y,min.z],[right,max.y,min.z]);line([max.x,max.y,max.z],[right,max.y,max.z]);
   label('D',[right+offset*.6,max.y,0]);
   line([min.x-offset,min.y,front],[min.x-offset,max.y,front]);
   line([min.x,min.y,max.z],[min.x-offset,min.y,front]);line([min.x,max.y,max.z],[min.x-offset,max.y,front]);
   label('H',[min.x-offset*1.5,0,front]);
   dimensions.visible=toggle.checked;
  };
  draw=s=>{
   // This GLB represents a fixed CAD assembly. Do not pretend selected sizes change the geometry.
   mount.clear();
   if(s.mount==='UNDER'){
    const pad=Math.max(.5,size.x*.05),y=-size.y/2-Math.max(1,size.y*.18);
    addShelf(size.x+pad*2,Math.max(.25,size.y*.025),size.z+pad*2,0,y,0);
    for(const x of [-size.x/2,size.x/2])addShelf(Math.max(.3,pad*.5),Math.abs(y+size.y/2),Math.max(.3,pad*.5),x,(y-size.y/2)/2,-size.z/2+pad);
   }
   rebuildDims();
   const span=Math.max(size.x,size.y,size.z);
   controls.minDistance=span*.8;controls.maxDistance=span*8;
   camera.position.set(span*1.45,span*1.05,span*1.75);controls.target.set(0,0,0);camera.near=Math.max(.01,span*.001);camera.far=span*20;camera.updateProjectionMatrix();controls.update();
   $('csc-model-note').textContent='CAD reference assembly shown. Selected sizes, finishes, airflow and door options are recorded for quotation; the CAD geometry does not resize or change with these selections.';
  };
  const resize=()=>{const w=Math.max(1,host.clientWidth),h=Math.max(310,Math.min(500,w*.7));renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(host);
  update();resize();let visible=true;new IntersectionObserver(e=>visible=e[0]?.isIntersecting??true).observe(host);
  function animate(){requestAnimationFrame(animate);if(visible){controls.update();renderer.render(scene,camera)}}animate();
 }catch(e){$('csc-3d').textContent='3D preview unavailable. You can still configure the chamber and request a quote.';console.error(e)}
 update();
})();