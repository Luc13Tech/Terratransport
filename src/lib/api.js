// Client API centralisé — toutes les pages (publiques et admin) passent par
// ces fonctions pour parler au backend, au lieu d'appeler fetch() partout.

export const API_URL = import.meta.env.VITE_API_URL || 'https://backend-terratransport-sa.onrender.com'

const TOKEN_KEY = 'terratransport_admin_token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}
export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}
export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

class ApiError extends Error {}

async function request(path, options = {}, { auth = false } = {}) {
  const headers = { ...(options.headers || {}) }
  const isFormData = options.body instanceof FormData
  if (!isFormData) headers['Content-Type'] = 'application/json'
  if (auth) {
    const token = getToken()
    if (token) headers.Authorization = `Bearer ${token}`
  }

  const res = await fetch(`${API_URL}${path}`, { ...options, headers })

  if (!res.ok) {
    let message = `Erreur ${res.status}`
    try {
      const data = await res.json()
      message = data.error || message
    } catch {
      // réponse non-JSON
    }
    throw new ApiError(message)
  }

  if (res.status === 204) return null
  return res.json()
}

// Le plan gratuit Render met le serveur en veille après une période
// d'inactivité : le tout premier appel peut prendre 20 à 50 secondes.
export function onSlowRequest(callback, delay = 4000) {
  const timer = setTimeout(callback, delay)
  return () => clearTimeout(timer)
}

export const api = {
  vehicles: {
    list: (category) =>
      request(`/api/vehicles${category ? `?category=${encodeURIComponent(category)}` : ''}`),
    listAll: () => request('/api/vehicles/admin/all', {}, { auth: true }),
    create: (data) => request('/api/vehicles', { method: 'POST', body: JSON.stringify(data) }, { auth: true }),
    update: (id, data) => request(`/api/vehicles/${id}`, { method: 'PUT', body: JSON.stringify(data) }, { auth: true }),
    remove: (id) => request(`/api/vehicles/${id}`, { method: 'DELETE' }, { auth: true }),
  },
  services: {
    list: () => request('/api/services'),
    listAll: () => request('/api/services/admin/all', {}, { auth: true }),
    create: (data) => request('/api/services', { method: 'POST', body: JSON.stringify(data) }, { auth: true }),
    update: (id, data) => request(`/api/services/${id}`, { method: 'PUT', body: JSON.stringify(data) }, { auth: true }),
    remove: (id) => request(`/api/services/${id}`, { method: 'DELETE' }, { auth: true }),
  },
  partners: {
    list: () => request('/api/partners'),
    listAll: () => request('/api/partners/admin/all', {}, { auth: true }),
    create: (data) => request('/api/partners', { method: 'POST', body: JSON.stringify(data) }, { auth: true }),
    update: (id, data) => request(`/api/partners/${id}`, { method: 'PUT', body: JSON.stringify(data) }, { auth: true }),
    remove: (id) => request(`/api/partners/${id}`, { method: 'DELETE' }, { auth: true }),
  },
  content: {
    list: (page) => request(`/api/content${page ? `?page=${encodeURIComponent(page)}` : ''}`),
    listAdmin: (page) => request(`/api/content/admin${page ? `?page=${encodeURIComponent(page)}` : ''}`, {}, { auth: true }),
    upsert: (key, data) => request(`/api/content/${encodeURIComponent(key)}`, { method: 'PUT', body: JSON.stringify(data) }, { auth: true }),
  },
  upload: {
    image: (file) => {
      const form = new FormData()
      form.append('image', file)
      return request('/api/upload', { method: 'POST', body: form }, { auth: true })
    },
    remove: (publicId) => request('/api/upload/delete', { method: 'POST', body: JSON.stringify({ publicId }) }, { auth: true }),
  },
  auth: {
    login: (email, password) =>
      request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
    me: () => request('/api/auth/me', {}, { auth: true }),
  },
}

export { ApiError }
