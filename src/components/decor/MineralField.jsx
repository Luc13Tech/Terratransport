import { motion } from 'framer-motion'

const crystals = [
  { top: '10%', left: '82%', size: 110, duration: 14, delay: 0 },
  { top: '62%', left: '90%', size: 70, duration: 11, delay: 0.3 },
  { top: '72%', left: '10%', size: 90, duration: 16, delay: 0.6 },
  { top: '18%', left: '4%', size: 54, duration: 10, delay: 0.9 },
]

// Des formes cristallines anguleuses, en écho direct au positionnement
// "exploitation minière" de l'entreprise — pas une décoration arbitraire.
export default function MineralField({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {crystals.map((c, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 100 100"
          style={{ position: 'absolute', top: c.top, left: c.left, width: c.size, height: c.size }}
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 0.15, rotate: 8 }}
          transition={{
            opacity: { duration: 1, delay: c.delay },
            rotate: { duration: c.duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: c.delay },
          }}
        >
          <polygon
            points="50,2 90,35 76,92 24,92 10,35"
            fill="none"
            stroke="#B8935A"
            strokeWidth="1.5"
          />
          <polygon points="50,2 76,92 24,92" fill="none" stroke="#B8935A" strokeWidth="0.75" />
        </motion.svg>
      ))}
    </div>
  )
}
