import { motion } from 'framer-motion'

// Des halos doux qui dérivent lentement — un motif plus calme, adapté à une
// page de contact, sans rien de mécanique ou de minéral ici.
export default function SoftGlow({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 420, height: 420, top: '-10%', right: '-8%',
          background: 'radial-gradient(circle, rgba(184,147,90,0.16) 0%, transparent 70%)',
        }}
        animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 320, height: 320, bottom: '-12%', left: '-6%',
          background: 'radial-gradient(circle, rgba(220,228,218,0.5) 0%, transparent 70%)',
        }}
        animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  )
}
