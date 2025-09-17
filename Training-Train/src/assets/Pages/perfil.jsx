import { useNavigate } from 'react-router-dom'
import FooterNav from '../../components/FooterNav'

export default function Perfil() {
  const navigate = useNavigate()

  // Datos de ejemplo (podrían venir de un store o API)
  const data = {
    nombre: 'Jacobo Rodríguez',
    empresa: 'Upb',
    idEmpleado: 'Gerente de proyectos',
    cargo: 'Gerente de proyectos',
    cursos: ['Seguridad de la información', 'Riesgos de trabajo'],
    supervisor: 'Laura Castillo',
  }

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
        <h1 className="flex-1 text-center text-3xl font-extrabold tracking-tight text-zinc-100">
          <span className="text-sky-300">Mi Perfil:</span>
        </h1>
        <div className="w-8" /> {/* Espaciador para balancear */}
      </header>

      <section className="mx-auto w-full max-w-screen-sm px-6 pt-6">
        {/* Avatar */}
        <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-zinc-700 text-5xl text-zinc-200">
          <span role="img" aria-label="avatar">👤</span>
        </div>

        <dl className="space-y-8">
          <div>
            <dt className="text-xl font-bold text-sky-300">Nombre</dt>
            <dd className="mt-1 text-lg font-medium text-zinc-200">{data.nombre}</dd>
          </div>
          <div>
            <dt className="text-xl font-bold text-sky-300">Empresa</dt>
            <dd className="mt-1 text-lg font-medium text-zinc-200">{data.empresa}</dd>
          </div>
          <div>
            <dt className="text-xl font-bold text-sky-300">Id de empleado:</dt>
            <dd className="mt-1 text-lg font-medium text-zinc-200">{data.idEmpleado}</dd>
          </div>
            <div>
            <dt className="text-xl font-bold text-sky-300">Cargo:</dt>
            <dd className="mt-1 text-lg font-medium text-zinc-200">{data.cargo}</dd>
          </div>
          <div>
            <dt className="text-xl font-bold text-sky-300">Cursos realizados</dt>
            <dd className="mt-2 space-y-1">
              {data.cursos.map((c) => (
                <p key={c} className="text-lg font-medium text-zinc-200">{c}</p>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-xl font-bold text-sky-300">Supervisor encargado:</dt>
            <dd className="mt-1 text-lg font-medium text-zinc-200">{data.supervisor}</dd>
          </div>
        </dl>

        {/* Links inferiores */}
        <div className="mt-12 flex items-center justify-evenly text-base font-medium">
          <button
            onClick={() => navigate('/progreso')}
            className="text-sky-400 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Mi progreso
          </button>
          <button
            onClick={() => navigate('/tienda')}
            className="text-amber-400 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Mi tienda
          </button>
        </div>
      </section>

      <FooterNav current="perfil" />
    </main>
  )
}
