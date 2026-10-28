// EIS CET freight reference model (2026-10). Quotes are illustrative, not carrier tariffs.
// Residential liftgate pickup in Eden Prairie, MN 55346; commercial dock delivery.
// Do not charge based on these client-side values. The Cloudflare Worker must independently validate.
window.EIS_CET_FREIGHT = Object.freeze({
  originZip: '55346',
  maxOnlineQuantity: 5,
  liftgateEstimate: 65,
  references: Object.freeze({
    '53201': {region:'Upper Midwest',city:'Milwaukee, WI',base:330,carrier:'Dohrn',verifiedWeightLb:160,maxQty:1,deliveryLiftgate:true},
    '53202': {region:'Upper Midwest',city:'Milwaukee, WI',base:330,carrier:'Dohrn',verifiedWeightLb:525,maxQty:5,deliveryLiftgate:true},
    '53703': {region:'Upper Midwest',city:'Madison, WI',base:330,carrier:'Dohrn',verifiedWeightLb:150,maxQty:1,deliveryLiftgate:true},
    '60601': {region:'Great Lakes',city:'Chicago, IL',base:395,carrier:'Dohrn',verifiedWeightLb:200,maxQty:1,deliveryLiftgate:true},
    '30301': {region:'Southeast',city:'Atlanta, GA',base:502,carrier:'Dohrn',verifiedWeightLb:150,maxQty:1,deliveryLiftgate:false},
    '75201': {region:'South Central',city:'Dallas, TX',base:572,carrier:'Dohrn',verifiedWeightLb:150,maxQty:1,deliveryLiftgate:false},
    '90012': {region:'West Coast',city:'Los Angeles, CA',base:743,carrier:'Saia',verifiedWeightLb:150,maxQty:1,deliveryLiftgate:false},
    '10001': {region:'Northeast',city:'New York, NY',base:909,carrier:'Dohrn',verifiedWeightLb:150,maxQty:1,deliveryLiftgate:false}
  }),
  // ZIP-first-digit bands are *indicative* only, not geographic or carrier-rate guarantees.
  regionByPrefix: Object.freeze({
    '0':'Northeast','1':'Northeast','2':'East / Mid-Atlantic',
    '3':'Southeast','4':'Great Lakes','5':'Upper Midwest',
    '6':'Central / Great Lakes','7':'South Central',
    '8':'Mountain West','9':'West Coast / Pacific'
  }),
  quote(zip, quantity, liftgate) {
    if (!/^\d{5}$/.test(zip) || !Number.isInteger(quantity) || quantity < 1 || quantity > 5) return null;
    // Test checkout only. Prefix rates are regional estimates, not live carrier quotes.
    const zoneRates = {'0':909,'1':909,'2':650,'3':502,'4':395,'5':330,'6':395,'7':572,'8':650,'9':743};
    const ref=this.references[zip];
    if (quantity > 1 && zip !== '53202') return {zip,region:this.regionByPrefix[zip[0]],status:'rfq',reason:'Multi-table freight requires a custom quote'};
    const base=ref?.base ?? zoneRates[zip[0]];
    if (!Number.isFinite(base)) return {zip,status:'rfq',reason:'Freight quote required'};
    return {zip,region:ref?.region||this.regionByPrefix[zip[0]],status:'reference',base,liftgate:liftgate?65:0,total:base+(liftgate?65:0),carrier:ref?.carrier||'Regional estimate'};

  }
});
