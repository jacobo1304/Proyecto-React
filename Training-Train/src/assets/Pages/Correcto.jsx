import FooterNav from '../../components/FooterNav'

export default function Correcto() {
  const score = 86
  const reward = 8

  return (
    <main className="relative min-h-dvh bg-zinc-900 text-zinc-100 pb-28">
      {/* Confetti como overlay */}
      <img
        src="/images/Confetti.png"
        alt="Confetti"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-90"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-screen-sm flex-col items-center gap-8 px-4 pt-10 text-center">
        <h1 className="text-sky-300 text-4xl font-extrabold">Bien hecho!</h1>

        {/* Tren */}
        <img
          src="/images/Training Train Proyecto DCU. (3).png"
          alt="Training train"
          className="w-60 md:w-72 h-auto drop-shadow"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = '/vite.svg'
          }}
        />

        {/* Barra de progreso estilizada */}
        <div className="w-full max-w-md">
          <div className="relative h-3 w-full overflow-hidden rounded-full border border-amber-500/70 bg-zinc-800/70">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-amber-500" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400">🚄</span>
          </div>
        </div>

        {/* Mensajes */}
        <div className="mt-2 space-y-4">
          <p className="text-3xl font-extrabold text-zinc-100">
            Tuviste un puntaje de <span className="text-4xl">{score}%</span>
          </p>
          <p className="text-2xl text-zinc-200">Ganaste {reward} monedas de recompensa.</p>
        </div>

        <div className="mt-2">
          <button
            type="button"
            className="rounded-xl bg-sky-700 px-6 py-3 text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
            onClick={() => console.log('Siguiente actividad')}
          >
            Siguiente actividad
          </button>
        </div>
      </div>

      <FooterNav current="home" />
    </main>
  )
}
