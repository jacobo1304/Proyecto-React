import LandingHeader from '../../components/LandingHeader'
import { publicImages } from '../../assets/images'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
  <LandingHeader useRoutes />

      {/* Empujar contenido debajo del header */}
  <main id="top" className="pt-14">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 py-10 sm:grid-cols-2 sm:items-center">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">Training train</h1>
              <p className="mt-1 text-sm italic text-white/80">#Be prepared · Feel prepared</p>
              <p className="mt-6 text-base text-white/90">
                Tu entrenamiento comienza aquí. Capacita a tu equipo con experiencias interactivas que mejoran la retención y previenen riesgos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#programa" className="rounded bg-amber-400 px-4 py-2 font-medium text-black hover:bg-amber-300">Conoce nuestro programa</a>
                <Link to="/login" className="rounded border border-white/30 px-4 py-2 hover:bg-white/10">Ingresar</Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={publicImages.interactividad} alt="Interactividad" className="max-h-52 w-auto sm:max-h-64 rounded-md object-cover" />
            </div>
          </div>
        </section>

        {/* Separador visual */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="h-px w-full bg-white/20" />
        </div>

        {/* Sección 1 */}
        <section id="programa" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-amber-300">Formación efectiva para empleados</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Training train es una plataforma de cursos interactivos para empresas que buscan capacitar a sus empleados de forma efectiva, con contenidos prácticos y medibles.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img src={publicImages.landing1} alt="Conoce nuestra ruta" className="max-h-40 w-auto rounded-md object-cover" />
            </div>
          </div>
        </section>

        {/* Sección 2 */}
        <section id="nuestro-trabajo" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-[1fr_1.2fr] sm:items-center">
            <div className="order-2 sm:order-1">
              <img src={publicImages.landing2} alt="Formas de aprender" className="max-h-40 w-auto rounded-md object-cover" />
            </div>
            <div className="order-1 sm:order-2">
              <h2 className="text-xl font-semibold text-amber-300">Formas fáciles de aprender</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Con nuestro sistema game-based, tus empleados podrán recibir recompensas y mantener la motivación al acabar los cursos.
              </p>
            </div>
          </div>
        </section>

        {/* Sección 3 */}
        <section id="soporte" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-amber-300">Un equipo especializado en ayudar</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Contamos con soporte de primera calidad, diseñadores de actividades expertos y seguimiento constante de resultados para darte la mejor experiencia.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img src={publicImages.customerLoyalty} alt="Soporte" className="max-h-40 w-auto rounded-md object-cover" />
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-amber-300">Contacto</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                ¿Tienes preguntas? Nuestro equipo está listo para ayudarte a implementar Training train en tu organización.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:soporte@trainingtrain.co" className="hover:underline underline-offset-4">soporte@trainingtrain.co</a>
              <a href="#top" className="hover:underline underline-offset-4">Volver arriba</a>
            </div>
          </div>
        </section>

        {/* CTA grande */}
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
          <div className="rounded-md bg-amber-400 p-6 text-center text-black">
            <h3 className="text-xl font-semibold">¿Qué esperas para unirte?</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-md bg-black/5 p-6">
                <p className="mb-4 font-medium">Si eres empleador</p>
                <button className="rounded bg-[#163477] px-4 py-2 text-white hover:bg-[#1d4295]">Cotizar</button>
              </div>
              <div className="rounded-md bg-black/5 p-6">
                <p className="mb-4 font-medium">Si eres empleado</p>
                <Link to="/login" className="rounded bg-[#163477] px-4 py-2 text-white hover:bg-[#1d4295]">Ingresar</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer mini */}
        <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-white/70 sm:px-6">
          <div className="h-px w-full bg-white/20" />
          <div className="mt-4 flex items-center justify-between">
            <a href="#top" className="hover:underline underline-offset-4">Volver arriba</a>
            <span>Contacto: soporte@trainingtrain.co</span>
          </div>
        </footer>
      </main>
    </div>
  )
}
