import { motion } from 'framer-motion'

// Des lignes de corridor qui dérivent lentement — écho du thème logistique
// (routes, corridors d'approvisionnement) déjà présent dans le reste du site.
export default function RouteLines({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.svg
        viewBox="0 0 1200 600"
        className="absolute -left-20 top-0 w-[140%] h-full opacity-[0.18]"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 0.18 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <motion.path
          d="M -50 420 C 250 380, 420 480, 650 380 S 1050 300, 1250 360"
          fill="none"
          stroke="#B8935A"
          strokeWidth="1.5"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M -50 200 C 200 260, 500 150, 700 220 S 1000 320, 1250 250"
          fill="none"
          stroke="#F7F5EE"
          strokeWidth="1"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 3.4, ease: 'easeInOut', delay: 0.2 }}
        />
        {[
          [90, 400], [650, 380], [1180, 355], [700, 220], [140, 250],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#D4B788"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.6], scale: [0, 1.3, 1] }}
            transition={{ duration: 1.2, delay: 0.6 + i * 0.15 }}
          />
        ))}
      </motion.svg>
    </div>
  )
}
