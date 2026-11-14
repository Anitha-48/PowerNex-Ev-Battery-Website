import {useMemo,useState} from "react";import {useSearchParams} from "react-router-dom";import {AnimatePresence,motion} from "framer-motion";import {Search,X,MessageCircle} from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";import Visual from "../components/Visual.jsx";import {categories,products,wa} from "../data/products.js";import "../styles/Products.css";
export default function Products(){const [sp,setSp]=useSearchParams(),[q,setQ]=useState(""),[sort,setSort]=useState("az");
const cat=sp.get("cat")||"all",view=products.find(p=>p.id===sp.get("view"));
const upd=(k,v)=>{const n=new URLSearchParams(sp);v?n.set(k,v):n.delete(k);setSp(n,{replace:true})};
const list=useMemo(()=>products.filter(p=>(cat==="all"||p.cat===cat)&&(p.name+p.desc).toLowerCase().includes(q.toLowerCase())).sort((a,b)=>sort==="az"?a.name.localeCompare(b.name):b.name.localeCompare(a.name)),[q,cat,sort]);
const vc=view&&categories.find(c=>c.id===view.cat);
return(<><section className="page-head"><div className="container"><p className="eyebrow">Products</p><h1>Product Catalogue</h1></div></section>
<section className="section"><div className="container pwrap">
<aside className="side"><h4>Categories</h4><button className={cat==="all"?"on":""} onClick={()=>upd("cat","")}>All Products</button>{categories.map(c=><button key={c.id} className={cat===c.id?"on":""} onClick={()=>upd("cat",c.id)}>{c.name}</button>)}</aside>
<div><div className="bar"><label className="search"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products..."/></label>
<select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort"><option value="az">Name: A to Z</option><option value="za">Name: Z to A</option></select></div>
{list.length?<div className="pgrid2">{list.map((p,i)=><ProductCard key={p.id} p={p} i={i} onView={x=>upd("view",x.id)}/>)}</div>:<p className="empty">No products match. Try another search or category, or <a href={wa("Hello, I am looking for a product.")} target="_blank" rel="noreferrer">ask us on WhatsApp</a>.</p>}</div></div></section>
<AnimatePresence>{view&&<motion.div className="modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>upd("view","")}>
<motion.div className="mbox" initial={{scale:.92,y:20}} animate={{scale:1,y:0}} exit={{scale:.95}} onClick={e=>e.stopPropagation()}>
<button className="mclose" onClick={()=>upd("view","")} aria-label="Close"><X size={20}/></button>
<div className="mimg"><Visual icon={vc.icon} image={view.image} alt={view.name}/></div>
<div className="mtxt"><span className="tag">{vc.name}</span><h2>{view.name}</h2><p>{view.desc}</p><p>{vc.desc}</p>
<a className="btn btn-wa" target="_blank" rel="noreferrer" href={wa(`Hello, I would like to enquire about: ${view.name}`)}><MessageCircle size={16}/>Enquire on WhatsApp</a></div></motion.div></motion.div>}</AnimatePresence></>)}
