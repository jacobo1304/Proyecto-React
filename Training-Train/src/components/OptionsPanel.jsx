import ThemeSlider from './ThemeSlider'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'
import { useThemeStore } from '../store/themeStore'
import { useEffect, useState } from 'react'

/*
  OptionsPanel: panel lateral interno que se monta dentro del flujo de la página
  Props:
    open (bool)
    onClose () => void
  Animación: simple slide in/out usando utilidades Tailwind + transición CSS
*/
export default function OptionsPanel({ open, onClose }) {
  const navigate = useNavigate()
  const logout = useAuthStore((s) => s.logout)
  const theme = useThemeStore((s) => s.theme)
  const [render, setRender] = useState(open) // controla si el nodo existe en el DOM
  const [animating, setAnimating] = useState(false) // controla la fase de translate para animar entrada

  // Gestiona montaje y animación de entrada
  useEffect(() => {
    if (open) {
      // Montamos el panel oculto y en el siguiente frame disparamos transición a 0
      setRender(true)
      setAnimating(false) // posición inicial fuera de pantalla (-translate-x-full)
      const id = requestAnimationFrame(() => {
        setAnimating(true) // dispara translate-x-0 con transition
      })
      return () => cancelAnimationFrame(id)
    } else {
      // Al cerrar simplemente revertimos la animación; onTransitionEnd desmonta
      setAnimating(false)
    }
  }, [open])

  const handleAnimationEnd = () => {
    if (!open) setRender(false)
  }

  if (!render) return null

  return (
    <aside
      className={`absolute left-0 top-0 z-30 h-full w-[min(90%,380px)] overflow-y-auto border-r bg-gradient-to-b from-zinc-800/95 to-zinc-900/95 p-6 text-zinc-100 shadow-xl backdrop-blur-sm transition-transform duration-300 ease-out will-change-transform dark:from-zinc-800/95 dark:to-zinc-900/95
        ${animating ? 'translate-x-0' : '-translate-x-full'}
      `}
      onTransitionEnd={handleAnimationEnd}
      aria-label="Panel de opciones"
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="rounded-md p-1 text-2xl leading-none text-zinc-200 transition hover:bg-zinc-700/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          ❮
        </button>
        <h2 className="text-2xl font-extrabold tracking-tight text-sky-300 underline underline-offset-8 decoration-sky-400/70">
          Opciones
        </h2>
      </div>

      {/* Tema */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <label className="text-lg font-medium">Tema</label>
          <div className="flex items-center gap-3">
            <span aria-hidden>🌙</span>
            <ThemeSlider />
            <span aria-hidden>🌞</span>
          </div>
        </div>

        {/* Idioma (placeholder) */}
        <div className="flex items-center justify-between">
          <label htmlFor="idioma" className="text-lg font-medium">
            Idioma
          </label>
          <select
            id="idioma"
            className="rounded-md border border-zinc-600 bg-zinc-800 px-3 py-1 text-zinc-100 shadow focus:outline-none focus:ring-2 focus:ring-sky-400"
            defaultValue="es"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Términos */}
        <button
          onClick={() => navigate('/terminos')}
          className="mt-2 w-full text-left text-lg text-zinc-200 underline-offset-4 hover:underline"
        >
          Términos y condiciones
        </button>
      </section>

      {/* Estado del tema (debug opcional) */}
      <p className="mt-6 text-xs text-zinc-500">Tema actual: {theme}</p>

      {/* Cerrar sesión */}
      <div className="mt-10">
        <button
          onClick={() => {
            logout()
            navigate('/login')
            onClose?.()
          }}
          className="inline-flex items-center gap-2 text-base font-semibold text-amber-400 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          Cerrar sesión <span aria-hidden>↪️</span>
        </button>
      </div>
    </aside>
  )
}
