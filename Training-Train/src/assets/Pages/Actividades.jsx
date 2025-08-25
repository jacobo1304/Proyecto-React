import FooterNav from '../../components/FooterNav'

export default function Actividades() {
  const actividades = [
    {
      id: 'correos',
      titulo: 'Correos sospechosos',
      expira: '21/04/25',
      img: '/images/correos.jpg',
    },
    {
      id: 'contrasenas',
      titulo: 'Uso de contraseñas',
      expira: '24/04/25',
      img: '/images/Contrase%C3%B1as.png',
    },
  ]

  return (
    <main className="min-h-dvh bg-zinc-900 text-zinc-100 pb-28">
      <div className="mx-auto max-w-screen-sm">
        {/* Hero imagen principal */}
        <div className="relative">
          <img
            src="/images/SeguridadInformacion.jpg"
            alt="Seguridad de la Información"
            className="h-44 w-full object-cover md:h-56"
            loading="lazy"
          />
        </div>

        <div className="px-4">
          {/* Barra superior: back y título */}
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              aria-label="Volver"
              onClick={() => window.history.back()}
              className="rounded-lg p-2 text-zinc-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <h1 className="text-3xl font-extrabold tracking-wide text-sky-300 leading-tight">
              <span className="block">Seguridad de la</span>
              <span className="block">Información</span>
            </h1>
          </div>

          {/* Mis actividades */}
          <section className="mt-6">
            <h2 className="text-2xl font-bold text-zinc-100">Mis actividades</h2>

            <div className="mt-4 space-y-6">
              {actividades.map((a) => (
                <article key={a.id} className="rounded-xl border border-zinc-700/70 bg-zinc-900/60 p-3">
                  {/* Cabecera: título y fecha */}
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-zinc-200">{a.titulo}</h3>
                    <p className="text-sm text-zinc-400">Expira el: {a.expira}</p>
                  </div>

                  {/* Cuerpo: imagen + acciones laterales */}
                  <div className="grid grid-cols-[1fr_auto] items-stretch gap-3">
                    <div className="overflow-hidden rounded-md border border-zinc-600 bg-zinc-800">
                      <img src={a.img} alt={a.titulo} className="h-36 w-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex w-10 flex-col items-center justify-between py-1">
                      <button
                        type="button"
                        aria-label={`Iniciar ${a.titulo}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 shadow hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        onClick={() => console.log('Iniciar', a.id)}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label={`Información de ${a.titulo}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 shadow hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        onClick={() => console.log('Info', a.id)}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4" />
                          <circle cx="12" cy="8" r="1" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-lg text-zinc-400">No hay más actividades para este curso</p>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="rounded-xl bg-sky-700 px-6 py-3 text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                onClick={() => console.log('Ver progreso')}
              >
                Ver progreso
              </button>
            </div>
          </section>
        </div>
      </div>

      <FooterNav current="home" />
    </main>
  )
}
