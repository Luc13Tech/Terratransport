import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Truck, Globe2, Fuel, Weight, Gauge, BadgeCheck, ClipboardList } from 'lucide-react'
import { site } from '../data/site'

const overview = [
  { key: 'Sécurité renforcée', desc: 'Citernes en acier carbone, normes Euro 3 / Euro 5, signalétique ADR hydrocarbure.', Icon: Shield },
  { key: 'Flotte spécialisée', desc: 'Configurations 6x4 et 8x4 dédiées au transport de carburant en grand volume.', Icon: Truck },
  { key: 'Couverture régionale', desc: "Opérations structurées pour l'approvisionnement en Afrique de l'Ouest.", Icon: Globe2 },
]

const needs = [
  {
    n: '01',
    title: 'Camions citernes 35 000 L',
    image: '/images/citernes/citerne-01.jpg',
    qty: 20,
    specs: [
      { label: 'Capacité', value: '35 000 Litres', Icon: Fuel },
      { label: 'Configuration', value: '8x4', Icon: Truck },
      { label: 'Carburant', value: 'Diesel', Icon: Gauge },
      { label: 'Norme', value: 'Euro 3 / Euro 5', Icon: BadgeCheck },
      { label: 'Produit transporté', value: 'Gasoil', Icon: Fuel },
      { label: 'Utilisation', value: 'Essence, gasoil, kérosène', Icon: ClipboardList },
    ],
  },
  {
    n: '02',
    title: 'Camions citernes 24 000 L',
    image: '/images/citernes/citerne-02.jpg',
    qty: 15,
    specs: [
      { label: 'Capacité', value: '24 000 Litres', Icon: Fuel },
      { label: 'Charge utile', value: '10 Tonnes', Icon: Weight },
      { label: 'Configuration', value: '8x4', Icon: Truck },
      { label: 'Norme', value: 'Euro 3 / Euro 5', Icon: BadgeCheck },
      { label: 'Produit transporté', value: 'Gasoil', Icon: Fuel },
      { label: 'Utilisation', value: 'Essence, gasoil, kérosène', Icon: ClipboardList },
    ],
  },
  {
    n: '03',
    title: 'Camions citernes 22 000 L',
    image: '/images/citernes/citerne-03.jpg',
    qty: 5,
    specs: [
      { label: 'Capacité', value: '22 000 Litres', Icon: Fuel },
      { label: 'Charge utile', value: '10 Tonnes', Icon: Weight },
      { label: 'Configuration', value: '6x4 · 12 roues', Icon: Truck },
      { label: 'Pompe de déchargement', value: "Débit jusqu'à 600 L/min", Icon: Gauge },
      { label: 'Norme', value: 'Euro 3 / Euro 5', Icon: BadgeCheck },
      { label: 'Produit transporté', value: 'Gasoil', Icon: Fuel },
    ],
  },
  {
    n: '04',
    title: 'Camions citernes 45 000 L',
    image: '/images/citernes/citerne-04.jpg',
    qty: 10,
    specs: [
      { label: 'Capacité', value: '45 000 Litres (45 m³)', Icon: Fuel },
      { label: 'Charge utile', value: '12 Tonnes', Icon: Weight },
      { label: 'Configuration', value: '8x4', Icon: Truck },
      { label: 'Pompe de déchargement', value: "Débit jusqu'à 600 L/min", Icon: Gauge },
      { label: 'Norme', value: 'Euro 3 / Euro 5', Icon: BadgeCheck },
      { label: 'Produit transporté', value: 'Gasoil', Icon: Fuel },
    ],
  },
]

const totalTrucks = needs.reduce((sum, n) => sum + n.qty, 0)

export default function Hydrocarbures() {
  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Dossier technique</p>
          <h1 className="font-display text-3xl md:text-5xl max-w-3xl leading-tight">
            Transport d'hydrocarbures — {totalTrucks} camions citernes, 4 configurations.
          </h1>
          <p className="mt-6 text-ivory/70 max-w-2xl leading-relaxed">
            {site.shortName} est spécialisée dans le transport routier de
            produits pétroliers (essence, gasoil, kérosène) en Afrique de
            l'Ouest. L'entreprise conçoit sa flotte de camions citernes
            autour de trois exigences : la sécurité du transport de matières
            dangereuses, la fiabilité opérationnelle et la capacité à couvrir
            de grands volumes sur des trajets exigeants.
          </p>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="container-tt py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {overview.map((o, i) => (
            <motion.div
              key={o.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-4">
                <o.Icon size={19} strokeWidth={1.5} className="text-brass" />
              </div>
              <h3 className="font-display text-xl text-forest mb-2">{o.key}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VUE D'ENSEMBLE */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <p className="eyebrow mb-3">Vue d'ensemble des besoins</p>
          <h2 className="font-display text-2xl md:text-3xl text-forest mb-2">
            Quatre configurations de camions citernes hydrocarbures.
          </h2>
          <p className="text-charcoal/60 text-sm mb-12">
            Capacité totale de la flotte : 1 620 000 litres.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {needs.map((n) => (
              <div key={n.n} className="bg-ivory rounded-sm p-6 border border-forest/10">
                <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-2">
                  Besoin {n.n}
                </p>
                <p className="font-display text-2xl text-forest mb-4">{n.title.replace('Camions citernes ', '')}</p>
                <p className="font-display text-3xl text-charcoal">{n.qty}</p>
                <p className="text-xs text-charcoal/50">camions requis</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FICHES TECHNIQUES */}
      <section className="container-tt py-24 space-y-24">
        {needs.map((n, i) => (
          <motion.div
            key={n.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`grid md:grid-cols-2 gap-12 items-start ${
              i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div>
              <img
                src={n.image}
                alt={n.title}
                className="w-full h-72 object-cover rounded-sm shadow-lg mb-6"
              />
              <div className="bg-forest text-ivory rounded-sm px-6 py-4">
                <p className="font-display text-3xl text-brass leading-none">{n.qty}</p>
                <p className="font-mono text-xs tracking-widest2 uppercase mt-1">camions requis</p>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-2">
                Besoin {n.n}
              </p>
              <h2 className="font-display text-3xl text-forest mb-6">{n.title}</h2>
              <p className="eyebrow mb-4">Fiche technique</p>
              <ul className="space-y-4">
                {n.specs.map((s) => (
                  <li key={s.label} className="flex items-start gap-3">
                    <s.Icon size={17} strokeWidth={1.5} className="text-brass mt-0.5 shrink-0" />
                    <span className="text-sm text-charcoal/60">
                      {s.label} — <strong className="text-charcoal font-medium">{s.value}</strong>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FIOUL */}
      <section className="container-tt py-4 pb-20">
        <p className="eyebrow mb-3">Autre produit transporté</p>
        <h2 className="font-display text-2xl md:text-3xl text-forest mb-10">
          Transport de fioul.
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/images/citernes/citerne-05.jpg"
            alt="Camion citerne fioul"
            className="w-full h-64 object-cover rounded-sm shadow-lg"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            src="/images/citernes/citerne-06.jpg"
            alt="Camion citerne fioul, vue arrière"
            className="w-full h-64 object-cover rounded-sm shadow-lg"
          />
        </div>
        <p className="text-charcoal/60 text-sm leading-relaxed mt-6 max-w-xl">
          {site.shortName} transporte également le fioul, aux côtés du
          gasoil. Contactez-nous pour les capacités et configurations
          disponibles selon votre besoin.
        </p>
      </section>


      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <p className="eyebrow mb-3">Synthèse comparative de la flotte</p>
          <h2 className="font-display text-2xl md:text-3xl text-forest mb-10">
            Récapitulatif des 4 besoins — {totalTrucks} camions citernes hydrocarbures.
          </h2>
          <div className="overflow-x-auto rounded-sm border border-forest/10">
            <table className="w-full text-sm bg-ivory">
              <thead>
                <tr className="bg-forest text-ivory text-left">
                  <th className="px-5 py-3 font-medium">Besoin</th>
                  <th className="px-5 py-3 font-medium">Quantité</th>
                  <th className="px-5 py-3 font-medium">Capacité</th>
                  <th className="px-5 py-3 font-medium">Configuration</th>
                  <th className="px-5 py-3 font-medium">Norme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Besoin 1', '20', '35 000 L', '8x4', 'Euro 3 / Euro 5'],
                  ['Besoin 2', '15', '24 000 L (10 T)', '8x4', 'Euro 3 / Euro 5'],
                  ['Besoin 3', '5', '22 000 L (10 T)', '6x4 · 12 roues', 'Euro 3 / Euro 5'],
                  ['Besoin 4', '10', '45 000 L (12 T)', '8x4', 'Euro 3 / Euro 5'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 1 ? 'bg-sage/20' : ''}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-5 py-3 text-charcoal/70 border-t border-forest/5">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-brass/90 text-charcoal font-medium">
                  <td className="px-5 py-3">TOTAL</td>
                  <td className="px-5 py-3">{totalTrucks}</td>
                  <td className="px-5 py-3">1 620 000 L</td>
                  <td className="px-5 py-3">4 configurations</td>
                  <td className="px-5 py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-tt py-20 text-center">
        <h2 className="font-display text-2xl md:text-3xl text-charcoal max-w-2xl mx-auto mb-4">
          {site.shortName} se tient à votre disposition pour finaliser les modalités de cette commande de flotte.
        </h2>
        <Link
          to="/contact"
          className="inline-block mt-6 rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
        >
          Nous contacter
        </Link>
      </section>
    </>
  )
}
