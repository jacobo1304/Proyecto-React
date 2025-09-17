import { useNavigate } from 'react-router-dom'
import FooterNav from '../../components/FooterNav'

export default function Progreso() {
  const navigate = useNavigate()

  // Datos simulados (en futuro pueden venir de store/API)
  const stats = {
    actividadesCompletadas: 42,
    totalActividades: 50,
    mejorCurso: 'Seguridad de la información',
    mejorCursoScore: 94,
    promedioGeneral: 88,
    streakDias: 7,
  }

  const heroPlaceholder = (
    <div className="flex h-40 w-full items-center justify-center rounded-none bg-zinc-200 text-6xl text-zinc-500 md:rounded-sm">
      <span role="img" aria-label="gráfico principal">📊</span>
    </div>
  )

  const bottomPlaceholder = (
    <div className="flex h-40 w-full items-center justify-center rounded-none bg-zinc-200 text-6xl text-zinc-500 md:rounded-sm">
      <span role="img" aria-label="gráfico secundario">📈</span>
    </div>
  )

  return (
    <main className="min-h-dvh bg-zinc-900 text-zinc-100 pb-28">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-zinc-700/60 bg-zinc-900/95 px-4 py-3 backdrop-blur">
        <button
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/inicio'))}
          aria-label="Volver"
          className="group rounded-md p-1 text-2xl leading-none text-zinc-200 transition hover:bg-zinc-700/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <span className="block translate-x-0 transition group-active:-translate-x-1">❮</span>
        </button>
        <h1 className="flex-1 text-center text-3xl font-extrabold tracking-tight text-sky-300">Mi progreso</h1>
        <div className="w-8" />
      </header>

      <section className="mx-auto w-full max-w-screen-sm">
        {/* Hero placeholder */}
        {heroPlaceholder}

        {/* Contenido textual */}
        <div className="space-y-8 bg-zinc-900 px-6 py-8">
          {/* Resolución de actividades */}
          <article>
            <h2 className="text-xl font-extrabold text-sky-300">Resolución de actividades</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Has completado {stats.actividadesCompletadas} de {stats.totalActividades} actividades. Mantén el ritmo para
              alcanzar el 100%.
            </p>
            <ProgressBar value={(stats.actividadesCompletadas / stats.totalActividades) * 100} />
          </article>

            {/* Mejor curso */}
          <article>
            <h2 className="text-xl font-extrabold text-sky-300">Mejor curso:</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {stats.mejorCurso} con un puntaje promedio de {stats.mejorCursoScore}%.
            </p>
          </article>

          {/* Métricas */}
          <article>
            <h2 className="text-xl font-extrabold text-sky-300">Métricas</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-200">Promedio general:</span> {stats.promedioGeneral}%
              </li>
              <li>
                <span className="font-semibold text-zinc-200">Racha de días activos:</span> {stats.streakDias} días
              </li>
            </ul>
          </article>
        </div>

        {/* Imagen inferior */}
        {bottomPlaceholder}
      </section>

      <FooterNav current="home" />
    </main>
  )
}

function ProgressBar({ value = 0 }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className="mt-4 h-3 w-full overflow-hidden rounded-full border border-amber-500/70 bg-zinc-800/70">
      <div
        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-amber-500 transition-all"
        style={{ width: pct + '%' }}
      />
    </div>
  )
}
