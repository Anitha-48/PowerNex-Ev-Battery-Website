import {motion} from "framer-motion";import {Link} from "react-router-dom";import {Icon} from "../components/Visual.jsx";import {services,wa} from "../data/products.js";import {rv} from "../utils.js";import "../styles/Services.css";
export default function Services(){return(<>
<section className="page-head"><div className="container"><p className="eyebrow">Services</p><h1>Solutions built around your project</h1></div></section>
<section className="section"><div className="container">{services.map((s,i)=><motion.div key={s.title} className={`srow ${i%2?"rev":""}`} {...rv}>
<div className="simg"><div className="visual"><Icon name={s.icon} size={72}/></div></div>
<div className="stxt"><h2>{s.title}</h2><p>{s.desc} Contact us with your requirement and we will recommend suitable products and next steps.</p>
<div className="sbtn"><a className="btn btn-wa" target="_blank" rel="noreferrer" href={wa(`Hello, I would like to enquire about: ${s.title}`)}>Enquire on WhatsApp</a><Link to="/contact" className="btn btn-dark">Get a Quote</Link></div></div></motion.div>)}</div></section></>)}
