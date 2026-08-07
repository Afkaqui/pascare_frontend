'use client';
import { apiUrl } from './api';

const TOKEN_KEY = 'pascare_token';

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch {}
}

export function clearToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {}
}

/** Llama al API con el token de sesión. Lanza si la sesión expiró. */
export async function apiFetch(path, options = {}) {
  const token = getToken();
  const res = await fetch(apiUrl(path), {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  if (res.status === 401) {
    clearToken();
    const error = new Error('Tu sesión expiró. Inicia sesión nuevamente.');
    error.unauthorized = true;
    throw error;
  }

  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message || data?.error || 'Ocurrió un error.');
  return data;
}

/** Descarga un CSV protegido (requiere token, por eso no es un <a href> directo). */
export async function downloadCsv(path, filename) {
  const token = getToken();
  const res = await fetch(apiUrl(path), {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error('No pudimos generar el archivo.');
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export const STATUS_LABELS = {
  new: 'Nueva',
  in_progress: 'En proceso',
  done: 'Atendida',
  archived: 'Archivada',
};
