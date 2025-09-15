import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FooterNav from '../components/FooterNav'
import ConfirmDialog from '../components/ConfirmDialog'

const BANK_SCENARIO = {
  id: 'correos',
  titulo: 'Actividad #1',
  img: '/images/correos.jpg',
  pregunta:
    'Te llegó un correo y andan preguntando datos sobre tu banco para la seguridad.',
  opciones: ['A', 'B', 'C', 'D'],
}

export default function Actividad() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [openConfirm, setOpenConfirm] = useState(false)
  const [seleccion, setSeleccion] = useState(null)

  const data = useMemo(() => {
    // En el futuro, mapear por id. Por ahora, usa BANK_SCENARIO como demo.
    return BANK_SCENARIO
  }, [id])

  return (
    <main className="min-h-dvh bg-zinc-900 text-zinc-100 pb-28">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-zinc-800 bg-zinc-900/95 px-4 py-3 backdrop-blur">
        <button
          type="button"
          aria-label="Volver"
          className="rounded-lg p-2 text-zinc-100 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          onClick={() => setOpenConfirm(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="flex-1 text-center text-2xl font-extrabold text-sky-300">{data.titulo}</h1>
        <div className="w-6" />
      </header>

      {/* Imagen principal */}
      <div className="mx-auto max-w-screen-sm">
        <div className="relative">
          <div className="h-64 w-full bg-zinc-800">
            <img src={data.img} alt={data.titulo} className="h-64 w-full object-cover" />
          </div>
        </div>

        {/* Enunciado */}
        <div className="px-4 py-4">
          <p className="text-base md:text-lg text-zinc-200">
            {data.pregunta}
          </p>
          <h2 className="mt-3 text-xl font-bold text-sky-300">¿Qué harás ahora?</h2>
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
                  navigate('/correcto')
                } else {
                  navigate('/incorrecto')
                }
              }}
              className={`rounded-lg border px-4 py-3 text-zinc-100 ${
                seleccion === op
                  ? 'border-sky-500 bg-sky-700'
                  : 'border-zinc-600 bg-zinc-800 hover:bg-zinc-700'
              }`}
            >
              {op}
            </button>
          ))}
        </div>
      </div>

      <FooterNav current="home" />

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
  )
}
