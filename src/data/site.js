export const site = {
  name: 'Terratransport',
  baseline: 'Votre transport, notre engagement.',
  email: 'terratransport@gmail.com',
  phoneDisplay: '+221 77 939 84 84',
  // wa.me requires digits only, no + or spaces
  whatsappNumber: '221779398484',
}

// Builds a wa.me link with a pre-filled message from the contact form fields.
export function buildWhatsappLink({ name, phone, category, message }) {
  const lines = [
    `Nouvelle demande — ${site.name}`,
    `Nom : ${name || '—'}`,
    `Téléphone : ${phone || '—'}`,
    `Catégorie : ${category || '—'}`,
    '',
    message || '',
  ]
  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${site.whatsappNumber}?text=${text}`
}
