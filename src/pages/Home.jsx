import {useEffect,useRef,useState} from "react";import {Link,useNavigate} from "react-router-dom";import {motion,useInView} from "framer-motion";
import {ShieldCheck,Headset,BadgePercent,PlugZap} from "lucide-react";
import Hero from "../components/Hero.jsx";import CategoryCard from "../components/CategoryCard.jsx";import ProductCard from "../components/ProductCard.jsx";
import {categories,products} from "../data/products.js";import {rv} from "../utils.js";import "../styles/Home.css";
function Counter({to,label}){const r=useRef(null),v=useInView(r,{once:true}),[n,setN]=useState(0);
useEffect(()=>{if(!v)return;let s=null,id;const f=t=>{s=s||t;const p=Math.min((t-s)/1400,1);setN(Math.round(to*p));if(p<1)id=requestAnimationFrame(f)};id=requestAnimationFrame(f);return()=>cancelAnimationFrame(id)},[v,to]);
return <div ref={r} className="stat"><b>{n}</b><span>{label}</span></div>}
const trust=[[ShieldCheck,"Quality Assured Products"],[Headset,"Reliable Technical Support"],[BadgePercent,"Competitive Pricing"],[PlugZap,"Complete Electrical Solutions"]];
export default function Home(){const nav=useNavigate();return(<>
<Hero/>
<section className="trust"><div className="container tgrid">{trust.map(([I,t],i)=><motion.div key={t} className="titem" {...rv} transition={{delay:i*.1,duration:.5}}><I size={30}/><span>{t}</span></motion.div>)}</div></section>
<section className="section"><div className="container"><motion.div {...rv}><p className="eyebrow">Product Categories</p><h2 className="title">Everything you need, in one place</h2><p className="sub">From lithium cells to solar accessories, browse our full range.</p></motion.div>
<div className="cgrid">{categories.map((c,i)=><CategoryCard key={c.id} c={c} i={i}/>)}</div></div></section>
<section className="section alt"><div className="container"><motion.div {...rv}><p className="eyebrow">Featured Products</p><h2 className="title">Popular picks</h2></motion.div>
<div className="pgrid">{products.slice(0,8).map((p,i)=><ProductCard key={p.id} p={p} i={i} onView={x=>nav(`/products?view=${x.id}`)}/>)}</div>
<div style={{textAlign:"center",marginTop:36}}><Link to="/products" className="btn btn-dark">View All Products</Link></div></div></section>
<section className="section"><div className="container why"><motion.div {...rv}><p className="eyebrow">Why Choose Us</p><h2 className="title">Technical knowledge you can rely on</h2>
<p className="sub">We focus on product quality, honest advice and dependable sourcing. Our team understands batteries, BMS, motors, security and solar, so you get the right product for the job at an affordable price, with support before and after you buy.</p></motion.div>
<div className="stats"><Counter to={categories.length} label="Product categories"/><Counter to={products.length} label="Products available"/><Counter to={5} label="Product domains"/></div></div></section>
<section className="cta"><div className="container"><motion.div {...rv}><h2>Looking for Reliable Electrical &amp; EV Solutions?</h2><p>Get the right products and technical support for your business.</p><Link to="/contact" className="btn btn-primary">Contact Our Team</Link></motion.div></div></section></>)}
