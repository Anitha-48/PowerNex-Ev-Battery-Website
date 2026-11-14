import {motion} from "framer-motion";import {MessageCircle} from "lucide-react";import Visual from "./Visual.jsx";import {categories,wa} from "../data/products.js";import "../styles/ProductCard.css";
export default function ProductCard({p,onView,i=0}){const c=categories.find(x=>x.id===p.cat);
return(<motion.article className="pcard" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%4)*.08,duration:.5}}>
<div className="pimg"><Visual icon={c.icon} image={p.image} alt={p.name}/></div>
<div className="pbody"><span className="tag">{c.name}</span><h3>{p.name}</h3><p>{p.desc}</p>
<div className="pact"><button className="btn btn-dark" onClick={()=>onView(p)}>View Details</button>
<a className="btn btn-wa" target="_blank" rel="noreferrer" href={wa(`Hello, I would like to enquire about: ${p.name}`)}><MessageCircle size={16}/>Enquire</a></div></div></motion.article>)}
