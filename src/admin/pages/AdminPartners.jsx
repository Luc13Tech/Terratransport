import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react'
import AdminLayout from '../components/AdminLayout'
import Modal from '../components/Modal'
import { api } from '../../lib/api'

const emptyForm = { name: '', order: 0, published: true }

export default function AdminPartners() {
  const [partners, setPartners] = useState(null)
  const [error, setError] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  function refresh() {
    setError('')
    api.partners.listAll().then(setPartners).catch((err) => setError(err.message))
  }

  useEffect(refresh, [])

  function openCreate() {
    setEditing(null)
    setForm(emptyForm)
    setFormError('')
    setModalOpen(true)
  }

  function openEdit(partner) {
    setEditing(partner)
    setForm({ name: partner.name, order: partner.order || 0, published: partner.published })
    setFormError('')
    setModalOpen(true)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setFormError('')
    const payload = { ...form, order: Number(form.order) || 0 }
    try {
      if (editing) {
        await api.partners.update(editing._id, payload)
      } else {
        await api.partners.create(payload)
      }
      setModalOpen(false)
      refresh()
    } catch (err) {
      setFormError(err.message || "Échec de l'enregistrement.")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(partner) {
    if (!confirm(`Supprimer "${partner.name}" ?`)) return
    try {
      await api.partners.remove(partner._id)
      refresh()
    } catch (err) {
      alert(err.message)
    }
  }

  async function togglePublished(partner) {
    try {
      await api.partners.update(partner._id, { published: !partner.published })
      refresh()
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <p className="eyebrow mb-2">Page Partenariats</p>
          <h1 className="font-display text-2xl text-forest">Partenaires</h1>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-full bg-forest text-ivory px-5 py-2.5 text-sm hover:bg-forest-light transition-colors"
        >
          <Plus size={16} /> Ajouter un partenaire
        </button>
      </div>

      {error && <p className="text-red-700 text-sm mb-4">{error}</p>}
      {!partners && !error && <p className="text-charcoal/50 text-sm">Chargement…</p>}

      {partners && (
        <div className="bg-ivory rounded-sm border border-forest/10 overflow-hidden">
          {partners.length === 0 && (
            <p className="text-center text-charcoal/50 text-sm py-12">Aucun partenaire pour le moment.</p>
          )}
          {partners.map((p) => (
            <div key={p._id} className="flex items-center gap-4 px-5 py-4 border-b border-forest/5 last:border-none">
              <p className="flex-1 font-display text-sm text-charcoal">{p.name}</p>
              <button onClick={() => togglePublished(p)} className="text-charcoal/40 hover:text-forest transition-colors shrink-0">
                {p.published ? <Eye size={17} /> : <EyeOff size={17} />}
              </button>
              <button onClick={() => openEdit(p)} className="text-charcoal/40 hover:text-forest transition-colors shrink-0">
                <Pencil size={17} />
              </button>
              <button onClick={() => handleDelete(p)} className="text-charcoal/40 hover:text-red-700 transition-colors shrink-0">
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier le partenaire' : 'Ajouter un partenaire'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-charcoal/60 mb-1.5">Nom</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:border-forest outline-none text-sm"
              placeholder="ex: Sinotruk"
            />
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
            {saving ? 'Enregistrement…' : editing ? 'Enregistrer les modifications' : 'Ajouter le partenaire'}
          </button>
        </form>
      </Modal>
    </AdminLayout>
  )
}
