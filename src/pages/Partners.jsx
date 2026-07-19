import { motion } from 'framer-motion'

const partners = ['Sinotruk', 'Shacman', 'Yutong', 'HOWO']

export default function Partners() {
  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Ils nous font confiance</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Des constructeurs reconnus, des partenariats durables.
          </h1>
        </div>
      </section>

      <section className="container-tt py-20">
        <p className="text-charcoal/60 max-w-xl mb-14 leading-relaxed">
          Terratransport travaille avec des constructeurs et partenaires
          financiers sélectionnés pour la fiabilité de leurs véhicules et la
          qualité de leur accompagnement.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-charcoal/10 rounded-sm py-10 flex items-center justify-center hover:border-brass transition-colors"
            >
              <span className="font-display text-xl md:text-2xl text-forest tracking-tight">
                {p}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 border-t border-charcoal/10 pt-14">
          <p className="eyebrow mb-4">Devenir partenaire</p>
          <h2 className="font-display text-2xl text-forest mb-4">
            Revendeur ou transporteur affilié
          </h2>
          <p className="text-charcoal/60 max-w-xl leading-relaxed">
            Vous représentez une flotte ou un réseau de distribution ? Parlons
            d'une collaboration adaptée à votre marché.
          </p>
        </div>
      </section>
    </>
  )
}
