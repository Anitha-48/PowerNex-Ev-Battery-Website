// Edit WA (country code + number, digits only) and brand details here.
export const WA="918870633575";
export const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
export const categories=[
{id:"ev",name:"EV Batteries & Battery Packs",desc:"Ready-to-use battery packs for electric vehicles and energy storage.",icon:"BatteryCharging",image:"https://www.bonnenbatteries.com/wp-content/uploads/2026/09/illustrative-ev-battery-cutaway.webp"},
{id:"cells",name:"Lithium Cells",desc:"Lithium cells for battery pack building and replacement.",icon:"Battery",image:"https://image.made-in-china.com/202f0j00jpqUYNbcCsoa/Lowest-Price-of-Battery-Cell-Different-Size-and-Capacity-for-Power-Tool.webp"},
{id:"acc",name:"Lithium Battery Accessories",desc:"Holders, nickel strips, fuses and protection parts.",icon:"Package",image:"https://m.media-amazon.com/images/I/51hLAHxLO3L.jpg"},
{id:"bms",name:"BMS – DALY & JBD",desc:"Battery management systems to protect and monitor packs.",icon:"Cpu",image:"https://s3.ap-south-1.amazonaws.com/arbaccessorieserp/arbaccessorieserp/2026/07/21/Website%20Item/HIZ4DEJW_BMS_NMC_10S_20A_DALY_1.webp"},
{id:"bal",name:"Battery Balancers / Equalizers",desc:"Keep cell voltages even for longer pack life.",icon:"Scale",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sQ5DMJdynfzQ6qbXTOnTQC6Umfs-KT9KK5BYcPl17o4m31OirCO-vQ8&s=10"},
{id:"dc",name:"DIY DC Motors",desc:"DC motors for projects, prototypes and learning kits.",icon:"Cog",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOp4PoOxAEDYJZZ-2eZCnXoCxRhlGVHBZun_7tB3A3HJnSay6wt2O7AnA&s=10"},
{id:"led",name:"LED Lights",desc:"Energy-efficient LED lighting for homes and workplaces.",icon:"Lightbulb",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2cUzd74ykVbk0_v8Z4bCjXvgDpXY1q7TuJgXumEcfg&s=10"},
{id:"fan",name:"Table Fans",desc:"Reliable table fans for everyday cooling.",icon:"Fan",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHc2JKUKsnFHjGcRjbRt0OMtivHwmQJrBcB6BFh79FicWzI5EAg0KMoku&s=10"},
{id:"motor",name:"Electrical Motors",desc:"Electrical motors for industrial and domestic use.",icon:"Zap",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhiw_JkpNEsfVzviHXgq5wu6p_uZvmauIhou6PV0B6w&s=10"},
{id:"cctv",name:"CCTV Cameras & Security Systems",desc:"Cameras, recorders and accessories for site security.",icon:"Video",image:"https://cdn.moglix.com/p/agF8EkTS4LNZZ-xxlarge.jpg"},
{id:"cable",name:"Cables, Wires & Connectors",desc:"Cables, wires and connectors for safe connections.",icon:"Cable",image:"https://m.media-amazon.com/images/I/71d5uFifNcL.jpg"},
{id:"chg",name:"EV Battery Chargers",desc:"Chargers matched to your battery chemistry and voltage.",icon:"PlugZap",image:"https://tiimg.tistatic.com/fp/0/008/930/6-amp-ev-battery-charger-856.jpg"},
{id:"solar",name:"Solar Panels & Accessories",desc:"Panels, controllers and mounting accessories.",icon:"Sun",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTm70FGWypQxrY50QYQi55jGvSxCxJdrWo0GMEGuM8oEz1Sc24JB-MVJw&s=10"},
{id:"asm",name:"Battery Assembly Accessories",desc:"Tools and materials for assembling battery packs.",icon:"Wrench",image:"https://m.media-amazon.com/images/I/61yK1YtbNpL.jpg"}];
const s=(cat,name,desc,image)=>({id:name.toLowerCase().replace(/[^a-z0-9]+/g,"-"),cat,name,desc,...(image?{image}:{})});
// Add an `image:"https://..."` field to any product or category to show a real photo.
export const products=[
s("ev","48V Lithium EV Battery Pack","Sample listing. Replace with your pack specifications.","https://www.bonnenbatteries.com/wp-content/uploads/2026/09/illustrative-ev-battery-cutaway.webp"),
s("cells","18650 Lithium Cell","Sample listing. Add chemistry, capacity and brand.","https://image.made-in-china.com/202f0j00jpqUYNbcCsoa/Lowest-Price-of-Battery-Cell-Different-Size-and-Capacity-for-Power-Tool.webp"),
s("acc","Nickel Strip & Cell Holder Kit","Sample listing for pack building accessories.","https://m.media-amazon.com/images/I/51hLAHxLO3L.jpg"),
s("bms","DALY Smart BMS","Sample listing. Add cell count and current rating.","https://s3.ap-south-1.amazonaws.com/arbaccessorieserp/arbaccessorieserp/2026/07/21/Website%20Item/HIZ4DEJW_BMS_NMC_10S_20A_DALY_1.webp"),
s("bms","JBD Smart BMS","Sample listing. Add cell count and current rating.","https://s3.ap-south-1.amazonaws.com/arbaccessorieserp/arbaccessorieserp/2026/07/21/Website%20Item/HIZ4DEJW_BMS_NMC_10S_20A_DALY_1.webp"),
s("bal","Active Battery Balancer","Sample listing for cell equalizing.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sQ5DMJdynfzQ6qbXTOnTQC6Umfs-KT9KK5BYcPl17o4m31OirCO-vQ8&s=10"),
s("dc","DIY DC Motor","Sample listing. Add voltage and RPM.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOp4PoOxAEDYJZZ-2eZCnXoCxRhlGVHBZun_7tB3A3HJnSay6wt2O7AnA&s=10"),
s("led","LED Bulb & Tube Lights","Sample listing for LED lighting.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2cUzd74ykVbk0_v8Z4bCjXvgDpXY1q7TuJgXumEcfg&s=10"),
s("fan","Table Fan","Sample listing. Add sweep size and power.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHc2JKUKsnFHjGcRjbRt0OMtivHwmQJrBcB6BFh79FicWzI5EAg0KMoku&s=10"),
s("motor","Electrical Induction Motor","Sample listing. Add HP and phase.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhiw_JkpNEsfVzviHXgq5wu6p_uZvmauIhou6PV0B6w&s=10"),
s("cctv","CCTV Camera Kit","Sample listing for security camera systems.","https://cdn.moglix.com/p/agF8EkTS4LNZZ-xxlarge.jpg"),
s("cable","Copper Wire & Connector Set","Sample listing for wires and connectors.","https://m.media-amazon.com/images/I/71d5uFifNcL.jpg"),
s("chg","EV Battery Charger","Sample listing. Add voltage and current.","https://tiimg.tistatic.com/fp/0/008/930/6-amp-ev-battery-charger-856.jpg"),
s("solar","Solar Panel & Charge Controller","Sample listing for solar accessories.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTm70FGWypQxrY50QYQi55jGvSxCxJdrWo0GMEGuM8oEz1Sc24JB-MVJw&s=10"),
s("asm","Battery Spot Welding & Assembly Kit","Sample listing for assembly accessories.","https://m.media-amazon.com/images/I/61yK1YtbNpL.jpg")];
export const services=[
{icon:"BatteryCharging",title:"EV Battery Solutions",desc:"Help choosing battery packs and chargers that suit your vehicle and usage."},
{icon:"Wrench",title:"Lithium Battery Assembly Support",desc:"Guidance on cells, BMS, balancing and assembly materials for building packs."},
{icon:"Cpu",title:"BMS and Battery Accessories",desc:"DALY and JBD BMS units plus the accessories to install them properly."},
{icon:"Video",title:"CCTV Installation Solutions",desc:"Camera systems selected and supplied for homes, shops and sites."},
{icon:"Zap",title:"Electrical Components Supply",desc:"Motors, cables, connectors and lighting for technicians and businesses."},
{icon:"Sun",title:"Solar Accessories Supply",desc:"Solar panels, controllers and accessories for small to mid-size setups."},
{icon:"MessageCircle",title:"Technical Product Consultation",desc:"Talk to our team to match the right product to your requirement."}];
