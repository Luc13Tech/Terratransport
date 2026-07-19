import { motion } from 'framer-motion'

export default function VehicleCard({ vehicle, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: 'easeOut' }}
      className="group"
    >
      <div className="overflow-hidden rounded-sm bg-sage/40">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="pt-4">
        <h3 className="font-display text-lg text-charcoal">{vehicle.name}</h3>
        {vehicle.specs?.length > 0 && (
          <p className="mt-1 font-mono text-xs tracking-wide text-charcoal/50">
            {vehicle.specs.join(' · ')}
          </p>
        )}
      </div>
    </motion.div>
  )
}
