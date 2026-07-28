import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { vehicles } from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'
import TruckCarousel from '../components/TruckCarousel'
import { RouteThread } from '../components/RouteLine'
import { site } from '../data/site'

const featured = [vehicles[0], vehicles[8], vehicles[5], vehicles[10]]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest text-ivory">
        <div className="container-tt py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-6 text-brass">Présence panafricaine</p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
            >
              {site.shortName}, votre partenaire du transport, de l'industrie mobile et de l'exploitation minière en Afrique.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="mt-6 text-ivory/70 text-lg max-w-md"
            >
              Camions, autocars, véhicules et équipements industriels — vente,
              location et solutions logistiques, au service des professionnels
              du transport, du BTP et du secteur minier à travers le continent.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="rounded-full bg-brass text-charcoal px-7 py-3 text-sm tracking-wide hover:bg-brass-light transition-colors"
              >
                Demander un devis
              </Link>
              <Link
                to="/flotte"
                className="rounded-full border border-ivory/30 px-7 py-3 text-sm tracking-wide hover:border-brass hover:text-brass transition-colors"
              >
                Découvrir la flotte
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <TruckCarousel />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-ivory text-charcoal px-6 py-4 rounded-sm shadow-xl">
              <p className="eyebrow mb-1">Engagement</p>
              <p className="font-display text-lg">Fiabilité de bout en bout</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION / OBJECTIFS */}
      <section className="bg-ivory py-24 border-b border-forest/10">
        <div className="container-tt">
          <p className="eyebrow mb-3">Notre entreprise</p>
          <h2 className="font-display text-3xl md:text-4xl text-forest max-w-2xl mb-14">
            Une ambition panafricaine, un engagement concret.
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-xl text-forest mb-3">Mission</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                Fournir aux professionnels africains — transporteurs,
                entreprises de BTP et opérateurs miniers — des véhicules et des
                équipements fiables, ainsi qu'un accompagnement logistique de
                bout en bout, de la sélection du matériel jusqu'à sa mise en
                exploitation sur le terrain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-display text-xl text-forest mb-3">Vision</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                Devenir une référence reconnue à travers l'Afrique dans le
                transport, l'industrie mobile et l'exploitation minière — un
                partenaire vers qui se tournent naturellement les entreprises
                qui ont besoin de matériel solide et d'un service qui tient ses
                engagements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-xl text-forest mb-3">Objectifs</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                Élargir notre réseau de partenaires sur le continent,
                diversifier notre flotte de camions, autocars et équipements
                miniers, et renforcer nos capacités de financement et
                d'acheminement pour accompagner la croissance de nos clients,
                pays après pays.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARCOURS / ROUTE (signature element) */}
      <section className="container-tt py-24 relative">
        <RouteThread />
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="route-line pl-8">
            <span className="route-dot top-2" />
            <p className="eyebrow mb-2">Départ</p>
            <h3 className="font-display text-xl mb-2">Votre demande</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Vous nous décrivez votre besoin — type de véhicule ou
              d'équipement, volume, destination, contraintes de terrain. Que
              vous soyez transporteur, entreprise de BTP ou opérateur minier,
              nous prenons le temps de comprendre votre activité avant de vous
              répondre. Aucune réponse générique : chaque demande est traitée
              individuellement, et nous revenons vers vous rapidement.
            </p>
          </div>
          <div className="route-line pl-8">
            <span className="route-dot top-2" />
            <p className="eyebrow mb-2">Transit</p>
            <h3 className="font-display text-xl mb-2">Notre expertise</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Nous sélectionnons le véhicule ou l'équipement le plus adapté à
              votre usage réel — chantier, mine ou route longue distance —
              puis nous structurons le financement, les formalités et
              l'acheminement jusqu'à votre site. Notre connaissance du terrain
              africain nous permet d'anticiper les contraintes locales plutôt
              que de les découvrir en cours de route.
            </p>
          </div>
          <div className="route-line pl-8">
            <span className="route-dot top-2" />
            <p className="eyebrow mb-2">Arrivée</p>
            <h3 className="font-display text-xl mb-2">Livraison</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Le suivi ne s'arrête pas à la remise des clés. Nous restons
              disponibles après la livraison du véhicule ou de la marchandise
              pour répondre à toute question d'exploitation, où que vous
              soyez sur le continent — c'est cette continuité qui construit
              une vraie relation de confiance.
            </p>
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="bg-sage/30 py-24">
        <div className="container-tt">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-3">Notre flotte</p>
              <h2 className="font-display text-3xl md:text-4xl text-forest">
                Une sélection, pas un catalogue.
              </h2>
            </div>
            <Link
              to="/flotte"
              className="text-sm tracking-wide text-forest border-b border-forest/30 hover:border-forest pb-1"
            >
              Voir toute la flotte →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-tt py-24 text-center">
        <p className="eyebrow mb-4">Prêt à démarrer ?</p>
        <h2 className="font-display text-3xl md:text-4xl text-charcoal max-w-2xl mx-auto">
          Parlons de votre projet de transport, d'industrie mobile ou d'exploitation minière.
        </h2>
        <Link
          to="/contact"
          className="inline-block mt-8 rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
        >
          Faire une demande
        </Link>
      </section>
    </>
  )
}
