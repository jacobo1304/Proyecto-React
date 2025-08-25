import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 5))
    }, 150)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="min-h-dvh bg-zinc-900 text-zinc-100 flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-screen-sm flex-col items-center gap-8 p-6 text-center">
        <h1 className="text-sky-300 text-4xl md:text-5xl font-extrabold">¡Bienvenido!</h1>

        <img
          src="/images/Training Train Proyecto DCU. (3).png"
          alt="Training train"
          className="w-72 md:w-80 h-auto select-none drop-shadow"
          draggable={false}
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = '/vite.svg'
          }}
        />

        {/* Barra de progreso */}
        <div className="w-full max-w-md">
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-zinc-700/50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-amber-500 transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-xl font-semibold text-sky-300">
            Preparando todo para ti...
          </div>
        </div>

        <div className="mt-8 text-zinc-300/90">
          <p className="text-lg">Training train .</p>
          <p className="text-lg">Get prepared  Feel prepared</p>
        </div>
      </div>
    </main>
  )
}
