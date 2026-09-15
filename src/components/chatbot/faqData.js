// Base de connaissances du chatbot — pas d'IA connectée, recherche par
// mots-clés. Chaque entrée a des mots-clés aussi spécifiques que possible
// pour éviter qu'une entrée générique "gagne" sur des questions différentes.

export const faq = [
  // --- Entreprise / positionnement ---
  {
    question: 'Que fait Terratransport ?',
    keywords: ['que faites', 'activité', 'entreprise fait', 'présentation', 'qui êtes'],
    answer:
      "Terratransport & Industrie Mobile est une industrie mobile dédiée à l'exploitation minière en Afrique : vente et location de camions, engins et véhicules, transport d'hydrocarbures, et solutions logistiques panafricaines.",
  },
  {
    question: 'Où êtes-vous basés ?',
    keywords: ['basé', 'siège', 'localisation entreprise', 'où êtes', 'adresse'],
    answer:
      "Nous sommes basés au Sénégal, avec une ambition panafricaine et des corridors logistiques vers plusieurs pays de la sous-région.",
  },
  {
    question: 'Quelle est votre mission ?',
    keywords: ['mission'],
    answer:
      "Mettre une industrie mobile fiable — camions, engins et équipements — au service de l'exploitation minière en Afrique, avec un accompagnement logistique de bout en bout.",
  },
  {
    question: 'Quelle est votre vision ?',
    keywords: ['vision', 'ambition long terme'],
    answer:
      "Devenir l'industrie mobile de référence pour l'exploitation minière à travers le continent africain, et un acteur majeur du transport des hydrocarbures en Afrique de l'Ouest.",
  },

  // --- Flotte générale ---
  {
    question: 'Quels types de véhicules proposez-vous ?',
    keywords: ['types de véhicules', 'quels véhicules', 'catégories de camions'],
    answer:
      "Camions bennes, camions citernes (gasoil et fioul), autocars, et progressivement des semi-remorques et véhicules particuliers. Tout est visible sur la page Notre Flotte.",
  },
  {
    question: 'Vendez-vous des camions ?',
    keywords: ['vendez', 'vente de camion', 'acheter un camion', 'achat véhicule'],
    answer:
      "Oui, la vente de véhicules — camions bennes, autocars, véhicules particuliers — fait partie de nos services principaux.",
  },
  {
    question: 'Louez-vous des véhicules ?',
    keywords: ['location', 'louer', 'louez', 'rent'],
    answer:
      "Oui, la location fait partie de nos solutions, aux côtés de la vente et de la logistique dédiée. Contactez-nous pour discuter de votre besoin précis.",
  },
  {
    question: 'Quelles marques de camions utilisez-vous ?',
    keywords: ['marque', 'sinotruk', 'shacman', 'howo', 'constructeur'],
    answer:
      "Nous travaillons avec des constructeurs reconnus comme Sinotruk, Shacman, Yutong et HOWO — voir la page Partenariats pour le détail.",
  },
  {
    question: "Vos camions sont-ils neufs ou d'occasion ?",
    keywords: ['neuf', 'occasion', 'état des véhicules', 'année fabrication'],
    answer:
      "Notre flotte est sélectionnée pour sa fiabilité et adaptée aux réalités du terrain africain. Pour l'état précis d'un modèle qui vous intéresse, le plus simple est de nous contacter directement.",
  },

  // --- Camions bennes / mines ---
  {
    question: 'Proposez-vous des camions bennes ?',
    keywords: ['camion benne', 'benne 8x4', 'benne 6x4', 'tombereau'],
    answer:
      "Oui, les camions bennes sont au cœur de notre flotte — configurations 6x4 et 8x4, pensées pour les sites miniers et les chantiers.",
  },
  {
    question: 'Travaillez-vous avec des sociétés minières ?',
    keywords: ['minier', 'société minière', 'mine', 'exploitation minière', 'carrière'],
    answer:
      "L'exploitation minière est au cœur de notre activité — nous sommes une industrie mobile dédiée à ce secteur en Afrique : camions bennes, engins et logistique adaptés aux sites miniers isolés.",
  },
  {
    question: "Qu'est-ce que l'industrie mobile ?",
    keywords: ["industrie mobile", "c'est quoi industrie"],
    answer:
      "C'est notre positionnement : mettre des camions, engins et équipements mobiles au service de l'exploitation minière, plutôt que d'être un simple transporteur généraliste.",
  },
  {
    question: 'Approvisionnez-vous les chantiers de BTP ?',
    keywords: ['btp', 'chantier', 'travaux publics', 'construction'],
    answer:
      "Oui, en plus des mines, nous accompagnons les entreprises de BTP pour l'acheminement de matériel et de carburant sur leurs chantiers.",
  },

  // --- Camions citernes / hydrocarbures ---
  {
    question: 'Transportez-vous des hydrocarbures ?',
    keywords: ['hydrocarbure', 'transport de carburant', 'pétrolier'],
    answer:
      "Oui — c'est l'une de nos activités principales. Nous transportons du gasoil et du fioul avec des camions citernes de 22 000 à 45 000 litres. Voir la page Transport d'hydrocarbures.",
  },
  {
    question: 'Quelles capacités de camions citernes avez-vous ?',
    keywords: ['capacité citerne', 'litres', '22000', '35000', '45000', '24000'],
    answer:
      "Quatre configurations de citernes gasoil : 22 000 L, 24 000 L, 35 000 L et 45 000 L, en 6x4 ou 8x4 selon le modèle.",
  },
  {
    question: 'Transportez-vous du fioul ?',
    keywords: ['fioul', 'fuel oil'],
    answer:
      "Oui, en plus du gasoil, nous transportons également le fioul. Contactez-nous pour les capacités et configurations disponibles.",
  },
  {
    question: "Transportez-vous de l'essence ?",
    keywords: ['essence', 'carburant essence'],
    answer:
      "Le transport d'essence fait partie de nos solutions de transport de carburants, aux côtés du gasoil.",
  },
  {
    question: 'Livrez-vous les stations-service ?',
    keywords: ['station-service', 'station service'],
    answer:
      "Oui, l'approvisionnement des stations-service fait partie de nos opérations régulières de transport de carburant.",
  },
  {
    question: 'Approvisionnez-vous les sites miniers en carburant ?',
    keywords: ['approvisionnement site minier', 'carburant mine'],
    answer:
      "Oui, l'approvisionnement en carburant des sites miniers isolés est l'un de nos points forts, avec des rotations planifiées et sécurisées.",
  },
  {
    question: 'Quelles normes respectent vos camions citernes ?',
    keywords: ['norme euro', 'norme sécurité citerne', 'adr'],
    answer:
      "Nos camions citernes respectent les normes Euro 3 / Euro 5, avec la signalétique ADR hydrocarbure réglementaire.",
  },
  {
    question: 'Quel est le projet en République de Guinée ?',
    keywords: ['guinée', 'conakry', 'rfi', 'projet minerai'],
    answer:
      "C'est un projet de transport logistique de minerais en République de Guinée, actuellement en phase d'étude de faisabilité. Voir la page Projet Guinée — RFI pour le détail complet.",
  },

  // --- Autocars ---
  {
    question: 'Proposez-vous des autocars ?',
    keywords: ['autocar', 'bus', 'transport de passagers'],
    answer:
      "Oui, nous proposons des autocars (marque Yutong) pour le transport de passagers, longue distance ou navette, jusqu'à 53 places selon le modèle.",
  },

  // --- Zones / Corridors ---
  {
    question: 'Dans quels pays êtes-vous présents ?',
    keywords: ['pays présent', 'zone couverte', 'panafricain', 'quels pays'],
    answer:
      "Nous sommes basés au Sénégal et développons des corridors vers la Gambie, la Guinée-Bissau, la Mauritanie et le Mali — avec une ambition panafricaine plus large pour l'exploitation minière.",
  },
  {
    question: 'Faites-vous du transport transfrontalier ?',
    keywords: ['transfrontalier', 'frontière', 'international', 'export'],
    answer:
      "Oui, notamment le corridor Dakar–Mali. Nous organisons la planification des itinéraires, le suivi des véhicules et la coordination documentaire pour ces opérations.",
  },
  {
    question: "C'est quoi le corridor Dakar-Mali ?",
    keywords: ['dakar-mali', 'dakar mali', 'corridor'],
    answer:
      "C'est un axe stratégique reliant le Sénégal au Mali, pays enclavé — essentiel pour l'approvisionnement en carburant et marchandises de ce marché.",
  },

  // --- Sécurité ---
  {
    question: 'Quels sont vos engagements en matière de sécurité ?',
    keywords: ['engagement sécurité', 'sécurité des opérations'],
    answer:
      "La sécurité des personnes, des produits, des véhicules et des opérations — ainsi que la protection de l'environnement — sont au cœur de notre organisation, avec un suivi rigoureux de chaque rotation.",
  },
  {
    question: 'Avez-vous les autorisations nécessaires ?',
    keywords: ['licence', 'autorisation', 'conformité', 'réglementation'],
    answer:
      "Nous inscrivons notre développement dans une démarche de conformité avec les exigences réglementaires du Sénégal, notamment en matière de licences et de traçabilité des livraisons.",
  },
  {
    question: 'Comment assurez-vous la traçabilité des livraisons ?',
    keywords: ['traçabilité', 'suivi livraison', 'géolocalisation'],
    answer:
      "Suivi et traçabilité des opérations, planification des rotations, contrôle de la flotte et gestion documentaire — chaque livraison est encadrée du départ à l'arrivée.",
  },

  // --- Contact / process ---
  {
    question: 'Comment demander un devis ?',
    keywords: ['devis', 'prix', 'tarif', 'coût'],
    answer:
      "Le plus simple est de remplir le formulaire sur notre page Contact — vous serez redirigé vers WhatsApp avec votre message déjà préparé, pour un échange direct et rapide.",
  },
  {
    question: 'Comment vous contacter ?',
    keywords: ['contact', 'téléphone', 'joindre', 'numéro'],
    answer:
      "Par téléphone/WhatsApp au +221 77 939 84 84, par email à terratransport@gmail.com, ou via le formulaire de notre page Contact.",
  },
  {
    question: 'Comment se passe une demande, étape par étape ?',
    keywords: ['étapes', 'processus', 'comment ça marche', 'déroulement'],
    answer:
      "Trois temps : vous décrivez votre besoin (Départ), nous sélectionnons la solution adaptée et structurons l'acheminement (Transit), puis nous restons disponibles après la livraison (Arrivée).",
  },

  // --- Partenariats ---
  {
    question: 'Comment devenir partenaire ou revendeur ?',
    keywords: ['partenaire', 'revendeur', 'affilié', 'collaboration'],
    answer:
      "Nous construisons des partenariats durables avec transporteurs, distributeurs et revendeurs affiliés. Écrivez-nous via la page Contact pour en discuter.",
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
    .replace(/[\u0300-\u036f]/g, '')
}

// Cherche la meilleure correspondance par mots-clés. Les correspondances de
// phrase exacte comptent beaucoup plus que les recoupements de mots isolés,
// ce qui évite qu'un mot-clé générique fasse gagner la mauvaise réponse.
export function findAnswer(userInput) {
  const normalizedInput = normalize(userInput)
  const words = normalizedInput.split(/\W+/).filter((w) => w.length > 2)

  let best = null
  let bestScore = 0
  let tie = false

  for (const item of faq) {
    let score = 0
    for (const keyword of item.keywords) {
      const nk = normalize(keyword)
      if (normalizedInput.includes(nk)) {
        score += 3 + Math.min(nk.split(' ').length - 1, 2)
      } else if (words.some((w) => w === nk)) {
        score += 1.5
      } else if (words.some((w) => nk.includes(w) && w.length > 3)) {
        score += 0.5
      }
    }
    if (score > bestScore) {
      bestScore = score
      best = item
      tie = false
    } else if (score === bestScore && score > 0) {
      tie = true
    }
  }

  if (tie) return null

  return bestScore >= 3 ? best : null
}
