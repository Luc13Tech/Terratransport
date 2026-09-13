import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/chatbot/ChatWidget'
import Home from './pages/Home'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import About from './pages/About'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import RFIGuinee from './pages/RFIGuinee'
import Hydrocarbures from './pages/Hydrocarbures'
import NotFound from './pages/NotFound'

import AdminLogin from './admin/pages/AdminLogin'
import AdminVehicles from './admin/pages/AdminVehicles'
import AdminServices from './admin/pages/AdminServices'
import AdminContent from './admin/pages/AdminContent'
import ProtectedRoute from './admin/components/ProtectedRoute'

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

function PublicSite() {
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
        <Route path="/rfi/guinee-conakry" element={<PageTransition key={location.pathname}><RFIGuinee /></PageTransition>} />
        <Route path="/hydrocarbures" element={<PageTransition key={location.pathname}><Hydrocarbures /></PageTransition>} />
        <Route path="*" element={<PageTransition key={location.pathname}><NotFound /></PageTransition>} />
      </Routes>
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <AuthProvider>
      {isAdminRoute ? (
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><AdminVehicles /></ProtectedRoute>} />
          <Route path="/admin/services" element={<ProtectedRoute><AdminServices /></ProtectedRoute>} />
          <Route path="/admin/contenu" element={<ProtectedRoute><AdminContent /></ProtectedRoute>} />
        </Routes>
      ) : (
        <PublicSite />
      )}
    </AuthProvider>
  )
}
