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
    id: 'camion-1',
    category: 'camions',
    name: 'Sinotruk Howo — Benne 8x4',
    image: '/images/camions/camion-01.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-2',
    category: 'camions',
    name: 'Shacman — Benne longue',
    image: '/images/camions/camion-02.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-3',
    category: 'camions',
    name: 'Shacman F3000 — Tracteur benne',
    image: '/images/camions/camion-03.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-4',
    category: 'camions',
    name: 'Sinotruk Howo — Cabine avant',
    image: '/images/camions/camion-04.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-5',
    category: 'camions',
    name: 'Shacman — Benne (vue latérale)',
    image: '/images/camions/camion-05.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-6',
    category: 'camions',
    name: 'Sinotruk Howo NX — Benne',
    image: '/images/camions/camion-06.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-7',
    category: 'camions',
    name: 'Sinotruk Howo — Benne (vue arrière)',
    image: '/images/camions/camion-07.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-8',
    category: 'camions',
    name: 'Sinotruk Howo — Benne acier',
    image: '/images/camions/camion-08.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-9',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 9',
    image: '/images/camions/camion-09.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-10',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 10',
    image: '/images/camions/camion-10.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-11',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 11',
    image: '/images/camions/camion-11.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-12',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 12',
    image: '/images/camions/camion-12.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-13',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 13',
    image: '/images/camions/camion-13.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-14',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 14',
    image: '/images/camions/camion-14.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-15',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 15',
    image: '/images/camions/camion-15.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-16',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 16',
    image: '/images/camions/camion-16.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-17',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 17',
    image: '/images/camions/camion-17.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-18',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 18',
    image: '/images/camions/camion-18.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-19',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 19',
    image: '/images/camions/camion-19.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-20',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 20',
    image: '/images/camions/camion-20.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-21',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 21',
    image: '/images/camions/camion-21.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
  },
  {
    id: 'camion-22',
    category: 'camions',
    name: 'Camion Terratransport — Modèle 22',
    image: '/images/camions/camion-22.jpg',
    specs: ['Benne', 'Flotte Terratransport'],
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
