// Catalogue de la flotte Terratransport.
// Chaque véhicule référence une image placée dans /public/images/<categorie>/
// Remplacez les champs "specs" par les caractéristiques réelles quand vous les aurez.

export const categories = [
  {
    slug: 'camions',
    label: 'Camions bennes',
    tagline: 'Robustesse et charge utile pour vos chantiers et exploitations.',
  },
  {
    slug: 'bus',
    label: 'Autocars',
    tagline: 'Transport de passagers confortable, longue distance ou navette.',
  },
  {
    slug: 'semi-remorques',
    label: 'Semi-remorques',
    tagline: 'Solutions intermodales pour le fret volumineux.',
  },
  {
    slug: 'vehicules',
    label: 'Véhicules particuliers',
    tagline: 'Berlines et véhicules de fonction, sur demande.',
  },
]

export const vehicles = [
  {
    id: 'camion-01',
    category: 'camions',
    name: 'Sinotruk Howo — Benne 8x4',
    image: '/images/camions/camion-01.jpg',
    specs: ['8x4', 'Benne renforcée', 'Cabine confort'],
  },
  {
    id: 'camion-02',
    category: 'camions',
    name: 'Shacman — Benne longue',
    image: '/images/camions/camion-02.jpg',
    specs: ['Grande capacité', 'Châssis renforcé'],
  },
  {
    id: 'camion-03',
    category: 'camions',
    name: 'Shacman F3000 — Tracteur benne',
    image: '/images/camions/camion-03.jpg',
    specs: ['Moteur haute performance', 'Cabine surélevée'],
  },
  {
    id: 'camion-04',
    category: 'camions',
    name: 'Sinotruk Howo — Cabine avant',
    image: '/images/camions/camion-04.jpg',
    specs: ['Calandre HOWO', 'Suspension renforcée'],
  },
  {
    id: 'camion-05',
    category: 'camions',
    name: 'Shacman — Benne (vue latérale)',
    image: '/images/camions/camion-05.jpg',
    specs: ['Benne acier', '8x4'],
  },
  {
    id: 'camion-06',
    category: 'camions',
    name: 'Sinotruk Howo NX — Benne',
    image: '/images/camions/camion-06.jpg',
    specs: ['Série NX', 'Finition premium'],
  },
  {
    id: 'camion-07',
    category: 'camions',
    name: 'Sinotruk Howo — Benne (vue arrière)',
    image: '/images/camions/camion-07.jpg',
    specs: ['Benne relevable', 'Double essieu arrière'],
  },
  {
    id: 'camion-08',
    category: 'camions',
    name: 'Sinotruk Howo — Benne acier',
    image: '/images/camions/camion-08.jpg',
    specs: ['Finition brute', 'Haute résistance'],
  },
  {
    id: 'bus-01',
    category: 'bus',
    name: 'Yutong — Autocar grand tourisme',
    image: '/images/bus/bus-01.jpg',
    specs: ['Sièges inclinables', 'Climatisation'],
  },
  {
    id: 'bus-02',
    category: 'bus',
    name: 'Yutong — Autocar 33 places',
    image: '/images/bus/bus-02.jpg',
    specs: ['33 places', 'Confort longue distance'],
  },
  {
    id: 'bus-03',
    category: 'bus',
    name: 'Yutong — Autocar (vue 3/4)',
    image: '/images/bus/bus-03.jpg',
    specs: ['Porte automatique', 'Vitres teintées'],
  },
  {
    id: 'bus-04',
    category: 'bus',
    name: 'Yutong — Autocar 53 places',
    image: '/images/bus/bus-04.jpg',
    specs: ['53 places', 'Toilettes à bord'],
  },
  {
    id: 'bus-05',
    category: 'bus',
    name: 'Yutong — Autocar (façade)',
    image: '/images/bus/bus-05.jpg',
    specs: ['Châssis surbaissé', 'Rétroviseurs chauffants'],
  },
  {
    id: 'bus-06',
    category: 'bus',
    name: 'Yutong — Autocar rouge',
    image: '/images/bus/bus-06.jpg',
    specs: ['Livrée disponible', 'Grande soute à bagages'],
  },
]

export function vehiclesByCategory(slug) {
  return vehicles.filter((v) => v.category === slug)
}
