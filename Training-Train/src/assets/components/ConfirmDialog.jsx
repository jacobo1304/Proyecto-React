import { useEffect, useRef } from 'react'

/**
 * ConfirmDialog - Modal reutilizable de confirmación.
 * Props:
 * - open: boolean (controla visibilidad)
 * - title: string | ReactNode
 * - message: string | ReactNode
 * - confirmText: string (por defecto: 'Sí')
 * - cancelText: string (por defecto: 'No')
 * - onConfirm: () => void
 * - onCancel: () => void
 * - closeOnBackdrop: boolean (por defecto: true)
 */
export default function ConfirmDialog({
  open,
  title = '¿Abandonar actividad?',
  message = 'Si abandonas ahora, podrías perder tu progreso.',
  confirmText = 'Sí',
  cancelText = 'No',
  onConfirm,
  onCancel,
  closeOnBackdrop = true,
}) {
  const cancelBtnRef = useRef(null)

  // Bloquear scroll del body cuando esté abierto y enfocar botón cancelar
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
      // foco
      setTimeout(() => cancelBtnRef.current?.focus(), 0)
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  // Cerrar con ESC y confirmar con Enter
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onCancel?.()
      if (e.key === 'Enter') onConfirm?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onCancel, onConfirm])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      aria-describedby="confirm-desc"
    >
      {/* Backdrop con desenfoque */}
      <button
        type="button"
        aria-label="Cerrar"
        onClick={() => closeOnBackdrop && onCancel?.()}
        className="absolute inset-0 bg-zinc-950/50 backdrop-blur-sm"
      />

      {/* Contenedor del modal */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900 text-zinc-100 shadow-2xl">
        {/* Header estilo barra gris */}
        <div className="bg-zinc-700/60 px-5 py-3 text-center">
          <h2 id="confirm-title" className="text-xl font-semibold text-zinc-100">
            {title}
          </h2>
        </div>

        {/* Mensaje */}
        <div className="px-6 py-6">
          <p id="confirm-desc" className="text-center text-lg md:text-xl text-zinc-200">
            {message}
          </p>
        </div>

        {/* Acciones */}
        <div className="flex items-center justify-center gap-4 px-6 pb-6">
          <button
            type="button"
            onClick={onConfirm}
            className="min-w-[6rem] rounded-xl border-2 border-amber-500 px-6 py-2 text-lg font-semibold text-amber-400 hover:bg-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            {confirmText}
          </button>
          <button
            type="button"
            ref={cancelBtnRef}
            onClick={onCancel}
            className="min-w-[6rem] rounded-xl bg-sky-700 px-6 py-2 text-lg font-semibold text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  )
}
