import {
  Activity,
  BarChart3,
  Bell,
  CheckCircle2,
  ClipboardList,
  CloudCog,
  DatabaseBackup,
  HardDrive,
  LayoutDashboard,
  Monitor,
  Network,
  Printer,
  Router,
  Server,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Wifi,
} from 'lucide-react';

function OperationsInterface(){
  return <div className="case-interface ops-interface">
    <div className="case-app-top"><div><span className="case-app-logo">P</span><b>Control operativo</b></div><span className="case-live"><i/> En línea</span></div>
    <div className="case-app-body">
      <aside className="case-app-sidebar"><span className="active"><LayoutDashboard size={14}/></span><span><ClipboardList size={14}/></span><span><UsersRound size={14}/></span><span><BarChart3 size={14}/></span></aside>
      <div className="ops-content">
        <div className="ops-heading case-animate"><div><small>Panel general</small><b>Operación de hoy</b></div><span className="ops-action">+ Nueva solicitud</span></div>
        <div className="ops-kpis">
          <div className="case-animate"><small>Solicitudes</small><b>128</b><em>+12 hoy</em></div><div className="case-animate"><small>En proceso</small><b>34</b><em>8 prioritarias</em></div><div className="case-animate"><small>Completadas</small><b>94</b><em>73.4%</em></div>
        </div>
        <div className="ops-table case-animate"><div className="ops-table-head"><span>Solicitud</span><span>Responsable</span><span>Estado</span></div><div className="ops-row case-cycle-item"><span><i className="row-violet"/>Actualización de datos</span><span>Equipo A</span><b className="status-progress">En proceso</b></div><div className="ops-row case-cycle-item"><span><i className="row-cyan"/>Validación de servicio</span><span>Equipo B</span><b className="status-done">Completado</b></div><div className="ops-row case-cycle-item"><span><i className="row-amber"/>Reporte mensual</span><span>Administración</span><b className="status-review">Revisión</b></div></div>
      </div>
    </div>
  </div>;
}

function ContinuityInterface(){
  return <div className="case-interface continuity-interface">
    <div className="continuity-top"><div><CloudCog size={17}/><b>Continuity Center</b></div><span className="case-live"><i/> Monitoreo activo</span></div>
    <div className="continuity-summary case-animate"><div><small>Estado general</small><b>Todos los sistemas operativos</b></div><span><CheckCircle2 size={18}/> Protegido</span></div>
    <div className="server-grid">
      <div className="server-card case-cycle-item"><span><Server size={18}/></span><div><small>Servidor principal</small><b>Operativo</b></div><i/></div>
      <div className="server-card case-cycle-item"><span><CloudCog size={18}/></span><div><small>Nube privada</small><b>Sincronizada</b></div><i/></div>
      <div className="server-card case-cycle-item"><span><DatabaseBackup size={18}/></span><div><small>Respaldo</small><b>Verificado</b></div><i/></div>
    </div>
    <div className="continuity-lower">
      <div className="backup-card case-animate"><div className="backup-ring"><span>96<small>%</small></span></div><div><small>Último respaldo</small><b>Completado hace 8 min</b><em><ShieldCheck size={13}/> Integridad validada</em></div></div>
      <div className="monitor-card case-animate"><div><span><Activity size={14}/> Disponibilidad</span><small>Últimas 12 h</small></div><div className="continuity-bars">{[42,58,51,70,64,82,76,91,84,96].map((height,index)=><i key={index} style={{height:`${height}%`}}/>)}</div></div>
    </div>
  </div>;
}

function NetworkInterface(){
  return <div className="case-interface network-interface">
    <div className="network-top"><div><Network size={17}/><b>Network Control</b></div><span className="case-live"><i/> Red estable</span></div>
    <div className="network-body">
      <div className="network-map case-animate">
        <div className="network-grid"/>
        <i className="network-path path-n1"><b/></i><i className="network-path path-n2"><b/></i><i className="network-path path-n3"><b/></i><i className="network-path path-n4"><b/></i><i className="network-path path-n5"><b/></i>
        <span className="network-node network-hub"><Router size={22}/><small>Core</small><b className="network-signal"/></span>
        <span className="network-node node-n1 case-cycle-item"><Wifi size={16}/><small>Wi-Fi</small></span><span className="network-node node-n2 case-cycle-item"><Server size={16}/><small>Servidor</small></span><span className="network-node node-n3 case-cycle-item"><Monitor size={16}/><small>Oficina</small></span><span className="network-node node-n4 case-cycle-item"><Smartphone size={16}/><small>Móviles</small></span><span className="network-node node-n5 case-cycle-item"><Printer size={16}/><small>Equipos</small></span>
      </div>
      <aside className="traffic-panel case-animate"><div className="traffic-title"><span><Activity size={13}/> Tráfico</span><small>En vivo</small></div><div className="traffic-value"><b>1.8</b><small>Gbps</small></div><div className="traffic-bars">{[35,62,48,78,59,88,70,96].map((height,index)=><i key={index} style={{height:`${height}%`}}/>)}</div><div className="traffic-status"><span><HardDrive size={12}/> 48 dispositivos</span><span><ShieldCheck size={12}/> Sin alertas</span></div></aside>
    </div>
  </div>;
}

export default function ProjectCaseVisual({project,index}){
  const Interface=[OperationsInterface,ContinuityInterface,NetworkInterface][index];
  return <div className="case-visual-wrap">
    <div className={`case-visual project-case-visual case-${index+1}`} aria-hidden="true">
      <span className="case-visual-tag">{project.tag}</span><Interface/>
      <span className="case-corner-icon" aria-hidden="true">{index===0?<ClipboardList size={17}/>:index===1?<Bell size={17}/>:<Wifi size={17}/>}</span>
    </div>
    <div className="case-metric-badge"><small>Resultado</small><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
  </div>;
}
