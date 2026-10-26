const ORIGIN = 'https://edenindustrialsystems.com';
const json = (body,status=200,headers={}) => new Response(JSON.stringify(body),{status,headers:{'content-type':'application/json','cache-control':'no-store',...headers}});
const cors = {'access-control-allow-origin':ORIGIN,'access-control-allow-methods':'POST, OPTIONS','access-control-allow-headers':'content-type, x-eden-test-token, x-eden-admin-token'};
const stripe = async (env,path,params) => {
 const r=await fetch('https://api.stripe.com/v1/'+path,{method:'POST',headers:{authorization:'Bearer '+env.STRIPE_SECRET_KEY,'content-type':'application/x-www-form-urlencoded'},body:params});
 const data=await r.json();if(!r.ok){const err=data.error||{};console.error('Stripe API rejected Checkout',{status:r.status,type:err.type,code:err.code,param:err.param,message:err.message});throw new Error('Stripe API rejected Checkout');}return data;
};
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
  if(url.pathname==='/health')return json({status:'ok',checkout_enabled:env.CHECKOUT_ENABLED==='true'});
  // Owner-only order management. Never expose the admin secret in static site code.
  if(url.pathname==='/admin/orders'||/^\/admin\/orders\/\d+\/status$/.test(url.pathname)){
   if(request.headers.get('origin')!==ORIGIN)return json({error:'Forbidden'},403,cors);
   const configured=env.ADMIN_ORDER_TOKEN,supplied=request.headers.get('x-eden-admin-token')||'';
   if(typeof configured!=='string'||configured.length<32)return json({error:'Admin access is not configured'},503,cors);
   const enc=new TextEncoder(),a=enc.encode(supplied),b=enc.encode(configured);
   if(a.length!==b.length||!crypto.subtle.timingSafeEqual(a,b))return json({error:'Unauthorized'},401,cors);
   if(!env.DB)return json({error:'Database unavailable'},503,cors);
   if(url.pathname==='/admin/orders'&&request.method==='GET'){
    const result=await env.DB.prepare('SELECT id,sku,quantity,amount_total,currency,payment_status,fulfillment_status,created_at,updated_at FROM orders ORDER BY id DESC LIMIT 100').all();
    return json({orders:result.results||[]},200,cors);
   }
   const match=url.pathname.match(/^\/admin\/orders\/(\d+)\/status$/);
   if(match&&request.method==='PATCH'){
    let input;
    try{input=await request.json();}catch{return json({error:'Invalid JSON'},400,cors);}
    const allowed=['pending','in_production','ready_to_ship','shipped','completed'];
    if(!allowed.includes(input?.status))return json({error:'Invalid status'},400,cors);
    const id=Number(match[1]);
    if(!Number.isSafeInteger(id)||id<1)return json({error:'Invalid order ID'},400,cors);
    const result=await env.DB.prepare("UPDATE orders SET fulfillment_status=?,updated_at=CURRENT_TIMESTAMP WHERE id=? AND payment_status='paid' RETURNING id,fulfillment_status,updated_at").bind(input.status,id).first();
    if(!result)return json({error:'Order not found'},404,cors);
    console.log('Order fulfillment updated',id,input.status);
    return json({order:result},200,cors);
   }
   return json({error:'Method not allowed'},405,cors);
  }
  if(url.pathname==='/checkout'&&request.method==='POST'){
   if(request.headers.get('origin')!==ORIGIN)return json({error:'Invalid origin'},403,cors);
   if(env.CHECKOUT_ENABLED!=='true')return json({error:'Checkout is not enabled yet. Please request a quote.'},503,cors);
   // Restricted test access: requires a separately configured encrypted token.
   const supplied=request.headers.get('x-eden-test-token')||'';
   const configured=env.TEST_CHECKOUT_TOKEN;
   if(typeof configured!=='string'||configured.length<32)return json({error:'Test checkout access is not configured.'},503,cors);
   const enc=new TextEncoder();
   const suppliedBytes=enc.encode(supplied),configuredBytes=enc.encode(configured);
   if(suppliedBytes.length!==configuredBytes.length||!crypto.subtle.timingSafeEqual(suppliedBytes,configuredBytes))return json({error:'Unauthorized test checkout.'},403,cors);
   // This deployment is test-only. Never accept a live Stripe key for Checkout.
   if(typeof env.STRIPE_SECRET_KEY!=='string'||!env.STRIPE_SECRET_KEY.startsWith('sk_test_'))return json({error:'Test checkout is unavailable.'},503,cors);
   try{
    const input=await request.json(),qty=input.quantity;
    if(input.product!=='cet'||input.type!=='ST'||!['SST','SSTL'].includes(input.material)||
      ![36,48,60,72,84,96].includes(input.width)||![24,30,36].includes(input.depth)||
      ![30,36].includes(input.height)||!Number.isSafeInteger(qty)||qty<1||qty>5)
      return json({error:'This configuration requires a quote.'},400,cors);
    const sku=`CET-ST-${input.material}-${input.width}Wx${input.depth}Dx${input.height}H`;
    const catalogResponse=await fetch(ORIGIN+'/tables/cet-prices.json',{cache:'no-store'});
    if(!catalogResponse.ok)throw new Error('Price catalog unavailable');
    const catalog=await catalogResponse.json(),tiers=catalog.prices?.[sku];
    if(!Array.isArray(tiers)||tiers.length!==5)throw new Error('Price unavailable');
    const unit=tiers[qty-1];
    if(!Number.isSafeInteger(unit)||unit<1)throw new Error('Invalid catalog price');
    const p=new URLSearchParams();
    const add=(k,v)=>p.append(k,String(v));
    add('mode','payment');add('success_url',ORIGIN+'/tables/?checkout=success&session_id={CHECKOUT_SESSION_ID}');
    add('cancel_url',ORIGIN+'/tables/?checkout=cancelled');
    add('customer_creation','always');add('billing_address_collection','required');
    add('shipping_address_collection[allowed_countries][0]','US');
    add('automatic_tax[enabled]','true');
    add('line_items[0][price_data][currency]','usd');
    add('line_items[0][price_data][unit_amount]',unit*100);
    add('line_items[0][price_data][product_data][name]','Clean Environment Table');
    add('line_items[0][price_data][product_data][description]',sku);
    add('line_items[0][quantity]',qty);
    add('client_reference_id',crypto.randomUUID());
    add('metadata[sku]',sku);add('metadata[quantity]',qty);add('metadata[product]','CET');
    add('payment_intent_data[metadata][sku]',sku);
    const session=await stripe(env,'checkout/sessions',p);
    if(session.livemode!==false)throw new Error('Unexpected live-mode Checkout session');
    return json({url:session.url},200,cors);
   }catch(e){console.error('Checkout error',e);return json({error:'Unable to create checkout. Please request a quote.'},502,cors)}
  }
  if(url.pathname==='/webhook'&&request.method==='POST'){
   const signature=request.headers.get('stripe-signature'),body=await request.text();
   if(!signature||!env.STRIPE_WEBHOOK_SECRET)return new Response('Unauthorized',{status:401});
   // Stripe's signed payload is verified before any processing.
   const parts=Object.fromEntries(signature.split(',').map(s=>s.split('=',2)));
   const timestamp=Number(parts.t);
   if(!Number.isFinite(timestamp)||Math.abs(Date.now()/1000-timestamp)>300)return new Response('Invalid timestamp',{status:400});
   const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(env.STRIPE_WEBHOOK_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign']);
   const mac=await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(parts.t+'.'+body));
   const expected=[...new Uint8Array(mac)].map(x=>x.toString(16).padStart(2,'0')).join('');
   const signatures=signature.split(',').filter(s=>s.startsWith('v1=')).map(s=>s.slice(3));
   if(!signatures.some(s=>s.length===expected.length&&s===expected))return new Response('Invalid signature',{status:400});
   const event=JSON.parse(body);
   if(event.type==='checkout.session.completed'){
    const session=event.data?.object;
    if(!env.DB)return json({error:'Order database unavailable'},503);
    if(!session||session.livemode!==false||session.payment_status!=='paid'||session.metadata?.product!=='CET')
      return json({received:true,ignored:true});
    const sku=session.metadata.sku,quantity=Number(session.metadata.quantity);
    if(typeof sku!=='string'||!/^CET-ST-(SST|SSTL)-(36|48|60|72|84|96)Wx(24|30|36)Dx(30|36)H$/.test(sku)||
      !Number.isSafeInteger(quantity)||quantity<1||quantity>5||!Number.isSafeInteger(session.amount_total))
      return json({error:'Invalid paid order data'},422);
    try{
     await env.DB.prepare('INSERT INTO orders (stripe_session_id,stripe_event_id,stripe_payment_intent_id,sku,quantity,amount_total,currency,payment_status,fulfillment_status) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(stripe_session_id) DO NOTHING')
      .bind(session.id,event.id,session.payment_intent||null,sku,quantity,session.amount_total,session.currency||'usd',session.payment_status,'pending').run();
     console.log('Recorded paid CET order',session.id,sku);
    }catch(e){console.error('Order persistence failed',e?.message);return json({error:'Order persistence unavailable'},503);}
   }
   return json({received:true});
  }
  return json({error:'Not found'},404);
 }
};