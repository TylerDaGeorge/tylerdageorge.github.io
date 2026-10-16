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
  const white=new THREE.MeshStandardMaterial({color:0xe6e9ed,metalness:.32,roughness:.42,side:THREE.DoubleSide});
  const stainless=new THREE.MeshStandardMaterial({color:0xaebac4,metalness:.77,roughness:.27,side:THREE.DoubleSide});
  const glass=new THREE.MeshPhysicalMaterial({color:0xa6d4e7,metalness:0,roughness:.1,transparent:true,opacity:.28,depthWrite:false,side:THREE.DoubleSide});
  const black=new THREE.MeshStandardMaterial({color:0x48545d,metalness:.3,roughness:.5});
  const blue=new THREE.LineBasicMaterial({color:0x2563eb,depthTest:false});
  const add=(w,h,d,x,y,z,mat=white)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);o.position.set(x,y,z);parts.add(o);return o};
  const line=(a,b)=>{const o=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...a),new THREE.Vector3(...b)]),blue);o.renderOrder=40;dimensions.add(o)};
  const label=(text,pos)=>{const c=document.createElement('canvas');c.width=256;c.height=80;const g=c.getContext('2d');g.fillStyle='rgba(255,255,255,.95)';g.fillRect(0,0,256,80);g.fillStyle='#1d4ed8';g.font='bold 35px Arial';g.textAlign='center';g.textBaseline='middle';g.fillText(text,128,40);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;const o=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true,depthTest:false}));o.position.set(...pos);o.scale.set(7,2.2,1);o.renderOrder=45;dimensions.add(o)};
  const toggle=$('csc-dimensions');toggle.addEventListener('change',()=>{dimensions.visible=toggle.checked});
  draw=s=>{
   parts.clear();dimensions.clear();
   // Nominal internal cavity W x 12 x 12; exterior envelope is illustrative.
   const W=s.w+3,D=16,H=19,mat=s.material==='316L'||s.material==='304'?stainless:white;
   // Front faces + side walls and top blower/plenum cover.
   add(W,.6,D,0,0,0,mat);add(W,.65,D,0,H,0,mat);
   add(.65,H,D,-W/2, H/2,0,mat);add(.65,H,D,W/2,H/2,0,mat);
   add(W,H*.65,.6,0,H*.325,-D/2,mat);
   add(W,3,D,0,H+1.5,0,mat);
   // Front door frame and clear window, facing positive Z.
   const z=D/2+.1;add(W,.85,.6,0,H-.4,z,mat);add(W,.85,.6,0,.45,z,mat);
   for(const x of [-W/2+.45,W/2-.45])add(.85,H-1.4,.6,x,H/2,z,mat);
   add(W-2.2,H-2.4,.18,0,H/2,z+.1,glass);
   add(.35,3,.45,s.door==='LH'?W/2-1.8:-W/2+1.8,H/2,z+.6,black);
   // Lower staging deck, filter and upper prefilter.
   add(W-1.3,.35,D-1.3,0,1,0,mat);
   add(W-1.3,.5,D-1.3,0,H-2,0,black);
   add(Math.min(10,W-3),.18,9,0,H+3.1,0,black);
   if(s.shelf)add(W-2,.3,D-2,0,7,0,stainless);
   if(s.tray){add(W-2,.22,D-2,0,1.35,0,stainless);for(const x of [-W/2+1,W/2-1])add(.22,.6,D-2,x,1.65,0,stainless)}
   if(s.gauge!=='NONE'){const g=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,.3,24),black);g.rotation.x=Math.PI/2;g.position.set(W/2-2,H+1.4,D/2+.15);parts.add(g)}
   if(s.mount==='UNDER'){add(W+2,.55,D+3,0,-3,0,stainless);for(const x of [-W/2,W/2])add(.7,3,.7,x,-1.6,-D/2+.7,stainless)}
   // Exhaust indication, visually approximate, not a validated airflow route.
   if(s.air!=='RECIRC'){const zz=s.air==='REAR'?-D/2-.45:D/2+.45;for(let i=-2;i<=2;i++)add(.7,.16,.2,i*1.3,2.5,zz,black)}
   const x=-W/2-4,dimFront=D/2+4,back=-D/2-4;
   line([-W/2,H,back],[W/2,H,back]);line([-W/2,H,-D/2],[-W/2,H,back]);line([W/2,H,-D/2],[W/2,H,back]);label('W '+s.w+'″',[0,H+2,back]);
   line([W/2+3,H,-D/2],[W/2+3,H,D/2]);line([W/2,H,-D/2],[W/2+3,H,-D/2]);line([W/2,H,D/2],[W/2+3,H,D/2]);label('D 12″',[W/2+5,H,0]);
   line([x,0,dimFront],[x,H,dimFront]);line([-W/2,0,D/2],[x,0,dimFront]);line([-W/2,H,D/2],[x,H,dimFront]);label('H 12″',[x-2,H/2,dimFront]);
   dimensions.visible=toggle.checked;
   camera.position.set(W*.95,H*1.1,D*2.3+13);controls.target.set(0,H*.53,0);controls.update();
  };
  const resize=()=>{const w=Math.max(1,host.clientWidth),h=Math.max(310,Math.min(500,w*.7));renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(host);
  update();resize();let visible=true;new IntersectionObserver(e=>visible=e[0]?.isIntersecting??true).observe(host);
  function animate(){requestAnimationFrame(animate);if(visible){controls.update();renderer.render(scene,camera)}}animate();
 }catch(e){$('csc-3d').textContent='3D preview unavailable. You can still configure the chamber and request a quote.';console.error(e)}
 update();
})();