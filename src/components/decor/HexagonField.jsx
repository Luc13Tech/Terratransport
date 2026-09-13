import { motion } from 'framer-motion'

const HEX_POINTS = '50,3 93,26 93,74 50,97 7,74 7,26'

const hexagons = [
  { top: '8%', left: '78%', size: 90, duration: 9, delay: 0 },
  { top: '55%', left: '90%', size: 60, duration: 7, delay: 0.4 },
  { top: '68%', left: '8%', size: 70, duration: 10, delay: 0.8 },
  { top: '15%', left: '5%', size: 46, duration: 8, delay: 1.1 },
  { top: '40%', left: '48%', size: 34, duration: 6.5, delay: 0.3 },
]

// Des hexagones qui dérivent doucement — un clin d'œil à l'industrie
// mobile et aux pièces mécaniques, sans reproduire un vrai schéma technique.
export default function HexagonField({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {hexagons.map((h, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 100 100"
          style={{ position: 'absolute', top: h.top, left: h.left, width: h.size, height: h.size }}
          initial={{ opacity: 0, rotate: 0, y: 0 }}
          animate={{ opacity: 0.16, rotate: 360, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 1, delay: h.delay },
            rotate: { duration: h.duration * 4, repeat: Infinity, ease: 'linear' },
            y: { duration: h.duration, repeat: Infinity, ease: 'easeInOut', delay: h.delay },
          }}
        >
          <polygon points={HEX_POINTS} fill="none" stroke="#B8935A" strokeWidth="1.5" />
        </motion.svg>
      ))}
    </div>
  )
}
