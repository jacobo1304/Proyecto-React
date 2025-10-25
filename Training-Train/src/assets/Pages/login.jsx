import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingHeader from '../../components/LandingHeader'
import { trainingLogo, publicImages } from '../images.js'
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
    <div className="min-h-screen bg-[#0F172A] text-white">
      <LandingHeader useRoutes />
      <main className="pt-14">
        <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
          {/* Tren */}
          <img
            src={publicImages.trainingProject || trainingLogo}
            alt="Train"
            className="w-64 md:w-80 h-auto select-none"
            draggable={false}
          />

          {/* Títulos */}
          <h2 className="text-3xl font-semibold text-sky-300">¡Bienvenido a bordo!</h2>
          <p className="text-base text-white/90">Ingresa tus datos y empieza a aprender</p>

          {/* Nombre de usuario */}
          <div className="w-full max-w-lg">
            <label htmlFor="name" className="sr-only">Tu nombre</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingresa tu nombre"
              className="w-full rounded-xl px-5 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border border-white/10 bg-white/10 text-white placeholder:text-white/60"
            />
          </div>

          {/* Selector de empresa */}
          <div className="w-full max-w-lg">
            <label htmlFor="company" className="sr-only">Selecciona tu empresa</label>
            <div className="relative">
              <select
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full appearance-none rounded-xl px-5 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border border-white/10 bg-white/10 text-white"
                aria-label="Selecciona tu empresa"
              >
                <option value="" disabled>Selecciona tu empresa</option>
                {companies.map((c) => (
                  <option key={c.value} value={c.value} className="text-black">{c.label}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">▾</span>
            </div>
          </div>

          {/* Botón principal */}
          <button
            type="button"
            disabled={!company || !name}
            className="mt-1 w-full max-w-lg rounded-xl bg-indigo-400 px-8 py-3 text-xl font-semibold text-zinc-900 shadow ring-1 ring-indigo-300 transition-colors hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => {
              if (company !== requiredCompanyValue) {
                showToast({
                  type: 'error',
                  message: `Solo puedes acceder con ${requiredCompanyLabel}`,
                })
                return
              }
              selectCompany(company)
              setUserName(name)
              login()
              navigate('/loading')
            }}
          >
            Ingresar
          </button>

          {/* Enlaces secundarios */}
          <div className="mt-2 flex gap-10 text-white/90 underline underline-offset-4">
            <Link to="/soporte" className="hover:text-white">Soporte</Link>
            <Link to="/contacto" className="hover:text-white">Soy entrenador</Link>
          </div>
        </div>

        {/* Footer barra azul */}
        <footer className="mt-8 bg-[#163477] px-6 py-6 text-xs text-white/90">
          <div className="mx-auto max-w-6xl">
            <p>Contacto:</p>
            <p>Universidad pontificia bolivariana --- Jacobo.rodriguez@upb.edu.co</p>
            <p>3002707141</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

