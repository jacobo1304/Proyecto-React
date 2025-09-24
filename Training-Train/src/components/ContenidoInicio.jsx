import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useWalletStore } from '../store/walletStore'
import { publicImages } from '../assets/images.js'

export default function ContenidoInicio() {
  const navigate = useNavigate()
  const userName = useAuthStore((s) => s.userName)
  const coins = useWalletStore((s) => s.coins)
  
  // Debug para verificar que Tailwind esté funcionando
  console.log('🏠 [ContenidoInicio] Component rendered')
  
  const cursos = [
    { id: 1, titulo: 'Riesgos del trabajo', img: publicImages.riesgosTrabajoEncoded },
    { id: 2, titulo: 'Seguridad de la Información', img: publicImages.seguridadInformacionCaps },
  ]

  return (
    <>
      {/* Saludo y saldo */}
      <section className="mt-8 grid grid-cols-[1fr_auto] items-start gap-4">
        <h1 className="text-4xl font-extrabold tracking-wide text-sky-700 dark:text-sky-300">Hola {userName || 'Carlos'}!</h1>
        <div className="flex items-center gap-3 rounded-xl px-4 py-2 shadow bg-amber-200 text-zinc-900 dark:bg-amber-700 dark:text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-zinc-900 font-bold">$</span>
          <span className="text-2xl font-semibold">{coins}</span>
        </div>
      </section>

      {/* Cursos asignados */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Cursos que tienes asignados:</h2>

        <div className="mt-6 space-y-8">
          {cursos.map((c) => (
            <article key={c.id} className="">
              <h3 className="mb-3 text-center text-xl font-semibold text-zinc-200">{c.titulo}</h3>
              <button
                type="button"
                onClick={() => navigate('/actividades')}
                className="h-36 w-full overflow-hidden rounded-md border focus:outline-none focus:ring-2 focus:ring-sky-500 border-zinc-300 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800"
              >
                <img src={c.img} alt={c.titulo} className="h-full w-full object-cover" loading="lazy" />
              </button>
            </article>
          ))}
        </div>

        <p className="mt-10 text-2xl text-zinc-500 dark:text-zinc-400">No hay más cursos...</p>
      </section>
    </>
  )
}