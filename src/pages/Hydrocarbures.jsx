import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Truck, Globe2, Fuel, Weight, Gauge, BadgeCheck, ClipboardList, Clock, MapPin, Users, Award } from 'lucide-react'
import { site } from '../data/site'

const overview = [
  { 
    key: 'Sécurité renforcée', 
    desc: 'Citernes en acier carbone, normes Euro 3 / Euro 5, signalétique ADR hydrocarbure. Chaque véhicule est équipé de systèmes de détection de fuite et de dispositifs d\'urgence conformes aux standards internationaux.', 
    Icon: Shield 
  },
  { 
    key: 'Flotte spécialisée', 
    desc: 'Configurations 6x4 et 8x4 dédiées au transport de carburant en grand volume. Nos véhicules sont régulièrement entretenus et contrôlés pour garantir une fiabilité optimale sur les longues distances.', 
    Icon: Truck 
  },
  { 
    key: 'Couverture régionale', 
    desc: "Opérations structurées pour l'approvisionnement en Afrique de l'Ouest. Nous desservons le Sénégal, la Gambie, la Guinée-Bissau, la Mauritanie et le Mali, avec une capacité à nous adapter aux contraintes douanières et réglementaires de chaque pays.", 
    Icon: Globe2 
  },
]

// Données des configurations sans chiffres explicites
const needs = [
  {
    n: '01',
    title: 'Camions citernes grande capacité',
    image: '/images/citernes/citerne-01.jpg',
    specs: [
      { label: 'Capacité de transport', value: 'Volume adapté aux grandes rotations', Icon: Fuel },
      { label: 'Configuration', value: 'Châssis renforcé 8x4 pour stabilité et sécurité', Icon: Truck },
      { label: 'Motorisation', value: 'Moteur diesel haute performance', Icon: Gauge },
      { label: 'Normes', value: 'Conforme aux normes Euro 3 / Euro 5', Icon: BadgeCheck },
      { label: 'Produit transporté', value: 'Gasoil, essence, kérosène', Icon: Fuel },
      { label: 'Spécificité', value: 'Système de pompage haute capacité pour déchargement rapide', Icon: ClipboardList },
    ],
  },
  {
    n: '02',
    title: 'Camions citernes moyenne capacité',
    image: '/images/citernes/citerne-02.jpg',
    specs: [
      { label: 'Capacité de transport', value: 'Volume moyen idéal pour les dessertes régionales', Icon: Fuel },
      { label: 'Charge utile', value: 'Structure optimisée pour un excellent rapport poids/volume', Icon: Weight },
      { label: 'Configuration', value: 'Châssis 8x4 robuste', Icon: Truck },
      { label: 'Normes', value: 'Conforme aux normes Euro 3 / Euro 5', Icon: BadgeCheck },
      { label: 'Produit transporté', value: 'Gasoil, essence, kérosène', Icon: Fuel },
      { label: 'Spécificité', value: 'Équipement de sécurité renforcé pour les zones urbaines', Icon: ClipboardList },
    ],
  },
  {
    n: '03',
    title: 'Camions citernes pour zones exigeantes',
    image: '/images/citernes/citerne-03.jpg',
    specs: [
      { label: 'Capacité de transport', value: 'Volume adapté aux terrains difficiles', Icon: Fuel },
      { label: 'Charge utile', value: 'Conception allégée pour une mobilité accrue', Icon: Weight },
      { label: 'Configuration', value: 'Châssis 6x4 · 12 roues pour une meilleure adhérence', Icon: Truck },
      { label: 'Pompe de déchargement', value: 'Débit puissant pour des opérations rapides', Icon: Gauge },
      { label: 'Normes', value: 'Conforme aux normes Euro 3 / Euro 5', Icon: BadgeCheck },
      { label: 'Produit transporté', value: 'Gasoil, essence, kérosène', Icon: Fuel },
    ],
  },
  {
    n: '04',
    title: 'Camions citernes grand volume',
    image: '/images/citernes/citerne-04.jpg',
    specs: [
      { label: 'Capacité de transport', value: 'Volume maximal pour les opérations de grande envergure', Icon: Fuel },
      { label: 'Charge utile', value: 'Structure renforcée pour supporter de lourdes charges', Icon: Weight },
      { label: 'Configuration', value: 'Châssis 8x4 extra robuste', Icon: Truck },
      { label: 'Pompe de déchargement', value: 'Débit puissant pour des opérations rapides et efficaces', Icon: Gauge },
      { label: 'Normes', value: 'Conforme aux normes Euro 3 / Euro 5', Icon: BadgeCheck },
      { label: 'Produit transporté', value: 'Gasoil, essence, kérosène', Icon: Fuel },
    ],
  },
]

export default function Hydrocarbures() {
  return (
    <>
      {/* HERO */}
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Dossier technique</p>
          <h1 className="font-display text-3xl md:text-5xl max-w-3xl leading-tight">
            Transport d'hydrocarbures — Une flotte adaptée à vos besoins.
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

      {/* PRÉSENTATION DES ENGAGEMENTS */}
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

      {/* VUE D'ENSEMBLE DES CONFIGURATIONS */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <p className="eyebrow mb-3">Vue d'ensemble des besoins</p>
          <h2 className="font-display text-2xl md:text-3xl text-forest mb-2">
            Quatre configurations de camions citernes hydrocarbures.
          </h2>
          <p className="text-charcoal/60 text-sm mb-12">
            Une flotte modulable pour répondre à l'ensemble de vos besoins logistiques.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {needs.map((n) => (
              <div key={n.n} className="bg-ivory rounded-sm p-6 border border-forest/10 hover:shadow-lg transition-shadow">
                <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-2">
                  Configuration {n.n}
                </p>
                <p className="font-display text-xl text-forest mb-4">{n.title}</p>
                <div className="mt-2">
                  <p className="text-xs text-charcoal/50">
                    {n.n === '01' && 'Capacité élevée pour les grandes rotations'}
                    {n.n === '02' && 'Capacité moyenne pour les dessertes régionales'}
                    {n.n === '03' && 'Conçu pour les terrains difficiles et zones exigeantes'}
                    {n.n === '04' && 'Volume maximal pour les opérations d\'envergure'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-charcoal/60 text-sm max-w-xl mx-auto">
              {site.shortName} vous accompagne dans le choix des configurations adaptées à vos besoins.
              Contactez-nous pour une étude personnalisée de votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* FICHES TECHNIQUES DÉTAILLÉES */}
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
              <div className="bg-forest text-ivory rounded-sm px-6 py-6">
                <p className="font-display text-2xl text-brass leading-none">Flotte disponible</p>
                <p className="font-mono text-xs tracking-widest2 uppercase mt-1">
                  {n.n === '01' && 'Disponibilité selon vos besoins de transport'}
                  {n.n === '02' && 'Adapté à vos rotations régionales'}
                  {n.n === '03' && 'Solution pour terrains exigeants'}
                  {n.n === '04' && 'Capacité pour grandes opérations'}
                </p>
                <p className="text-ivory/60 text-xs mt-3">
                  {n.n === '01' && 'Contactez-nous pour connaître les disponibilités et les conditions de location ou d\'achat.'}
                  {n.n === '02' && 'Nous vous proposons des solutions flexibles selon vos volumes et vos fréquences.'}
                  {n.n === '03' && 'Étude personnalisée de vos besoins pour une solution parfaitement adaptée.'}
                  {n.n === '04' && 'Pour les projets d\'envergure, nous vous accompagnons dans la constitution de votre flotte.'}
                </p>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-2">
                Configuration {n.n}
              </p>
              <h2 className="font-display text-3xl text-forest mb-4">{n.title}</h2>
              <p className="eyebrow mb-4">Fiche technique détaillée</p>
              
              {/* Descriptions introductives par configuration */}
              <div className="mb-6 p-4 bg-sage/20 rounded-sm border-l-4 border-brass">
                <p className="text-sm text-charcoal/70 italic">
                  {n.n === '01' && 'Cette configuration est idéale pour les opérations de grande envergure nécessitant des rotations importantes. Parfaitement adaptée aux longues distances et aux approvisionnements réguliers.'}
                  {n.n === '02' && 'Cette configuration polyvalente convient aussi bien aux dessertes urbaines qu\'aux trajets régionaux. Son excellent rapport capacité/manœuvrabilité en fait un choix de prédilection pour les opérateurs pétroliers.'}
                  {n.n === '03' && 'Spécialement conçue pour les zones difficiles d\'accès, cette configuration allie robustesse et agilité. Idéale pour les sites miniers, les chantiers isolés ou les routes secondaires.'}
                  {n.n === '04' && 'Cette configuration de pointe offre une capacité de transport maximale pour les projets d\'envergure. Conçue pour les opérations intensives et les approvisionnements de grandes infrastructures.'}
                </p>
              </div>

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

              {/* Description complémentaire */}
              <div className="mt-6 p-4 bg-forest/5 rounded-sm border border-forest/10">
                <p className="text-xs text-charcoal/60 leading-relaxed">
                  <strong className="text-forest">À propos de cette configuration :</strong>{' '}
                  {n.n === '01' && 'Les camions citernes grande capacité sont équipés de systèmes de sécurité avancés, de dispositifs de lutte contre l\'incendie et de traçabilité GPS. Ils répondent aux exigences des transporteurs pétroliers les plus exigeants.'}
                  {n.n === '02' && 'Cette configuration moyenne capacité est particulièrement appréciée pour sa polyvalence. Elle permet d\'accéder aux zones urbaines tout en maintenant une capacité de transport significative pour les stations-service et dépôts.'}
                  {n.n === '03' && 'La configuration 6x4 avec 12 roues offre une traction exceptionnelle sur les terrains meubles ou accidentés. Ses réservoirs renforcés et son châssis surélevé en font un véhicule de choix pour les opérations en zones difficiles.'}
                  {n.n === '04' && 'Les camions citernes grand volume sont la solution privilégiée pour les grands projets énergétiques, les approvisionnements de centrales thermiques et les opérations de distribution à grande échelle.'}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FIoul - section enrichie */}
      <section className="container-tt py-4 pb-20">
        <p className="eyebrow mb-3">Autre produit transporté</p>
        <h2 className="font-display text-2xl md:text-3xl text-forest mb-10">
          Transport de fioul.
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/citernes/citerne-05.jpg"
              alt="Camion citerne fioul"
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-sm">
              <p className="text-ivory text-xs font-medium">Camion citerne fioul — vue latérale</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <img
              src="/images/citernes/citerne-06.jpg"
              alt="Camion citerne fioul, vue arrière"
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-sm">
              <p className="text-ivory text-xs font-medium">Camion citerne fioul — vue arrière</p>
            </div>
          </motion.div>
        </div>
        <div className="mt-6 max-w-2xl">
          <p className="text-charcoal/60 text-sm leading-relaxed">
            {site.shortName} transporte également le fioul, aux côtés du gasoil, dans des conditions de sécurité optimales. 
            Nos citernes sont adaptées pour le transport de produits lourds et bénéficient de systèmes de chauffage et de 
            maintien en température pour garantir la fluidité du produit. Contactez-nous pour discuter des capacités et 
            configurations disponibles selon votre besoin spécifique.
          </p>
        </div>
      </section>

      {/* TABLEAU RÉCAPITULATIF SANS CHIFFRES */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <p className="eyebrow mb-3">Synthèse comparative de la flotte</p>
          <h2 className="font-display text-2xl md:text-3xl text-forest mb-4">
            Récapitulatif des configurations disponibles
          </h2>
          <p className="text-charcoal/60 text-sm mb-10 max-w-xl">
            {site.shortName} met à votre disposition un large choix de configurations. 
            Chaque besoin est unique : contactez-nous pour définir ensemble la solution la plus adaptée à vos opérations.
          </p>
          <div className="overflow-x-auto rounded-sm border border-forest/10">
            <table className="w-full text-sm bg-ivory">
              <thead>
                <tr className="bg-forest text-ivory text-left">
                  <th className="px-5 py-3 font-medium">Configuration</th>
                  <th className="px-5 py-3 font-medium">Capacité indicative</th>
                  <th className="px-5 py-3 font-medium">Type de châssis</th>
                  <th className="px-5 py-3 font-medium">Normes</th>
                  <th className="px-5 py-3 font-medium">Idéal pour</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Grande capacité', 'Élevée — pour les grandes rotations', '8x4 renforcé', 'Euro 3 / Euro 5', 'Grandes distances'],
                  ['Moyenne capacité', 'Modulable — dessertes régionales', '8x4 robuste', 'Euro 3 / Euro 5', 'Zones urbaines et régionales'],
                  ['Zones exigeantes', 'Adaptée — terrains difficiles', '6x4 · 12 roues', 'Euro 3 / Euro 5', 'Sites miniers et isolés'],
                  ['Grand volume', 'Maximale — opérations d\'envergure', '8x4 extra robuste', 'Euro 3 / Euro 5', 'Grands projets'],
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
                  <td className="px-5 py-3">Flotte complète disponible</td>
                  <td className="px-5 py-3">4 configurations</td>
                  <td className="px-5 py-3">—</td>
                  <td className="px-5 py-3">Tous vos besoins</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-charcoal/40 mt-4 text-center">
            * Les capacités et configurations sont données à titre indicatif. Contactez-nous pour une étude personnalisée.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-tt py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
            {site.shortName} se tient à votre disposition pour finaliser les modalités de votre commande de flotte.
          </h2>
          <p className="text-charcoal/60 text-sm mb-6 max-w-xl mx-auto">
            Que vous ayez besoin d'un camion citerne pour une opération ponctuelle ou d'une flotte complète pour vos approvisionnements réguliers, 
            notre équipe est à votre écoute pour vous proposer la solution la plus adaptée à vos contraintes opérationnelles et à vos volumes.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
          }
