import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="container-tt py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo/logo-truck.jpg"
              alt="Terratransport"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="font-display text-lg text-ivory">Terratransport</span>
          </div>
          <p className="text-sm leading-relaxed text-ivory/60 max-w-xs">
            {site.baseline} Camions, autocars et véhicules pour l'Afrique et l'Asie.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-brass transition-colors">Services</Link></li>
            <li><Link to="/flotte" className="hover:text-brass transition-colors">Notre Flotte</Link></li>
            <li><Link to="/a-propos" className="hover:text-brass transition-colors">À propos</Link></li>
            <li><Link to="/partenariats" className="hover:text-brass transition-colors">Partenariats</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-ivory/70">
            <li>{site.phoneDisplay}</li>
            <li>{site.email}</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-4 rounded-full border border-brass text-brass text-sm px-5 py-2 hover:bg-brass hover:text-charcoal transition-colors"
          >
            Faire une demande
          </Link>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-tt py-5 text-xs text-ivory/40 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Terratransport. Tous droits réservés.</span>
          <span>Conçu avec exigence.</span>
        </div>
      </div>
    </footer>
  )
}
