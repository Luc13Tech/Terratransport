import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mountain, Truck, Ship, Route, Fuel, Package } from 'lucide-react'
import { CardSkeleton, WakingUpNotice, ErrorNotice } from '../components/LoadingStates'
import RouteLines from '../components/decor/RouteLines'
import { api } from '../lib/api'

// Correspondance entre le nom d'icône stocké en base (texte simple, éditable
// depuis l'admin) et le composant lucide-react réel à afficher.
const ICONS = { Mountain, Truck, Ship, Route, Fuel }
function ServiceIcon({ name, ...props }) {
  const Cmp = ICONS[name] || Package
  return <Cmp {...props} />
}

export default function Services() {
  const [services, setServices] = useState(null)
  const [error, setError] = useState(null)
  const [slow, setSlow] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timer = setTimeout(() => !cancelled && setSlow(true), 4000)

    api.services
      .list()
      .then((data) => !cancelled && setServices(data))
      .catch((err) => !cancelled && setError(err.message))
      .finally(() => !cancelled && setSlow(false))

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-ivory py-20">
        <RouteLines />
        <div className="container-tt relative">
          <p className="eyebrow mb-4 text-brass">Ce que nous faisons</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Des services pensés pour l'exploitation minière et au-delà.
          </h1>
        </div>
      </section>

      <section className="container-tt py-24">
        {error && <ErrorNotice message="Impossible de charger les services pour le moment." />}

        {!error && !services && (
          <>
            {slow && <WakingUpNotice />}
            <div className="space-y-10">
              <CardSkeleton count={2} />
            </div>
          </>
        )}

        {!error && services && (
          <div className="space-y-24">
            {services.map((s, i) => (
              <motion.div
                key={s._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-80 object-cover rounded-sm shadow-lg"
                />
                <div>
                  <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-5">
                    <ServiceIcon name={s.icon} size={19} strokeWidth={1.5} className="text-brass" />
                  </div>
                  <h2 className="font-display text-3xl text-forest mb-4">{s.title}</h2>
                  <p className="text-charcoal/70 leading-relaxed">{s.description}</p>
                  {s.link && (
                    <Link
                      to={s.link}
                      className="inline-block mt-5 text-sm tracking-wide text-forest border-b border-forest/30 hover:border-forest pb-1"
                    >
                      {s.linkLabel || 'En savoir plus'} →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <section className="bg-sage/30 py-20 text-center">
        <h2 className="font-display text-3xl text-charcoal mb-6">
          Un besoin spécifique ?
        </h2>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
        >
          Discutons-en
        </Link>
      </section>
    </>
  )
}
