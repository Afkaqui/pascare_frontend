'use client';

import {useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {animate,stagger} from 'animejs';
import {
  Activity,
  BarChart3,
  CheckCircle2,
  Cloud,
  DatabaseBackup,
  FileBarChart,
  KanbanSquare,
  Laptop,
  Network,
  Maximize2,
  Router,
  Server,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Wifi,
  X,
} from 'lucide-react';

function SceneShell({label,icon:Icon,children,className=''}){
  return <div className={`home-showcase-scene ${className}`.trim()} data-home-scene>
    <div className="home-scene-head home-ui-piece"><span><Icon size={13}/>{label}</span><em><i/> En vivo</em></div>
    {children}
  </div>;
}

function SoftwareScenes(){
  return <>
    <SceneShell label="Panel operativo" icon={Activity} className="is-active software-panel">
      <div className="home-kpis home-ui-piece"><span><small>Solicitudes</small><b>128</b><em>+12 hoy</em></span><span><small>En proceso</small><b>34</b><em>8 prioritarias</em></span><span><small>Resueltas</small><b>94</b><em>73.4%</em></span></div>
      <div className="home-request-list home-ui-piece"><div><i className="violet"/><span>Validación de servicio</span><b>En curso</b></div><div><i className="cyan"/><span>Actualización de datos</span><b>Listo</b></div><div><i className="amber"/><span>Reporte mensual</span><b>Revisión</b></div></div>
      <div className="home-dashboard-lower">
        <div className="home-performance home-ui-piece"><span><b>Rendimiento del equipo</b><small>Últimos 7 días</small></span><div>{[48,64,55,78,69,91,83,96].map((height,index)=><i className="home-chart-column" key={index} style={{height:`${height}%`}}><em/></i>)}</div><small>Lun&nbsp;&nbsp; Mar&nbsp;&nbsp; Mié&nbsp;&nbsp; Jue&nbsp;&nbsp; Vie&nbsp;&nbsp; Sáb&nbsp;&nbsp; Dom</small></div>
        <div className="home-activity-stream home-ui-piece"><span><b>Actividad reciente</b><small>Actualización automática</small></span><div><i className="done"><CheckCircle2 size={11}/></i><p><b>Solicitud validada</b><small>Equipo de operaciones · ahora</small></p></div><div><i><UsersRound size={11}/></i><p><b>Nuevo responsable</b><small>Asignación completada · 4 min</small></p></div><div><i className="report"><BarChart3 size={11}/></i><p><b>Reporte disponible</b><small>Indicadores de julio · 12 min</small></p></div></div>
      </div>
    </SceneShell>
    <SceneShell label="Flujo de trabajo" icon={KanbanSquare} className="software-kanban">
      <div className="home-kanban-toolbar home-ui-piece"><span><b>Proyecto transformación digital</b><small>12 tareas · 3 responsables</small></span><div><i>MP</i><i>JR</i><i>AL</i><button>Filtrar</button></div></div>
      <div className="home-kanban home-ui-piece">
        <section><header><span>Pendiente</span><b>3</b></header><article><em className="priority amber">Media</em><strong>Actualizar inventario</strong><small>Datos · 24 Jul</small><footer><i>MP</i><span>2/4</span></footer></article><article><em className="priority violet">Diseño</em><strong>Revisar solicitud</strong><small>Producto · 26 Jul</small><footer><i>JR</i><span>1/3</span></footer></article></section>
        <section><header><span>En proceso</span><b>2</b></header><article className="active home-moving-task"><em className="priority cyan">Prioridad alta</em><strong>Integración de datos</strong><small>API · Hoy</small><div className="task-progress"><i/></div><footer><i>AL</i><span>76%</span></footer></article><article><em className="priority blue">Calidad</em><strong>Control de calidad</strong><small>Pruebas · Mañana</small><footer><i>MP</i><span>4/6</span></footer></article></section>
        <section><header><span>Completado</span><b>8</b></header><article className="completed"><em className="priority green">Aprobado</em><strong>Panel de indicadores</strong><small>Analítica · 22 Jul</small><footer><i>JR</i><CheckCircle2 size={10}/></footer></article><article className="completed"><em className="priority green">Aprobado</em><strong>Permisos de equipo</strong><small>Seguridad · 21 Jul</small><footer><i>AL</i><CheckCircle2 size={10}/></footer></article></section>
      </div>
      <div className="home-automation home-ui-piece"><span><Activity size={12}/><b>Automatización activa</b><small>Los estados avanzan y notifican al equipo en tiempo real.</small></span><em><i className="home-live-bar"/></em><strong>76%</strong></div>
    </SceneShell>
    <SceneShell label="Indicadores y reportes" icon={FileBarChart} className="software-report">
      <div className="home-report-kpis home-ui-piece"><span><small>Productividad</small><b>+18.4%</b><em>↗ frente al mes anterior</em></span><span><small>Tiempo promedio</small><b>3.2 h</b><em>↓ 42 min</em></span><span><small>Procesos cerrados</small><b>1,284</b><em>94 esta semana</em></span></div>
      <div className="home-report-grid"><div className="home-line-chart home-ui-piece"><header><span><b>Productividad semanal</b><small>Solicitudes completadas por día</small></span><em><i/> Actual <i/> Objetivo</em></header><div className="home-chart-path"><i/><i/><i/><i/><i/><i/><i/></div><span>L M M J V S D</span></div><div className="home-donut-card home-ui-piece"><header><b>Cumplimiento</b><small>Distribución por estado</small></header><div className="home-donut"><b>86%</b></div><div className="home-donut-legend"><span><i/> Completado <b>86%</b></span><span><i/> En curso <b>9%</b></span><span><i/> Pendiente <b>5%</b></span></div></div></div>
      <div className="home-report-footer home-ui-piece"><span><FileBarChart size={12}/><b>Informe ejecutivo</b><small>Generado automáticamente</small></span><i/><em>PDF listo</em></div>
    </SceneShell>
  </>;
}

function InfrastructureScenes(){
  return <>
    <SceneShell label="Centro de monitoreo" icon={Server} className="is-active infra-servers">
      <div className="home-server-list home-ui-piece"><span><Server size={15}/><b>Servidor principal</b><em>Operativo</em></span><span><Cloud size={15}/><b>Nube privada</b><em>Sincronizada</em></span><span><DatabaseBackup size={15}/><b>Respaldo</b><em>Verificado</em></span></div>
    </SceneShell>
    <SceneShell label="Respaldo automatizado" icon={DatabaseBackup} className="infra-backup">
      <div className="home-backup-flow home-ui-piece"><span><Server size={16}/><small>Principal</small></span><i><b/><u className="home-flow-token"/></i><span><Cloud size={16}/><small>Nube</small></span><i><b/><u className="home-flow-token"/></i><span><DatabaseBackup size={16}/><small>Respaldo</small></span></div>
      <div className="home-backup-status home-ui-piece"><CheckCircle2 size={15}/><span><b>Integridad validada</b><small>Última copia hace 8 min</small></span></div>
    </SceneShell>
    <SceneShell label="Recursos de infraestructura" icon={Activity} className="infra-resources">
      <div className="home-resource-list"><span className="home-ui-piece"><small>CPU</small><i><b style={{width:'46%'}}/></i><em>46%</em></span><span className="home-ui-piece"><small>RAM</small><i><b style={{width:'68%'}}/></i><em>68%</em></span><span className="home-ui-piece"><small>Storage</small><i><b style={{width:'54%'}}/></i><em>54%</em></span></div>
    </SceneShell>
  </>;
}

function TopologyNode({className,icon:Icon,label,status}){
  return <span className={`home-net-node ${className}`}><Icon size={12}/><small>{label}</small>{status&&<em>{status}</em>}</span>;
}

function MeshNode({className,icon:Icon,label}){
  return <span className={`mesh-node ${className}`}><Icon size={12}/><small>{label}</small></span>;
}

function NetworkScenes(){
  return <>
    <SceneShell label="Topología estrella" icon={Network} className="is-active network-star">
      <div className="home-topology home-ui-piece">
        <i className="net-line line-a"/><i className="net-line line-b"/><i className="net-line line-c"/><i className="net-line line-d"/><i className="net-line line-e"/><i className="net-line line-f"/>
        <b className="home-network-packet packet-a" data-packet-x="-.40" data-packet-y="0"/><b className="home-network-packet packet-b" data-packet-x="-.25" data-packet-y="-.35"/><b className="home-network-packet packet-c" data-packet-x="-.25" data-packet-y=".35"/><b className="home-network-packet packet-d" data-packet-x=".40" data-packet-y="0"/><b className="home-network-packet packet-e" data-packet-x=".25" data-packet-y="-.35"/><b className="home-network-packet packet-f" data-packet-x=".25" data-packet-y=".35"/>
        <TopologyNode className="net-core" icon={Router} label="Core" status="Activo"/>
        <TopologyNode className="net-a" icon={Wifi} label="Wi-Fi" status="Online"/>
        <TopologyNode className="net-b" icon={Server} label="Datos" status="Seguro"/>
        <TopologyNode className="net-c" icon={Laptop} label="Oficina" status="24 equipos"/>
        <TopologyNode className="net-d" icon={Smartphone} label="Móvil" status="12 usuarios"/>
        <TopologyNode className="net-e" icon={Cloud} label="Nube" status="Sincronizada"/>
        <TopologyNode className="net-f" icon={ShieldCheck} label="Seguridad" status="Protegida"/>
        <strong className="topology-caption"><i/>6 enlaces activos</strong>
      </div>
    </SceneShell>
    <SceneShell label="Topología en malla" icon={Wifi} className="network-mesh">
      <div className="home-mesh home-ui-piece">
        <i className="mesh-line ml-1"/><i className="mesh-line ml-2"/><i className="mesh-line ml-3"/><i className="mesh-line ml-4"/><i className="mesh-line ml-5"/><i className="mesh-line ml-6"/>
        <b className="home-network-packet mesh-packet" data-packet-x=".28" data-packet-y="-.25"/>
        <MeshNode className="mn-1" icon={Wifi} label="Acceso"/><MeshNode className="mn-2" icon={Router} label="Nodo A"/><MeshNode className="mn-3" icon={ShieldCheck} label="Seguro"/><MeshNode className="mn-4" icon={Server} label="Datos"/><MeshNode className="mn-5" icon={Laptop} label="Control"/>
        <strong>Conexión redundante</strong>
      </div>
    </SceneShell>
    <SceneShell label="Red segura y segmentada" icon={ShieldCheck} className="network-segments">
      <div className="home-segments home-ui-piece"><span className="segment-users"><UsersRound size={15}/><b>Administración</b><small>VLAN 10</small></span><i/><span className="segment-firewall"><ShieldCheck size={18}/><small>Firewall</small></span><i/><span className="segment-tech"><Laptop size={15}/><b>Operaciones</b><small>VLAN 20</small></span></div>
    </SceneShell>
  </>;
}

function ShowcaseFrame({project,index,modal=false,onOpen,stageRef}){
  const Scenes=[SoftwareScenes,InfrastructureScenes,NetworkScenes][index];
  const interactive=!modal;
  return <div ref={stageRef} className={`home-project-showcase home-showcase-${index+1}${modal?' modal-project-showcase':''}`} role={interactive?'button':undefined} tabIndex={interactive?0:undefined} aria-label={interactive?`Abrir animación de ${project.title}`:undefined} aria-haspopup={interactive?'dialog':undefined} onClick={interactive?onOpen:undefined} onKeyDown={interactive?event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();onOpen()}}:undefined}>
    <div className="home-showcase-window">
      <div className="home-showcase-bar"><span><i/><i/><i/></span><b>{index===0?'Pascare Flow':index===1?'Pascare Continuity':'Pascare Network'}</b><em>● Seguro</em></div>
      <div className="home-showcase-scenes"><Scenes/></div>
      <div className="home-showcase-dots"><i className="is-active"/><i/><i/></div>
    </div>
    <div className="home-project-metric"><small>Resultado</small><b>{project.metric}</b><span>{project.metricLabel}</span></div>
    {interactive&&<span className="home-showcase-expand"><Maximize2 size={12}/> Ver animación</span>}
  </div>;
}

function ShowcaseModal({project,index,onClose}){
  const stageRef=useRef(null);
  const closeRef=useRef(null);
  const [sceneIndex,setSceneIndex]=useState(0);

  useEffect(()=>{
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    closeRef.current?.focus();
    const handleKey=event=>{if(event.key==='Escape')onClose()};
    window.addEventListener('keydown',handleKey);
    return()=>{document.body.style.overflow=previous;window.removeEventListener('keydown',handleKey)};
  },[onClose]);

  useEffect(()=>{
    const id=window.setInterval(()=>setSceneIndex(current=>(current+1)%3),4800);
    return()=>window.clearInterval(id);
  },[]);

  useEffect(()=>{
    const stage=stageRef.current;
    if(!stage)return;
    const animations=[];
    const run=(target,params)=>{const animation=animate(target,params);animations.push(animation);return animation};
    const scenes=[...stage.querySelectorAll('[data-home-scene]')];
    const dots=[...stage.querySelectorAll('.home-showcase-dots i')];
    scenes.forEach((scene,itemIndex)=>{
      const active=itemIndex===sceneIndex;
      scene.classList.toggle('is-active',active);
      if(active){
        run(scene,{opacity:[0,1],x:[24,0],scale:[.975,1],duration:720,ease:'outExpo'});
        const pieces=scene.querySelectorAll('.home-ui-piece');
        if(pieces.length)run(pieces,{opacity:[0,1],y:[12,0],delay:stagger(90),duration:620,ease:'outBack'});
        const bars=scene.querySelectorAll('.home-chart-column,.home-chart-path i,.continuity-bars i,.traffic-bars i');
        if(bars.length)run(bars,{scaleY:[0,1],transformOrigin:'bottom',delay:stagger(65),duration:760,ease:'outExpo'});
        const nodes=scene.querySelectorAll('.home-net-node,.mesh-node');
        if(nodes.length)run(nodes,{opacity:[0,1],delay:stagger(95),duration:580,ease:'outQuad'});
        scene.querySelectorAll('.home-network-packet').forEach((packet,packetIndex)=>{const surface=packet.parentElement;const x=(surface?.clientWidth||stage.clientWidth)*Number(packet.dataset.packetX||0);const y=(surface?.clientHeight||stage.clientHeight)*Number(packet.dataset.packetY||0);run(packet,{x:[0,x],y:[0,y],opacity:[0,1,1,0],delay:packetIndex*420,duration:1850,loop:true,ease:'inOutSine'})});
      }else run(scene,{opacity:0,x:-12,duration:260,ease:'inQuad'});
    });
    dots.forEach((dot,dotIndex)=>dot.classList.toggle('is-active',dotIndex===sceneIndex));
    return()=>animations.forEach(animation=>animation.cancel?.());
  },[sceneIndex]);

  return <div className="showcase-modal-backdrop" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)onClose()}}>
    <section className={`showcase-modal-panel showcase-modal-panel-${index+1}`} role="dialog" aria-modal="true" aria-labelledby={`showcase-modal-title-${index}`}>
      <header><div><small>Demostración interactiva</small><h2 id={`showcase-modal-title-${index}`}>{project.title}</h2></div><span>{String(sceneIndex+1).padStart(2,'0')} / 03</span><button ref={closeRef} type="button" onClick={onClose} aria-label="Cerrar animación"><X size={20}/></button></header>
      <div className="showcase-modal-body"><ShowcaseFrame project={project} index={index} modal stageRef={stageRef}/></div>
    </section>
  </div>;
}

export default function HomeProjectShowcase({project,index}){
  const [open,setOpen]=useState(false);
  const [mounted,setMounted]=useState(false);
  useEffect(()=>setMounted(true),[]);
  return <><ShowcaseFrame project={project} index={index} onOpen={()=>setOpen(true)}/>{mounted&&open&&createPortal(<ShowcaseModal project={project} index={index} onClose={()=>setOpen(false)}/>,document.body)}</>;
}
