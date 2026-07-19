import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { site, buildWhatsappLink } from '../data/site'
import { categories } from '../data/vehicles'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data) => {
    const link = buildWhatsappLink(data)
    // Ouvre WhatsApp avec le message pré-rempli.
    window.location.href = link
  }

  return (
    <>
      <section className="bg-forest text-ivory py-20">
        <div className="container-tt">
          <p className="eyebrow mb-4 text-brass">Parlons-en</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Une question, une demande ? Écrivez-nous.
          </h1>
        </div>
      </section>

      <section className="container-tt py-20 grid md:grid-cols-5 gap-16">
        <div className="md:col-span-2">
          <p className="eyebrow mb-4">Coordonnées directes</p>
          <div className="space-y-6">
            <div>
              <p className="text-charcoal/50 text-sm mb-1">Téléphone / WhatsApp</p>
              <p className="font-display text-xl text-forest">{site.phoneDisplay}</p>
            </div>
            <div>
              <p className="text-charcoal/50 text-sm mb-1">Email</p>
              <p className="font-display text-xl text-forest">{site.email}</p>
            </div>
          </div>
          <p className="mt-10 text-sm text-charcoal/50 leading-relaxed max-w-sm">
            En soumettant le formulaire, vous serez redirigé vers WhatsApp
            avec votre message déjà préparé — il ne vous restera qu'à
            l'envoyer.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-3 space-y-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm text-charcoal/70 mb-2">
              Nom complet
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Merci d\'indiquer votre nom.' })}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest transition-colors outline-none"
              placeholder="Votre nom"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-700">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-charcoal/70 mb-2">
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone', { required: 'Merci d\'indiquer un numéro de contact.' })}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest transition-colors outline-none"
              placeholder="+221 ..."
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-700">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="category" className="block text-sm text-charcoal/70 mb-2">
              Vous êtes intéressé(e) par
            </label>
            <select
              id="category"
              {...register('category', { required: true })}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest transition-colors outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Choisissez une catégorie
              </option>
              {categories.map((c) => (
                <option key={c.slug} value={c.label}>
                  {c.label}
                </option>
              ))}
              <option value="Autre">Autre demande</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-charcoal/70 mb-2">
              Votre message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register('message', { required: 'Un message nous aide à mieux vous répondre.' })}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest transition-colors outline-none resize-none"
              placeholder="Décrivez votre besoin..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-700">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-forest text-ivory px-8 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors disabled:opacity-60"
          >
            Envoyer via WhatsApp
          </button>
        </motion.form>
      </section>
    </>
  )
}
