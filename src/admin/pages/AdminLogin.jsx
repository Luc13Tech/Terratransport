import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, Mail } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { site } from '../../data/site'

export default function AdminLogin() {
  const { login, isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (!loading && isAuthenticated) {
    return <Navigate to="/admin" replace />
  }

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(email, password)
      navigate('/admin')
    } catch (err) {
      setError(err.message || 'Connexion impossible.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-forest flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="flex flex-col items-center mb-10">
          <img
            src="/images/logo/logo-truck.jpg"
            alt={site.name}
            className="h-14 w-14 rounded-full object-cover mb-4 ring-1 ring-ivory/20"
          />
          <p className="font-mono text-[10px] tracking-widest2 uppercase text-brass mb-1">
            Espace administration
          </p>
          <h1 className="font-display text-xl text-ivory">{site.shortName}</h1>
        </div>

        <form onSubmit={onSubmit} className="bg-ivory rounded-sm p-8 shadow-2xl space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs text-charcoal/60 mb-2">Email</label>
            <div className="relative">
              <Mail size={16} strokeWidth={1.5} className="absolute left-0 top-1/2 -translate-y-1/2 text-brass" />
              <input
                id="email"
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-6 border-b border-charcoal/20 bg-transparent py-2 focus:border-forest transition-colors outline-none text-sm"
                placeholder="admin@terratransport-sa.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-xs text-charcoal/60 mb-2">Mot de passe</label>
            <div className="relative">
              <Lock size={16} strokeWidth={1.5} className="absolute left-0 top-1/2 -translate-y-1/2 text-brass" />
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-6 border-b border-charcoal/20 bg-transparent py-2 focus:border-forest transition-colors outline-none text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && <p className="text-xs text-red-700">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-forest text-ivory py-3 text-sm tracking-wide hover:bg-forest-light transition-colors disabled:opacity-60"
          >
            {submitting ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
