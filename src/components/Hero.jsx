import {motion} from "framer-motion";import {Link} from "react-router-dom";import {Battery,Cpu,Sun,Video,Zap} from "lucide-react";import heroVideo from "../assets/VOLTNEXA_brand_video_animation_99b7b645.mp4";import "../styles/Hero.css";
const fl=[[Battery,"8%","24%"],[Cpu,"76%","20%"],[Sun,"88%","60%"],[Video,"12%","70%"],[Zap,"52%","84%"]];
const words="Powering Innovation. Connecting Technology.".split(" ");
export default function Hero(){return(<section className="hero">
<video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={heroVideo} type="video/mp4"/></video>
<div className="glow g1"/><div className="glow g2"/>
{Array.from({length:16},(_,i)=><span key={i} className="pt" style={{left:`${(i*37+8)%100}%`,animationDelay:`${(i%6)*1.3}s`,animationDuration:`${9+(i%5)*2}s`}}/>)}
{fl.map(([I,l,t],i)=><motion.div key={i} className="fl" style={{left:l,top:t}} animate={{y:[0,-16,0]}} transition={{duration:4+i,repeat:Infinity,ease:"easeInOut"}}><I size={28}/></motion.div>)}
<div className="container hero-in">
<h1>{words.map((w,i)=><span key={i} className="wmask"><motion.span initial={{y:"110%"}} animate={{y:0}} transition={{delay:.2+i*.12,duration:.6,ease:"easeOut"}}>{w}&nbsp;</motion.span></span>)}</h1>
<motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.9,duration:.6}}>Your Trusted Destination for EV Batteries, Lithium Technology, Electrical Components, CCTV Security, and Solar Accessories.</motion.p>
<motion.div className="hero-btn" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.1,duration:.6}}>
<Link to="/products" className="btn btn-primary">Explore Products</Link><Link to="/contact" className="btn btn-outline">Get a Quote</Link></motion.div></div></section>)}
