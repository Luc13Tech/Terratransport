// Base de connaissances du chatbot — pas d'IA connectée, juste une recherche
// par mots-clés dans ces questions/réponses. Le contenu reflète exactement
// ce qui existe déjà sur le site, rien n'est inventé.

export const faq = [
  {
    question: 'Quels types de véhicules proposez-vous ?',
    keywords: ['véhicule', 'camion', 'type', 'flotte', 'engin', 'proposez'],
    answer:
      "Nous proposons des camions bennes, des camions citernes (gasoil et fioul), des autocars, et développons progressivement notre offre en semi-remorques et véhicules particuliers. Vous pouvez tout voir sur la page Notre Flotte.",
  },
  {
    question: "Transportez-vous des hydrocarbures ?",
    keywords: ['hydrocarbure', 'carburant', 'essence', 'gasoil', 'fioul', 'citerne', 'pétrolier'],
    answer:
      "Oui — c'est l'une de nos activités principales. Nous transportons du gasoil et du fioul avec des camions citernes de 22 000 à 45 000 litres. Retrouvez tous les détails sur la page Transport d'hydrocarbures.",
  },
  {
    question: 'Dans quels pays êtes-vous présents ?',
    keywords: ['pays', 'afrique', 'zone', 'région', 'présent', 'sénégal', 'mali', 'guinée', 'mauritanie', 'gambie', 'panafricain'],
    answer:
      "Nous sommes basés au Sénégal et développons des corridors logistiques vers la Gambie, la Guinée-Bissau, la Mauritanie et le Mali — notamment l'axe Dakar–Mali. Notre ambition reste panafricaine, au service de l'exploitation minière et industrielle sur tout le continent.",
  },
  {
    question: 'Comment demander un devis ?',
    keywords: ['devis', 'prix', 'tarif', 'coût', 'demande', 'commander'],
    answer:
      "Le plus simple est de remplir le formulaire sur notre page Contact — vous serez redirigé vers WhatsApp avec votre message déjà préparé, pour un échange direct et rapide.",
  },
  {
    question: 'Louez-vous des véhicules ?',
    keywords: ['location', 'louer', 'louez', 'rent'],
    answer:
      "Oui, la location fait partie de nos solutions, aux côtés de la vente et de la logistique dédiée. Contactez-nous pour discuter de votre besoin précis.",
  },
  {
    question: 'Travaillez-vous avec des sociétés minières ?',
    keywords: ['minier', 'mine', 'exploitation', 'minière', 'carrière'],
    answer:
      "L'exploitation minière est au cœur de notre activité — nous sommes une industrie mobile dédiée à ce secteur en Afrique : camions bennes, engins et logistique adaptés aux sites miniers isolés.",
  },
  {
    question: 'Quelles capacités de camions citernes avez-vous ?',
    keywords: ['capacité', 'litre', '22000', '35000', '45000', '24000', 'volume citerne'],
    answer:
      "Notre flotte de camions citernes gasoil couvre 4 configurations : 22 000 L, 24 000 L, 35 000 L et 45 000 L, en 6x4 ou 8x4 selon le modèle. Voir le détail sur la page Transport d'hydrocarbures.",
  },
  {
    question: 'Comment vous contacter ?',
    keywords: ['contact', 'téléphone', 'email', 'joindre', 'whatsapp', 'numéro'],
    answer:
      "Par téléphone/WhatsApp au +221 77 939 84 84, par email à terratransport@gmail.com, ou via le formulaire de notre page Contact.",
  },
  {
    question: 'Faites-vous du transport transfrontalier ?',
    keywords: ['transfrontalier', 'frontière', 'corridor', 'international', 'export'],
    answer:
      "Oui, notamment le corridor Dakar–Mali, un axe stratégique pour l'approvisionnement du Mali, pays enclavé. Nous organisons la planification des itinéraires, le suivi des véhicules et la coordination documentaire pour ces opérations.",
  },
  {
    question: 'Quels sont vos engagements en matière de sécurité ?',
    keywords: ['sécurité', 'traçabilité', 'engagement', 'norme', 'hse'],
    answer:
      "La sécurité des personnes, des produits, des véhicules et des opérations — ainsi que la protection de l'environnement — sont au cœur de notre organisation, avec un suivi rigoureux de chaque rotation.",
  },
]

export const suggestedQuestions = [
  'Quels types de véhicules proposez-vous ?',
  'Transportez-vous des hydrocarbures ?',
  'Comment demander un devis ?',
  'Dans quels pays êtes-vous présents ?',
]

function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // enlève les accents pour une recherche plus tolérante
}

// Cherche la meilleure correspondance par mots-clés. Retourne null si rien
// ne dépasse un seuil minimal de pertinence, pour ne pas répondre à côté.
export function findAnswer(userInput) {
  const normalizedInput = normalize(userInput)
  const words = normalizedInput.split(/\W+/).filter((w) => w.length > 2)

  let best = null
  let bestScore = 0

  for (const item of faq) {
    let score = 0
    for (const keyword of item.keywords) {
      const nk = normalize(keyword)
      if (normalizedInput.includes(nk)) score += 2
      else if (words.some((w) => nk.includes(w) || w.includes(nk))) score += 1
    }
    if (score > bestScore) {
      bestScore = score
      best = item
    }
  }

  return bestScore >= 2 ? best : null
}
