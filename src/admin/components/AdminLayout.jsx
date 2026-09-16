import { NavLink, useNavigate } from 'react-router-dom'
import { Truck, Layers, FileText, Handshake, LogOut, ExternalLink } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { site } from '../../data/site'

const links = [
  { to: '/admin', label: 'Véhicules', Icon: Truck, end: true },
  { to: '/admin/services', label: 'Services', Icon: Layers },
  { to: '/admin/partenaires', label: 'Partenaires', Icon: Handshake },
  { to: '/admin/contenu', label: 'Contenu du site', Icon: FileText },
]

export default function AdminLayout({ children }) {
  const { admin, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-sage/20 flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-charcoal text-ivory/80 flex flex-col shrink-0 hidden md:flex">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-ivory/10">
          <img
            src="/images/logo/logo-truck.jpg"
            alt={site.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          <div>
            <p className="font-display text-sm text-ivory leading-tight">{site.shortName}</p>
            <p className="font-mono text-[9px] tracking-widest2 uppercase text-brass">Admin</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors ${
                  isActive ? 'bg-forest text-ivory' : 'text-ivory/60 hover:bg-ivory/5 hover:text-ivory'
                }`
              }
            >
              <l.Icon size={17} strokeWidth={1.5} />
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-6 border-t border-ivory/10 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-ivory/60 hover:bg-ivory/5 hover:text-ivory transition-colors"
          >
            <ExternalLink size={17} strokeWidth={1.5} />
            Voir le site
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-ivory/60 hover:bg-ivory/5 hover:text-ivory transition-colors"
          >
            <LogOut size={17} strokeWidth={1.5} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-charcoal text-ivory flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/images/logo/logo-truck.jpg" alt={site.name} className="h-7 w-7 rounded-full object-cover" />
          <span className="font-display text-sm">{site.shortName} Admin</span>
        </div>
        <button onClick={handleLogout} className="text-ivory/70">
          <LogOut size={18} strokeWidth={1.5} />
        </button>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal text-ivory flex justify-around py-2">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `flex flex-col items-center gap-1 px-3 py-1 text-[10px] ${isActive ? 'text-brass' : 'text-ivory/50'}`}
          >
            <l.Icon size={18} strokeWidth={1.5} />
            {l.label}
          </NavLink>
        ))}
      </div>

      {/* CONTENT */}
      <main className="flex-1 min-w-0 pt-16 pb-20 md:pt-0 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-charcoal/50">
              Connecté en tant que <strong className="text-charcoal">{admin?.name}</strong>
            </p>
          </div>
          {children}
        </div>
      </main>
    </div>
  )
}
