import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { vehicles } from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'
import TruckCarousel from '../components/TruckCarousel'
import { RouteThread } from '../components/RouteLine'
import { site } from '../data/site'
import AfricaNetwork from '../three/AfricaNetwork'

const featured = [vehicles[0], vehicles[8], vehicles[5], vehicles[10]]

export default function Home() {
  return (
    <>
      {/* HERO — signature 3D network as the visual thesis */}
      <section className="relative overflow-hidden bg-forest text-ivory">
        <div className="absolute inset-0 pointer-events-none opacity-90">
          <AfricaNetwork className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-transparent md:via-forest/40" />

        <div className="container-tt relative py-28 md:py-40">
          <div className="max-w-xl">
            <p className="eyebrow mb-6 text-brass">Présence panafricaine</p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
            >
              {site.shortName}, {site.tagline.charAt(0).toLowerCase() + site.tagline.slice(1)}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="mt-6 text-ivory/70 text-lg max-w-md"
            >
              Camions, engins et véhicules pensés pour l'exploitation minière
              et les chantiers du continent — vente, location et solutions
              logistiques, au service des opérateurs miniers et industriels
              africains.
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
        </div>
      </section>

      {/* FILMSTRIP — the fleet in motion, right under the hero */}
      <section className="bg-charcoal">
        <div className="flex items-center justify-between container-tt py-4">
          <p className="font-mono text-[10px] tracking-widest2 uppercase text-brass/80">
            Notre flotte en mouvement
          </p>
          <p className="font-mono text-[10px] tracking-widest2 uppercase text-ivory/30 hidden sm:block">
            Fiabilité de bout en bout
          </p>
        </div>
        <TruckCarousel heightClass="h-56 md:h-72" />
      </section>

      {/* MISSION / VISION / OBJECTIFS */}
      <section className="bg-ivory py-24">
        <div className="container-tt">
          <p className="eyebrow mb-3">Notre entreprise</p>
          <h2 className="font-display text-3xl md:text-4xl text-forest max-w-2xl mb-14">
            Une ambition panafricaine, un engagement concret.
          </h2>

          <div className="grid md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:pr-10 md:border-r border-forest/10 pb-10 md:pb-0"
            >
              <h3 className="font-display text-xl text-forest mb-3">Mission</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                Mettre une industrie mobile fiable — camions, engins et
                équipements — au service de l'exploitation minière en Afrique,
                avec un accompagnement logistique de bout en bout, de la
                sélection du matériel jusqu'à sa mise en exploitation sur site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:px-10 md:border-r border-forest/10 py-10 md:py-0"
            >
              <h3 className="font-display text-xl text-forest mb-3">Vision</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                Devenir l'industrie mobile de référence pour l'exploitation
                minière à travers le continent africain — le partenaire vers
                qui se tournent naturellement les opérateurs miniers qui ont
                besoin de matériel solide et d'un service qui tient ses
                engagements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:pl-10 pt-10 md:pt-0"
            >
              <h3 className="font-display text-xl text-forest mb-3">Objectifs</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                Élargir notre réseau auprès des sociétés minières du
                continent, diversifier notre flotte de camions et
                d'équipements dédiés à l'exploitation minière, et renforcer
                nos capacités de financement et d'acheminement pour
                accompagner nos clients, site après site, pays après pays.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARCOURS / ROUTE (signature 2D element — a genuine sequence) */}
      <section className="container-tt py-24 relative">
        <RouteThread />
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="route-line pl-8">
            <span className="route-dot top-2" />
            <p className="eyebrow mb-2">Départ</p>
            <h3 className="font-display text-xl mb-2">Votre demande</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Vous nous décrivez votre besoin — type de camion ou d'engin,
              tonnage, site minier ou chantier de destination, contraintes de
              terrain. Que vous soyez opérateur minier, entreprise de BTP ou
              transporteur, nous prenons le temps de comprendre votre
              exploitation avant de vous répondre. Aucune réponse générique :
              chaque demande est traitée individuellement, et nous revenons
              vers vous rapidement.
            </p>
          </div>
          <div className="route-line pl-8">
            <span className="route-dot top-2" />
            <p className="eyebrow mb-2">Transit</p>
            <h3 className="font-display text-xl mb-2">Notre expertise</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Nous sélectionnons le véhicule ou l'équipement le plus adapté à
              votre exploitation réelle — site minier, chantier ou route
              longue distance — puis nous structurons le financement, les
              formalités et l'acheminement jusqu'à votre site. Notre
              connaissance du terrain minier africain nous permet
              d'anticiper les contraintes locales plutôt que de les découvrir
              en cours de route.
            </p>
          </div>
          <div className="route-line pl-8">
            <span className="route-dot top-2" />
            <p className="eyebrow mb-2">Arrivée</p>
            <h3 className="font-display text-xl mb-2">Livraison</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Le suivi ne s'arrête pas à la remise des clés. Nous restons
              disponibles après la livraison du véhicule ou de l'équipement
              pour répondre à toute question d'exploitation, sur site minier
              comme sur route, où que vous soyez sur le continent — c'est
              cette continuité qui construit une vraie relation de confiance.
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
      <section className="relative bg-forest text-ivory py-24 text-center overflow-hidden">
        <div className="container-tt relative">
          <p className="eyebrow mb-4 text-brass">Prêt à démarrer ?</p>
          <h2 className="font-display text-3xl md:text-4xl max-w-2xl mx-auto">
            Parlons de votre projet d'exploitation minière, de chantier ou de transport.
          </h2>
          <Link
            to="/contact"
            className="inline-block mt-8 rounded-full bg-brass text-charcoal px-8 py-3 text-sm tracking-wide hover:bg-brass-light transition-colors"
          >
            Faire une demande
          </Link>
        </div>
      </section>
    </>
  )
}
