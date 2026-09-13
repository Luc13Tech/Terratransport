import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const images = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/camions/camion-${String(i + 1).padStart(2, '0')}.jpg`,
  label: `Camion ${String(i + 1).padStart(2, '0')}`,
}))

const SLIDE_DURATION = 4000

export default function TruckCarousel({ heightClass = 'h-[420px]' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden rounded-sm shadow-2xl`}>
      <AnimatePresence mode="sync">
        <motion.div
          key={images[index].src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* Effet "Ken Burns" — léger zoom continu pendant l'affichage, pour une
              présentation plus cinématique qu'un simple crossfade statique. */}
          <motion.img
            src={images[index].src}
            alt={`Flotte de camions Terratransport & Industrie Mobile — ${images[index].label}`}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 0.9, ease: 'linear' }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Légende discrète */}
      <div className="absolute bottom-5 left-5 z-10">
        <motion.p
          key={`label-${index}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-mono text-[10px] tracking-widest2 uppercase text-ivory/80"
        >
          {images[index].label} · Flotte Terratransport
        </motion.p>
      </div>

      {/* Barre de progression plutôt que de simples points — plus "application" */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-ivory/15 z-10">
        <motion.div
          key={`bar-${index}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
          style={{ transformOrigin: 'left' }}
          className="h-full bg-brass"
        />
      </div>
    </div>
  )
}
