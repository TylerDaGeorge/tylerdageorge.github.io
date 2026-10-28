// EIS CET freight reference model (2026-10). Quotes are illustrative, not carrier tariffs.
// Residential liftgate pickup in Eden Prairie, MN 55346; commercial dock delivery.
// Do not charge based on these client-side values. The Cloudflare Worker must independently validate.
window.EIS_CET_FREIGHT = Object.freeze({
  originZip: '55346',
  maxOnlineQuantity: 5,
  liftgateEstimate: 65,
  references: Object.freeze({
    '53201': {region:'Upper Midwest',city:'Milwaukee, WI',base:330,carrier:'Dohrn',verifiedWeightLb:160},
    '53202': {region:'Upper Midwest',city:'Milwaukee, WI',base:330,carrier:'Dohrn',verifiedWeightLb:525},
    '53703': {region:'Upper Midwest',city:'Madison, WI',base:330,carrier:'Dohrn',verifiedWeightLb:150},
    '60601': {region:'Great Lakes',city:'Chicago, IL',base:395,carrier:'Dohrn',verifiedWeightLb:200},
    '30301': {region:'Southeast',city:'Atlanta, GA',base:502,carrier:'Dohrn',verifiedWeightLb:150},
    '75201': {region:'South Central',city:'Dallas, TX',base:572,carrier:'Dohrn',verifiedWeightLb:150},
    '90012': {region:'West Coast',city:'Los Angeles, CA',base:743,carrier:'Dohrn',verifiedWeightLb:150},
    '10001': {region:'Northeast',city:'New York, NY',base:909,carrier:'Dohrn',verifiedWeightLb:150}
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
    const ref=this.references[zip];
    if (!ref) return {zip,region:this.regionByPrefix[zip[0]]||'Unknown',status:'rfq',reason:'No validated carrier quote for this ZIP'};
    // The 525 lb quote is only established for Milwaukee 53202; do not extrapolate to all regions.
    if (quantity > 1 && zip !== '53202') return {zip,region:ref.region,status:'rfq',reason:'Multi-table freight rate requires validation'};
    return {zip,region:ref.region,status:'reference',base:ref.base,liftgate:liftgate?this.liftgateEstimate:0,total:ref.base+(liftgate?this.liftgateEstimate:0),carrier:ref.carrier};
  }
});
