'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LogoMark from './LogoMark';

const links=[['/','Inicio'],['/nosotros','Nosotros'],['/servicios','Servicios'],['/proyectos','Proyectos'],['/precios','Precios'],['/contacto','Contacto']];
export default function Header(){
 const pathname=usePathname(); const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>18);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);
 useEffect(()=>setOpen(false),[pathname]);
 return <header className={`site-header ${scrolled?'scrolled':''}`}><div className="container nav-wrap"><Link className="brand" href="/" aria-label="Pascare, inicio"><LogoMark/><div>PASCARE<small>TECHNOLOGY</small></div></Link><nav id="main-navigation" className={open?'open':''}>{links.map(([href,label])=><Link aria-current={pathname===href?'page':undefined} className={pathname===href?'active':''} onClick={()=>setOpen(false)} href={href} key={href}>{label}</Link>)}<Link onClick={()=>setOpen(false)} className={`nav-quote ${pathname==='/cotizacion'?'current':''}`} href="/cotizacion"><span>Hablemos</span> Cotizar proyecto <b>↗</b></Link></nav><button className={`menu-button ${open?'open':''}`} aria-label="Abrir menú" aria-controls="main-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><i/><i/><i/></button></div></header>
}
