import AppLayout from '../../components/AppLayout'
import { useNavigate } from 'react-router-dom'
import { useActivityStore } from '../../store/activityStore'
import { useWalletStore } from '../../store/walletStore'
import { publicImages } from '../images.js'

export default function Correcto() {
  const score = 86
  const reward = 8
  const navigate = useNavigate()
  const finishActivity = useActivityStore((s) => s.finishActivity)
  const addCoins = useWalletStore((s) => s.addCoins)

  return (
    <AppLayout footerCurrent="home">
      <main className="relative min-h-dvh pb-8 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Confetti como overlay */}
      <img
        src={publicImages.confetti}
        alt="Confetti"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-90"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-screen-sm flex-col items-center gap-8 px-4 pt-10 text-center">
        <h1 className="text-4xl font-extrabold text-sky-700 dark:text-sky-300">Bien hecho!</h1>

        {/* Tren */}
        <img
          src={publicImages.trainingProject}
          alt="Training train"
          className="w-60 md:w-72 h-auto drop-shadow"
          onError={(e) => {
            // Oculta la imagen si falla la carga; evita usar /vite.svg
            e.currentTarget.style.display = 'none'
          }}
        />

        {/* Barra de progreso estilizada */}
        <div className="w-full max-w-md">
          <div className="relative h-3 w-full overflow-hidden rounded-full border border-amber-500/70 bg-zinc-200 dark:bg-zinc-800/70">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-amber-500" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400">🚄</span>
          </div>
        </div>

        {/* Mensajes */}
        <div className="mt-2 space-y-4">
          <p className="text-3xl font-extrabold">
            Tuviste un puntaje de <span className="text-4xl">{score}%</span>
          </p>
          <p className="text-2xl text-zinc-700 dark:text-zinc-200">Ganaste {reward} monedas de recompensa.</p>
        </div>

        <div className="mt-2">
          <button
            type="button"
            className="rounded-xl bg-sky-700 px-6 py-3 text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
            onClick={() => {
              finishActivity({ score, reward })
              addCoins(reward)
              navigate('/resultado')
            }}
          >
            Siguiente actividad
          </button>
        </div>
      </div>
      </main>
    </AppLayout>
  )
}
