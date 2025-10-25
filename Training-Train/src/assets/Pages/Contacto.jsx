import LandingHeader from '../../components/LandingHeader'
import { Link } from 'react-router-dom'

export default function Contacto() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <LandingHeader useRoutes />
      <main className="pt-14">
        {/* Banda superior */}
        <section className="bg-sky-300/70 py-10 text-center text-zinc-900">
          <h1 className="text-3xl font-bold sm:text-4xl">Cotiza con nosotros</h1>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 text-center">
          <p className="mx-auto max-w-xl text-lg font-semibold text-white/90">
            Entrenadores, con actividades adecuadas para ti
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            {/* Teléfono */}
            <a href="tel:332123435" className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3 text-lg font-semibold text-zinc-900 shadow hover:bg-amber-300">
              <span role="img" aria-label="phone">📞</span>
              332123435
            </a>
            {/* Email */}
            <a href="mailto:jacobo1304@gmail.com" className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3 text-lg font-semibold text-zinc-900 shadow hover:bg-amber-300">
              <span role="img" aria-label="email">✉️</span>
              jacobo1304@gmail.com
            </a>
          </div>
        </section>

        {/* Footer barra azul */}
        <footer className="mt-8 bg-[#163477] px-6 py-6 text-xs text-white/90">
          <div className="mx-auto max-w-6xl">
            <p>Contacto:</p>
            <p>Universidad pontificia bolivariana --- Jacobo.rodriguez@upb.edu.co</p>
            <p>3002707141</p>
            <div className="mt-2 text-right">
              <Link to="/" className="underline underline-offset-4">Volver</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
