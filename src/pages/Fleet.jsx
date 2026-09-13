import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { categories } from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'
import { CardSkeleton, WakingUpNotice, ErrorNotice } from '../components/LoadingStates'
import HexagonField from '../components/decor/HexagonField'
import SectionDivider from '../components/decor/SectionDivider'
import { api } from '../lib/api'

export default function Fleet() {
  const [active, setActive] = useState('tous')
  const [vehicles, setVehicles] = useState(null)
  const [error, setError] = useState(null)
  const [slow, setSlow] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timer = setTimeout(() => !cancelled && setSlow(true), 4000)

    api.vehicles
      .list()
      .then((data) => {
        if (!cancelled) setVehicles(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setSlow(false)
      })

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  const filtered = useMemo(() => {
    if (!vehicles) return []
    if (active === 'tous') return vehicles
    return vehicles.filter((v) => v.category === active)
  }, [vehicles, active])

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-ivory py-20">
        <HexagonField />
        <div className="container-tt relative">
          <p className="eyebrow mb-4 text-brass">Notre flotte</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Chaque véhicule, choisi pour durer.
          </h1>
        </div>
      </section>
      <SectionDivider from="#0F3D2E" to="#F7F5EE" />

      <section className="container-tt py-16">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
          {categories.map((c) => (
            <motion.button
              key={c.slug}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          ))}
        </div>

        {vehicles && (
          <p className="font-mono text-xs tracking-wide text-charcoal/40 mb-10">
            {filtered.length} véhicule{filtered.length > 1 ? 's' : ''}
          </p>
        )}

        {error && <ErrorNotice message="Impossible de charger la flotte pour le moment." />}

        {!error && !vehicles && (
          <>
            {slow && <WakingUpNotice />}
            <CardSkeleton count={8} />
          </>
        )}

        {!error && vehicles && filtered.length > 0 && (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filtered.map((v, i) => (
              <VehicleCard key={v._id} vehicle={v} index={i} />
            ))}
          </motion.div>
        )}

        {!error && vehicles && filtered.length === 0 && (
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
