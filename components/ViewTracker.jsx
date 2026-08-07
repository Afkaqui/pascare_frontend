'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { apiUrl } from '../lib/api';

// Registra una visita por ruta, una sola vez por sesión de navegador
// (evita inflar el contador con recargas). No renderiza nada.
export default function ViewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    // La intranet es uso interno: no cuenta como visita del sitio público.
    if (!pathname || pathname.startsWith('/intranet')) return;
    const key = `pv:${pathname}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch {
      // sessionStorage no disponible: seguimos igual
    }
    fetch(apiUrl('/views'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);
  return null;
}
