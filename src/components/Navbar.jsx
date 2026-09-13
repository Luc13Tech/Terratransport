import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
import Button from './ui/Button'

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

  return (
    <div className="sticky top-0 z-50 pt-3 md:pt-4 px-3 md:px-6">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`container-tt !px-0 mx-auto rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-lg border-forest/10'
            : 'bg-ivory/70 backdrop-blur-sm border-ivory/40 shadow-md'
        }`}
      >
        <nav className="flex items-center justify-between px-4 md:px-6 py-2.5">
          <NavLink to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <img
              src="/images/logo/logo-truck.jpg"
              alt={site.name}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-forest/20 shrink-0 transition-transform group-hover:scale-105"
            />
            <span className="leading-tight hidden sm:block">
              <span className="block font-display text-lg tracking-tight text-forest">
                {site.shortName}
              </span>
              <span className="block font-mono text-[9px] tracking-widest2 uppercase text-brass -mt-0.5">
                &amp; Industrie Mobile
              </span>
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-1 bg-charcoal/[0.03] rounded-full p-1">
            {links.slice(0, -1).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 rounded-full font-body text-sm tracking-wide transition-colors ${
                    isActive ? 'text-ivory' : 'text-charcoal/65 hover:text-forest'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-forest rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {l.label}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Button to="/contact" variant="accent" size="sm">
              Faire une demande
            </Button>
          </div>

          <button
            className="md:hidden text-forest p-1.5"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? 'close' : 'open'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-forest/10 mx-4"
            >
              <div className="flex flex-col py-4 gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2.5 rounded-full text-base transition-colors ${
                        isActive ? 'bg-forest text-ivory' : 'text-charcoal/80 hover:bg-forest/5'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
