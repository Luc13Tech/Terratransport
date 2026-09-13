import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Phone, Mail, Send } from 'lucide-react'
import SoftGlow from '../components/decor/SoftGlow'
import FloatingField from '../components/ui/FloatingField'
import Button from '../components/ui/Button'
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
    window.location.href = link
  }

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-ivory py-20">
        <SoftGlow />
        <div className="container-tt relative">
          <p className="eyebrow mb-4 text-brass">Parlons-en</p>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Une question, une demande ? Écrivez-nous.
          </h1>
        </div>
      </section>

      <section className="container-tt py-20 grid md:grid-cols-5 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <p className="eyebrow mb-4">Coordonnées directes</p>
          <div className="space-y-6">
            <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center shrink-0">
                <Phone size={16} strokeWidth={1.5} className="text-brass" />
              </div>
              <div>
                <p className="text-charcoal/50 text-sm mb-1">Téléphone / WhatsApp</p>
                <p className="font-display text-xl text-forest">{site.phoneDisplay}</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-forest/5 border border-forest/15 flex items-center justify-center shrink-0">
                <Mail size={16} strokeWidth={1.5} className="text-brass" />
              </div>
              <div>
                <p className="text-charcoal/50 text-sm mb-1">Email</p>
                <p className="font-display text-xl text-forest">{site.email}</p>
              </div>
            </motion.div>
          </div>
          <p className="mt-10 text-sm text-charcoal/50 leading-relaxed max-w-sm">
            En soumettant le formulaire, vous serez redirigé vers WhatsApp
            avec votre message déjà préparé — il ne vous restera qu'à
            l'envoyer.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-3 space-y-5 bg-ivory rounded-sm p-6 md:p-8 shadow-xl border border-forest/5"
          noValidate
        >
          <FloatingField
            id="name"
            label="Nom complet"
            registration={register('name', { required: "Merci d'indiquer votre nom." })}
            error={errors.name?.message}
          />

          <FloatingField
            id="phone"
            type="tel"
            label="Téléphone"
            registration={register('phone', { required: 'Merci d\'indiquer un numéro de contact.' })}
            error={errors.phone?.message}
          />

          <FloatingField
            as="select"
            id="category"
            label="Vous êtes intéressé(e) par"
            registration={register('category', { required: true })}
            defaultValue=""
          >
            <option value="" disabled></option>
            {categories.map((c) => (
              <option key={c.slug} value={c.label}>
                {c.label}
              </option>
            ))}
            <option value="Autre">Autre demande</option>
          </FloatingField>

          <FloatingField
            as="textarea"
            id="message"
            label="Votre message"
            rows={4}
            registration={register('message', { required: 'Un message nous aide à mieux vous répondre.' })}
            error={errors.message?.message}
          />

          <Button type="submit" variant="primary" size="lg" loading={isSubmitting} icon={Send} className="w-full">
            Envoyer via WhatsApp
          </Button>
        </motion.form>
      </section>
    </>
  )
}
