import { Toaster, toast } from 'react-hot-toast'
import { useEffect } from 'react'
import { useUIStore } from '../store/uiStore'
import CustomToast from './CustomToast'

export default function ToastContainer() {
  const toasts = useUIStore((s) => s.toasts)
  const clearToasts = useUIStore((s) => s.clearToasts)

  useEffect(() => {
    if (!toasts.length) return
    // Mostrar y limpiar cola local (delegamos el render a react-hot-toast)
    toasts.forEach((t) => {
      if (t.type === 'error') {
        // Política actual: errores usan el toast nativo textual de react-hot-toast.
        // (Se eliminó el ErrorToast personalizado con imagen para simplificar UX.)
        toast.error(t.message || 'Ocurrió un error')
      } else if (t.type === 'activity-success') {
        toast.custom((tt) => (
          <CustomToast t={tt} imageKey={t.imageKey || 'toastSuccess'} />
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
