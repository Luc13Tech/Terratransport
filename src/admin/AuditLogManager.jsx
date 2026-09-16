import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAuditLogs } from '../api/client';

const ACTIONS = [
  { value: '', label: 'Toutes les actions' },
  { value: 'LOGIN', label: 'Connexion' },
  { value: 'LOGOUT', label: 'Déconnexion' },
  { value: 'VIEW_LEAD', label: 'Consultation demande' },
  { value: 'UPDATE_LEAD_STATUS', label: 'Statut demande modifié' },
  { value: 'DELETE_LEAD', label: 'Demande supprimée' },
  { value: 'CREATE_PROPERTY', label: 'Bien créé' },
  { value: 'UPDATE_PROPERTY', label: 'Bien modifié' },
  { value: 'DELETE_PROPERTY', label: 'Bien supprimé' },
  { value: 'UPDATE_SERVICE', label: 'Métier modifié' },
  { value: 'UPDATE_CONTENT', label: 'Contenu modifié' },
];

const ACTION_STYLES = {
  LOGIN: 'bg-emerald-50 text-emerald-700',
  LOGOUT: 'bg-ink/10 text-ink/60',
  VIEW_LEAD: 'bg-blue-50 text-blue-700',
  UPDATE_LEAD_STATUS: 'bg-amber-50 text-amber-700',
  DELETE_LEAD: 'bg-red-50 text-brand-redDark',
  CREATE_PROPERTY: 'bg-emerald-50 text-emerald-700',
  UPDATE_PROPERTY: 'bg-amber-50 text-amber-700',
  DELETE_PROPERTY: 'bg-red-50 text-brand-redDark',
  UPDATE_SERVICE: 'bg-amber-50 text-amber-700',
  UPDATE_CONTENT: 'bg-amber-50 text-amber-700',
};

export default function AuditLogManager() {
  const [logs, setLogs] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ action: '', from: '', to: '' });
  const [page, setPage] = useState(1);

  function load() {
    setLoading(true);
    const params = { page, limit: 30, ...Object.fromEntries(Object.entries(filters).filter(([, v]) => v)) };
    getAuditLogs(params)
      .then((res) => {
        setLogs(res.data);
        setPagination(res.pagination);
      })
      .finally(() => setLoading(false));
  }

  useEffect(load, [page, filters]);

  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="w-11 h-11 rounded-full bg-ink flex items-center justify-center">
          <ShieldCheck size={18} className="text-brand-goldSoft" />
        </span>
        <div>
          <h1 className="font-sans font-extrabold text-2xl sm:text-3xl text-ink">
            Journal de surveillance
          </h1>
          <p className="text-ink/55 font-light text-sm mt-1">
            {pagination.total} action(s) enregistrée(s) — réservé au superadmin.
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap gap-3 mt-8">
        <select
          value={filters.action}
          onChange={(e) => {
            setPage(1);
            setFilters((f) => ({ ...f, action: e.target.value }));
          }}
          className="px-4 py-2.5 rounded-xl border border-line text-sm outline-none focus:border-brand-gold"
        >
          {ACTIONS.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={filters.from}
          onChange={(e) => {
            setPage(1);
            setFilters((f) => ({ ...f, from: e.target.value }));
          }}
          className="px-4 py-2.5 rounded-xl border border-line text-sm outline-none focus:border-brand-gold"
        />
        <input
          type="date"
          value={filters.to}
          onChange={(e) => {
            setPage(1);
            setFilters((f) => ({ ...f, to: e.target.value }));
          }}
          className="px-4 py-2.5 rounded-xl border border-line text-sm outline-none focus:border-brand-gold"
        />
      </div>

      {/* Tableau */}
      {loading ? (
        <div className="py-16 flex justify-center">
          <Loader2 className="animate-spin text-brand-gold" size={26} />
        </div>
      ) : logs.length === 0 ? (
        <p className="text-ink/50 font-light mt-10">Aucune action enregistrée pour ces filtres.</p>
      ) : (
        <div className="mt-8 space-y-3">
          {logs.map((log, i) => (
            <motion.div
              key={log._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i, 8) * 0.03 }}
              className="bg-white rounded-[18px] p-5 shadow-soft flex flex-wrap items-start justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[10.5px] font-mono uppercase tracking-wide px-2.5 py-1 rounded-full ${
                      ACTION_STYLES[log.action] || 'bg-ink/10 text-ink/60'
                    }`}
                  >
                    {ACTIONS.find((a) => a.value === log.action)?.label || log.action}
                  </span>
                  <span className="text-ink/30 text-xs font-mono">
                    {new Date(log.createdAt).toLocaleString('fr-FR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
                <p className="font-semibold text-ink text-sm mt-2">{log.adminEmail}</p>
                {log.details && (
                  <p className="text-ink/60 font-light text-[13px] mt-1">{log.details}</p>
                )}
              </div>
              {log.ipAddress && (
                <span className="font-mono text-[10.5px] text-ink/35 shrink-0">{log.ipAddress}</span>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="p-2 rounded-full border border-line disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm font-mono text-ink/50">
            Page {pagination.page} / {pagination.totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
            disabled={page >= pagination.totalPages}
            className="p-2 rounded-full border border-line disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
