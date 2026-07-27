import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { vehicles } from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'
import { RouteThread } from '../components/RouteLine'

const featured = [vehicles[0], vehicles[8], vehicles[5], vehicles[10]]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest text-ivory">
        <div className="container-tt py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-6 text-brass">Afrique ⇄ Asie</p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
            >
              Votre partenaire logistique pour l'Afrique et l'Asie.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="mt-6 text-ivory/70 text-lg max-w-md"
            >
              Camions, autocars et véhicules — vente, location et solutions de
              transport intermodal, portées par une exigence de résultat.
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
            <img
              src="/images/camions/camion-06.jpg"
              alt="Camion Terratransport"
              className="w-full h-[420px] object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-ivory text-charcoal px-6 py-4 rounded-sm shadow-xl">
              <p className="eyebrow mb-1">Engagement</p>
              <p className="font-display text-lg">Fiabilité de bout en bout</p>
            </div>
          </motion.div>
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
              Vous décrivez votre besoin — véhicule, volume, destination.
              Nous répondons rapidement, sans détour.
            </p>
          </div>
          <div className="route-line pl-8">
            <span className="route-dot top-2" />
            <p className="eyebrow mb-2">Transit</p>
            <h3 className="font-display text-xl mb-2">Notre expertise</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Sélection du véhicule ou de la solution adaptée, structuration
              du financement et de l'acheminement.
            </p>
          </div>
          <div className="route-line pl-8">
            <span className="route-dot top-2" />
            <p className="eyebrow mb-2">Arrivée</p>
            <h3 className="font-display text-xl mb-2">Livraison</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Suivi jusqu'à la remise du véhicule ou de la marchandise, où
              que vous soyez.
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
          Parlons de votre projet de transport.
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
