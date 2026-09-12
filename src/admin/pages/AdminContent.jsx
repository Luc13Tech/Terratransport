import { useState, useEffect } from 'react'
import { Save, Check } from 'lucide-react'
import AdminLayout from '../components/AdminLayout'
import { api } from '../../lib/api'

export default function AdminContent() {
  const [items, setItems] = useState(null)
  const [error, setError] = useState('')
  const [drafts, setDrafts] = useState({})
  const [savingKey, setSavingKey] = useState(null)
  const [savedKey, setSavedKey] = useState(null)

  useEffect(() => {
    api.content
      .listAdmin()
      .then((data) => {
        setItems(data)
        const initial = {}
        for (const item of data) initial[item.key] = item.value
        setDrafts(initial)
      })
      .catch((err) => setError(err.message))
  }, [])

  async function handleSave(item) {
    setSavingKey(item.key)
    try {
      await api.content.upsert(item.key, {
        value: drafts[item.key],
        page: item.page,
        label: item.label,
        type: item.type,
      })
      setSavedKey(item.key)
      setTimeout(() => setSavedKey(null), 1800)
    } catch (err) {
      alert(err.message)
    } finally {
      setSavingKey(null)
    }
  }

  const grouped = items
    ? items.reduce((acc, item) => {
        acc[item.page] = acc[item.page] || []
        acc[item.page].push(item)
        return acc
      }, {})
    : {}

  return (
    <AdminLayout>
      <p className="eyebrow mb-2">Textes du site</p>
      <h1 className="font-display text-2xl text-forest mb-8">Contenu</h1>

      {error && <p className="text-red-700 text-sm mb-4">{error}</p>}
      {!items && !error && <p className="text-charcoal/50 text-sm">Chargement…</p>}

      {items && items.length === 0 && (
        <p className="text-charcoal/50 text-sm">
          Aucun bloc de contenu enregistré pour le moment — lance le seed pour importer les textes actuels du site.
        </p>
      )}

      {Object.entries(grouped).map(([page, pageItems]) => (
        <div key={page} className="mb-10">
          <p className="font-mono text-xs tracking-widest2 uppercase text-brass mb-4">{page}</p>
          <div className="bg-ivory rounded-sm border border-forest/10 divide-y divide-forest/5">
            {pageItems.map((item) => (
              <div key={item.key} className="px-5 py-5">
                <label className="block text-sm text-charcoal mb-2">{item.label}</label>
                <textarea
                  rows={item.type === 'richtext' ? 3 : 2}
                  value={drafts[item.key] ?? ''}
                  onChange={(e) => setDrafts((d) => ({ ...d, [item.key]: e.target.value }))}
                  className="w-full border border-charcoal/15 rounded-sm bg-white px-3 py-2 text-sm focus:border-forest outline-none resize-none"
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => handleSave(item)}
                    disabled={savingKey === item.key}
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-full bg-forest text-ivory hover:bg-forest-light transition-colors disabled:opacity-60"
                  >
                    {savedKey === item.key ? (
                      <><Check size={14} /> Enregistré</>
                    ) : (
                      <><Save size={14} /> {savingKey === item.key ? 'Enregistrement…' : 'Enregistrer'}</>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AdminLayout>
  )
}
