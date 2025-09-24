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
  const [overlayVisible, setOverlayVisible] = useState(false) // controla la opacidad del overlay

  // Gestiona montaje y animación de entrada
  useEffect(() => {
    if (open) {
      // Montamos el panel oculto y en el siguiente frame disparamos transición a 0
      setRender(true)
      setAnimating(false) // posición inicial fuera de pantalla (-translate-x-full)
      setOverlayVisible(false)
      
      // Usar setTimeout en lugar de requestAnimationFrame para mejor timing
      const timeoutId = setTimeout(() => {
        setOverlayVisible(true)
        setAnimating(true) // dispara translate-x-0 con transition
      }, 10) // Pequeño delay para asegurar que el elemento esté renderizado
      
      return () => clearTimeout(timeoutId)
    } else {
      // Al cerrar simplemente revertimos la animación; onTransitionEnd desmonta
      setOverlayVisible(false)
      setAnimating(false)
    }
  }, [open])

  const handleAnimationEnd = () => {
    if (!open) setRender(false)
  }

  if (!render) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-20 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
          overlayVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <aside
        className={`fixed left-0 top-0 z-30 h-screen w-[min(90%,380px)] overflow-y-auto border-r border-zinc-700/50 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-800/95 dark:to-zinc-900/95 p-6 text-zinc-900 dark:text-zinc-100 shadow-2xl backdrop-blur-sm transition-all duration-500 ease-out will-change-transform dark:border-zinc-600/50
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
          className="rounded-md p-1 text-2xl leading-none text-zinc-700 dark:text-zinc-200 transition hover:bg-zinc-200/80 dark:hover:bg-zinc-700/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          ❮
        </button>
        <h2 className="text-2xl font-extrabold tracking-tight text-sky-600 dark:text-sky-300 underline underline-offset-8 decoration-sky-500/70 dark:decoration-sky-400/70">
          Opciones
        </h2>
      </div>

      {/* Tema */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <label className="text-lg font-medium text-zinc-800 dark:text-zinc-200">Tema</label>
          <div className="flex items-center gap-3">
            <span aria-hidden>🌙</span>
            <ThemeSlider />
            <span aria-hidden>🌞</span>
          </div>
        </div>

        {/* Idioma (placeholder) */}
        <div className="flex items-center justify-between">
          <label htmlFor="idioma" className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
            Idioma
          </label>
          <select
            id="idioma"
            className="rounded-md border border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 px-3 py-1 text-zinc-900 dark:text-zinc-100 shadow focus:outline-none focus:ring-2 focus:ring-sky-400"
            defaultValue="es"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Términos */}
        <button
          onClick={() => navigate('/terminos')}
          className="mt-2 w-full text-left text-lg text-zinc-700 dark:text-zinc-200 underline-offset-4 hover:underline"
        >
          Términos y condiciones
        </button>
      </section>

      {/* Cerrar sesión */}
      <div className="mt-10">
        <button
          onClick={() => {
            logout()
            navigate('/login')
            onClose?.()
          }}
          className="inline-flex items-center gap-2 text-base font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
        >
          Cerrar sesión <span aria-hidden>↪️</span>
        </button>
      </div>
    </aside>
    </>
  )
}
