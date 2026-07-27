import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Vente de véhicules',
    desc: 'Camions bennes, autocars et véhicules particuliers, sélectionnés pour leur fiabilité et adaptés aux réalités du terrain africain et asiatique.',
    image: '/images/camions/camion-04.jpg',
  },
  {
    title: 'Solutions intermodales',
    desc: 'Mer, rail, route : nous coordonnons chaque maillon du transport pour que votre marchandise arrive à destination sans rupture de charge.',
    image: '/images/bus/bus-04.jpg',
  },
  {
    title: 'Logistique personnalisée',
    desc: "De la commande à la livraison, nous concevons un parcours de transport adapté à votre activité, votre volume et vos délais.",
    image: '/images/camions/camion-02.jpg',
  },
]

export default function Services() {
  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Ce que nous faisons</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Des services pensés pour chaque étape de votre transport.
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
              <p className="font-mono text-xs tracking-widest2 text-brass mb-3">
                0{i + 1}
              </p>
              <h2 className="font-display text-3xl text-forest mb-4">{s.title}</h2>
              <p className="text-charcoal/70 leading-relaxed">{s.desc}</p>
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
