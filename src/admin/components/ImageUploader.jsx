import { useState, useRef } from 'react'
import { UploadCloud, X, Loader2 } from 'lucide-react'
import { api } from '../../lib/api'

// value: { image: string, imagePublicId: string }
export default function ImageUploader({ value, onChange }) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  async function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setError('')
    setUploading(true)
    try {
      const result = await api.upload.image(file)
      onChange({ image: result.url, imagePublicId: result.publicId })
    } catch (err) {
      setError(err.message || "Échec de l'envoi de l'image.")
    } finally {
      setUploading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  async function handleRemove() {
    if (value?.imagePublicId) {
      try {
        await api.upload.remove(value.imagePublicId)
      } catch {
        // on efface quand même côté formulaire même si la suppression Cloudinary échoue
      }
    }
    onChange({ image: '', imagePublicId: '' })
  }

  return (
    <div>
      {value?.image ? (
        <div className="relative w-full h-44 rounded-sm overflow-hidden border border-forest/10">
          <img src={value.image} alt="Aperçu" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-charcoal/80 text-ivory rounded-full p-1.5 hover:bg-charcoal transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-44 border border-dashed border-forest/25 rounded-sm cursor-pointer hover:border-brass transition-colors bg-ivory">
          {uploading ? (
            <>
              <Loader2 size={22} className="text-brass animate-spin mb-2" />
              <span className="text-xs text-charcoal/50">Envoi en cours…</span>
            </>
          ) : (
            <>
              <UploadCloud size={22} strokeWidth={1.5} className="text-brass mb-2" />
              <span className="text-xs text-charcoal/50">Cliquer pour choisir une image</span>
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
            disabled={uploading}
          />
        </label>
      )}
      {error && <p className="text-xs text-red-700 mt-2">{error}</p>}
    </div>
  )
}
