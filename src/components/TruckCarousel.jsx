import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const images = Array.from({ length: 7 }, (_, i) => `/images/camion/camion-${String(i + 1).padStart(2, '0')}.jpg`)

export default function TruckCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[420px] overflow-hidden rounded-sm shadow-2xl">
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Flotte de camions Terratransport & Industrie Mobile"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Waypoint dots indicating position in the rotation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-brass' : 'w-1.5 bg-ivory/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
