'use client';

import { useCallback, useEffect, useState } from 'react';
import { apiUrl } from '../../lib/api';
import {
  apiFetch,
  clearToken,
  downloadCsv,
  getToken,
  setToken,
  STATUS_LABELS,
} from '../../lib/intranet';

const STATUSES = ['new', 'in_progress', 'done', 'archived'];

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleString('es-PE', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

/* ---------- Login ---------- */
function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(apiUrl('/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.message || 'No pudimos iniciar sesión.');
      setToken(data.token);
      onSuccess(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="in-login">
      <form className="in-login-card" onSubmit={submit}>
        <h1>Intranet Pascare</h1>
        <p className="sub">Acceso para el equipo interno.</p>
        <label className="in-field">
          <span>Correo</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" />
        </label>
        <label className="in-field">
          <span>Contraseña</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
        </label>
        <button className="in-btn" disabled={loading}>
          {loading ? 'Ingresando…' : 'Ingresar'}
        </button>
        {error && <div className="in-error">{error}</div>}
      </form>
    </div>
  );
}

/* ---------- Tarjeta de solicitud ---------- */
function RequestCard({ item, kind, onStatus }) {
  const isQuote = kind === 'quotes';
  return (
    <article className="in-card">
      <div className="in-card-head">
        <div>
          <h3>{isQuote ? item.service : item.subject}</h3>
          <div className="in-meta">
            <span>{isQuote ? `COT-${String(item.id).padStart(6, '0')}` : `MSG-${String(item.id).padStart(6, '0')}`}</span>
            <span>{formatDate(item.createdAt)}</span>
          </div>
        </div>
        <div className="in-status">
          <span className={`in-badge ${item.status}`}>{STATUS_LABELS[item.status] || item.status}</span>
          <select value={item.status} onChange={(e) => onStatus(item.id, e.target.value)}>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{STATUS_LABELS[s]}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="in-fields">
        <span><b>{item.name}</b></span>
        <span><a href={`mailto:${item.email}`}>{item.email}</a></span>
        {item.phone && <span><a href={`https://wa.me/${String(item.phone).replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">{item.phone}</a></span>}
        {item.company && <span>Empresa: <b>{item.company}</b></span>}
        {item.budget && <span>Inversión: <b>{item.budget}</b></span>}
        {item.timeline && <span>Inicio: <b>{item.timeline}</b></span>}
      </div>

      <p className="in-msg">{item.message}</p>
    </article>
  );
}

/* ---------- Panel ---------- */
function Dashboard({ user, onLogout }) {
  const [tab, setTab] = useState('quotes');
  const [stats, setStats] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleError = useCallback((err) => {
    if (err.unauthorized) onLogout();
    else setError(err.message);
  }, [onLogout]);

  const loadStats = useCallback(() => {
    apiFetch('/admin/stats').then(setStats).catch(handleError);
  }, [handleError]);

  useEffect(() => { loadStats(); }, [loadStats]);

  useEffect(() => {
    if (tab === 'views') { setLoading(false); return; }
    setLoading(true);
    setError('');
    apiFetch(`/admin/${tab}`)
      .then((data) => setItems(data || []))
      .catch(handleError)
      .finally(() => setLoading(false));
  }, [tab, handleError]);

  async function changeStatus(id, status) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, status } : it)));
    try {
      await apiFetch(`/admin/${tab}/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
      loadStats();
    } catch (err) {
      handleError(err);
    }
  }

  async function exportCsv() {
    const file = tab === 'quotes' ? 'cotizaciones.csv' : 'mensajes.csv';
    try {
      await downloadCsv(`/admin/export/${tab}.csv`, file);
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <>
      <header className="in-top">
        <b>PASCARE · Intranet</b>
        <div className="in-user">
          <span>{user?.name || user?.email}</span>
          <button className="in-logout" onClick={onLogout}>Cerrar sesión</button>
        </div>
      </header>

      <div className="in-wrap">
        {stats && (
          <div className="in-stats">
            <div className="in-stat">
              <small>Cotizaciones</small>
              <b>{stats.quotes.total}</b>
              {stats.quotes.nuevas > 0 && <i>{stats.quotes.nuevas} nuevas</i>}
            </div>
            <div className="in-stat">
              <small>Mensajes</small>
              <b>{stats.contacts.total}</b>
              {stats.contacts.nuevos > 0 && <i>{stats.contacts.nuevos} nuevos</i>}
            </div>
            <div className="in-stat">
              <small>Visitas totales</small>
              <b>{Number(stats.views.total).toLocaleString('es-PE')}</b>
            </div>
          </div>
        )}

        <nav className="in-tabs">
          <button className={`in-tab ${tab === 'quotes' ? 'active' : ''}`} onClick={() => setTab('quotes')}>Cotizaciones</button>
          <button className={`in-tab ${tab === 'contacts' ? 'active' : ''}`} onClick={() => setTab('contacts')}>Mensajes</button>
          <button className={`in-tab ${tab === 'views' ? 'active' : ''}`} onClick={() => setTab('views')}>Visitas</button>
        </nav>

        {error && <div className="in-error">{error}</div>}

        {tab === 'views' ? (
          <table className="in-table">
            <thead><tr><th>Página</th><th>Visitas</th><th>Última visita</th></tr></thead>
            <tbody>
              {(stats?.views.pages || []).map((p) => (
                <tr key={p.path}>
                  <td>{p.path}</td>
                  <td>{Number(p.count).toLocaleString('es-PE')}</td>
                  <td>{formatDate(p.updatedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <div className="in-actions">
              <button className="in-export" onClick={exportCsv}>Exportar CSV ↓</button>
            </div>
            {loading ? (
              <div className="in-loading">Cargando…</div>
            ) : items.length === 0 ? (
              <div className="in-empty">Aún no hay {tab === 'quotes' ? 'cotizaciones' : 'mensajes'}.</div>
            ) : (
              <div className="in-list">
                {items.map((item) => (
                  <RequestCard key={item.id} item={item} kind={tab} onStatus={changeStatus} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

/* ---------- Entrada ---------- */
export default function IntranetPage() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!getToken()) { setChecking(false); return; }
    apiFetch('/auth/me')
      .then(setUser)
      .catch(() => clearToken())
      .finally(() => setChecking(false));
  }, []);

  function logout() {
    clearToken();
    setUser(null);
  }

  if (checking) return <div className="in-loading">Cargando…</div>;
  if (!user) return <Login onSuccess={setUser} />;
  return <Dashboard user={user} onLogout={logout} />;
}
