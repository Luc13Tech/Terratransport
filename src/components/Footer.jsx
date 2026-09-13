import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import Button from './ui/Button'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-ivory/80">
      {/* Image de fond assombrie + dégradé, pour garder le texte parfaitement lisible */}
      <div className="absolute inset-0">
        <img
          src="/images/camions/camion-01.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/95 to-charcoal/80" />
      </div>

      <div className="relative container-tt py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo/logo-truck.jpg"
              alt={site.name}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-ivory/20"
            />
            <span className="font-display text-lg text-ivory">{site.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-ivory/60 max-w-xs">
            {site.tagline} Présents à travers l'Afrique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-brass transition-colors">Services</Link></li>
            <li><Link to="/flotte" className="hover:text-brass transition-colors">Notre Flotte</Link></li>
            <li><Link to="/a-propos" className="hover:text-brass transition-colors">À propos</Link></li>
            <li><Link to="/partenariats" className="hover:text-brass transition-colors">Partenariats</Link></li>
            <li><Link to="/hydrocarbures" className="hover:text-brass transition-colors">Transport d'hydrocarbures</Link></li>
            <li><Link to="/rfi/guinee-conakry" className="hover:text-brass transition-colors">Projet Guinée — RFI</Link></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-ivory/70">
            <li>{site.phoneDisplay}</li>
            <li>{site.email}</li>
          </ul>
          <div className="mt-5">
            <Button to="/contact" variant="accent" size="sm">
              Faire une demande
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="container-tt py-5 text-xs text-ivory/40 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</span>
          <span>Conçu avec exigence.</span>
        </div>
      </div>
    </footer>
  )
}
