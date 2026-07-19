import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/flotte', label: 'Notre Flotte' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/partenariats', label: 'Partenariats' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-tt flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src="/images/logo/logo-truck.jpg"
            alt="Terratransport"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-forest/20"
          />
          <span className="font-display text-xl tracking-tight text-forest">
            Terratransport
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-sm tracking-wide transition-colors ${
                  isActive ? 'text-forest font-medium' : 'text-charcoal/70 hover:text-forest'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full bg-forest text-ivory px-5 py-2 text-sm tracking-wide hover:bg-forest-light transition-colors"
          >
            Faire une demande
          </NavLink>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span className={`block h-0.5 w-6 bg-forest transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-ivory border-t border-forest/10"
          >
            <div className="container-tt flex flex-col py-4 gap-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base ${isActive ? 'text-forest font-medium' : 'text-charcoal/80'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
