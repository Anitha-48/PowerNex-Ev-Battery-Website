import {BatteryCharging,Battery,Package,Cpu,Scale,Cog,Lightbulb,Fan,Zap,Video,Cable,PlugZap,Sun,Wrench,MessageCircle} from "lucide-react";
const M={BatteryCharging,Battery,Package,Cpu,Scale,Cog,Lightbulb,Fan,Zap,Video,Cable,PlugZap,Sun,Wrench,MessageCircle};
export const Icon=({name,size=24})=>{const I=M[name]||Zap;return <I size={size}/>};
export default function Visual({icon,image,alt=""}){
if(image)return <img className="vimg" src={image} alt={alt} loading="lazy"/>;
return <div className="visual"><Icon name={icon} size={56}/></div>}
