import { motion } from 'framer-motion'
import { Zap, Globe2, ClipboardCheck, Shield, Truck, Fuel, MapPin, Clock, Award, Users, Settings } from 'lucide-react'
import { site } from '../data/site'

const values = [
  {
    title: 'Réactivité',
    desc: 'Une demande, une réponse rapide — sans intermédiaire superflu. Notre équipe est mobilisée pour vous apporter des solutions concrètes dans les plus brefs délais.',
    Icon: Zap,
  },
  {
    title: 'Réseau panafricain',
    desc: 'Un ancrage panafricain, pensé pour accompagner nos clients où que leur activité les mène sur le continent. Nous couvrons les principaux corridors économiques d\'Afrique de l\'Ouest.',
    Icon: Globe2,
  },
  {
    title: 'Traçabilité',
    desc: 'Un suivi clair de votre commande, du premier échange à la livraison. La transparence est au cœur de notre relation client.',
    Icon: ClipboardCheck,
  },
]

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Qui sommes-nous</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            {site.shortName} — L'énergie en mouvement, au Sénégal et dans la sous-région.
          </h1>
          <p className="mt-4 text-ivory/70 max-w-xl text-sm">
            Transport routier et logistique des produits pétroliers et hydrocarbures
          </p>
        </div>
      </section>

      {/* SECTION PRÉSENTATION GÉNÉRALE */}
      <section className="container-tt py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-3">À propos</p>
            <h2 className="font-display text-3xl text-forest mb-6">Notre mission</h2>
            
            {/* Présentation générale */}
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                <strong className="text-forest">{site.shortName} (TT)</strong> est une entreprise spécialisée dans le transport routier et la logistique des produits pétroliers et hydrocarbures, avec une ambition claire : devenir un partenaire de référence pour l'approvisionnement en carburants au Sénégal et la desserte des marchés de la sous-région ouest-africaine.
              </p>
              <p>
                Grâce à une approche fondée sur la sécurité, la fiabilité, la ponctualité et la performance logistique, {site.shortName} accompagne les distributeurs pétroliers, sociétés minières, industriels, entreprises de BTP, opérateurs énergétiques, stations-service et grands consommateurs dans leurs besoins d'acheminement de carburants.
              </p>
            </div>

            {/* Bloc : Une logistique pensée pour les enjeux énergétiques */}
            <div className="mt-8 p-6 bg-sage/20 rounded-sm border-l-4 border-brass">
              <h3 className="font-display text-xl text-forest mb-3">
                Une logistique pensée pour les enjeux énergétiques de l'Afrique de l'Ouest
              </h3>
              <div className="space-y-3 text-charcoal/70 leading-relaxed text-sm">
                <p>
                  Notre activité couvre le transport et l'acheminement de produits pétroliers depuis les points de chargement, dépôts et plateformes logistiques vers les sites de consommation et de distribution.
                </p>
                <p>
                  Au Sénégal, {site.shortName} ambitionne de développer une couverture nationale permettant de desservir efficacement les principaux pôles économiques, industriels, miniers et énergétiques.
                </p>
              </div>
            </div>

            {/* Bloc : Stratégie internationale */}
            <div className="mt-6 p-6 bg-forest/5 rounded-sm border border-forest/10">
              <h3 className="font-display text-lg text-forest mb-3">
                Notre stratégie internationale
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-sm mb-4">
                Notre stratégie s'étend également aux corridors internationaux reliant le Sénégal aux principaux marchés de la sous-région, notamment :
              </p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇸🇳</span>
                  <span className="text-charcoal/70 font-medium">Sénégal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇬🇲</span>
                  <span className="text-charcoal/70 font-medium">Gambie</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇬🇼</span>
                  <span className="text-charcoal/70 font-medium">Guinée-Bissau</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇲🇷</span>
                  <span className="text-charcoal/70 font-medium">Mauritanie</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇲🇱</span>
                  <span className="text-charcoal/70 font-medium">Mali</span>
                </div>
              </div>
              <p className="text-charcoal/60 text-xs mt-4 leading-relaxed">
                Cette implantation régionale permet à {site.shortName} de proposer des solutions de transport transfrontalier et de logistique énergétique adaptées aux besoins des opérateurs régionaux.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <img
              src="/images/bus/bus-03.jpg"
              alt={site.name}
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
            <div className="bg-forest/5 p-4 rounded-sm border border-forest/10">
              <p className="text-xs text-charcoal/60 leading-relaxed">
                <strong className="text-forest">TERRA-TRANSPORT</strong> — Nous transportons l'énergie. 
                Nous sécurisons vos approvisionnements. Nous connectons les marchés.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION NOS SOLUTIONS */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <p className="eyebrow mb-3">Notre offre</p>
          <h2 className="font-display text-3xl text-forest mb-10">Nos solutions</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solution 1 : Transport de carburants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-ivory p-6 rounded-sm shadow-sm border border-forest/5 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-4">
                <Fuel size={19} strokeWidth={1.5} className="text-brass" />
              </div>
              <h3 className="font-display text-xl text-forest mb-3">Transport de carburants</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                {site.shortName} met à disposition des solutions de transport par camions-citernes hydrocarbures, adaptées aux différents volumes et aux contraintes opérationnelles des clients.
              </p>
              <div className="space-y-1 text-xs text-charcoal/60">
                <p className="flex items-center gap-2">• Transport de gasoil</p>
                <p className="flex items-center gap-2">• Transport d'essence</p>
                <p className="flex items-center gap-2">• Approvisionnement des stations-service</p>
                <p className="flex items-center gap-2">• Approvisionnement des sites miniers</p>
                <p className="flex items-center gap-2">• Approvisionnement des centrales et installations industrielles</p>
                <p className="flex items-center gap-2">• Approvisionnement des chantiers et grands projets</p>
                <p className="flex items-center gap-2">• Opérations de distribution entre dépôts et sites clients</p>
                <p className="flex items-center gap-2">• Opérations de transport dédiées et régulières</p>
              </div>
            </motion.div>

            {/* Solution 2 : Logistique minière */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-ivory p-6 rounded-sm shadow-sm border border-forest/5 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-4">
                <Settings size={19} strokeWidth={1.5} className="text-brass" />
              </div>
              <h3 className="font-display text-xl text-forest mb-3">Logistique dédiée aux sociétés minières</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                Le développement des activités minières en Afrique de l'Ouest génère des besoins importants en approvisionnement énergétique.
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {site.shortName} développe des solutions dédiées aux mines, carrières et grands projets industriels, avec des plans de transport adaptés aux contraintes des sites isolés, aux longues distances et aux besoins réguliers en carburant.
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed mt-3">
                <strong className="text-forest">Notre objectif :</strong> contribuer à la continuité des opérations de nos clients en assurant un approvisionnement régulier, sécurisé et planifié.
              </p>
            </motion.div>

            {/* Solution 3 : Transport transfrontalier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-ivory p-6 rounded-sm shadow-sm border border-forest/5 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mb-4">
                <MapPin size={19} strokeWidth={1.5} className="text-brass" />
              </div>
              <h3 className="font-display text-xl text-forest mb-3">Transport transfrontalier</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                {site.shortName} ambitionne de renforcer les corridors logistiques entre le Sénégal et les pays voisins afin de faciliter la circulation des produits énergétiques dans la sous-région.
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Nos opérations internationales sont organisées autour de la planification des itinéraires, du suivi des véhicules, de la coordination documentaire et du respect des procédures applicables dans les pays traversés.
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed mt-3">
                <strong className="text-forest">Le corridor Dakar–Mali</strong>, notamment, constitue un axe stratégique pour les échanges régionaux et l'approvisionnement du Mali, pays enclavé.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION ENGAGEMENTS */}
      <section className="container-tt py-20">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-3 text-center">Notre engagement</p>
          <h2 className="font-display text-3xl text-forest text-center mb-4">
            Sécurité, traçabilité et performance
          </h2>
          <p className="text-charcoal/60 text-sm text-center max-w-2xl mx-auto mb-10">
            Le transport d'hydrocarbures exige un niveau élevé de maîtrise opérationnelle. 
            Chez {site.shortName}, nous plaçons la sécurité au cœur de notre organisation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne gauche : Piliers de sécurité */}
            <div className="bg-sage/20 p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-brass" />
                <h3 className="font-display text-xl text-forest">Nos piliers de sécurité</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-ivory p-3 rounded-sm text-center text-xs font-medium text-forest border border-forest/5">
                  Sécurité des personnes
                </div>
                <div className="bg-ivory p-3 rounded-sm text-center text-xs font-medium text-forest border border-forest/5">
                  Sécurité des produits
                </div>
                <div className="bg-ivory p-3 rounded-sm text-center text-xs font-medium text-forest border border-forest/5">
                  Sécurité des véhicules
                </div>
                <div className="bg-ivory p-3 rounded-sm text-center text-xs font-medium text-forest border border-forest/5">
                  Sécurité des opérations
                </div>
                <div className="bg-ivory p-3 rounded-sm text-center text-xs font-medium text-forest border border-forest/5 col-span-2">
                  Protection de l'environnement
                </div>
              </div>
            </div>

            {/* Colonne droite : Moyens de contrôle */}
            <div className="bg-forest/5 p-8 rounded-sm border border-forest/10">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck size={24} className="text-brass" />
                <h3 className="font-display text-xl text-forest">Notre organisation</h3>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5">•</span>
                  Suivi et traçabilité des opérations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5">•</span>
                  Planification des rotations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5">•</span>
                  Contrôle et maintenance de la flotte
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5">•</span>
                  Respect des procédures de chargement et de déchargement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5">•</span>
                  Suivi des livraisons
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5">•</span>
                  Gestion documentaire des opérations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5">•</span>
                  Sensibilisation des conducteurs aux règles de sécurité
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5">•</span>
                  Maîtrise des risques liés au transport des produits dangereux
                </li>
              </ul>
            </div>
          </div>

          {/* Conformité réglementaire */}
          <div className="mt-8 p-6 bg-forest text-ivory rounded-sm">
            <p className="text-sm leading-relaxed">
              Au Sénégal, les dispositions applicables au transport des produits pétroliers prévoient notamment des exigences de licence et de traçabilité des livraisons. 
              <strong className="text-brass"> {site.shortName}</strong> inscrit donc son développement dans une démarche de conformité avec les exigences réglementaires et les standards de sécurité applicables.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION FLOTTE */}
      <section className="bg-sage/30 py-20">
        <div className="container-tt">
          <p className="eyebrow mb-3 text-center">Notre flotte</p>
          <h2 className="font-display text-3xl text-forest text-center mb-10">
            Une flotte adaptée aux besoins des clients
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-ivory p-8 rounded-sm shadow-sm border border-forest/5">
              <p className="text-charcoal/70 leading-relaxed mb-4">
                {site.shortName} développe progressivement une flotte de camions-citernes hydrocarbures de différentes capacités, permettant de répondre aussi bien aux besoins de distribution locale qu'aux opérations de transport longue distance et aux contrats dédiés.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                <strong className="text-forest">Notre ambition</strong> est de disposer d'une flotte moderne, robuste et adaptée aux réalités des corridors africains.
              </p>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-sage/20 rounded-sm">
                  <p className="text-xs font-medium text-forest">Volume à transporter</p>
                </div>
                <div className="p-3 bg-sage/20 rounded-sm">
                  <p className="text-xs font-medium text-forest">Distance</p>
                </div>
                <div className="p-3 bg-sage/20 rounded-sm">
                  <p className="text-xs font-medium text-forest">Fréquence des rotations</p>
                </div>
                <div className="p-3 bg-sage/20 rounded-sm">
                  <p className="text-xs font-medium text-forest">Type de produit</p>
                </div>
                <div className="p-3 bg-sage/20 rounded-sm">
                  <p className="text-xs font-medium text-forest">Destination</p>
                </div>
                <div className="p-3 bg-sage/20 rounded-sm">
                  <p className="text-xs font-medium text-forest">Contraintes du site</p>
                </div>
                <div className="p-3 bg-sage/20 rounded-sm col-span-2">
                  <p className="text-xs font-medium text-forest">Exigences de sécurité</p>
                </div>
              </div>
              <p className="text-charcoal/50 text-xs text-center mt-4">
                Chaque solution peut être étudiée selon ces critères
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PARTENAIRES */}
      <section className="container-tt py-20">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-3 text-center">Nos partenaires</p>
          <h2 className="font-display text-3xl text-forest text-center mb-4">
            Un partenaire pour les opérateurs pétroliers et industriels
          </h2>
          <p className="text-charcoal/60 text-sm text-center max-w-2xl mx-auto mb-10">
            {site.shortName} souhaite construire des partenariats durables avec :
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Sociétés pétrolières et distributeurs de carburants',
              'Sociétés minières',
              'Entreprises industrielles',
              'Entreprises de BTP',
              'Centrales électriques',
              'Opérateurs énergétiques',
              'Stations-service',
              'Négociants et distributeurs de produits pétroliers',
              'Grands consommateurs de carburants',
              'Projets publics et privés d\'infrastructures',
            ].map((item, i) => (
              <div key={i} className="bg-sage/20 p-3 rounded-sm text-center text-xs font-medium text-forest border border-forest/5">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-forest/5 rounded-sm border border-forest/10">
            <p className="text-charcoal/70 text-sm leading-relaxed text-center">
              Nous proposons des solutions pouvant être organisées sous forme de transport à la rotation, 
              contrats réguliers, flotte dédiée ou prestations logistiques sur mesure, 
              selon les besoins et les exigences du client.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION VISION */}
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4 text-brass">Notre vision</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Faire de {site.shortName} un acteur majeur du transport des hydrocarbures en Afrique de l'Ouest.
          </h2>
          <p className="text-ivory/70 leading-relaxed">
            Notre ambition est de construire progressivement un réseau logistique reliant le Sénégal aux principaux marchés de la sous-région, en nous appuyant sur une flotte performante, des équipes qualifiées, des partenaires fiables et une organisation orientée vers la sécurité et la satisfaction client.
          </p>

          <div className="mt-10 pt-10 border-t border-ivory/10">
            <p className="font-display text-2xl text-brass">TERRA-TRANSPORT</p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-ivory/60">
              <span>Nous transportons l'énergie.</span>
              <span>Nous sécurisons vos approvisionnements.</span>
              <span>Nous connectons les marchés.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-ivory/40">
              <span>Sénégal</span>
              <span>•</span>
              <span>Gambie</span>
              <span>•</span>
              <span>Guinée-Bissau</span>
              <span>•</span>
              <span>Mauritanie</span>
              <span>•</span>
              <span>Mali</span>
              <span>•</span>
              <span>Afrique de l'Ouest</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="container-tt py-20">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Nos valeurs fondamentales</p>
          <h2 className="font-display text-3xl text-forest">Ce qui nous anime</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-ivory p-8 rounded-sm shadow-sm border border-forest/5 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center mx-auto mb-4">
                <v.Icon size={22} strokeWidth={1.5} className="text-brass" />
              </div>
              <h3 className="font-display text-xl text-forest mb-2">{v.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
                }
