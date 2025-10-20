import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppLayout from '../../components/AppLayout'
import ConfirmDialog from '../components/ConfirmDialog'
import { useUIStore } from '../../store/uiStore'
import { publicImages } from '../images.js'

const BANK_SCENARIO = {
  id: 'correos',
  titulo: 'Actividad #1',
  img: publicImages.correos,
  pregunta:
    'Te llegó un correo y andan preguntando datos sobre tu banco para la seguridad.',
  opciones: ['A', 'B', 'C', 'D'],
}

export default function Actividad() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [openConfirm, setOpenConfirm] = useState(false)
  const [seleccion, setSeleccion] = useState(null)
  const showToast = useUIStore((s) => s.showToast)

  const data = useMemo(() => {
    // En el futuro, mapear por id. Por ahora, usa BANK_SCENARIO como demo.
    return BANK_SCENARIO
  }, [id])

  return (
    <AppLayout footerCurrent="home">
      <main className="min-h-dvh pb-8 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
        {/* Header */}
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b px-4 py-3 backdrop-blur border-zinc-200 bg-zinc-50/95 dark:border-zinc-800 dark:bg-zinc-900/95 transition-colors">
          <button
            type="button"
            aria-label="Volver"
            className="rounded-lg p-2 text-zinc-900 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => setOpenConfirm(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="flex-1 text-center text-2xl font-extrabold text-sky-700 dark:text-sky-300">{data.titulo}</h1>
          <div className="w-6" />
        </header>

        {/* Imagen principal */}
        <div className="mx-auto max-w-screen-sm">
          <div className="relative">
            <div className="h-64 w-full bg-zinc-200 dark:bg-zinc-800">
              <img src={data.img} alt={data.titulo} className="h-64 w-full object-cover" />
            </div>
          </div>

          {/* Enunciado */}
          <div className="px-4 py-4">
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-200">
              {data.pregunta}
            </p>
            <h2 className="mt-3 text-xl font-bold text-sky-700 dark:text-sky-300">¿Qué harás ahora?</h2>
          </div>

          {/* Opciones */}
          <div className="grid grid-cols-2 gap-3 px-4 pb-4">
            {data.opciones.map((op, idx) => (
              <button
                key={op}
                type="button"
                onClick={() => {
                  setSeleccion(op)
                  if (idx === 0) {
                    // Toast de éxito actividad - solo imagen
                    showToast({
                      type: 'activity-success',
                      imageKey: 'toastSuccess',
                    })
                    // Pequeño delay para que el usuario vea el toast antes del redirect
                    setTimeout(() => navigate('/correcto'), 1000)
                  } else {
                    navigate('/incorrecto')
                  }
                }}
                className={`rounded-lg border px-4 py-3 transition-colors ${
                  seleccion === op
                      ? 'border-sky-500 bg-sky-600 text-white dark:bg-sky-700'
                      : 'border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
                }`}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        {/* Confirmación para abandonar actividad */}
        <ConfirmDialog
          open={openConfirm}
          onCancel={() => setOpenConfirm(false)}
          onConfirm={() => navigate(-1)}
          title="¿Abandonar actividad?"
          message="Si abandonas ahora, podrías perder tu progreso."
          confirmText="Sí"
          cancelText="No"
        />
      </main>
    </AppLayout>
  )
}
