import { Toaster, toast } from 'react-hot-toast'
import { useEffect } from 'react'
import { useUIStore } from '../store/uiStore'
import ErrorToast from '../assets/components/toast/ErrorToast'

export default function ToastContainer() {
  const toasts = useUIStore((s) => s.toasts)
  const clearToasts = useUIStore((s) => s.clearToasts)

  useEffect(() => {
    if (!toasts.length) return
    // Mostrar y limpiar cola local (delegamos el render a react-hot-toast)
    toasts.forEach((t) => {
      if (t.type === 'error') {
        toast.custom((tt) => (
          <ErrorToast t={tt} message={t.message} onAction={t.onAction} />
        ))
      } else if (t.type === 'success') {
        toast.success(t.message)
      } else {
        toast(t.message)
      }
    })
    clearToasts()
  }, [toasts, clearToasts])

  return <Toaster position="top-center" />
}
