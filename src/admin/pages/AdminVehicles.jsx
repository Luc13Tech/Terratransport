import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react'
import AdminLayout from '../components/AdminLayout'
import Modal from '../components/Modal'
import ImageUploader from '../components/ImageUploader'
import { api } from '../../lib/api'
import { categories } from '../../data/vehicles'

const emptyForm = {
  name: '',
  category: 'camions',
  product: '',
  description: '',
  image: '',
  imagePublicId: '',
  specs: '',
  order: 0,
  published: true,
}

export default function AdminVehicles() {
  const [vehicles, setVehicles] = useState(null)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('tous')
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  function refresh() {
    setError('')
    api.vehicles
      .listAll()
      .then(setVehicles)
      .catch((err) => setError(err.message))
  }

  useEffect(refresh, [])

  const filtered = vehicles ? (filter === 'tous' ? vehicles : vehicles.filter((v) => v.category === filter)) : []

  function openCreate() {
    setEditing(null)
    setForm(emptyForm)
    setFormError('')
    setModalOpen(true)
  }

  function openEdit(vehicle) {
    setEditing(vehicle)
    setForm({
      name: vehicle.name,
      category: vehicle.category,
      product: vehicle.product || '',
      description: vehicle.description || '',
      image: vehicle.image,
      imagePublicId: vehicle.imagePublicId || '',
      specs: (vehicle.specs || []).join(', '),
      order: vehicle.order || 0,
      published: vehicle.published,
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
    const payload = {
      ...form,
      specs: form.specs.split(',').map((s) => s.trim()).filter(Boolean),
      order: Number(form.order) || 0,
    }
    try {
      if (editing) {
        await api.vehicles.update(editing._id, payload)
      } else {
        await api.vehicles.create(payload)
      }
      setModalOpen(false)
      refresh()
    } catch (err) {
      setFormError(err.message || "Échec de l'enregistrement.")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(vehicle) {
    if (!confirm(`Supprimer "${vehicle.name}" ? Cette action est irréversible.`)) return
    try {
      await api.vehicles.remove(vehicle._id)
      refresh()
    } catch (err) {
      alert(err.message || 'Échec de la suppression.')
    }
  }

  async function togglePublished(vehicle) {
    try {
      await api.vehicles.update(vehicle._id, { published: !vehicle.published })
      refresh()
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <p className="eyebrow mb-2">Gestion de la flotte</p>
          <h1 className="font-display text-2xl text-forest">Véhicules</h1>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-full bg-forest text-ivory px-5 py-2.5 text-sm hover:bg-forest-light transition-colors"
        >
          <Plus size={16} /> Ajouter un véhicule
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilter('tous')}
          className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${filter === 'tous' ? 'bg-forest text-ivory border-forest' : 'border-charcoal/20 text-charcoal/60'}`}
        >
          Tous
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setFilter(c.slug)}
            className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${filter === c.slug ? 'bg-forest text-ivory border-forest' : 'border-charcoal/20 text-charcoal/60'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {error && <p className="text-red-700 text-sm mb-4">{error}</p>}
      {!vehicles && !error && <p className="text-charcoal/50 text-sm">Chargement…</p>}

      {vehicles && (
        <div className="bg-ivory rounded-sm border border-forest/10 overflow-hidden">
          {filtered.length === 0 && (
            <p className="text-center text-charcoal/50 text-sm py-12">Aucun véhicule dans cette catégorie.</p>
          )}
          {filtered.map((v) => (
            <div key={v._id} className="flex items-center gap-4 px-5 py-4 border-b border-forest/5 last:border-none">
              <img src={v.image} alt={v.name} className="w-16 h-16 object-cover rounded-sm shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm text-charcoal truncate">{v.name}</p>
                <p className="text-xs text-charcoal/45 font-mono uppercase tracking-wide">
                  {v.category}{v.product ? ` · ${v.product}` : ''}
                </p>
              </div>
              <button onClick={() => togglePublished(v)} title={v.published ? 'Publié — cliquer pour masquer' : 'Masqué — cliquer pour publier'} className="text-charcoal/40 hover:text-forest transition-colors shrink-0">
                {v.published ? <Eye size={17} /> : <EyeOff size={17} />}
              </button>
              <button onClick={() => openEdit(v)} className="text-charcoal/40 hover:text-forest transition-colors shrink-0">
                <Pencil size={17} />
              </button>
              <button onClick={() => handleDelete(v)} className="text-charcoal/40 hover:text-red-700 transition-colors shrink-0">
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier le véhicule' : 'Ajouter un véhicule'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-charcoal/60 mb-1.5">Photo</label>
            <ImageUploader
              value={{ image: form.image, imagePublicId: form.imagePublicId }}
              onChange={(v) => setForm((f) => ({ ...f, ...v }))}
            />
          </div>

          <div>
            <label className="block text-xs text-charcoal/60 mb-1.5">Nom</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              placeholder="ex: Sinotruk Howo — Benne 8x4"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-charcoal/60 mb-1.5">Catégorie</label>
              <select
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              >
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-charcoal/60 mb-1.5">Produit (citernes)</label>
              <input
                value={form.product}
                onChange={(e) => setForm((f) => ({ ...f, product: e.target.value }))}
                className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
                placeholder="Gasoil / Fioul"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-charcoal/60 mb-1.5">Caractéristiques (séparées par des virgules)</label>
            <input
              value={form.specs}
              onChange={(e) => setForm((f) => ({ ...f, specs: e.target.value }))}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              placeholder="35 000 L, 8x4, Euro 3 / Euro 5"
            />
          </div>

          <div>
            <label className="block text-xs text-charcoal/60 mb-1.5">Description (optionnelle)</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-xs text-charcoal/60 mb-1.5">Ordre d'affichage</label>
              <input
                type="number"
                value={form.order}
                onChange={(e) => setForm((f) => ({ ...f, order: e.target.value }))}
                className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-charcoal/70 mt-5">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
              />
              Publié sur le site
            </label>
          </div>

          {formError && <p className="text-xs text-red-700">{formError}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-full bg-forest text-ivory py-3 text-sm hover:bg-forest-light transition-colors disabled:opacity-60"
          >
            {saving ? 'Enregistrement…' : editing ? 'Enregistrer les modifications' : 'Ajouter le véhicule'}
          </button>
        </form>
      </Modal>
    </AdminLayout>
  )
}
