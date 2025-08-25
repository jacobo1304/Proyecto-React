import { useState } from 'react'
import ConfirmDialog from '../../components/ConfirmDialog'
import FooterNav from '../../components/FooterNav'

export default function Confirmacion() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-dvh bg-zinc-900 text-zinc-100 pb-28">
      {/* Contenido de ejemplo detrás del modal */}
      <div className="mx-auto max-w-screen-sm px-4 pt-6">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-xl bg-sky-700 px-6 py-3 text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Abrir confirmación
        </button>

        <div className="mt-6 space-y-4">
          <p>
            Esta pantalla demuestra un fondo con contenido que se desenfoca cuando aparece el cuadro de confirmación.
          </p>
          <div className="h-40 rounded-lg bg-zinc-800/70" />
          <div className="h-40 rounded-lg bg-zinc-800/70" />
          <div className="h-40 rounded-lg bg-zinc-800/70" />
        </div>
      </div>

      <FooterNav current="home" />

      <ConfirmDialog
        open={open}
        onConfirm={() => {
          setOpen(false)
          console.log('Confirmado')
        }}
        onCancel={() => setOpen(false)}
      />
    </main>
  )
}
