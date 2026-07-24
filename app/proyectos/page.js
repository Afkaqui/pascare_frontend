import Link from 'next/link';
import PageHero from '../../components/PageHero';
import ProjectCaseVisual from '../../components/ProjectCaseVisual';
import Reveal from '../../components/Reveal';
import {projects} from '../../lib/content';

export const metadata={title:'Proyectos'};

export default function Proyectos(){
  return <>
    <PageHero variant="projects" eyebrow="Experiencia aplicada" title="Cada proyecto comienza con un problema bien entendido." description="Estos escenarios representan el tipo de impacto que construimos junto a nuestros clientes."/>
    <section className="section light">
      <div className="container case-list">
        {projects.map((project,index)=><Reveal className="case-study" key={project.title}>
          <ProjectCaseVisual project={project} index={index}/>
          <div className="case-copy"><span className="kicker">Caso 0{index+1}</span><h2>{project.title}</h2><p>{project.description}</p><dl><div><dt>Reto</dt><dd>Procesos fragmentados y poca visibilidad para tomar decisiones.</dd></div><div><dt>Enfoque</dt><dd>Diagnóstico, diseño de solución, implementación y acompañamiento.</dd></div><div><dt>Resultado</dt><dd>{project.metric} en {project.metricLabel}, con una operación más predecible.</dd></div></dl></div>
        </Reveal>)}
      </div>
    </section>
    <section className="section cta-section"><div className="container"><Reveal className="cta-panel project-cta"><i className="project-cta-glow"/><div><h2>¿Tienes un desafío parecido?</h2><p>Conversemos sobre el resultado que quieres conseguir.</p></div><Link className="button" href="/cotizacion">Evaluar mi proyecto →</Link></Reveal></div></section>
  </>;
}
