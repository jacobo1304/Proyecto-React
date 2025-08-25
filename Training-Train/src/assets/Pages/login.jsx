import { useState } from 'react'

export default function Login() {
  const [company, setCompany] = useState('')

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center gap-10 p-6 text-center">
        {/* Título */}
        <h1 className="text-sky-300 text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-sm">
          Training train
        </h1>

        {/* Imagen del tren */}
        <img
          src="../images/Training Train Proyecto DCU. (3).png"
          alt="Tren amarillo"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = '/vite.svg'
          }}
          className="w-64 md:w-80 h-auto select-none"
          draggable={false}
        />

        {/* Subtítulo tipo enlace subrayado */}
        <h2 className="text-sky-300 text-3xl font-semibold decoration-2">
          ¡Bienvenido a bordo!
        </h2>

        {/* Selector de empresa */}
        <div className="w-full max-w-lg">
          <label htmlFor="company" className="sr-only">
            Selecciona tu empresa
          </label>
          <div className="relative">
            <select
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full appearance-none rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-5 py-4 text-lg text-zinc-100 placeholder:text-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Selecciona tu empresa"
            >
              <option value="" disabled>
                Selecciona tu empresa
              </option>
              <option value="Empresa 1">UPB</option>
              <option value="Empresa 2">Google</option>
              <option value="Empresa 3">Microsoft</option>
            </select>
            {/* Caret */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300">▾</span>
          </div>
        </div>

        {/* Botón principal */}
        <button
          type="button"
          disabled={!company}
          className="mt-2 rounded-2xl bg-sky-600 px-8 py-4 text-2xl font-medium text-white shadow-md shadow-sky-900/40 transition-colors hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => {
            // TODO: navegación o acción al confirmar
            console.log('Empresa seleccionada:', company)
          }}
        >
          Comencemos
        </button>
      </div>
    </main>
  )
}

