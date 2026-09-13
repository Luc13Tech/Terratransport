import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import VehicleCard from '../components/VehicleCard'
import TruckCarousel from '../components/TruckCarousel'
import { RouteThread } from '../components/RouteLine'
import { CardSkeleton, ErrorNotice } from '../components/LoadingStates'
import SectionDivider from '../components/decor/SectionDivider'
import Button from '../components/ui/Button'
import { site } from '../data/site'
import { api } from '../lib/api'
import AfricaNetwork from '../three/AfricaNetwork'

export default function Home() {
  const [featured, setFeatured] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    api.vehicles
      .list()
      .then((all) => {
        if (cancelled) return
        const byCategory = {}
        for (const v of all) {
          if (!byCategory[v.category]) byCategory[v.category] = []
          byCategory[v.category].push(v)
        }
        const picks = []
        for (const cat of ['camions', 'bus', 'citernes', 'semi-remorques', 'vehicules']) {
          if (byCategory[cat]?.[0]) picks.push(byCategory[cat][0])
          if (picks.length >= 4) break
        }
        setFeatured(picks.length > 0 ? picks : all.slice(0, 4))
      })
      .catch((err) => !cancelled && setError(err.message))
    return () => {
      cancelled = true
    }
  }, [])

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
              <Button to="/contact" variant="accent" size="lg">
                Demander un devis
              </Button>
              <Button to="/flotte" variant="outlineLight" size="lg" icon={ArrowRight}>
                Découvrir la flotte
              </Button>
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
      <SectionDivider from="#181816" to="#F7F5EE" />

      {/* MISSION / VISION / OBJECTIFS */}
      <section className="bg-ivory pt-4 pb-24">
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

      <SectionDivider from="#F7F5EE" to="#EDF1EC" />

      {/* FLEET PREVIEW */}
      <section className="bg-sage/30 pt-4 pb-24">
        <div className="container-tt">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-3">Notre flotte</p>
              <h2 className="font-display text-3xl md:text-4xl text-forest">
                Une sélection, pas un catalogue.
              </h2>
            </div>
            <Button to="/flotte" variant="ghost" size="sm" icon={ArrowRight}>
              Voir toute la flotte
            </Button>
          </div>

          {error && <ErrorNotice message="Impossible de charger la flotte pour le moment." />}
          {!error && !featured && <CardSkeleton count={4} />}
          {!error && featured && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featured.map((v, i) => (
                <VehicleCard key={v._id} vehicle={v} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <SectionDivider from="#EDF1EC" to="#0F3D2E" />

      {/* CTA */}
      <section className="relative bg-forest text-ivory pt-4 pb-24 text-center overflow-hidden">
        <div className="container-tt relative">
          <p className="eyebrow mb-4 text-brass">Prêt à démarrer ?</p>
          <h2 className="font-display text-3xl md:text-4xl max-w-2xl mx-auto">
            Parlons de votre projet d'exploitation minière, de chantier ou de transport.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="accent" size="lg">
              Faire une demande
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
