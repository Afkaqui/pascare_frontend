'use client';

import {useState} from 'react';
import Combobox from './Combobox';
import {apiUrl} from '../lib/api';

const initial={name:'',company:'',email:'',phone:'',service:'',budget:'',timeline:'',message:'',website:''};
const serviceOptions=['Desarrollo de software','Redes y conectividad','Infraestructura TI','Ciberseguridad','Soporte gestionado','Consultoría tecnológica','Innovación e I+D+i+e'];
const budgetOptions=[
  {value:'',label:'Prefiero conversar'},
  'Hasta S/ 2,000',
  'S/ 2,000 – 5,000',
  'S/ 5,000 – 15,000',
  'Más de S/ 15,000',
];
const timelineOptions=[
  {value:'',label:'Aún no lo sé'},
  'Lo antes posible',
  'En 1 mes',
  'En 2 a 3 meses',
  'Más adelante',
];

export default function QuoteForm(){
  const [form,setForm]=useState(initial);
  const [state,setState]=useState({status:'idle',message:''});
  const change=event=>{
    setForm(current=>({...current,[event.target.name]:event.target.value}));
    if(state.status==='error')setState({status:'idle',message:''});
  };

  async function submit(event){
    event.preventDefault();
    if(!form.service){setState({status:'error',message:'Selecciona un servicio de interés antes de enviar.'});return}
    setState({status:'loading',message:'Enviando solicitud…'});
    try{
      const response=await fetch(apiUrl('/quotes'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      const data=await response.json();
      if(!response.ok)throw new Error(data.message||data.error||'No pudimos registrar la solicitud.');
      setState({status:'success',message:`Solicitud ${data.reference} registrada. Te contactaremos pronto.`});
      setForm(initial);
    }catch(error){setState({status:'error',message:error.message})}
  }

  return <form className="professional-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Nombre completo *<input name="name" value={form.name} onChange={change} required minLength="2" placeholder="Tu nombre"/></label>
      <label>Empresa u organización<input name="company" value={form.company} onChange={change} placeholder="Nombre de la empresa"/></label>
      <label>Correo corporativo *<input type="email" name="email" value={form.email} onChange={change} required placeholder="nombre@empresa.com"/></label>
      <label>Teléfono<input name="phone" value={form.phone} onChange={change} placeholder="+51 900 000 000"/></label>
      <Combobox label="Servicio de interés" name="service" value={form.service} options={serviceOptions} onChange={change} required invalid={state.status==='error'&&!form.service}/>
      <Combobox label="Inversión estimada" name="budget" value={form.budget} options={budgetOptions} onChange={change}/>
      <Combobox label="¿Cuándo deseas comenzar?" name="timeline" value={form.timeline} options={timelineOptions} onChange={change}/>
      <label className="honeypot" aria-hidden="true">Sitio web<input name="website" value={form.website} onChange={change} tabIndex="-1" autoComplete="off"/></label>
      <label className="full-field">Cuéntanos sobre el proyecto *<textarea name="message" value={form.message} onChange={change} required minLength="20" rows="6" placeholder="Describe el problema, quiénes usarán la solución y qué resultado esperas conseguir."/></label>
    </div>
    <div className="form-footer"><p>Al enviar aceptas que te contactemos respecto a esta solicitud.</p><button className="button" disabled={state.status==='loading'} type="submit">{state.status==='loading'?'Enviando…':'Enviar →'}</button></div>
    {state.message&&<div role="status" className={`form-status ${state.status}`}>{state.message}</div>}
  </form>;
}
