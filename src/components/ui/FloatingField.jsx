import { useState } from 'react'
import { motion } from 'framer-motion'

// Champ avec libellé flottant : au focus ou dès qu'il y a du texte, le
// libellé remonte au-dessus du champ plutôt que de rester en placeholder
// figé — plus vivant, plus "application" qu'un simple <input>.
export default function FloatingField({
  as = 'input',
  id,
  label,
  error,
  registration,
  rows = 4,
  children, // pour un <select>
  ...props
}) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const floated = focused || hasValue

  const Tag = as

  const sharedProps = {
    id,
    onFocus: () => setFocused(true),
    onBlur: (e) => {
      setFocused(false)
      setHasValue(!!e.target.value)
    },
    className:
      'peer w-full bg-white border border-charcoal/15 rounded-sm px-4 pt-6 pb-2 text-sm text-charcoal outline-none transition-colors focus:border-forest',
    ...registration,
    ...props,
  }

  return (
    <div className="relative">
      {as === 'select' ? (
        <select {...sharedProps} onChange={(e) => { sharedProps.onChange?.(e); setHasValue(!!e.target.value) }}>
          {children}
        </select>
      ) : (
        <Tag rows={as === 'textarea' ? rows : undefined} {...sharedProps} className={`${sharedProps.className} ${as === 'textarea' ? 'resize-none' : ''}`} />
      )}

      <motion.label
        htmlFor={id}
        animate={{
          top: floated ? '0.5rem' : '50%',
          fontSize: floated ? '0.7rem' : '0.875rem',
          y: floated ? 0 : '-50%',
          color: focused ? '#0F3D2E' : 'rgba(24,24,22,0.45)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="absolute left-4 pointer-events-none font-body tracking-wide bg-white px-1 -ml-1"
      >
        {label}
      </motion.label>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-red-700"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}
