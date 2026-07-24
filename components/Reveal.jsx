'use client';
export default function Reveal({children,className='',delay=0,...props}){return <div className={`reveal ${className}`} data-delay={delay} {...props}>{children}</div>}
