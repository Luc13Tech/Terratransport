import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const variants = {
  primary: 'bg-forest text-ivory hover:bg-forest-light',
  accent: 'bg-brass text-charcoal hover:bg-brass-light',
  outline: 'bg-transparent border border-current text-forest hover:bg-forest hover:text-ivory',
  outlineLight: 'bg-transparent border border-ivory/30 text-ivory hover:border-brass hover:text-brass',
  ghost: 'bg-transparent text-forest hover:bg-forest/5',
}

const sizes = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-8 py-3.5 text-sm',
}

// motion(Link) doit être créé une seule fois, hors du composant — sinon
// React le recrée à chaque rendu et l'anime comme un tout nouvel élément.
const MotionLink = motion(Link)

// Un seul composant pour tous les boutons du site : anime la même façon
// partout (échelle au clic, légère élévation au survol), qu'il s'agisse
// d'un <button>, d'un lien interne (<Link>) ou d'un lien externe (<a>).
export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { y: -2, boxShadow: '0 10px 24px -8px rgba(15,61,46,0.35)' },
    whileTap: { scale: 0.96, y: 0 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  }

  const content = (
    <>
      {Icon && iconPosition === 'left' && !loading && <Icon size={16} strokeWidth={1.75} />}
      {loading ? <Loader2 size={16} className="animate-spin" /> : children}
      {Icon && iconPosition === 'right' && !loading && <Icon size={16} strokeWidth={1.75} />}
    </>
  )

  const Component = as === 'a' ? motion.a : to ? MotionLink : motion.button

  const extraProps = to ? { to } : href ? { href } : {}

  return (
    <Component className={classes} {...motionProps} {...extraProps} {...props}>
      {content}
    </Component>
  )
}
