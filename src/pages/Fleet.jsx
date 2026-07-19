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
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActive('tous')}
            className={`px-5 py-2 rounded-full text-sm tracking-wide border transition-colors ${
              active === 'tous'
                ? 'bg-forest text-ivory border-forest'
                : 'border-charcoal/20 text-charcoal/70 hover:border-forest'
            }`}
          >
            Tous
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide border transition-colors ${
                active === c.slug
                  ? 'bg-forest text-ivory border-forest'
                  : 'border-charcoal/20 text-charcoal/70 hover:border-forest'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

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
