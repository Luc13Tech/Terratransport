import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

const sections = [
  {
    n: '01',
    title: 'Informations générales sur le marché',
    items: [
      'Nom du projet ou de la mine concernée.',
      'Localisation exacte du site de chargement.',
      'Localisation exacte du site de déchargement.',
      "Nom du maître d'ouvrage ou de la société minière.",
      'Nature des opérations envisagées : transport interne, corridor logistique, exportation, etc.',
    ],
  },
  {
    n: '02',
    title: 'Flotte de véhicules',
    items: [
      'Nombre total de camions requis pour le marché.',
      'Type de camions souhaités : benne, semi-remorque, tracteur routier, etc.',
      'Capacité de chargement exigée par camion, en tonnes.',
      'Caractéristiques techniques particulières demandées.',
      'Année minimale de fabrication acceptée.',
      'Équipements obligatoires : GPS, caméra embarquée, système de pesage, etc.',
    ],
  },
  {
    n: '03',
    title: 'Nature du minerai',
    items: [
      'Type de minerai à transporter.',
      'Densité approximative de la matière.',
      'Classification éventuelle comme matière dangereuse.',
      'Conditions particulières de manutention ou de sécurité à respecter.',
    ],
  },
  {
    n: '04',
    title: 'Distances et itinéraires',
    items: [
      'Distance exacte entre le point de chargement et le point de déchargement.',
      'Nature des routes empruntées : bitume, piste, route minière.',
      'État actuel des infrastructures routières.',
      "Temps moyen d'un aller-retour complet.",
      'Nombre estimatif de rotations par camion et par jour.',
    ],
  },
  {
    n: '05',
    title: 'Volume des opérations',
    items: [
      'Volume journalier à transporter.',
      'Volume mensuel prévisionnel.',
      'Volume annuel prévisionnel.',
      "Planning d'exploitation envisagé : 24h/24, équipes de jour, équipes de nuit.",
    ],
  },
  {
    n: '06',
    title: 'Conditions financières',
    items: [
      'Prix de location proposé par camion.',
      'Mode de rémunération : mensuel, journalier, par rotation ou par tonne transportée.',
      'Devise de paiement retenue.',
      'Modalités de paiement.',
      'Délai de règlement des factures.',
      'Conditions de révision éventuelle des prix.',
    ],
  },
  {
    n: '07',
    title: 'Durée du contrat',
    items: [
      'Durée initiale envisagée.',
      'Conditions de renouvellement.',
      "Période d'essai éventuelle.",
      'Conditions de résiliation.',
    ],
  },
  {
    n: '08',
    title: "Charges d'exploitation",
    items: [
      'Carburant, lubrifiants et pneumatiques.',
      'Chauffeurs, hébergement et frais associés.',
      'Entretien courant et maintenance lourde.',
      'Péages, assurances et sécurité.',
      'Frais administratifs et taxes locales.',
      'Répartition claire de chaque charge entre les parties.',
    ],
  },
  {
    n: '09',
    title: 'Garanties',
    items: [
      'Garantie bancaire exigée.',
      'Caution de bonne exécution.',
      'Assurance responsabilité civile et assurance des marchandises.',
      'Garantie de disponibilité de la flotte.',
      'Garanties financières et garanties de performance.',
    ],
  },
  {
    n: '10',
    title: 'Obligations réglementaires',
    items: [
      'Licences et autorisations de transport exigées.',
      'Conformité aux réglementations de la République de Guinée.',
      'Exigences environnementales applicables.',
      'Exigences HSE (Hygiène, Sécurité, Environnement).',
    ],
  },
  {
    n: '11',
    title: 'Responsabilités',
    items: [
      'Chargement, déchargement et pesage.',
      'Contrôle qualité de la marchandise.',
      'Sécurité des marchandises en transit.',
      'Gestion des incidents et cas de force majeure.',
    ],
  },
  {
    n: '12',
    title: 'Indicateurs de performance (KPI)',
    items: [
      'Taux de disponibilité minimal exigé des camions.',
      'Délai maximal de livraison.',
      "Temps d'attente autorisé sur site.",
      'Objectifs de production et pénalités applicables en cas de non-performance.',
    ],
  },
  {
    n: '13',
    title: 'Informations complémentaires',
    items: [
      'Calendrier prévisionnel de démarrage du projet.',
      "Prévisions d'évolution du volume sur plusieurs années et possibilités d'extension du contrat.",
      'Exigences en matière de personnel local et procédures de sûreté sur les sites miniers.',
      "Conditions d'accès aux sites, horaires de chargement/déchargement et limitations de poids sur les axes routiers.",
      'Exigences relatives à la géolocalisation et au suivi des véhicules.',
      'Assurances obligatoires pour les véhicules et les équipages.',
      'Modalités de règlement des litiges, pénalités et bonus de performance.',
      "Exigences relatives aux rapports d'exploitation : quotidiens, hebdomadaires et mensuels.",
    ],
  },
]

export default function RFIGuinee() {
  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Demande d'informations (RFI)</p>
          <h1 className="font-display text-3xl md:text-5xl max-w-3xl leading-tight">
            Projet de transport logistique de minerais — République de Guinée, Conakry.
          </h1>
          <p className="mt-6 text-ivory/70 max-w-2xl leading-relaxed">
            Conformément à notre vocation d'industrie mobile pour
            l'exploitation minière en Afrique, {site.shortName} prépare une
            étude de faisabilité et une offre de partenariat pour un marché
            de transport logistique de minerais en République de Guinée.
            Nous sollicitons à cet effet les informations techniques,
            opérationnelles, financières et contractuelles détaillées
            ci-dessous. Elles nous permettront d'évaluer précisément les
            moyens à mobiliser, les coûts d'exploitation, les risques et les
            conditions de réalisation du projet.
          </p>
        </div>
      </section>

      <section className="container-tt py-20">
        <div className="grid gap-16">
          {sections.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-10 border-t border-forest/10 pt-10"
            >
              <div>
                <p className="font-mono text-3xl text-brass/70">{s.n}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl text-forest mb-5">{s.title}</h2>
                <ul className="space-y-3">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-charcoal/70 text-[15px] leading-relaxed">
                      <span className="text-brass mt-1 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-sage/30 py-20">
        <div className="container-tt max-w-2xl">
          <p className="eyebrow mb-4">Conclusion</p>
          <h2 className="font-display text-2xl md:text-3xl text-forest mb-6">
            Vers une proposition technique et financière fiable.
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            La transmission de ces informations permettra à {site.shortName}{' '}
            d'élaborer une proposition technique et financière fiable,
            conforme aux exigences du projet et aux standards internationaux
            du transport logistique minier.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Ces éléments complémentaires permettront également l'élaboration
            d'un contrat d'exploitation entre les parties dans les meilleurs
            délais.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-10">
            Nous vous remercions par avance de votre collaboration et restons
            à votre entière disposition pour tout complément d'information.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
          >
            Nous transmettre vos informations
          </Link>
        </div>
      </section>
    </>
  )
}
