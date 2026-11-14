import {Routes,Route,useLocation} from "react-router-dom";import {AnimatePresence,motion} from "framer-motion";
import Navbar from "./components/Navbar.jsx";import Footer from "./components/Footer.jsx";import WhatsAppButton from "./components/WhatsAppButton.jsx";import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";import About from "./pages/About.jsx";import Products from "./pages/Products.jsx";import Contact from "./pages/Contact.jsx";
export default function App(){const loc=useLocation();return(<>
<Navbar/>
<AnimatePresence mode="wait"><motion.main key={loc.pathname} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.3}}>
<Routes location={loc}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/products" element={<Products/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes>
</motion.main></AnimatePresence>
<Footer/><WhatsAppButton/><ScrollToTop/></>);}
