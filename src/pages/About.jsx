import { motion } from 'framer-motion'
import { Zap, Globe2, ClipboardCheck } from 'lucide-react'
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
          <p className="text-charcoal/70 leading-relaxed">
            Notre approche reste la même, quel que soit le projet : comprendre
            précisément le besoin avant de proposer une solution, plutôt que
            l'inverse.
          </p>
          <p className="text-charcoal/70 leading-relaxed">
            TRANSPORT & LOGISTIQUE DES HYDROCARBURES
TERRA-TRANSPORT — L’énergie en mouvement, au Sénégal et dans la sous-région
TERRA-TRANSPORT (TT) est une entreprise spécialisée dans le transport routier et la logistique des produits pétroliers et hydrocarbures, avec une ambition claire : devenir un partenaire de référence pour l’approvisionnement en carburants au Sénégal et la desserte des marchés de la sous-région ouest-africaine.
Grâce à une approche fondée sur la sécurité, la fiabilité, la ponctualité et la performance logistique, TERRA-TRANSPORT accompagne les distributeurs pétroliers, sociétés minières, industriels, entreprises de BTP, opérateurs énergétiques, stations-service et grands consommateurs dans leurs besoins d’acheminement de carburants.
Une logistique pensée pour les enjeux énergétiques de l’Afrique de l’Ouest
Notre activité couvre le transport et l’acheminement de produits pétroliers depuis les points de chargement, dépôts et plateformes logistiques vers les sites de consommation et de distribution.
Au Sénégal, TERRA-TRANSPORT ambitionne de développer une couverture nationale permettant de desservir efficacement les principaux pôles économiques, industriels, miniers et énergétiques.
Notre stratégie s’étend également aux corridors internationaux reliant le Sénégal aux principaux marchés de la sous-région, notamment :
🇸🇳 Sénégal
🇬🇲 Gambie
🇬🇼 Guinée-Bissau
🇲🇷 Mauritanie
🇲🇱 Mali
Cette implantation régionale permet à TERRA-TRANSPORT de proposer des solutions de transport transfrontalier et de logistique énergétique adaptées aux besoins des opérateurs régionaux.
NOS SOLUTIONS
Transport de carburants
TERRA-TRANSPORT met à disposition des solutions de transport par camions-citernes hydrocarbures, adaptées aux différents volumes et aux contraintes opérationnelles des clients.
Nous pouvons accompagner notamment :
le transport de gasoil ;
le transport d'essence ;
l'approvisionnement des stations-service ;
l'approvisionnement des sites miniers ;
l'approvisionnement des centrales et installations industrielles ;
l'approvisionnement des chantiers et grands projets ;
les opérations de distribution entre dépôts et sites clients ;
les opérations de transport dédiées et régulières.
Logistique dédiée aux sociétés minières
Le développement des activités minières en Afrique de l'Ouest génère des besoins importants en approvisionnement énergétique.
TERRA-TRANSPORT développe des solutions dédiées aux mines, carrières et grands projets industriels, avec des plans de transport adaptés aux contraintes des sites isolés, aux longues distances et aux besoins réguliers en carburant.
Notre objectif est de contribuer à la continuité des opérations de nos clients en assurant un approvisionnement régulier, sécurisé et planifié.
Transport transfrontalier
TERRA-TRANSPORT ambitionne de renforcer les corridors logistiques entre le Sénégal et les pays voisins afin de faciliter la circulation des produits énergétiques dans la sous-région.
Nos opérations internationales sont organisées autour de la planification des itinéraires, du suivi des véhicules, de la coordination documentaire et du respect des procédures applicables dans les pays traversés.
Le corridor Dakar–Mali, notamment, constitue un axe stratégique pour les échanges régionaux et l'approvisionnement du Mali, pays enclavé.
NOTRE ENGAGEMENT : SÉCURITÉ, TRAÇABILITÉ ET PERFORMANCE
Le transport d'hydrocarbures exige un niveau élevé de maîtrise opérationnelle.
Chez TERRA-TRANSPORT, nous plaçons la sécurité au cœur de notre organisation :
Sécurité des personnes • Sécurité des produits • Sécurité des véhicules • Sécurité des opérations • Protection de l'environnement
Nous développons une organisation permettant notamment :
le suivi et la traçabilité des opérations ;
la planification des rotations ;
le contrôle et la maintenance de la flotte ;
le respect des procédures de chargement et de déchargement ;
le suivi des livraisons ;
la gestion documentaire des opérations ;
la sensibilisation des conducteurs aux règles de sécurité ;
la maîtrise des risques liés au transport des produits dangereux.
Au Sénégal, les dispositions applicables au transport des produits pétroliers prévoient notamment des exigences de licence et de traçabilité des livraisons. TERRA-TRANSPORT inscrit donc son développement dans une démarche de conformité avec les exigences réglementaires et les standards de sécurité applicables.
UNE FLOTTE ADAPTÉE AUX BESOINS DES CLIENTS
TERRA-TRANSPORT développe progressivement une flotte de camions-citernes hydrocarbures de différentes capacités, permettant de répondre aussi bien aux besoins de distribution locale qu'aux opérations de transport longue distance et aux contrats dédiés.
Notre ambition est de disposer d'une flotte moderne, robuste et adaptée aux réalités des corridors africains.
Chaque solution peut être étudiée selon :
Volume à transporter • Distance • Fréquence des rotations • Type de produit • Destination • Contraintes du site • Exigences de sécurité
UN PARTENAIRE POUR LES OPÉRATEURS PÉTROLIERS ET INDUSTRIELS
TERRA-TRANSPORT souhaite construire des partenariats durables avec :
sociétés pétrolières et distributeurs de carburants ;
sociétés minières ;
entreprises industrielles ;
entreprises de BTP ;
centrales électriques ;
opérateurs énergétiques ;
stations-service ;
négociants et distributeurs de produits pétroliers ;
grands consommateurs de carburants ;
projets publics et privés d'infrastructures.
Nous proposons des solutions pouvant être organisées sous forme de transport à la rotation, contrats réguliers, flotte dédiée ou prestations logistiques sur mesure, selon les besoins et les exigences du client.
NOTRE VISION
Faire de TERRA-TRANSPORT un acteur majeur du transport des hydrocarbures en Afrique de l'Ouest.
Notre ambition est de construire progressivement un réseau logistique reliant le Sénégal aux principaux marchés de la sous-région, en nous appuyant sur une flotte performante, des équipes qualifiées, des partenaires fiables et une organisation orientée vers la sécurité et la satisfaction client.
TERRA-TRANSPORT
Nous transportons l'énergie.
Nous sécurisons vos approvisionnements.
Nous connectons les marchés.
Sénégal • Gambie • Guinée-Bissau • Mauritanie • Mali • Afrique de l'Ouest.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="/images/bus/bus-03.jpg"
          alt={site.name}
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
