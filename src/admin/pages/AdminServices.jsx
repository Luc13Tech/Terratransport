import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react'
import AdminLayout from '../components/AdminLayout'
import Modal from '../components/Modal'
import ImageUploader from '../components/ImageUploader'
import { api } from '../../lib/api'

const ICON_OPTIONS = ['Mountain', 'Truck', 'Fuel', 'Ship', 'Route']

const emptyForm = {
  title: '',
  description: '',
  image: '',
  imagePublicId: '',
  icon: 'Truck',
  link: '',
  linkLabel: '',
  order: 0,
  published: true,
}

export default function AdminServices() {
  const [services, setServices] = useState(null)
  const [error, setError] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  function refresh() {
    setError('')
    api.services.listAll().then(setServices).catch((err) => setError(err.message))
  }

  useEffect(refresh, [])

  function openCreate() {
    setEditing(null)
    setForm(emptyForm)
    setFormError('')
    setModalOpen(true)
  }

  function openEdit(service) {
    setEditing(service)
    setForm({
      title: service.title,
      description: service.description,
      image: service.image,
      imagePublicId: service.imagePublicId || '',
      icon: service.icon || 'Truck',
      link: service.link || '',
      linkLabel: service.linkLabel || '',
      order: service.order || 0,
      published: service.published,
    })
    setFormError('')
    setModalOpen(true)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.image) {
      setFormError('Une image est requise.')
      return
    }
    setSaving(true)
    setFormError('')
    const payload = { ...form, order: Number(form.order) || 0 }
    try {
      if (editing) {
        await api.services.update(editing._id, payload)
      } else {
        await api.services.create(payload)
      }
      setModalOpen(false)
      refresh()
    } catch (err) {
      setFormError(err.message || "Échec de l'enregistrement.")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(service) {
    if (!confirm(`Supprimer "${service.title}" ?`)) return
    try {
      await api.services.remove(service._id)
      refresh()
    } catch (err) {
      alert(err.message)
    }
  }

  async function togglePublished(service) {
    try {
      await api.services.update(service._id, { published: !service.published })
      refresh()
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <p className="eyebrow mb-2">Page Services</p>
          <h1 className="font-display text-2xl text-forest">Services</h1>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-full bg-forest text-ivory px-5 py-2.5 text-sm hover:bg-forest-light transition-colors"
        >
          <Plus size={16} /> Ajouter un service
        </button>
      </div>

      {error && <p className="text-red-700 text-sm mb-4">{error}</p>}
      {!services && !error && <p className="text-charcoal/50 text-sm">Chargement…</p>}

      {services && (
        <div className="bg-ivory rounded-sm border border-forest/10 overflow-hidden">
          {services.map((s) => (
            <div key={s._id} className="flex items-center gap-4 px-5 py-4 border-b border-forest/5 last:border-none">
              <img src={s.image} alt={s.title} className="w-16 h-16 object-cover rounded-sm shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm text-charcoal truncate">{s.title}</p>
                <p className="text-xs text-charcoal/45 font-mono uppercase tracking-wide">{s.icon}</p>
              </div>
              <button onClick={() => togglePublished(s)} className="text-charcoal/40 hover:text-forest transition-colors shrink-0">
                {s.published ? <Eye size={17} /> : <EyeOff size={17} />}
              </button>
              <button onClick={() => openEdit(s)} className="text-charcoal/40 hover:text-forest transition-colors shrink-0">
                <Pencil size={17} />
              </button>
              <button onClick={() => handleDelete(s)} className="text-charcoal/40 hover:text-red-700 transition-colors shrink-0">
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier le service' : 'Ajouter un service'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-charcoal/60 mb-1.5">Photo</label>
            <ImageUploader
              value={{ image: form.image, imagePublicId: form.imagePublicId }}
              onChange={(v) => setForm((f) => ({ ...f, ...v }))}
            />
          </div>

          <div>
            <label className="block text-xs text-charcoal/60 mb-1.5">Titre</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-charcoal/60 mb-1.5">Description</label>
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-charcoal/60 mb-1.5">Icône</label>
              <select
                value={form.icon}
                onChange={(e) => setForm((f) => ({ ...f, icon: e.target.value }))}
                className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              >
                {ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-charcoal/60 mb-1.5">Ordre d'affichage</label>
              <input
                type="number"
                value={form.order}
                onChange={(e) => setForm((f) => ({ ...f, order: e.target.value }))}
                className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-charcoal/60 mb-1.5">Lien (optionnel)</label>
              <input
                value={form.link}
                onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
                placeholder="/hydrocarbures"
                className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-charcoal/60 mb-1.5">Texte du lien</label>
              <input
                value={form.linkLabel}
                onChange={(e) => setForm((f) => ({ ...f, linkLabel: e.target.value }))}
                placeholder="Voir le dossier technique"
                className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-charcoal/70">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
            />
            Publié sur le site
          </label>

          {formError && <p className="text-xs text-red-700">{formError}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-full bg-forest text-ivory py-3 text-sm hover:bg-forest-light transition-colors disabled:opacity-60"
          >
            {saving ? 'Enregistrement…' : editing ? 'Enregistrer les modifications' : 'Ajouter le service'}
          </button>
        </form>
      </Modal>
    </AdminLayout>
  )
}
