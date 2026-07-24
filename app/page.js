import Link from 'next/link';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import HomeProjectShowcase from '../components/HomeProjectShowcase';
import { services, projects } from '../lib/content';

export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="orb orb-one" /><div className="orb orb-two" /><div className="grid-overlay" />
        <div className="container hero-layout">
          <Reveal className="hero-copy">
            <span className="eyebrow"><i /> Tecnología para organizaciones que avanzan</span>
            <h1>Convertimos desafíos en <em>soluciones digitales.</em></h1>
            <p>Diseñamos software, conectividad e infraestructura que simplifican tu operación y preparan tu empresa para crecer.</p>
            <div className="actions"><Link className="button" href="/cotizacion">Cuéntanos tu proyecto <span>→</span></Link><Link className="button ghost" href="/servicios">Explorar servicios</Link></div>
            <div className="trust-row"><span>✓ Diagnóstico inicial</span><span>✓ Propuesta clara</span><span>✓ Soporte cercano</span></div>
          </Reveal>
          <Reveal className="hero-visual" delay={160}>
            <div className="command-card">
              <div className="window-bar"><span /><span /><span /><b>Pascare Control</b></div>
              <div className="command-grid">
                <aside><div className="mini-logo">P</div><i className="active" /><i /><i /><i /></aside>
                <div className="command-main">
                  <div className="command-head"><div><small>Estado general</small><strong>Todo bajo control</strong></div><span className="live">● En línea</span></div>
                  <div className="metric-grid"><div><small>Disponibilidad</small><b>99.9%</b><em>+0.4%</em></div><div><small>Procesos</small><b>1,284</b><em>+12%</em></div><div><small>Incidentes</small><b>03</b><em className="neutral">Estable</em></div></div>
                  <div className="chart"><span>Rendimiento</span><div className="chart-bars">{[42,64,52,79,68,91,76,96,82,100].map((h,i)=><i key={i} data-value={`${h}%`} style={{height:`${h}%`}} />)}</div></div>
                  <div className="activity"><span>Actividad reciente</span><div><i className="ok" /> Respaldo automático <b>Completado</b></div><div><i className="info" /> Actualización de red <b>En progreso</b></div></div>
                </div>
              </div>
            </div>
            <div className="float-card float-a"><span>↗</span><div><b>+32%</b><small>Eficiencia operativa</small></div></div>
            <div className="float-card float-b"><span>✓</span><div><b>Proyecto entregado</b><small>Antes del cronograma</small></div></div>
          </Reveal>
        </div>
      </section>

      <section className="number-band" aria-label="Indicadores de Pascare">
        <div className="container numbers">
          <div className="home-stat">
            <b aria-label="7 áreas de especialidad"><span className="stat-number" data-stat-target="7">7</span></b>
            <span>áreas de especialidad</span>
          </div>
          <div className="home-stat">
            <b aria-label="Visión tecnológica de 360 grados"><span className="stat-number" data-stat-target="360" data-stat-suffix="°">360°</span></b>
            <span>visión tecnológica</span>
          </div>
          <div className="home-stat">
            <b aria-label="Monitoreo disponible 24 horas, 7 días"><span className="stat-number" data-stat-target="24" data-stat-suffix="/7">24/7</span></b>
            <span>monitoreo disponible</span>
          </div>
          <div className="home-stat">
            <b aria-label="100 por ciento soluciones a medida"><span className="stat-number" data-stat-target="100" data-stat-suffix="%">100%</span></b>
            <span>soluciones a medida</span>
          </div>
        </div>
      </section>

      <section className="section light"><div className="container">
        <Reveal className="section-heading split"><div><span className="kicker">Lo que hacemos</span><h2>Un solo aliado para toda tu tecnología</h2></div><p>Integramos estrategia, diseño e ingeniería para que no tengas que coordinar múltiples proveedores.</p></Reveal>
        <div className="service-grid">{services.slice(0,6).map((service,index)=><ServiceCard key={service.slug} service={service} index={index} />)}</div>
        <div className="center-action"><Link className="text-link" href="/servicios">Conoce todas nuestras capacidades →</Link></div>
      </div></section>

      <section className="section dark-feature"><div className="container feature-layout">
        <Reveal><span className="kicker cyan">Nuestra diferencia</span><h2>Tecnología con criterio de negocio.</h2><p className="lead">No vendemos herramientas por vender. Primero entendemos tu operación, luego construimos exactamente lo que aporta valor.</p><Link className="button light-button" href="/nosotros">Conoce a Pascare</Link></Reveal>
        <div className="value-list"><Reveal className="value-item" delay={50}><span>01</span><div><h3>Visión integral</h3><p>Software, redes e infraestructura diseñados como un solo ecosistema.</p></div></Reveal><Reveal className="value-item" delay={100}><span>02</span><div><h3>Comunicación clara</h3><p>Decisiones técnicas explicadas sin complicaciones ni letra pequeña.</p></div></Reveal><Reveal className="value-item" delay={150}><span>03</span><div><h3>Escalabilidad real</h3><p>Soluciones preparadas para acompañar la siguiente etapa de tu organización.</p></div></Reveal></div>
      </div></section>

      <section className="section light"><div className="container">
        <Reveal className="section-heading"><span className="kicker">Trabajo seleccionado</span><h2>Soluciones que se sienten en la operación</h2><p>Casos de uso que muestran cómo combinamos producto, datos e infraestructura.</p></Reveal>
        <div className="project-grid">{projects.map((project,index)=><Reveal className={`project-card project-${index+1}`} delay={index*80} key={project.title}><div className="project-tag">{project.tag}</div><HomeProjectShowcase project={project} index={index}/><div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p></div></Reveal>)}</div>
      </div></section>

      <section className="section cta-section"><div className="container"><Reveal className="cta-panel"><div><span className="kicker cyan">Empecemos</span><h2>Tu próximo proyecto puede comenzar hoy.</h2><p>Cuéntanos qué necesitas. Te responderemos con una ruta clara, sin compromiso.</p></div><div className="actions"><Link className="button" href="/cotizacion">Solicitar cotización <span>→</span></Link><Link className="button ghost-dark" href="/contacto">Hablar con nosotros</Link></div></Reveal></div></section>
    </>
  );
}
