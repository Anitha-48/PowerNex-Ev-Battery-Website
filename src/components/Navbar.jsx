import {useEffect,useState} from "react";import {Link,NavLink,useLocation} from "react-router-dom";import {AnimatePresence,motion} from "framer-motion";
import {Search,MessageCircle,Menu,X} from "lucide-react";import {wa} from "../data/products.js";import logo from "../assets/voltcore-logo.png";import "../styles/Navbar.css";
const L=[["/","Home"],["/about","About Us"],["/products","Products"],["/contact","Contact Us"]];
export default function Navbar(){const [sc,setSc]=useState(false),[open,setOpen]=useState(false),loc=useLocation();
useEffect(()=>{const f=()=>setSc(window.scrollY>40);f();window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
useEffect(()=>setOpen(false),[loc.pathname]);
const cls=({isActive})=>isActive?"active":"";
return(<header className={`nav ${sc?"scrolled":""}`}><div className="container nav-in">
<Link to="/" className="logo" aria-label="PowerNex home">
  <img src={logo} alt="PowerNex logo" className="brand-logo" />
  <span className="brand-text">Power<b>Nex</b></span>
</Link>
<nav className="links">{L.map(([t,n])=><NavLink key={t} to={t} end={t==="/"} className={cls}>{n}</NavLink>)}</nav>
<div className="nav-act">
<Link to="/products" className="icon-btn" aria-label="Search products"><Search size={18}/></Link>
<a href={wa("Hello, I would like to enquire about your products.")} target="_blank" rel="noreferrer" className="icon-btn" aria-label="WhatsApp"><MessageCircle size={18}/></a>
<button className="icon-btn burger" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu size={20}/></button></div></div>
<AnimatePresence>{open&&<><motion.div key="s" className="scrim" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}/>
<motion.aside key="d" className="drawer" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{type:"tween",duration:.3}}>
<button className="icon-btn close" onClick={()=>setOpen(false)} aria-label="Close menu"><X size={20}/></button>
{L.map(([t,n])=><Link key={t} to={t}>{n}</Link>)}</motion.aside></>}</AnimatePresence></header>)}
