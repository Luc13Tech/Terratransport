import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mountain, Truck, Ship, Route, Fuel } from 'lucide-react'

const services = [
  {
    title: 'Industrie mobile & exploitation minière',
    desc: "Camions bennes renforcés, engins et véhicules robustes pensés pour les sites miniers et les chantiers du continent — le cœur de notre activité : une industrie mobile fiable pour l'exploitation minière en Afrique.",
    image: '/images/camions/camion-01.jpg',
    Icon: Mountain,
  },
  {
    title: "Transport d'hydrocarbures",
    desc: "Camions citernes spécialisés — essence, gasoil, kérosène — conçus autour de trois exigences : sécurité renforcée, fiabilité opérationnelle et grands volumes sur des trajets exigeants en Afrique de l'Ouest.",
    image: '/images/citernes/citerne-01.jpg',
    Icon: Fuel,
    link: '/hydrocarbures',
    linkLabel: 'Voir le dossier technique',
  },
  {
    title: 'Vente de véhicules',
    desc: 'Camions bennes, autocars et véhicules particuliers, sélectionnés pour leur fiabilité et adaptés aux réalités du terrain africain, miniers comme routiers.',
    image: '/images/camions/camion-04.jpg',
    Icon: Truck,
  },
  {
    title: 'Solutions intermodales',
    desc: 'Mer, rail, route : nous coordonnons chaque maillon du transport pour que votre matériel ou votre marchandise arrive à destination sans rupture de charge.',
    image: '/images/bus/bus-04.jpg',
    Icon: Ship,
  },
  {
    title: 'Logistique personnalisée',
    desc: "De la commande à la livraison, nous concevons un parcours logistique adapté à votre exploitation, votre volume et vos délais, partout où votre activité opère en Afrique.",
    image: '/images/camions/camion-02.jpg',
    Icon: Route,
  },
]

export default function Services() {
  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Ce que nous faisons</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Des services pensés pour l'exploitation minière et au-delà.
          </h1>
        </div>
      </section>

      <section className="container-tt py-24 space-y-24">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-80 object-cover rounded-sm shadow-lg"
            />
            <div>
              <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-5">
                <s.Icon size={19} strokeWidth={1.5} className="text-brass" />
              </div>
              <h2 className="font-display text-3xl text-forest mb-4">{s.title}</h2>
              <p className="text-charcoal/70 leading-relaxed">{s.desc}</p>
              {s.link && (
                <Link
                  to={s.link}
                  className="inline-block mt-5 text-sm tracking-wide text-forest border-b border-forest/30 hover:border-forest pb-1"
                >
                  {s.linkLabel} →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      <section className="bg-sage/30 py-20 text-center">
        <h2 className="font-display text-3xl text-charcoal mb-6">
          Un besoin spécifique ?
        </h2>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
        >
          Discutons-en
        </Link>
      </section>
    </>
  )
}
