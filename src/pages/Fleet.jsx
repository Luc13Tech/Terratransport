import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { categories, vehicles } from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'

export default function Fleet() {
  const [active, setActive] = useState('tous')

  const filtered = useMemo(() => {
    if (active === 'tous') return vehicles
    return vehicles.filter((v) => v.category === active)
  }, [active])

  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Notre flotte</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Chaque véhicule, choisi pour durer.
          </h1>
        </div>
      </section>

      <section className="container-tt py-16">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <button
            onClick={() => setActive('tous')}
            className={`relative px-5 py-2 rounded-full text-sm tracking-wide border transition-colors ${
              active === 'tous'
                ? 'text-ivory border-forest'
                : 'border-charcoal/20 text-charcoal/70 hover:border-forest'
            }`}
          >
            {active === 'tous' && (
              <motion.span layoutId="fleet-pill" className="absolute inset-0 bg-forest rounded-full -z-10" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
            )}
            Tous
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={`relative px-5 py-2 rounded-full text-sm tracking-wide border transition-colors ${
                active === c.slug
                  ? 'text-ivory border-forest'
                  : 'border-charcoal/20 text-charcoal/70 hover:border-forest'
              }`}
            >
              {active === c.slug && (
                <motion.span layoutId="fleet-pill" className="absolute inset-0 bg-forest rounded-full -z-10" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              {c.label}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs tracking-wide text-charcoal/40 mb-10">
          {filtered.length} véhicule{filtered.length > 1 ? 's' : ''}
        </p>

        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {filtered.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-charcoal/60 mb-2">
              Cette catégorie arrive bientôt.
            </p>
            <p className="text-charcoal/50 text-sm">
              Contactez-nous directement pour vérifier la disponibilité.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
