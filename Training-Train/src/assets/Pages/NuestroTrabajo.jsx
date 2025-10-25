import LandingHeader from '../../components/LandingHeader'
import { Link } from 'react-router-dom'
import { publicImages } from '../../assets/images'

export default function NuestroTrabajo() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <LandingHeader useRoutes />
      <main className="pt-14">
        {/* Hero superior */}
        <section className="mx-auto max-w-5xl px-4 py-8 text-center">
          <div className="flex items-center justify-between">
            <img src={publicImages.trainingProject} alt="train" className="h-14 w-auto" />
            <div>
              <h1 className="text-3xl font-bold">Training<br/>train</h1>
              <p className="mt-1 text-xs italic text-white/80">#Be prepared - Feel prepared</p>
            </div>
            <img src={publicImages.trainingProject} alt="train" className="h-14 w-auto" />
          </div>

          <h2 className="mt-6 text-lg font-semibold text-amber-300">Conoce nuestra ruta</h2>
          <div className="mt-3 flex justify-center">
            <img src={publicImages.landing1} alt="Conoce nuestra ruta" className="h-44 w-auto rounded-md object-cover" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm text-white/80">
            A continuación algunas empresas con las que hemos trabajado.
          </p>
        </section>

        {/* UPB */}
        <section className="mx-auto max-w-5xl px-4 py-8">
          <h3 className="text-base font-bold text-amber-300">Sector educativo: UPB</h3>
          <div className="mt-3 grid gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <p className="text-sm leading-relaxed text-white/90">
              Educamos a los docentes en la universidad con cursos que antes tenían muy poca retención.
              Enseñándoles sobre procesos internos, y seguridad en el campus de manera interactiva.
            </p>
            <div className="flex items-center justify-center">
              <img src={publicImages.universidad} alt="Universidad Pontificia Bolivariana" className="h-28 w-auto rounded-md bg-white p-2 object-contain" />
            </div>
          </div>
          <div className="mt-6 h-px w-full bg-white/20" />
        </section>

        {/* Microsoft */}
        <section className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-[1fr_1.2fr] sm:items-center">
            <div className="flex items-center justify-center">
              <img src={publicImages.microsoft} alt="Microsoft" className="h-28 w-auto rounded-md bg-white p-2 object-contain" />
            </div>
            <div>
              <h3 className="text-base font-bold text-amber-300">Sector Tecnológico: Microsoft</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Nos aliamos con este gigante para plantear cursos de seguridad de la información en la sede de Colombia.
                Donde se vieron impactos muy positivos.
              </p>
            </div>
          </div>
          <div className="mt-6 h-px w-full bg-white/20" />
        </section>

        {/* Google */}
        <section className="mx-auto max-w-5xl px-4 py-8">
          <h3 className="text-base font-bold text-amber-300">Sector Tecnológico: Google</h3>
          <div className="mt-3 grid gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <p className="text-sm leading-relaxed text-white/90">
              Nos aliamos con ellos para desarrollar un curso de búsqueda de información acertada. Mostrándole a un público
              objetivo todas las herramientas que tienen para buscar mejor en internet. Fue todo un éxito pues vimos
              aumentos en su uso.
            </p>
            <div className="flex items-center justify-center">
              <img src={publicImages.google} alt="Google" className="h-28 w-auto rounded-md bg-white p-2 object-contain" />
            </div>
          </div>
        </section>

        {/* CTA grande */}
        <section className="mt-8 bg-amber-400 py-8 text-zinc-900">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h3 className="text-xl font-semibold">¿Interesado? Únete a nosotros</h3>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-md bg-black/5 p-6">
                <p className="mb-4 font-medium">Si eres empleador</p>
                <Link to="/contacto" className="inline-block rounded bg-amber-500 px-5 py-2 font-semibold text-zinc-900 hover:bg-amber-400">Cotizar</Link>
              </div>
              <div className="rounded-md bg-black/5 p-6">
                <p className="mb-4 font-medium">Si eres empleado</p>
                <Link to="/login" className="inline-block rounded bg-[#163477] px-5 py-2 font-semibold text-white hover:bg-[#1d4295]">Ingresar</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#163477] px-6 py-6 text-xs text-white/90">
          <div className="mx-auto max-w-5xl">
            <p>Contacto:</p>
            <p>Universidad pontificia bolivariana --- Jacobo.rodriguez@upb.edu.co</p>
            <p>3002707141</p>
            <div className="mt-2 text-right">
              <a href="#top" className="underline underline-offset-4">Volver arriba</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
