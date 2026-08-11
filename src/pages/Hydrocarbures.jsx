import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Truck, Globe2, Fuel, Weight, Gauge, BadgeCheck, ClipboardList,
  MapPin, Mountain, Route, Users, Eye, ClipboardCheck, FileCheck,
  Wrench, Radar, GraduationCap, AlertTriangle,
} from 'lucide-react'
import { site } from '../data/site'

const corridor = [
  { flag: '🇸🇳', name: 'Sénégal' },
  { flag: '🇬🇲', name: 'Gambie' },
  { flag: '🇬🇼', name: 'Guinée-Bissau' },
  { flag: '🇲🇷', name: 'Mauritanie' },
  { flag: '🇲🇱', name: 'Mali' },
]

const fuelTransportItems = [
  'Le transport de gasoil',
  "Le transport d'essence",
  'L\u2019approvisionnement des stations-service',
  'L\u2019approvisionnement des sites miniers',
  'L\u2019approvisionnement des centrales et installations industrielles',
  'L\u2019approvisionnement des chantiers et grands projets',
  'Les opérations de distribution entre dépôts et sites clients',
  'Les opérations de transport dédiées et régulières',
]

const solutions = [
  {
    title: 'Transport de carburants',
    Icon: Fuel,
    desc: "Des solutions de transport par camions-citernes hydrocarbures, adaptées aux différents volumes et aux contraintes opérationnelles des clients.",
    items: fuelTransportItems,
  },
  {
    title: 'Logistique dédiée aux sociétés minières',
    Icon: Mountain,
    desc: "Des solutions dédiées aux mines, carrières et grands projets industriels, avec des plans de transport adaptés aux contraintes des sites isolés, aux longues distances et aux besoins réguliers en carburant. Notre objectif : contribuer à la continuité des opérations de nos clients en assurant un approvisionnement régulier, sécurisé et planifié.",
    items: null,
  },
  {
    title: 'Transport transfrontalier',
    Icon: Route,
    desc: "Renforcer les corridors logistiques entre le Sénégal et les pays voisins pour faciliter la circulation des produits énergétiques dans la sous-région. Nos opérations internationales sont organisées autour de la planification des itinéraires, du suivi des véhicules, de la coordination documentaire et du respect des procédures applicables dans les pays traversés.",
    items: null,
    highlight: "Le corridor Dakar–Mali constitue un axe stratégique pour les échanges régionaux et l'approvisionnement du Mali, pays enclavé.",
  },
]

const securityPillars = [
  { label: 'Sécurité des personnes', Icon: Shield },
  { label: 'Sécurité des produits', Icon: Fuel },
  { label: 'Sécurité des véhicules', Icon: Truck },
  { label: 'Sécurité des opérations', Icon: ClipboardCheck },
  { label: "Protection de l'environnement", Icon: Globe2 },
]

const securityMeasures = [
  { label: 'Suivi et traçabilité des opérations', Icon: Radar },
  { label: 'Planification des rotations', Icon: ClipboardList },
  { label: 'Contrôle et maintenance de la flotte', Icon: Wrench },
  { label: 'Respect des procédures de chargement et de déchargement', Icon: FileCheck },
  { label: 'Suivi des livraisons', Icon: MapPin },
  { label: 'Gestion documentaire des opérations', Icon: ClipboardList },
  { label: 'Sensibilisation des conducteurs aux règles de sécurité', Icon: GraduationCap },
  { label: 'Maîtrise des risques liés au transport des produits dangereux', Icon: AlertTriangle },
]

const fleetCriteria = ['Volume à transporter', 'Distance', 'Fréquence des rotations', 'Type de produit', 'Destination', 'Contraintes du site', 'Exigences de sécurité']

const partners = [
  'Sociétés pétrolières et distributeurs de carburants',
  'Sociétés minières',
  'Entreprises industrielles',
  'Entreprises de BTP',
  'Centrales électriques',
  'Opérateurs énergétiques',
  'Stations-service',
  'Négociants et distributeurs de produits pétroliers',
  'Grands consommateurs de carburants',
  "Projets publics et privés d'infrastructures",
]

const contractTypes = ['Transport à la rotation', 'Contrats réguliers', 'Flotte dédiée', 'Prestations logistiques sur mesure']

const needs = [
  {
    n: '01',
    title: 'Camions citernes gasoil 35 000 L',
    image: '/images/citernes/citerne-01.jpg',
    desc: "Une configuration pensée pour les grands volumes sur les axes principaux. Sa capacité élevée et sa robustesse en font une solution adaptée aux rotations longue distance et à l'approvisionnement régulier des dépôts et plateformes logistiques.",
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
    title: 'Camions citernes gasoil 24 000 L',
    image: '/images/citernes/citerne-02.jpg',
    desc: "Une configuration intermédiaire, équilibrée entre capacité de chargement et souplesse d'exploitation. Idéale pour desservir les stations-service et les sites industriels sur des itinéraires réguliers.",
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
    title: 'Camions citernes gasoil 22 000 L',
    image: '/images/citernes/citerne-03.jpg',
    desc: "Une configuration compacte à haut débit de déchargement, particulièrement adaptée à la distribution locale et aux livraisons fréquentes sur des sites aux accès plus contraints.",
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
    title: 'Camions citernes gasoil 45 000 L',
    image: '/images/citernes/citerne-04.jpg',
    desc: "La configuration la plus volumineuse de notre flotte, conçue pour les opérations de grande envergure — approvisionnement de sites miniers isolés, centrales industrielles et contrats dédiés nécessitant des volumes importants par rotation.",
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

function SectionEyebrow({ children }) {
  return <p className="eyebrow mb-4">{children}</p>
}

export default function Hydrocarbures() {
  return (
    <>
      {/* HERO */}
      <section className="bg-forest text-ivory py-24">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Transport & logistique des hydrocarbures</p>
          <h1 className="font-display text-3xl md:text-5xl max-w-3xl leading-tight">
            L'énergie en mouvement, au Sénégal et dans la sous-région.
          </h1>
          <p className="mt-6 text-ivory/70 max-w-2xl leading-relaxed">
            {site.shortName} est une entreprise spécialisée dans le transport
            routier et la logistique des produits pétroliers et
            hydrocarbures, avec une ambition claire : devenir un partenaire
            de référence pour l'approvisionnement en carburants au Sénégal et
            la desserte des marchés de la sous-région ouest-africaine.
          </p>
          <p className="mt-4 text-ivory/70 max-w-2xl leading-relaxed">
            Grâce à une approche fondée sur la sécurité, la fiabilité, la
            ponctualité et la performance logistique, nous accompagnons les
            distributeurs pétroliers, sociétés minières, industriels,
            entreprises de BTP, opérateurs énergétiques, stations-service et
            grands consommateurs dans leurs besoins d'acheminement de
            carburants.
          </p>
        </div>
      </section>

      {/* COUVERTURE REGIONALE */}
      <section className="container-tt py-20">
        <SectionEyebrow>Couverture régionale</SectionEyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-forest mb-6 max-w-2xl">
          Une logistique pensée pour les enjeux énergétiques de l'Afrique de l'Ouest.
        </h2>
        <p className="text-charcoal/70 leading-relaxed max-w-2xl mb-4">
          Notre activité couvre le transport et l'acheminement de produits
          pétroliers depuis les points de chargement, dépôts et plateformes
          logistiques vers les sites de consommation et de distribution. Au
          Sénégal, {site.shortName} ambitionne de développer une couverture
          nationale permettant de desservir efficacement les principaux
          pôles économiques, industriels, miniers et énergétiques.
        </p>
        <p className="text-charcoal/70 leading-relaxed max-w-2xl mb-10">
          Notre stratégie s'étend également aux corridors internationaux
          reliant le Sénégal aux principaux marchés de la sous-région :
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {corridor.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-forest/10 rounded-sm py-6 flex flex-col items-center justify-center gap-2 hover:border-brass transition-colors"
            >
              <span className="text-2xl leading-none">{c.flag}</span>
              <span className="font-display text-sm text-forest text-center">{c.name}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-charcoal/60 text-sm leading-relaxed mt-8 max-w-2xl">
          Cette implantation régionale permet à {site.shortName} de proposer
          des solutions de transport transfrontalier et de logistique
          énergétique adaptées aux besoins des opérateurs régionaux.
        </p>
      </section>

      {/* NOS SOLUTIONS */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <SectionEyebrow>Nos solutions</SectionEyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-forest mb-14 max-w-2xl">
            Trois façons d'accompagner vos opérations énergétiques.
          </h2>

          <div className="space-y-16">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10"
              >
                <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shrink-0">
                  <s.Icon size={20} strokeWidth={1.5} className="text-brass" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-forest mb-3">{s.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed mb-4 max-w-2xl">{s.desc}</p>
                  {s.items && (
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-charcoal/65">
                          <span className="text-brass shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.highlight && (
                    <p className="mt-4 border-l-2 border-brass pl-4 text-sm text-charcoal/70 italic max-w-xl">
                      {s.highlight}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT SECURITE */}
      <section className="container-tt py-20">
        <SectionEyebrow>Notre engagement</SectionEyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-forest mb-4 max-w-2xl">
          Sécurité, traçabilité et performance.
        </h2>
        <p className="text-charcoal/70 leading-relaxed max-w-2xl mb-12">
          Le transport d'hydrocarbures exige un niveau élevé de maîtrise
          opérationnelle. Chez {site.shortName}, nous plaçons la sécurité au
          cœur de notre organisation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {securityPillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center"
            >
              <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-3 mx-auto">
                <p.Icon size={18} strokeWidth={1.5} className="text-brass" />
              </div>
              <p className="text-xs text-charcoal/65 leading-snug">{p.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="eyebrow mb-6">Notre organisation permet notamment</p>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {securityMeasures.map((m) => (
            <li key={m.label} className="flex items-start gap-3">
              <m.Icon size={17} strokeWidth={1.5} className="text-brass mt-0.5 shrink-0" />
              <span className="text-sm text-charcoal/70">{m.label}</span>
            </li>
          ))}
        </ul>

        <p className="text-charcoal/60 text-sm leading-relaxed mt-10 max-w-2xl border-t border-forest/10 pt-8">
          Au Sénégal, les dispositions applicables au transport des produits
          pétroliers prévoient notamment des exigences de licence et de
          traçabilité des livraisons. {site.shortName} inscrit donc son
          développement dans une démarche de conformité avec les exigences
          réglementaires et les standards de sécurité applicables.
        </p>
      </section>

      {/* FLOTTE */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <SectionEyebrow>Notre flotte</SectionEyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-forest mb-4 max-w-2xl">
            Une flotte adaptée aux besoins des clients.
          </h2>
          <p className="text-charcoal/70 leading-relaxed max-w-2xl mb-4">
            {site.shortName} développe progressivement une flotte de
            camions-citernes hydrocarbures de différentes capacités,
            permettant de répondre aussi bien aux besoins de distribution
            locale qu'aux opérations de transport longue distance et aux
            contrats dédiés. Notre ambition est de disposer d'une flotte
            moderne, robuste et adaptée aux réalités des corridors africains.
          </p>
          <p className="eyebrow mb-4 mt-8">Chaque solution peut être étudiée selon</p>
          <div className="flex flex-wrap gap-3 mb-14">
            {fleetCriteria.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="text-xs font-mono tracking-wide uppercase text-forest bg-ivory border border-forest/15 rounded-full px-4 py-2"
              >
                {c}
              </motion.span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {needs.map((n) => (
              <motion.div
                key={n.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-ivory rounded-sm p-6 border border-forest/10"
              >
                <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-2">
                  Besoin {n.n}
                </p>
                <p className="font-display text-2xl text-forest mb-3">{n.title.replace('Camions citernes gasoil ', '')}</p>
                <p className="text-xs text-charcoal/55 leading-relaxed">{n.desc}</p>
              </motion.div>
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
              <Link
                to="/contact"
                className="block bg-forest text-ivory rounded-sm px-6 py-4 hover:bg-forest-light transition-colors"
              >
                <p className="font-display text-lg text-brass leading-snug">Demander un devis</p>
                <p className="font-mono text-xs tracking-widest2 uppercase mt-1 text-ivory/70">Quantité et disponibilité sur demande</p>
              </Link>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-2">
                Besoin {n.n}
              </p>
              <h2 className="font-display text-3xl text-forest mb-4">{n.title}</h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">{n.desc}</p>
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
        <SectionEyebrow>Autre produit transporté</SectionEyebrow>
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

      {/* SYNTHESE COMPARATIVE */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <SectionEyebrow>Synthèse comparative de la flotte gasoil</SectionEyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-forest mb-10">
            Quatre configurations disponibles selon votre besoin.
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-sm border border-forest/10"
          >
            <table className="w-full text-sm bg-ivory">
              <thead>
                <tr className="bg-forest text-ivory text-left">
                  <th className="px-5 py-3 font-medium">Besoin</th>
                  <th className="px-5 py-3 font-medium">Capacité</th>
                  <th className="px-5 py-3 font-medium">Configuration</th>
                  <th className="px-5 py-3 font-medium">Norme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Besoin 1', '35 000 L', '8x4', 'Euro 3 / Euro 5'],
                  ['Besoin 2', '24 000 L (10 T)', '8x4', 'Euro 3 / Euro 5'],
                  ['Besoin 3', '22 000 L (10 T)', '6x4 · 12 roues', 'Euro 3 / Euro 5'],
                  ['Besoin 4', '45 000 L (12 T)', '8x4', 'Euro 3 / Euro 5'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 1 ? 'bg-sage/20' : ''}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-5 py-3 text-charcoal/70 border-t border-forest/5">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p className="text-charcoal/60 text-sm leading-relaxed mt-6 max-w-xl">
            Les quantités et la disponibilité sont étudiées au cas par cas,
            selon votre volume, votre fréquence de rotation et votre
            destination. Contactez-nous pour en discuter.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="container-tt py-20">
        <SectionEyebrow>Nos partenaires</SectionEyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-forest mb-4 max-w-2xl">
          Un partenaire pour les opérateurs pétroliers et industriels.
        </h2>
        <p className="text-charcoal/70 leading-relaxed max-w-2xl mb-10">
          {site.shortName} souhaite construire des partenariats durables
          avec :
        </p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mb-12">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 5) * 0.05 }}
              className="flex items-start gap-3"
            >
              <Users size={16} strokeWidth={1.5} className="text-brass mt-1 shrink-0" />
              <span className="text-sm text-charcoal/70">{p}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-charcoal/70 leading-relaxed max-w-2xl mb-6">
          Nous proposons des solutions pouvant être organisées selon les
          besoins et les exigences du client :
        </p>
        <div className="flex flex-wrap gap-3">
          {contractTypes.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="text-xs font-mono tracking-wide uppercase text-ivory bg-forest rounded-full px-4 py-2"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="bg-forest text-ivory py-24">
        <div className="container-tt">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-12 rounded-full bg-brass/15 border border-brass/40 flex items-center justify-center mb-6">
              <Eye size={20} strokeWidth={1.5} className="text-brass" />
            </div>
            <p className="eyebrow mb-4 text-brass">Notre vision</p>
            <h2 className="font-display text-2xl md:text-4xl max-w-2xl leading-tight mb-6">
              Faire de {site.shortName} un acteur majeur du transport des hydrocarbures en Afrique de l'Ouest.
            </h2>
            <p className="text-ivory/70 leading-relaxed max-w-2xl">
              Notre ambition est de construire progressivement un réseau
              logistique reliant le Sénégal aux principaux marchés de la
              sous-région, en nous appuyant sur une flotte performante, des
              équipes qualifiées, des partenaires fiables et une organisation
              orientée vers la sécurité et la satisfaction client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="container-tt py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-2xl md:text-3xl text-forest leading-snug max-w-2xl mx-auto mb-2">
            Nous transportons l'énergie.
          </p>
          <p className="font-display text-2xl md:text-3xl text-forest leading-snug max-w-2xl mx-auto mb-2">
            Nous sécurisons vos approvisionnements.
          </p>
          <p className="font-display text-2xl md:text-3xl text-forest leading-snug max-w-2xl mx-auto mb-10">
            Nous connectons les marchés.
          </p>
        </motion.div>
        <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-10">
          Sénégal · Gambie · Guinée-Bissau · Mauritanie · Mali · Afrique de l'Ouest
        </p>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
        >
          Nous contacter
        </Link>
      </section>
    </>
  )
}
