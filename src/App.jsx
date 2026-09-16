import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import AIAssistant from './components/layout/AIAssistant';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import RequireUser from './components/ui/RequireUser';
import { getContent } from './api/client';

import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import ServicesManager from './admin/ServicesManager';
import PropertiesManager from './admin/PropertiesManager';
import LeadsManager from './admin/LeadsManager';
import ContentManager from './admin/ContentManager';
import AIKnowledgeManager from './admin/AIKnowledgeManager';
import AuditLogManager from './admin/AuditLogManager';
import ProtectedRoute from './admin/ProtectedRoute';
import RequireRole from './components/ui/RequireRole';

function PublicLayout({ content }) {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/biens" element={<Properties />} />
          <Route path="/biens/:id" element={<PropertyDetail />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
          <Route
            path="/mon-compte"
            element={
              <RequireUser>
                <Account />
              </RequireUser>
            }
          />
        </Routes>
      </main>

      <Footer content={content} />

      <FloatingButtons
        whatsapp={(content['contact.whatsapp'] || '+221778294142').replace(/[^\d]/g, '')}
        onOpenAssistant={() => setAssistantOpen((v) => !v)}
      />
      <AIAssistant open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </div>
  );
}

export default function App() {
  const [content, setContent] = useState({});

  useEffect(() => {
    getContent().then(setContent).catch(() => {});
  }, []);

  return (
    <Routes>
      {/* Espace admin — pas de Header/Footer/boutons flottants publics */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="services" element={<ServicesManager />} />
        <Route path="biens" element={<PropertiesManager />} />
        <Route path="demandes" element={<LeadsManager />} />
        <Route path="contenu" element={<ContentManager />} />
        <Route path="assistant" element={<AIKnowledgeManager />} />
        <Route
          path="audit"
          element={
            <RequireRole roles={['superadmin']}>
              <AuditLogManager />
            </RequireRole>
          }
        />
      </Route>

      {/* Site public */}
      <Route path="/*" element={<PublicLayout content={content} />} />
    </Routes>
  );
}
