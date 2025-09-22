import { useNavigate } from 'react-router-dom'
import ThemeSlider from '../../components/ThemeSlider'
import { useAuthStore } from '../../store/authStore'

export default function Opciones() {
  const navigate = useNavigate()
  const logout = useAuthStore((s) => s.logout)

  const close = () => (window.history.length > 1 ? navigate(-1) : navigate('/inicio'))

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Fondo difuminado */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer */}
  <aside className="absolute left-0 top-0 h-full w-[min(90vw,420px)] overflow-y-auto p-6 text-zinc-900 shadow-2xl ring-1 ring-black/10 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:text-zinc-100 dark:from-zinc-800 dark:to-zinc-900 dark:ring-black/50">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={close}
            aria-label="Volver"
            className="rounded-md p-1 text-2xl leading-none text-zinc-200 transition hover:bg-zinc-700/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            ❮
          </button>
          <h1 className="text-3xl font-extrabold tracking-tight text-sky-700 underline underline-offset-8 decoration-sky-400/70 dark:text-sky-300">
            Opciones
          </h1>
        </div>

        {/* Tema */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-xl font-medium">Tema</label>
            <div className="flex items-center gap-3">
              <span aria-hidden>🌙</span>
              <ThemeSlider />
              <span aria-hidden>🌞</span>
            </div>
          </div>

          {/* Idioma */}
          <div className="flex items-center justify-between">
            <label htmlFor="idioma" className="text-xl font-medium">
              Idioma
            </label>
            <select
              id="idioma"
              className="rounded-md border px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-sky-400 border-zinc-300 bg-white text-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              defaultValue="es"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Términos */}
          <button
            onClick={() => navigate('/terminos')}
            className="mt-2 w-full text-left text-xl text-zinc-200 underline-offset-4 hover:underline"
          >
            Terminos y condiciones
          </button>
        </section>

        {/* Cerrar sesión */}
        <div className="mt-10">
          <button
            onClick={() => {
              logout()
              navigate('/login')
            }}
            className="inline-flex items-center gap-2 text-lg font-semibold text-amber-400 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Cerrar sesión <span aria-hidden>↪️</span>
          </button>
        </div>
      </aside>
    </div>
  )
}
