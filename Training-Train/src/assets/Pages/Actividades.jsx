import AppLayout from '../../components/AppLayout'
import { useNavigate } from 'react-router-dom'

export default function Actividades() {
  const navigate = useNavigate()
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
    <AppLayout 
      showBackHeader={true}
      backTitle={
        <>
          <span className="block">Seguridad de la</span>
          <span className="block">Información</span>
        </>
      }
      headerImage={{
        src: "/images/SeguridadInformacion.jpg",
        alt: "Seguridad de la Información"
      }}
      footerCurrent="home"
    >
      {/* Mis actividades */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Mis actividades</h2>

        <div className="mt-4 space-y-6">
          {actividades.map((a) => (
            <article key={a.id} className="rounded-xl border p-3 border-zinc-300 bg-white/70 dark:border-zinc-700/70 dark:bg-zinc-900/60">
              {/* Cabecera: título y fecha */}
              <div className="mb-2 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">{a.titulo}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Expira el: {a.expira}</p>
              </div>

              {/* Cuerpo: imagen + acciones laterales */}
              <div className="grid grid-cols-[1fr_auto] items-stretch gap-3">
                <button
                  type="button"
                  onClick={() => navigate(`/actividad/${a.id}`)}
                  className="overflow-hidden rounded-md border focus:outline-none focus:ring-2 focus:ring-sky-500 border-zinc-300 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800"
                >
                  <img src={a.img} alt={a.titulo} className="h-36 w-full object-cover" loading="lazy" />
                </button>
                <div className="flex w-10 flex-col items-center justify-between py-1">
                  <button
                    type="button"
                    aria-label={`Iniciar ${a.titulo}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 shadow focus:outline-none focus:ring-2 focus:ring-sky-500 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                    onClick={() => navigate(`/actividad/${a.id}`)}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label={`Información de ${a.titulo}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 shadow focus:outline-none focus:ring-2 focus:ring-sky-500 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                    onClick={() => navigate(`/info-actividad/${a.id}`)}
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

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">No hay más actividades para este curso</p>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="rounded-xl bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-sky-700 dark:hover:bg-sky-600"
            onClick={() => navigate('/progreso')}
          >
            Ver progreso
          </button>
        </div>
      </section>
    </AppLayout>
  )
}
