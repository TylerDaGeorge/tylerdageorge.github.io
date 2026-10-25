const ORIGIN = 'https://edenindustrialsystems.com';
const json = (body,status=200,headers={}) => new Response(JSON.stringify(body),{status,headers:{'content-type':'application/json','cache-control':'no-store',...headers}});
const cors = {'access-control-allow-origin':ORIGIN,'access-control-allow-methods':'POST, OPTIONS','access-control-allow-headers':'content-type'};
const stripe = async (env,path,params) => {
 const r=await fetch('https://api.stripe.com/v1/'+path,{method:'POST',headers:{authorization:'Bearer '+env.STRIPE_SECRET_KEY,'content-type':'application/x-www-form-urlencoded'},body:params});
 const data=await r.json();if(!r.ok)throw new Error(data.error?.message||'Stripe request failed');return data;
};
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
  if(url.pathname==='/health')return json({status:'ok',checkout_enabled:env.CHECKOUT_ENABLED==='true'});
  if(url.pathname==='/checkout'&&request.method==='POST'){
   if(request.headers.get('origin')!==ORIGIN)return json({error:'Invalid origin'},403,cors);
   if(env.CHECKOUT_ENABLED!=='true')return json({error:'Checkout is not enabled yet. Please request a quote.'},503,cors);
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
   // No fulfillment until a durable, idempotent order store is configured.
   console.log('Verified Stripe event',event.id,event.type);
   return json({received:true});
  }
  return json({error:'Not found'},404);
 }
};