import Link from 'next/link';
import Reveal from './Reveal';
import ServiceIcon from './ServiceIcon';
export default function ServiceCard({service,index=0}){return <Reveal className={`service-card service-card-${service.slug}`} delay={index*55}><ServiceIcon slug={service.slug}/><small>0{index+1}</small><h3>{service.title}</h3><p>{service.summary}</p><Link href={`/servicios#${service.slug}`}>Ver capacidad <span>↗</span></Link></Reveal>}
