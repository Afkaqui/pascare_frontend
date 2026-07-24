import Link from 'next/link';
import {
  BarChart3,
  ClipboardCheck,
  Cpu,
  Database,
  FileCheck2,
  Focus,
  Handshake,
  Headphones,
  Lightbulb,
  MessageCircleQuestion,
  Monitor,
  Network,
  Rocket,
  ScanSearch,
  Search,
  ShieldCheck,
  UserRound,
  UserRoundCheck,
  UsersRound,
  Workflow,
} from 'lucide-react';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';
import {process} from '../../lib/content';

export const metadata={title:'Nosotros',description:'Conoce a Pascare: cómo trabajamos, nuestros principios y el enfoque con que resolvemos retos tecnológicos para organizaciones en Perú.',alternates:{canonical:'/nosotros'}};

const principles=[
  {number:'01',tone:'violet',Icon:Focus,title:'Claridad antes que complejidad',description:'Las mejores soluciones se pueden explicar, medir y mantener.'},
  {number:'02',tone:'amber',Icon:ShieldCheck,title:'Responsabilidad técnica',description:'Recomendamos lo que realmente necesitas, no lo que resulta más costoso.'},
  {number:'03',tone:'emerald',Icon:Handshake,title:'Relaciones de largo plazo',description:'La entrega no es el final: acompañamos la evolución de cada solución.'},
];

const processIcons=[Search,ScanSearch,ClipboardCheck,Rocket,Headphones];

function StageIllustration({index}){
  if(index===0)return <div className="stage-picture stage-picture-discovery" aria-hidden="true">
    <span className="stage-visual-piece stage-mini-person stage-client"><UserRound size={18}/><small>Cliente</small></span><i className="stage-visual-piece stage-link"/><span className="stage-visual-piece stage-question"><MessageCircleQuestion size={22}/></span><i className="stage-visual-piece stage-link"/><span className="stage-visual-piece stage-mini-person stage-team"><Cpu size={18}/><small>Pascare</small></span>
  </div>;
  if(index===1)return <div className="stage-picture stage-picture-diagnosis" aria-hidden="true">
    <span className="stage-visual-piece stage-data-card"><Database size={17}/><small>Datos</small></span><span className="stage-visual-piece stage-data-card"><Network size={17}/><small>Flujos</small></span><span className="stage-visual-piece stage-scan"><ScanSearch size={23}/><b>Analizar</b></span><span className="stage-visual-piece stage-finding"><Lightbulb size={17}/><small>Hallazgo</small></span>
  </div>;
  if(index===2)return <div className="stage-picture stage-picture-proposal" aria-hidden="true">
    <div className="stage-visual-piece stage-document"><FileCheck2 size={19}/><span><i/><i/><i/></span></div><div className="stage-visual-piece stage-proposal-chips"><span>Alcance</span><span>Plazos</span><span>Inversión</span></div><span className="stage-visual-piece stage-approved"><ClipboardCheck size={17}/> Ruta clara</span>
  </div>;
  if(index===3)return <div className="stage-picture stage-picture-implementation" aria-hidden="true">
    <div className="stage-visual-piece stage-interface"><span><i/><i/><i/></span><div><b/><b/><b/></div><Monitor size={18}/></div><i className="stage-visual-piece stage-system-link link-data"/><span className="stage-visual-piece stage-system-node stage-database"><Database size={18}/><small>Datos</small></span><i className="stage-visual-piece stage-system-link link-user"/><span className="stage-visual-piece stage-system-node stage-user"><UserRoundCheck size={18}/><small>Usuarios</small></span>
  </div>;
  return <div className="stage-picture stage-picture-support" aria-hidden="true">
    <span className="stage-visual-piece stage-support-agent"><Headphones size={21}/><small>Soporte</small></span><div className="stage-visual-piece stage-live-chart"><BarChart3 size={18}/><span><i/><i/><i/><i/></span></div><span className="stage-visual-piece stage-happy-user"><UserRoundCheck size={21}/><small>Equipo activo</small></span>
  </div>;
}

export default function Nosotros(){
  return <>
    <PageHero
      variant="about"
      eyebrow="Quiénes somos"
      title="Tecnología cercana. Resultados serios."
      description="Pascare integra ingeniería, estrategia y acompañamiento para resolver problemas reales con soluciones que las personas sí pueden usar."
    />

    <section className="section light">
      <div className="container story-grid">
        <Reveal><span className="kicker">Nuestra razón de ser</span><h2>Hacemos que la tecnología trabaje a favor de tu organización.</h2></Reveal>
        <Reveal><p className="lead dark-lead">Nacimos para cerrar la distancia entre las necesidades del negocio y las decisiones técnicas. Escuchamos primero, explicamos con claridad y construimos con visión de largo plazo.</p><p>Trabajamos con empresas, instituciones y emprendimientos que necesitan modernizar procesos, fortalecer su infraestructura o convertir una idea innovadora en un proyecto ejecutable.</p></Reveal>
      </div>
    </section>

    <section className="section about-principles">
      <div className="container">
        <Reveal className="section-heading"><span className="kicker cyan">Nuestros principios</span><h2>La forma en que elegimos trabajar</h2></Reveal>
        <div className="principle-grid">
          {principles.map(({number,tone,Icon,title,description},index)=><Reveal key={number} delay={index*80} className={`principle-card principle-${tone}`} data-principle-index={index}>
            <div className="principle-card-top"><b>{number}</b><span className="principle-icon"><Icon size={25} strokeWidth={2.45}/></span></div>
            <h3>{title}</h3><p>{description}</p><i className="principle-progress"/>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="section light about-process-section">
      <div className="container">
        <Reveal className="section-heading"><span className="kicker">Nuestro proceso</span><h2>Del desafío a una solución operativa</h2></Reveal>
        <div className="about-process-layout">
          <div className="process-list about-process-list">
            {process.map(([number,title,description],index)=>{
              const Icon=processIcons[index];
              return <Reveal key={number} className="process-item about-process-item" data-process-index={index}>
                <b>{number}</b><span className="process-item-icon"><Icon size={20} strokeWidth={2.35}/></span><div><h3>{title}</h3><p>{description}</p></div>
              </Reveal>;
            })}
          </div>

          <Reveal className="about-process-visual" delay={120}>
            <div className="about-people" aria-hidden="true">
              <div className="about-person about-person-client"><span><UserRound size={22}/></span><small>Cliente</small></div>
              <div className="about-collaboration"><i/><span><UsersRound size={20}/><b>Trabajo conjunto</b></span><i/></div>
              <div className="about-person about-person-pascare"><span><Cpu size={22}/></span><small>Pascare</small></div>
            </div>
            <div className="about-stage-window" aria-live="polite">
              <div className="about-stage-head"><div><Workflow size={16}/><b>Ruta de proyecto</b></div><span>Proceso Pascare</span></div>
              <div className="about-stage-panels">
                {process.map(([number,title,description],index)=>{
                  const Icon=processIcons[index];
                  return <div key={number} className={`about-stage-panel${index===0?' is-active':''}`} data-stage-index={index}>
                    <span className="about-stage-icon"><Icon size={25} strokeWidth={2.35}/></span><small>Etapa {number} de 05</small><h3>{title}</h3><p>{description}</p><StageIllustration index={index}/><em>{index<4?'Avanzando hacia la siguiente etapa':'Solución en evolución continua'}</em>
                  </div>;
                })}
              </div>
              <div className="about-stage-track" aria-hidden="true">
                {process.map(([number],index)=><span key={number} className={`about-stage-dot${index===0?' is-active is-complete':''}`} data-stage-dot={index}><i>{number}</i></span>)}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="center-action"><Link className="button" href="/cotizacion">Comenzar una conversación →</Link></div>
      </div>
    </section>
  </>;
}
