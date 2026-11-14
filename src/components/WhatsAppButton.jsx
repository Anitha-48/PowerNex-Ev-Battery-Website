import {MessageCircle} from "lucide-react";import {wa} from "../data/products.js";
export default function WhatsAppButton(){return <a className="wa-float" href={wa("Hello, I would like to enquire about your products.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={26}/></a>}
