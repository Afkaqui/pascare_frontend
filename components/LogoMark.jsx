export default function LogoMark({className=''}){
  return <span className={`brand-mark network-p-mark ${className}`.trim()} aria-hidden="true">
    <span className="p-network">
      <i className="p-link p-link-stem"/>
      <i className="p-link p-link-top"/>
      <i className="p-link p-link-curve"/>
      <i className="p-link p-link-middle"/>
      <b className="p-node p-node-a"/>
      <b className="p-node p-node-b"/>
   <b className="p-node p-node-c"/>
   <b className="p-node p-node-d"/>
   <b className="p-node p-node-e"/>
   <i className="p-light p-light-vertical"/>
   <i className="p-light p-light-curve"/>
  </span>
  </span>;
}
