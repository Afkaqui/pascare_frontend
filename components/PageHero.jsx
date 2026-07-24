import Reveal from './Reveal';
import ServiceIcon from './ServiceIcon';
import {CheckCircle2, Compass, Cpu, Handshake, Lightbulb, MessageCircleQuestion, Search, ShieldCheck, TrendingUp, UserRound, UserRoundCheck, Workflow} from 'lucide-react';

function QuoteScene(){
  return <div className="page-scene quote-scene" aria-hidden="true">
    <div className="quote-route">
      <i className="route-step">01</i>
      <span className="route-line"><em className="route-progress"/><b className="route-spark"/></span>
      <i className="route-step">02</i>
      <span className="route-line"><em className="route-progress"/><b className="route-spark"/></span>
      <i className="route-step">03</i>
    </div>
    <div className="quote-card">
      <div className="quote-card-copy"><small>Tu solicitud</small><b>Lista para evaluar</b><em>Respuesta en 1 día hábil</em></div>
      <div className="quote-reviewer"><UserRoundCheck size={31} strokeWidth={2.2}/><span><Cpu size={13} strokeWidth={2.4}/></span></div>
    </div>
  </div>;
}

function ProjectScene(){
  return <div className="page-scene projects-scene" aria-hidden="true">
    <div className="project-story">
      <div className="discovery-board">
        <div className="discovery-title"><Search size={15}/><span>Entender antes de construir</span></div>
        <div className="discussion-path path-left"/><div className="discussion-path path-right"/>
        <div className="project-person person-client"><span className="avatar"><UserRound size={24}/></span><b>Cliente</b><em>“El proceso nos frena”</em></div>
        <div className="problem-core"><MessageCircleQuestion size={24}/><b>¿Dónde está el problema?</b></div>
        <div className="project-person person-team"><span className="avatar"><UserRound size={24}/></span><b>Pascare</b><em>“Vamos a encontrar la causa”</em></div>
        <div className="insight-chip"><Lightbulb size={15}/><span>Hallazgo: información fragmentada</span></div>
      </div>
      <div className="solution-system">
        <div className="system-head"><div><i/><strong>Pascare System</strong></div><span>● En línea</span></div>
        <div className="system-metrics">
          <div className="metric-process"><Workflow size={17}/><small>Proceso</small><b>Automatizado</b></div>
          <div className="metric-security"><ShieldCheck size={17}/><small>Control</small><b>Visible y seguro</b></div>
          <div className="metric-impact"><TrendingUp size={17}/><small>Impacto</small><b>+32%</b></div>
        </div>
        <div className="system-workflow"><div className="workflow-head"><span>Flujo operativo</span><em>Actualizado ahora</em></div><div className="workflow-row"><i className="flow-blue"/><b>Solicitud centralizada</b><small>Completado</small><CheckCircle2 size={15}/></div><div className="workflow-row"><i className="flow-violet"/><b>Validación automática</b><small>Activo</small><CheckCircle2 size={15}/></div><div className="workflow-row"><i className="flow-green"/><b>Seguimiento en tiempo real</b><small>Disponible</small><CheckCircle2 size={15}/></div></div>
      </div>
    </div>
  </div>;
}

function HeroScene({variant}){
  if(variant==='about') return <div className="page-scene about-scene" aria-hidden="true"><div className="orbit orbit-a"><i/><i/><i/></div><div className="orbit orbit-b"><i/><i/></div><div className="scene-core"><span>P</span><small>Personas</small><b>+</b><small>Tecnología</small></div><div className="scene-label label-one label-strategy"><Compass size={15} strokeWidth={2.5}/><span>Estrategia</span></div><div className="scene-label label-two label-engineering"><Cpu size={15} strokeWidth={2.5}/><span>Ingeniería</span></div><div className="scene-label label-three label-support"><Handshake size={15} strokeWidth={2.5}/><span>Acompañamiento</span></div></div>;
  if(variant==='services') return <div className="page-scene services-scene" aria-hidden="true"><div className="scene-stack"><div className="scene-service scene-software"><span>01</span><b>Software<small>Sistemas y aplicaciones a medida</small></b><ServiceIcon slug="software"/></div><div className="scene-service scene-infrastructure"><span>02</span><b>Infraestructura<small>Servidores, nube y continuidad</small></b><ServiceIcon slug="infraestructura"/></div><div className="scene-service scene-network"><span>03</span><b>Conectividad<small>Redes rápidas, estables y visibles</small></b><ServiceIcon slug="redes"/></div><div className="scene-service scene-security"><span>04</span><b>Seguridad<small>Protección para datos y accesos</small></b><ServiceIcon slug="seguridad"/></div></div></div>;
  if(variant==='projects') return <ProjectScene/>;
  if(variant==='pricing') return <div className="page-scene pricing-scene" aria-hidden="true"><div className="proposal-sheet"><span>Propuesta tecnológica</span><b>Alcance claro</b><div><i/><i/><i/></div><small>Entregables · Plazos · Inversión</small></div><div className="price-seal"><i className="seal-ring"/>Sin<br/>sorpresas</div></div>;
  if(variant==='quote') return <QuoteScene/>;
  if(variant==='contact') return <div className="page-scene contact-scene" aria-hidden="true"><div className="message-bubble bubble-a chat-message"><i>●</i><span>Hola, ¿cómo podemos ayudarte?</span></div><div className="message-bubble bubble-b chat-message"><span>Quiero mejorar un proceso de mi empresa.</span><i>✓✓</i></div><div className="message-bubble bubble-a chat-message"><i>●</i><span>Claro. ¿Dónde se genera la mayor demora?</span></div><div className="message-bubble bubble-b chat-message"><span>En el registro y seguimiento de solicitudes.</span><i>✓✓</i></div><div className="message-bubble bubble-a chat-message"><i>●</i><span>Perfecto, podemos revisar el flujo contigo.</span></div><div className="availability"><i/> Equipo disponible · responde ahora</div></div>;
  return null;
}

export default function PageHero({eyebrow,title,description,variant='default',children}){return <section className={`page-hero page-hero-${variant}`}><div className="grid-overlay"/><div className="page-hero-glow"/><div className="container page-hero-layout"><Reveal className="page-hero-copy"><span className="eyebrow"><i/>{eyebrow}</span><h1>{title}</h1><p>{description}</p>{children}</Reveal><Reveal className="page-hero-art" delay={120}><HeroScene variant={variant}/></Reveal></div></section>}
