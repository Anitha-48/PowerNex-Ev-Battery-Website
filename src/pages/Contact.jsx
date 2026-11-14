import {useState} from "react";import {motion} from "framer-motion";import {Mail,Phone,MapPin,MessageCircle,Instagram,Facebook,Linkedin,Youtube} from "lucide-react";import {wa} from "../data/products.js";import {rv} from "../utils.js";import "../styles/Contact.css";
export default function Contact(){const [whatsAppLink,setWhatsAppLink]=useState("");
const submit=e=>{e.preventDefault();const form=new FormData(e.currentTarget);
const message=`Hello, I would like to make an enquiry.\nName: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")||"Not provided"}\nSubject: ${form.get("subject")}\nMessage: ${form.get("message")}`;
const link=wa(message);window.open(link,"_blank");setWhatsAppLink(link);};
return(<>
<section className="page-head"><div className="container"><p className="eyebrow">Contact Us</p><h1>Let's Power Your Next Project Together.</h1></div></section>
<section className="section"><div className="container cwrap">
<motion.form className="cform" onSubmit={submit} {...rv}>
<div className="two"><input required name="name" placeholder="Name"/><input required type="email" name="email" placeholder="Email"/></div>
<div className="two"><input name="phone" placeholder="Phone"/><input required name="subject" placeholder="Subject"/></div>
<textarea required name="message" rows="5" placeholder="Message"/>
<button className="btn btn-primary" type="submit">Send via WhatsApp</button>
{whatsAppLink&&<p className="ok" role="status">Your enquiry is prepared. Send it in WhatsApp, or <a href={whatsAppLink} target="_blank" rel="noreferrer">open WhatsApp</a> if it did not open automatically.</p>}</motion.form>
<motion.div className="cinfo" {...rv} transition={{delay:.15,duration:.6}}>
<p><Mail size={18}/><a href="mailto:vignes@gmail.com">vignes@gmail.com</a></p><p><Phone size={18}/> +91 88706 33575</p><p><MapPin size={18}/> Porur Junction, Chennai</p>
<a className="btn btn-wa" target="_blank" rel="noreferrer" href={wa("Hello, I would like to get in touch.")}><MessageCircle size={16}/>Chat on WhatsApp</a>
<div className="social dark"><a href="#" aria-label="Instagram"><Instagram size={18}/></a><a href="#" aria-label="Facebook"><Facebook size={18}/></a><a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="#" aria-label="YouTube"><Youtube size={18}/></a></div>
<div className="map"><a href="https://www.google.com/maps/search/?api=1&query=Porur+Junction%2C+Chennai" target="_blank" rel="noreferrer">View Porur Junction, Chennai on Google Maps</a></div></motion.div></div></section></>)}
