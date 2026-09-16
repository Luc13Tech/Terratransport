import React from 'react';
import { Navigate } from 'react-router-dom';
import { ShieldAlert, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

/**
 * Vérifie, EN PLUS de ProtectedRoute (connexion), que le rôle de l'admin
 * connecté fait partie des rôles autorisés. Ceci est une protection
 * d'expérience utilisateur — la vraie barrière de sécurité est déjà
 * côté backend (requireRole sur /api/admin-audit) : même en contournant
 * cet écran, l'API refuserait la requête avec un 403.
 */
export default function RequireRole({ roles = [], children }) {
  const { admin, loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink">
        <Loader2 className="animate-spin text-brand-gold" size={28} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!roles.includes(admin?.role)) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <span className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
          <ShieldAlert size={24} className="text-brand-red" />
        </span>
        <h2 className="font-sans font-bold text-xl text-ink">Accès réservé</h2>
        <p className="text-ink/55 font-light text-sm mt-2 max-w-sm">
          Cette section est réservée aux comptes superadmin.
        </p>
      </div>
    );
  }

  return children;
}
