import { motion } from 'framer-motion'
import { Zap, Globe2, ClipboardCheck, Fuel, Shield, Route, Eye } from 'lucide-react'
import { site } from '../data/site'

const values = [
  {
    title: 'Réactivité',
    desc: 'Une demande, une réponse rapide — sans intermédiaire superflu.',
    Icon: Zap,
  },
  {
    title: 'Réseau',
    desc: 'Un ancrage panafricain, pensé pour accompagner nos clients où que leur activité les mène sur le continent.',
    Icon: Globe2,
  },
  {
    title: 'Traçabilité',
    desc: 'Un suivi clair de votre commande, du premier échange à la livraison.',
    Icon: ClipboardCheck,
  },
]

const corridor = ['Sénégal', 'Gambie', 'Guinée-Bissau', 'Mauritanie', 'Mali']

export default function About() {
  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Qui sommes-nous</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            {site.shortName} — une industrie mobile pour l'exploitation minière en Afrique.
          </h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="container-tt py-20 grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl text-forest mb-6">Notre mission</h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            {site.name} met une industrie mobile fiable — camions, engins et
            équipements — au service de l'exploitation minière en Afrique.
            Nous accompagnons les opérateurs miniers, ainsi que les
            entreprises de BTP et de transport, dans l'acquisition et
            l'exploitation de leur matériel, et dans la mise en place de
            solutions logistiques adaptées au terrain africain.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Notre ambition est simple : être reconnus partout où
            l'exploitation minière a besoin d'un partenaire fiable pour son
            industrie mobile — pas seulement dans un pays, mais à l'échelle
            du continent.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="/images/citernes/citerne-05.jpg"
          alt={site.name}
          className="w-full h-80 object-cover rounded-sm shadow-lg"
        />
      </section>

      {/* L'ENERGIE EN MOUVEMENT */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-5">
              <Fuel size={19} strokeWidth={1.5} className="text-brass" />
            </div>
            <p className="eyebrow mb-3">Transport & logistique des hydrocarbures</p>
            <h2 className="font-display text-3xl text-forest mb-6">
              L'énergie en mouvement, au Sénégal et dans la sous-région.
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              {site.shortName} est également spécialisée dans le transport
              routier et la logistique des produits pétroliers et
              hydrocarbures, avec une ambition claire : devenir un
              partenaire de référence pour l'approvisionnement en carburants
              au Sénégal et la desserte des marchés de la sous-région
              ouest-africaine.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Grâce à une approche fondée sur la sécurité, la fiabilité, la
              ponctualité et la performance logistique, nous accompagnons les
              distributeurs pétroliers, sociétés minières, industriels,
              entreprises de BTP, opérateurs énergétiques, stations-service
              et grands consommateurs dans leurs besoins d'acheminement de
              carburants.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="eyebrow mb-4">Couverture régionale</p>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Notre activité couvre le transport et l'acheminement de
              produits pétroliers depuis les points de chargement, dépôts et
              plateformes logistiques vers les sites de consommation et de
              distribution. Au Sénégal, {site.shortName} ambitionne de
              développer une couverture nationale permettant de desservir
              efficacement les principaux pôles économiques, industriels,
              miniers et énergétiques. Notre stratégie s'étend également aux
              corridors internationaux reliant le Sénégal aux principaux
              marchés de la sous-région.
            </p>
            <div className="flex flex-wrap gap-2">
              {corridor.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="text-xs font-mono tracking-wide uppercase text-forest bg-ivory border border-forest/15 rounded-full px-4 py-2"
                >
                  {c}
                </motion.span>
              ))}
            </div>
            <p className="text-charcoal/60 text-sm leading-relaxed mt-6">
              Le corridor Dakar–Mali constitue un axe stratégique pour les
              échanges régionaux et l'approvisionnement du Mali, pays
              enclavé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="container-tt py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-5">
            <Shield size={19} strokeWidth={1.5} className="text-brass" />
          </div>
          <p className="eyebrow mb-3">Notre engagement</p>
          <h2 className="font-display text-3xl text-forest mb-6">
            Sécurité, traçabilité et performance.
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Le transport d'hydrocarbures exige un niveau élevé de maîtrise
            opérationnelle. Chez {site.shortName}, nous plaçons la sécurité
            des personnes, des produits, des véhicules et des opérations —
            ainsi que la protection de l'environnement — au cœur de notre
            organisation.
          </p>
          <p className="text-charcoal/70 leading-relaxed">
            Au Sénégal, les dispositions applicables au transport des
            produits pétroliers prévoient notamment des exigences de licence
            et de traçabilité des livraisons. {site.shortName} inscrit donc
            son développement dans une démarche de conformité avec les
            exigences réglementaires et les standards de sécurité
            applicables.
          </p>
        </motion.div>
      </section>

      {/* VISION */}
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="w-11 h-11 rounded-full bg-brass/15 border border-brass/40 flex items-center justify-center mb-5">
              <Eye size={19} strokeWidth={1.5} className="text-brass" />
            </div>
            <p className="eyebrow mb-3 text-brass">Notre vision</p>
            <h2 className="font-display text-3xl mb-6">
              Faire de {site.shortName} un acteur majeur du transport des hydrocarbures en Afrique de l'Ouest.
            </h2>
            <p className="text-ivory/70 leading-relaxed">
              Notre ambition est de construire progressivement un réseau
              logistique reliant le Sénégal aux principaux marchés de la
              sous-région, en nous appuyant sur une flotte performante, des
              équipes qualifiées, des partenaires fiables et une
              organisation orientée vers la sécurité et la satisfaction
              client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALEURS */}
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
                <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-4">
                  <v.Icon size={19} strokeWidth={1.5} className="text-brass" />
                </div>
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
