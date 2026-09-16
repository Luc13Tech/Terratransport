import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Layers,
  Building2,
  Inbox,
  FileText,
  Bot,
  ShieldCheck,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { adminLogout } from '../api/client';
import logo from '../assets/images/logo.png';

const NAV = [
  { to: '/admin', label: 'Tableau de bord', icon: LayoutDashboard, end: true },
  { to: '/admin/services', label: 'Les 7 métiers', icon: Layers },
  { to: '/admin/biens', label: 'Biens immobiliers', icon: Building2 },
  { to: '/admin/demandes', label: 'Demandes reçues', icon: Inbox },
  { to: '/admin/contenu', label: 'Contenu du site', icon: FileText },
  { to: '/admin/assistant', label: 'Assistant IA', icon: Bot },
];

export default function AdminLayout() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // "Journal de surveillance" n'apparaît que pour le rôle superadmin.
  // Rappel : ceci est uniquement cosmétique — la vraie protection est
  // côté backend (requireRole sur /api/admin-audit).
  const navItems =
    admin?.role === 'superadmin'
      ? [...NAV, { to: '/admin/audit', label: 'Journal de surveillance', icon: ShieldCheck }]
      : NAV;

  async function handleLogout() {
    try {
      await adminLogout(); // trace l'événement LOGOUT avant de vider le token
    } catch {
      // même en cas d'échec réseau, on déconnecte quand même localement
    }
    logout();
    navigate('/admin/login');
  }

  const SidebarContent = (
    <>
      <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
        <img src={logo} alt="BF IMMO" className="h-9 w-9 rounded-lg object-cover" />
        <span
          className="text-lg text-white"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          BF <em className="not-italic text-brand-red">Immo</em>
        </span>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/55 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <item.icon size={17} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-6 py-5 border-t border-white/10">
        <p className="text-white/40 text-[11px] font-mono truncate">{admin?.email}</p>
        <p className="text-white/25 text-[10px] font-mono uppercase tracking-wide mt-0.5">
          {admin?.role === 'superadmin' ? 'Superadmin' : 'Administrateur'}
        </p>
        <button
          onClick={handleLogout}
          className="mt-3 flex items-center gap-2 text-white/60 hover:text-brand-red text-sm font-medium transition-colors"
        >
          <LogOut size={15} /> Déconnexion
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-offwhite flex">
      <aside className="hidden lg:flex flex-col w-64 bg-ink shrink-0">{SidebarContent}</aside>

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-72 bg-ink flex flex-col lg:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-white/60"
            >
              <X size={22} />
            </button>
            {SidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="flex-1 min-w-0">
        <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-ink">
          <span className="text-white font-semibold text-sm">Administration</span>
          <button onClick={() => setMobileOpen(true)} className="text-white">
            <Menu size={22} />
          </button>
        </div>

        <main className="p-6 sm:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
