import {Link} from "react-router-dom";import {motion} from "framer-motion";import Visual from "./Visual.jsx";import "../styles/CategoryCard.css";
export default function CategoryCard({c,i=0}){return(<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%4)*.08,duration:.5}}>
<Link to={`/products?cat=${c.id}`} className="ccard"><div className="cimg"><Visual icon={c.icon} image={c.image} alt={c.name}/></div>
<div className="cbody"><h3>{c.name}</h3><p>{c.desc}</p><span className="clink">Explore Products</span></div></Link></motion.div>)}
