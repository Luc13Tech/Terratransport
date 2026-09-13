import { motion } from 'framer-motion'

export function CardSkeleton({ count = 4 }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="w-full h-64 bg-sage/50 rounded-sm" />
          <div className="mt-4 h-4 bg-sage/50 rounded w-3/4" />
          <div className="mt-2 h-3 bg-sage/30 rounded w-1/2" />
        </div>
      ))}
    </div>
  )
}

export function WakingUpNotice() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-6"
    >
      <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-2">
        Connexion au serveur…
      </p>
      <p className="text-charcoal/50 text-sm">
        Premier chargement un peu plus long, merci de patienter quelques secondes.
      </p>
    </motion.div>
  )
}

export function ErrorNotice({ message = "Impossible de charger le contenu pour le moment." }) {
  return (
    <div className="text-center py-16">
      <p className="font-display text-xl text-charcoal/60 mb-2">{message}</p>
      <p className="text-charcoal/40 text-sm">Merci de réessayer dans un instant.</p>
    </div>
  )
}
