import { motion } from 'framer-motion'

/**
 * Signature element: plots the page's sections as waypoints on a route,
 * echoing how a logistics corridor (Afrique ⇄ Asie) is actually plotted.
 * Use one <RouteLine.Point label="Départ" /> per section.
 */
function Point({ label, children }) {
  return (
    <div className="route-line pl-8 relative">
      <span className="route-dot" style={{ top: '0.5rem' }} />
      {label && <p className="eyebrow mb-2">{label}</p>}
      {children}
    </div>
  )
}

export function RouteThread() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      style={{ transformOrigin: 'top' }}
      className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-brass/40"
    />
  )
}

const RouteLine = { Point, Thread: RouteThread }
export default RouteLine
