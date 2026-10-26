import catalog from '../cet-prices.json' with { type: 'json' };
export function priceFor(input) {
 const {product,type,material,width,depth,height,quantity}=input??{};
 if(product!=='cet'||type!=='ST'||!['SST','SSTL'].includes(material)||![36,48,60,72,84,96].includes(width)||![24,30,36].includes(depth)||![30,36].includes(height)||!Number.isSafeInteger(quantity)||quantity<1||quantity>5)return null;
 const sku=`CET-ST-${material}-${width}Wx${depth}Dx${height}H`;
 const tiers=catalog.prices[sku];const unit=tiers?.[quantity-1];
 if(!Number.isSafeInteger(unit)||unit<=0)return null;
 return {sku,quantity,unitAmount:unit*100};
}
