import FooterNav from '../../components/FooterNav'

export default function Incorrecto() {
  const score = 0

  return (
    <main className="relative min-h-dvh bg-zinc-900 text-zinc-100 pb-28">
      {/* Overlay (puedes cambiar por otra imagen si la tienes) */}
      <img
        src="/images/Confetti.png"
        alt="Confetti"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-50"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      {/* capa para teñir en rojo */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-red-900/30" />

      <div className="relative z-10 mx-auto flex max-w-screen-sm flex-col items-center gap-8 px-4 pt-10 text-center">
        <h1 className="text-red-400 text-4xl font-extrabold">¡Incorrecto!</h1>

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

        {/* Barra de progreso estilizada en rojo */}
        <div className="w-full max-w-md">
          <div className="relative h-3 w-full overflow-hidden rounded-full border border-red-500/70 bg-zinc-800/70">
            <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-600" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400">🚄</span>
          </div>
        </div>

        {/* Mensajes */}
        <div className="mt-2 space-y-4">
          <p className="text-2xl font-extrabold text-zinc-100">
            Respuesta incorrecta.
          </p>
          <p className="text-xl text-zinc-300">Intenta de nuevo.</p>
        </div>

        <div className="mt-2">
          <button
            type="button"
            className="rounded-xl bg-red-600 px-6 py-3 text-white shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => window.history.back()}
          >
            Volver a intentar
          </button>
        </div>
      </div>

      <FooterNav current="home" />
    </main>
  )
}
