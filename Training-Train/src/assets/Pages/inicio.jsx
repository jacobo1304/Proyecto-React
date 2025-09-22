import FooterNav from '../components/FooterNav'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { useWalletStore } from '../../store/walletStore'

export default function Inicio() {
  const navigate = useNavigate()
  const userName = useAuthStore((s) => s.userName)
  const coins = useWalletStore((s) => s.coins)
  const cursos = [
    { id: 1, titulo: 'Riesgos del trabajo', img: '/images/Riesgos%20del%20trabajo.jpg' },
    { id: 2, titulo: 'Seguridad de la Información', img: '/images/SeguridadInformacion.jpg' },
  ]

  return (
    <main className="min-h-dvh pb-24 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
      <div className="mx-auto max-w-screen-sm px-4 pt-4">
        {/* Header con menú y búsqueda */}
        <header className="flex items-center gap-3">
          {/* Menú hamburguesa */}
          <button
            type="button"
            className="p-2 text-zinc-700 hover:text-sky-600 dark:text-zinc-100"
            aria-label="Abrir opciones"
            onClick={() => navigate('/opciones')}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          {/* Barra de búsqueda */}
          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-full border pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 border-zinc-300 bg-white/70 placeholder:text-zinc-500 dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:placeholder:text-zinc-400"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden="true">🔍</span>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-300" aria-label="Limpiar búsqueda">
              ⓧ
            </button>
          </div>
        </header>

        {/* Saludo y saldo */}
        <section className="mt-8 grid grid-cols-[1fr_auto] items-start gap-4">
          <h1 className="text-4xl font-extrabold tracking-wide text-sky-700 dark:text-sky-300">Hola {userName || 'Carlos'}!</h1>
          <div className="flex items-center gap-3 rounded-xl px-4 py-2 shadow bg-amber-200 text-zinc-900 dark:bg-amber-700 dark:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-zinc-900 font-bold">$</span>
            <span className="text-2xl font-semibold">{coins}</span>
          </div>
        </section>

        {/* Cursos asignados */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Cursos que tienes asignados:</h2>

          <div className="mt-6 space-y-8">
            {cursos.map((c) => (
              <article key={c.id} className="">
                <h3 className="mb-3 text-center text-xl font-semibold text-zinc-200">{c.titulo}</h3>
                <button
                  type="button"
                  onClick={() => navigate('/actividades')}
                  className="h-36 w-full overflow-hidden rounded-md border focus:outline-none focus:ring-2 focus:ring-sky-500 border-zinc-300 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800"
                >
                  <img src={c.img} alt={c.titulo} className="h-full w-full object-cover" loading="lazy" />
                </button>
              </article>
            ))}
          </div>

          <p className="mt-10 text-2xl text-zinc-500 dark:text-zinc-400">No hay más cursos...</p>
        </section>
      </div>

      <FooterNav current="home" />
    </main>
  )
}
