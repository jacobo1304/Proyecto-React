import { useEffect } from 'react'

/*
  SuccessToast
  props:
    t: objeto que entrega react-hot-toast (para dismiss opcional)
    title: string
    message: string
    imageSrc?: string (opcional, placeholder para que luego pongas tu imagen: ej. '/images/toast-success.png')
*/
export default function SuccessToast({ t, title = '¡Correcto!', message = 'Respuesta registrada', imageSrc = '/images/toast.png' }) {
  useEffect(() => {
    // Auto close after 2.2s
    const id = setTimeout(() => {
      if (t?.id) {
        // react-hot-toast se encargará; esta es una referencia, si quisieras dismiss manual podrías
      }
    }, 2200)
    return () => clearTimeout(id)
  }, [t])

  return (
    <div
      className={`pointer-events-auto flex w-full max-w-sm items-center gap-4 rounded-xl border border-emerald-400/50 bg-emerald-600/90 px-4 py-3 text-white shadow-lg backdrop-blur-sm ring-1 ring-emerald-500/40 transition-all animate-fadeIn dark:bg-emerald-600/90`}
      role="status"
    >
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-white/10 ring-1 ring-white/20">
        <img
          src={imageSrc}
          alt="Éxito"
          className="h-full w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        {/* Si falla la imagen, mostramos emoji */}
        <span className="text-2xl" aria-hidden>✅</span>
      </div>
      <div className="flex-1">
        <p className="text-base font-bold leading-tight">{title}</p>
        <p className="mt-0.5 text-sm opacity-90">{message}</p>
      </div>
    </div>
  )
}
