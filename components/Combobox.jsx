'use client';

import {useEffect,useId,useMemo,useRef,useState} from 'react';
import {Check,ChevronDown} from 'lucide-react';

export default function Combobox({
  label,
  name,
  value='',
  options=[],
  placeholder='Selecciona una opción',
  onChange,
  required=false,
  disabled=false,
  invalid=false,
}){
  const generatedId=useId().replace(/:/g,'');
  const rootRef=useRef(null);
  const optionRefs=useRef([]);
  const searchRef=useRef('');
  const searchTimerRef=useRef(null);
  const [open,setOpen]=useState(false);
  const [activeIndex,setActiveIndex]=useState(0);

  const normalizedOptions=useMemo(()=>options.map(option=>typeof option==='string'?{value:option,label:option}:option),[options]);
  const selectedIndex=normalizedOptions.findIndex(option=>option.value===value);
  const selected=selectedIndex>=0?normalizedOptions[selectedIndex]:null;
  const buttonId=`${generatedId}-button`;
  const labelId=`${generatedId}-label`;
  const listboxId=`${generatedId}-listbox`;

  useEffect(()=>{
    const closeOutside=event=>{if(rootRef.current&&!rootRef.current.contains(event.target))setOpen(false)};
    document.addEventListener('pointerdown',closeOutside);
    return()=>document.removeEventListener('pointerdown',closeOutside);
  },[]);

  useEffect(()=>()=>window.clearTimeout(searchTimerRef.current),[]);

  useEffect(()=>{
    if(open)optionRefs.current[activeIndex]?.scrollIntoView({block:'nearest'});
  },[activeIndex,open]);

  const showList=direction=>{
    if(disabled)return;
    const fallback=selectedIndex>=0?selectedIndex:0;
    setActiveIndex(current=>{
      if(!open)return direction==='up'?Math.max(0,normalizedOptions.length-1):fallback;
      return current;
    });
    setOpen(true);
  };

  const selectOption=option=>{
    if(!option||option.disabled)return;
    onChange?.({target:{name,value:option.value}});
    setOpen(false);
    requestAnimationFrame(()=>document.getElementById(buttonId)?.focus());
  };

  const moveActive=step=>{
    if(!normalizedOptions.length)return;
    setActiveIndex(current=>{
      let next=current;
      do{next=(next+step+normalizedOptions.length)%normalizedOptions.length}while(normalizedOptions[next]?.disabled&&next!==current);
      return next;
    });
  };

  const handleKeyDown=event=>{
    if(disabled)return;
    if(event.key==='ArrowDown'){event.preventDefault();if(!open)showList('down');else moveActive(1);return}
    if(event.key==='ArrowUp'){event.preventDefault();if(!open)showList('up');else moveActive(-1);return}
    if(event.key==='Home'&&open){event.preventDefault();setActiveIndex(0);return}
    if(event.key==='End'&&open){event.preventDefault();setActiveIndex(Math.max(0,normalizedOptions.length-1));return}
    if((event.key==='Enter'||event.key===' ')&&open){event.preventDefault();selectOption(normalizedOptions[activeIndex]);return}
    if(event.key==='Escape'&&open){event.preventDefault();setOpen(false);return}
    if(event.key.length===1&&!event.ctrlKey&&!event.metaKey&&!event.altKey){
      searchRef.current+=event.key.toLocaleLowerCase('es');
      window.clearTimeout(searchTimerRef.current);
      searchTimerRef.current=window.setTimeout(()=>{searchRef.current=''},600);
      const match=normalizedOptions.findIndex(option=>option.label.toLocaleLowerCase('es').startsWith(searchRef.current));
      if(match>=0){event.preventDefault();setActiveIndex(match);setOpen(true)}
    }
  };

  return <div className={`combo-field${invalid?' has-error':''}`} ref={rootRef} data-open={open||undefined}>
    <label id={labelId} htmlFor={buttonId}>{label}{required&&' *'}</label>
    <input type="hidden" name={name} value={value}/>
    <button
      id={buttonId}
      type="button"
      className="combobox-trigger"
      role="combobox"
      aria-labelledby={`${labelId} ${buttonId}`}
      aria-controls={listboxId}
      aria-expanded={open}
      aria-haspopup="listbox"
      aria-activedescendant={open?`${generatedId}-option-${activeIndex}`:undefined}
      aria-required={required}
      aria-invalid={invalid}
      disabled={disabled}
      onClick={()=>open?setOpen(false):showList('down')}
      onKeyDown={handleKeyDown}
    >
      <span className={selected?'':'is-placeholder'}>{selected?.label||placeholder}</span>
      <ChevronDown className="combobox-chevron" size={18} strokeWidth={2.4}/>
    </button>
    {open&&<ul id={listboxId} className="combobox-menu" role="listbox" aria-labelledby={labelId}>
      {normalizedOptions.map((option,index)=><li
        ref={element=>{optionRefs.current[index]=element}}
        id={`${generatedId}-option-${index}`}
        key={`${option.value}-${index}`}
        className={`combobox-option${index===activeIndex?' is-active':''}${option.value===value?' is-selected':''}${option.disabled?' is-disabled':''}`}
        role="option"
        aria-selected={option.value===value}
        aria-disabled={option.disabled||undefined}
        onPointerMove={()=>!option.disabled&&setActiveIndex(index)}
        onPointerDown={event=>event.preventDefault()}
        onClick={()=>selectOption(option)}
      >
        <span>{option.label}</span>{option.value===value&&<Check size={16} strokeWidth={2.8}/>} 
      </li>)}
    </ul>}
  </div>;
}
