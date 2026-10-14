(() => {
const root=document.querySelector('.cet-builder');if(!root)return;
const byId=id=>document.getElementById(id);
const fields=['cet-type','cet-material','cet-width','cet-depth','cet-height','cet-quantity'];
const get=()=>{const type=byId('cet-type').value,material=byId('cet-material').value,width=byId('cet-width').value,depth=byId('cet-depth').value,height=byId('cet-height').value;return {type,material,width,depth,height,quantity:Math.max(1,Math.min(999,Number(byId('cet-quantity').value)||1)),sku:`CET-${type}-${material}-${width}Wx${depth}Dx${height}H`};};
const query=s=>{const p=new URLSearchParams({product:'cet',sku:s.sku,tabletop:s.type,material:s.material,width:s.width,depth:s.depth,height:s.height,quantity:String(s.quantity)});return '/request-a-quote/?'+p;};
const update=()=>{const s=get();byId('cet-sku').textContent=s.sku;byId('cet-quote-link').href=query(s);byId('cet-custom-link').href=query(s);const img=byId('cet-preview');img.src=s.type==='PT'?'/assets/Table%203.PNG':'/assets/Table%201.PNG';img.alt=s.type==='PT'?'Illustrative perforated Clean Environment Table':'Illustrative standard solid-top Clean Environment Table';};
fields.forEach(id=>byId(id).addEventListener('change',update));update();
byId('cet-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(get().sku);byId('cet-copy-status').textContent='SKU copied.';}catch{byId('cet-copy-status').textContent='Select the SKU above to copy it.';}});
byId('cet-download').addEventListener('click',()=>{
 const s=get();const existing=document.querySelector('.cet-print-sheet');if(existing)existing.remove();
 const section=document.createElement('section');section.className='cet-print-sheet cet-pdf-only';
 const heading=document.createElement('h1');heading.textContent='Eden Industrial Systems — Product Configuration Summary';section.append(heading);
 const note=document.createElement('p');note.textContent='Clean Environment Table | '+new Date().toLocaleDateString();section.append(note);
 const img=document.createElement('img');img.src=s.type==='PT'?'/assets/Table%203.PNG':'/assets/Table%201.PNG';img.alt='Illustrative table image; not to scale';section.append(img);
 const disclaimer=document.createElement('p');disclaimer.textContent='Illustrative image only — not dimensionally accurate. Not a formal quotation.';section.append(disclaimer);
 const rows=[['SKU',s.sku],['Tabletop',s.type==='ST'?'Standard solid top':'Perforated top'],['Material',s.material==='SSTL'?'316L stainless steel':'Stainless steel (grade to confirm)'],['Overall dimensions',s.width+' W × '+s.depth+' D × '+s.height+' H (inches)'],['Quantity',String(s.quantity)],['Unit price','Quote required'],['Lead time','To be confirmed']];
 const table=document.createElement('table');rows.forEach(([a,b])=>{const tr=document.createElement('tr');[a,b].forEach(value=>{const td=document.createElement('td');td.textContent=value;tr.append(td)});table.append(tr)});section.append(table);
 const link=document.createElement('p');link.textContent='edenindustrialsystems.com/tables/ | sales@edenindustrialsystems.com';section.append(link);document.body.append(section);
 const cleanup=()=>{section.remove();window.removeEventListener('afterprint',cleanup)};window.addEventListener('afterprint',cleanup);window.print();
});
})();