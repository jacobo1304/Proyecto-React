import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../Imgs/traininglogo.png" 
import { useAuthStore } from '../../store/authStore'
import { useUIStore } from '../../store/uiStore'

export default function Login() {
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const selectCompany = useAuthStore((s) => s.selectCompany)
  const setUserName = useAuthStore((s) => s.setUserName)
  const login = useAuthStore((s) => s.login)
  const showToast = useUIStore((s) => s.showToast)

  // Opciones de empresa con value (interno) y label (visible)
  const companies = [
    { value: 'Empresa 1', label: 'UPB' },
    { value: 'Empresa 2', label: 'Google' },
    { value: 'Empresa 3', label: 'Microsoft' },
  ]
  const requiredCompanyValue = 'Empresa 1'
  const requiredCompanyLabel =
    companies.find((c) => c.value === requiredCompanyValue)?.label || requiredCompanyValue

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center gap-10 p-6 text-center">
        {/* Título */}
       <h1 className="quicksand-main text-sky-300 text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-sm">
        Training train
        </h1>

        {/* Imagen del tren */}
        <img
          src={logo}
          alt="Logo"
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
              {companies.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            {/* Caret */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300">▾</span>
          </div>
        </div>

        {/* Nombre de usuario */}
        <div className="w-full max-w-lg">
          <label htmlFor="name" className="sr-only">Tu nombre</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="mt-2 w-full rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-5 py-4 text-lg text-zinc-100 placeholder:text-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Botón principal */}
        <button
          type="button"
          disabled={!company || !name}
          className="mt-2 rounded-2xl bg-sky-600 px-8 py-4 text-2xl font-medium text-white shadow-md shadow-sky-900/40 transition-colors hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => {
            if (company !== requiredCompanyValue) {
              showToast({ type: 'error', message: `Solo puedes acceder con ${requiredCompanyLabel}` })
              return
            }
            // Persistimos en store
            selectCompany(company)
            setUserName(name)
            login()
            navigate('/loading')
          }}
        >
          Comencemos
        </button>
      </div>
    </main>
  )
}

