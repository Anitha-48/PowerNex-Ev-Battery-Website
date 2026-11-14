import {Link} from "react-router-dom";import {Instagram,Facebook,Linkedin,Youtube,Mail,Phone,MapPin} from "lucide-react";import {categories} from "../data/products.js";import logo from "../assets/voltcore-logo.png";import "../styles/Footer.css";
export default function Footer(){return(<footer className="footer"><div className="container fgrid">
<div><Link to="/" className="logo footer-logo"><img src={logo} alt="PowerNex logo" className="brand-logo" /><span className="brand-text">Power<b>Nex</b></span></Link>
<p>Reliable electrical products, EV battery solutions, lithium components, CCTV and solar accessories for individuals, technicians and businesses.</p>
<div className="social"><a href="#" aria-label="Instagram"><Instagram size={18}/></a><a href="#" aria-label="Facebook"><Facebook size={18}/></a><a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="#" aria-label="YouTube"><Youtube size={18}/></a></div></div>
<div className="flinks"><h4>Quick Links</h4>{[["/","Home"],["/about","About Us"],["/products","Products"],["/contact","Contact Us"]].map(([t,n])=><Link key={t} to={t}>{n}</Link>)}</div>
<div className="flinks"><h4>Product Categories</h4>{categories.slice(0,7).map(c=><Link key={c.id} to={`/products?cat=${c.id}`}>{c.name}</Link>)}</div>
<div><h4>Contact</h4><p><Mail size={15}/> info@yourbusiness.com</p><p><Phone size={15}/> +91 88706 33575</p><p><MapPin size={15}/> Your business address, City, State</p></div></div>
<div className="container fbar"><span>© {new Date().getFullYear()} PowerNex. All rights reserved.</span><span><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms &amp; Conditions</a></span></div></footer>)}
