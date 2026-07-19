# Terratransport

Application React (Vite) pour Terratransport — vente et location de camions,
autocars et véhicules, solutions de transport intermodal Afrique ⇄ Asie.

## Stack

- React 18 + Vite
- React Router (navigation multi-pages)
- Tailwind CSS (design system : voir `tailwind.config.js`)
- Framer Motion (animations et transitions de page)
- React Hook Form (formulaire de contact)

## Installation locale

```bash
npm install
npm run dev
```

L'application est disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

Le résultat est généré dans le dossier `dist/`.

## Structure

```
src/
  components/   Navbar, Footer, VehicleCard, RouteLine (élément signature)
  pages/        Home, Services, Fleet, About, Partners, Contact, NotFound
  data/         vehicles.js (catalogue flotte), site.js (contact + lien WhatsApp)
public/
  images/
    camions/        photos des camions bennes
    bus/             photos des autocars
    semi-remorques/  (à compléter — voir note ci-dessous)
    vehicules/       (à compléter — véhicules particuliers)
    logo/            logo-truck.jpg (logo principal utilisé sur le site)
```

## Formulaire de contact → WhatsApp

Aucun backend n'est nécessaire. Au clic sur "Envoyer via WhatsApp", le
formulaire construit un message texte à partir des champs saisis et redirige
vers :

```
https://wa.me/221779398484?text=<message pré-rempli>
```

Le numéro et l'email sont centralisés dans `src/data/site.js` — à modifier à
un seul endroit si besoin.

## Images à compléter

Deux catégories du catalogue (`semi-remorques`, `vehicules`) sont vides pour
le moment :

- La photo de semi-remorque envoyée porte la livrée d'une autre entreprise
  (Hemmerlin) — je ne l'ai pas utilisée pour éviter d'afficher la marque
  d'un tiers sur le site de Terratransport.
- Aucune photo de véhicule particulier réel n'a été fournie (uniquement le
  logo/mockup de la voiture).

Ajoutez vos propres photos dans `public/images/semi-remorques/` et
`public/images/vehicules/`, puis référencez-les dans `src/data/vehicles.js`.

## Déploiement

### Vercel (recommandé, zéro configuration)
Connectez le dépôt GitHub à Vercel — le build Vite est détecté automatiquement.

### GitHub Pages
1. `npm install -D gh-pages`
2. Dans `vite.config.js`, mettez `base: '/nom-du-repo/'`
3. Ajoutez dans `package.json` : `"deploy": "gh-pages -d dist"`
4. `npm run build && npm run deploy`
