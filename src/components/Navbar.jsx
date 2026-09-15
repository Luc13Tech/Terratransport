import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Fuel, Truck, Info, Handshake, Mail, Home as HomeIcon } from 'lucide-react'
import { site } from '../data/site'
import Button from './ui/Button'

const links = [
  { to: '/', label: 'Accueil', Icon: HomeIcon },
  { to: '/services', label: 'Services', Icon: Truck },
  { to: '/flotte', label: 'Notre Flotte', Icon: Truck },
  { to: '/hydrocarbures', label: 'Hydrocarbures', Icon: Fuel },
  { to: '/a-propos', label: 'À propos', Icon: Info },
  { to: '/partenariats', label: 'Partenariats', Icon: Handshake },
  { to: '/contact', label: 'Contact', Icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Empêche le fond de défiler quand le menu plein écran est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
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
          <nav className="flex items-center justify-between px-4 md:px-5 py-2.5">
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

            <div className="hidden lg:flex items-center gap-0.5 bg-charcoal/[0.03] rounded-full p-1">
              {links.slice(0, -1).map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 rounded-full font-body text-[13px] tracking-wide transition-colors whitespace-nowrap ${
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

            <div className="hidden lg:block">
              <Button to="/contact" variant="accent" size="sm">
                Faire une demande
              </Button>
            </div>

            <button
              className="lg:hidden text-forest p-1.5"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </nav>
        </motion.header>
      </div>

      {/* MENU MOBILE — plein écran, façon application */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-forest lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo/logo-truck.jpg"
                  alt={site.name}
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-ivory/20"
                />
                <span className="font-display text-lg text-ivory">{site.shortName}</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="w-10 h-10 rounded-full bg-ivory/10 text-ivory flex items-center justify-center hover:bg-ivory/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="px-6 mt-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05, ease: 'easeOut' }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 py-4 border-b border-ivory/10 transition-colors ${
                        isActive ? 'text-brass' : 'text-ivory hover:text-brass'
                      }`
                    }
                  >
                    <l.Icon size={19} strokeWidth={1.5} />
                    <span className="font-display text-xl">{l.label}</span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="px-6 mt-10"
            >
              <Button to="/contact" variant="accent" size="lg" className="w-full" onClick={() => setOpen(false)}>
                Faire une demande
              </Button>
              <div className="mt-8 text-center">
                <p className="font-mono text-[10px] tracking-widest2 uppercase text-ivory/40">
                  {site.phoneDisplay}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
