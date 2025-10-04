import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { publicImages } from '../assets/images.js'

/*
  CustomToast
  props:
    t: objeto de react-hot-toast
    imageKey?: string (clave de publicImages, por defecto 'toastSuccess')
  Comportamiento:
    - Autocierra a los 2000ms
    - Click global o botón "Continuar" hacen dismiss inmediato
*/
export default function CustomToast({ 
  t, 
  imageKey = 'toastSuccess' 
}) {
  useEffect(() => {
    // Auto close after 2.0s
    const id = setTimeout(() => {
      if (t?.id) {
        toast.dismiss(t.id)
      }
    }, 2000)
    return () => clearTimeout(id)
  }, [t])

  // Obtener la imagen desde publicImages o usar fallback
  const imageSrc = publicImages[imageKey] || publicImages.toast || publicImages.toastSuccess

  return (
    <div
      className="pointer-events-auto overflow-hidden rounded-xl shadow-lg transition-all animate-fadeIn cursor-pointer bg-white/95 dark:bg-zinc-800/95 ring-1 ring-emerald-400/30 backdrop-blur-sm"
      role="status"
      onClick={() => toast.dismiss(t.id)}
    >
      <div className="p-3 flex flex-col items-center gap-2">
        <img
          src={imageSrc}
          alt="Notificación"
          className="h-auto w-full max-w-[220px] object-contain"
          style={{ maxHeight: '160px' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const parent = e.currentTarget.parentElement
            if (parent) {
              parent.className = 'pointer-events-auto flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white text-2xl shadow-lg transition-all animate-fadeIn cursor-pointer'
              parent.innerHTML = '✅'
            }
          }}
        />
        <button
          type="button"
          onClick={(ev) => { ev.stopPropagation(); toast.dismiss(t.id) }}
          className="mt-1 inline-flex items-center rounded-full bg-emerald-600 px-5 py-1.5 text-sm font-semibold text-white shadow hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
