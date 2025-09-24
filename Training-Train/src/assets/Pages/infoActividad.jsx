import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FooterNav from '../components/FooterNav'
import { publicImages } from '../images.js'

const DATA = {
  correos: {
    titulo: 'Correos sospechosos',
    img: publicImages.correos,
    desc:
      'Aprende a identificar correos fraudulentos, técnicas comunes de phishing y prácticas seguras para proteger tu información.',
    duracion: '15 min',
    nivel: 'Básico',
    expira: '21/04/25',
  },
  contrasenas: {
    titulo: 'Uso de contraseñas',
    img: publicImages.contraseñasEncoded,
    desc:
      'Buenas prácticas para crear y gestionar contraseñas seguras. Recomendaciones sobre MFA y gestores de contraseñas.',
    duracion: '12 min',
    nivel: 'Básico',
    expira: '24/04/25',
  },
}

export default function InfoActividad() {
  const { id } = useParams()
  const navigate = useNavigate()

  const info = useMemo(() => DATA[id] ?? null, [id])

  return (
    <main className="min-h-dvh pb-28 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
      <div className="mx-auto max-w-screen-sm">
        {/* Imagen principal */}
        <div className="relative">
          <img
            src={info?.img || publicImages.seguridadInformacionCaps}
            alt={info?.titulo || 'Actividad'}
            className="h-44 w-full object-cover md:h-56"
          />

          {/* Back button */}
          <button
            type="button"
            aria-label="Volver"
            onClick={() => window.history.back()}
            className="absolute left-2 top-2 rounded-lg p-2 text-zinc-900 bg-zinc-100/80 backdrop-blur hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-zinc-100 dark:bg-zinc-900/70 dark:hover:bg-zinc-800"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>

        <div className="px-4">
          {/* Título */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-wide text-sky-700 dark:text-sky-300">
            {info?.titulo || 'Información de la actividad'}
          </h1>

          {/* Metadata */}
          <dl className="mt-3 grid grid-cols-3 gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <div>
              <dt className="text-zinc-500 dark:text-zinc-400">Duración</dt>
              <dd className="font-medium">{info?.duracion || '—'}</dd>
            </div>
            <div>
              <dt className="text-zinc-500 dark:text-zinc-400">Nivel</dt>
              <dd className="font-medium">{info?.nivel || '—'}</dd>
            </div>
            <div>
              <dt className="text-zinc-500 dark:text-zinc-400">Expira</dt>
              <dd className="font-medium">{info?.expira || '—'}</dd>
            </div>
          </dl>

          {/* Descripción */}
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-200">
            {info?.desc || 'Detalles de la actividad y objetivos de aprendizaje.'}
          </p>

          {/* CTA */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              className="flex-1 rounded-xl bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-sky-700 dark:hover:bg-sky-600"
              onClick={() => navigate(`/actividad/${id ?? ''}`)}
            >
              Iniciar actividad
            </button>
            <button
              type="button"
              className="rounded-xl border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-500 border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
              onClick={() => navigate('/actividades')}
            >
              Ver actividades
            </button>
          </div>
        </div>
      </div>

      <FooterNav current="home" />
    </main>
  )
}
