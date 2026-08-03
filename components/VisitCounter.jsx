'use client';
import { useEffect, useState } from 'react';
import { apiUrl } from '../lib/api';

// Muestra el total de visitas del sitio en el footer.
export default function VisitCounter() {
  const [total, setTotal] = useState(null);
  useEffect(() => {
    fetch(apiUrl('/views'))
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d) setTotal(Number(d.total));
      })
      .catch(() => {});
  }, []);
  if (total === null || Number.isNaN(total)) return null;
  return <span className="footer-views">{total.toLocaleString('es-PE')} visitas</span>;
}
