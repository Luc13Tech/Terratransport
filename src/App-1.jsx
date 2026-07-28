import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import About from './pages/About'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Simple fade-in on mount, no exit animation. This avoids the "blank page"
// gap that can occur with AnimatePresence's mode="wait" when a page is
// waiting for the previous one to finish animating out before it mounts.
function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <Routes location={location}>
        <Route path="/" element={<PageTransition key={location.pathname}><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition key={location.pathname}><Services /></PageTransition>} />
        <Route path="/flotte" element={<PageTransition key={location.pathname}><Fleet /></PageTransition>} />
        <Route path="/a-propos" element={<PageTransition key={location.pathname}><About /></PageTransition>} />
        <Route path="/partenariats" element={<PageTransition key={location.pathname}><Partners /></PageTransition>} />
        <Route path="/contact" element={<PageTransition key={location.pathname}><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition key={location.pathname}><NotFound /></PageTransition>} />
      </Routes>
      <Footer />
    </div>
  )
}
