import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-tt py-32 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <p className="eyebrow mb-4">Erreur 404</p>
      <h1 className="font-display text-4xl text-forest mb-4">
        Cette route n'existe pas.
      </h1>
      <p className="text-charcoal/60 mb-8 max-w-sm">
        La page que vous cherchez a peut-être changé d'adresse. Repartons de
        l'accueil.
      </p>
      <Link
        to="/"
        className="rounded-full bg-forest text-ivory px-7 py-3 text-sm tracking-wide hover:bg-forest-light transition-colors"
      >
        Retour à l'accueil
      </Link>
    </section>
  )
}
