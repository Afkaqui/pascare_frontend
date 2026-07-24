import {Code2, Network, ServerCog, ShieldCheck, Headset, Lightbulb, FlaskConical} from 'lucide-react';

const icons={software:Code2,redes:Network,infraestructura:ServerCog,seguridad:ShieldCheck,soporte:Headset,consultoria:Lightbulb,innovacion:FlaskConical};
export default function ServiceIcon({slug,size=24}){const Icon=icons[slug]||Code2;return <span className={`service-icon service-icon-${slug}`}><Icon size={size} strokeWidth={3}/></span>}
