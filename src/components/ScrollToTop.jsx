import {useEffect,useState} from "react";import {useLocation} from "react-router-dom";import {ArrowUp} from "lucide-react";
export default function ScrollToTop(){const {pathname}=useLocation(),[show,setShow]=useState(false);
useEffect(()=>{window.scrollTo(0,0)},[pathname]);
useEffect(()=>{const f=()=>setShow(window.scrollY>500);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
return <button className={`totop ${show?"show":""}`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top"><ArrowUp size={20}/></button>}
