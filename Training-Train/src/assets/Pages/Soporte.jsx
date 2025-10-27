import LandingHeader from '../../components/LandingHeader'
import { publicImages } from '../../assets/images'

export default function Soporte() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col">
      <LandingHeader useRoutes />
      <main className="pt-14">
        {/* Banda amarilla superior */}
        <section className="bg-amber-400 py-10 text-center text-zinc-900">
          <h1 className="text-3xl font-bold sm:text-4xl">¿Necesitas ayuda?</h1>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <div className="mx-auto max-w-xl">
            <img src={publicImages.landing2} alt="Soporte" className="mx-auto w-full max-w-md rounded-md object-cover" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            Contáctanos para dudas preguntas y reclamos.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <a href="tel:332123435" className="inline-flex items-center gap-3 rounded-full bg-[#9CC2D7] px-6 py-3 text-lg font-semibold text-zinc-900 shadow hover:opacity-90">
              <span role="img" aria-label="phone">📞</span>
              332123435
            </a>
            <a href="mailto:soporte@trainingTrain.com" className="inline-flex items-center gap-3 rounded-full bg-[#9CC2D7] px-6 py-3 text-lg font-semibold text-zinc-900 shadow hover:opacity-90">
              <span role="img" aria-label="email">✉️</span>
              soporte@trainingTrain.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer barra azul fijo al fondo cuando hay poco contenido */}
      <footer className="mt-auto bg-[#163477] px-6 py-6 text-xs text-white/90">
        <div className="mx-auto max-w-6xl">
          <p>Contacto:</p>
          <p>Universidad pontificia bolivariana --- Jacobo.rodriguez@upb.edu.co</p>
          <p>3002707141</p>
        </div>
      </footer>
    </div>
  )
}
