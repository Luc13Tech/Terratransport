import { motion } from 'framer-motion'

const values = [
  {
    title: 'Réactivité',
    desc: 'Une demande, une réponse rapide — sans intermédiaire superflu.',
  },
  {
    title: 'Réseau',
    desc: "Un ancrage entre l'Afrique et l'Asie pour des solutions de transport concrètes.",
  },
  {
    title: 'Traçabilité',
    desc: 'Un suivi clair de votre commande, du premier échange à la livraison.',
  },
]

export default function About() {
  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Qui sommes-nous</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Une entreprise de transport, une exigence de service.
          </h1>
        </div>
      </section>

      <section className="container-tt py-20 grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl text-forest mb-6">Notre mission</h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Terratransport accompagne les professionnels dans l'acquisition et
            l'exploitation de véhicules de transport — camions bennes,
            autocars et véhicules particuliers — ainsi que dans la mise en
            place de solutions logistiques entre l'Afrique et l'Asie.
          </p>
          <p className="text-charcoal/70 leading-relaxed">
            Notre approche reste la même, quel que soit le projet : comprendre
            précisément le besoin avant de proposer une solution, plutôt que
            l'inverse.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="/images/bus/bus-03.jpg"
          alt="Terratransport"
          className="w-full h-80 object-cover rounded-sm shadow-lg"
        />
      </section>

      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4">Nos valeurs</p>
          <div className="grid md:grid-cols-3 gap-10 mt-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="font-display text-xl text-forest mb-2">{v.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
