import { Toaster, toast } from 'react-hot-toast'
import { useEffect } from 'react'
import { useUIStore } from '../store/uiStore'

export default function ToastContainer() {
  const toasts = useUIStore((s) => s.toasts)
  const clearToasts = useUIStore((s) => s.clearToasts)

  useEffect(() => {
    if (!toasts.length) return
    // Mostrar y limpiar cola local (delegamos el render a react-hot-toast)
    toasts.forEach((t) => {
      const fn = t.type === 'error' ? toast.error : t.type === 'success' ? toast.success : toast
      fn(t.message)
    })
    clearToasts()
  }, [toasts, clearToasts])

  return <Toaster position="top-center" />
}
