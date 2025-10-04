import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { publicImages } from '../images.js'

// Nota: La imagen 404 se espera en public/images. Ideal renombrar sin espacios: public/images/imagen404.png
// Mientras tenga espacios, se puede referenciar escapando/encode. Aquí asumimos renombrada a imagen404.png para simplicidad.

export default function NotFound() {
	const navigate = useNavigate()

	const handleBack = useCallback(() => {
		if (window.history.length > 1) {
			window.history.back()
		} else {
			navigate('/inicio')
		}
	}, [navigate])

	return (
		<main className="min-h-dvh flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
			{/* Header con flecha volver */}
			<header className="flex items-center gap-3 px-4 pt-4">
				<button
					type="button"
					onClick={handleBack}
					aria-label="Volver"
					className="rounded-lg p-2 text-zinc-800 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-zinc-100 dark:hover:bg-zinc-800"
				>
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
						<path d="M15 18l-6-6 6-6" />
					</svg>
				</button>
				<h1 className="text-2xl font-extrabold tracking-wide text-sky-700 dark:text-sky-300 select-none">
					404
				</h1>
			</header>

			{/* Contenido central */}
			<div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center opacity-0 animate-[fade404_.6s_ease-out_forwards]">
				<div className="mb-6 flex items-center justify-center">
					<span className="relative inline-flex items-center justify-center">
						<span className="text-[5.5rem] leading-none font-black text-sky-600 drop-shadow-sm dark:text-sky-400">
							404
						</span>
						{/* Icono decorativo brújula (placeholder) */}
						<span className="absolute -right-6 -top-4 rotate-12 text-sky-500 dark:text-sky-300" aria-hidden="true">
							🧭
						</span>
					</span>
				</div>

				<p className="max-w-lg text-lg font-medium text-zinc-700 dark:text-zinc-300">
					Parece que esta no es la ruta que estás buscando.
				</p>
				<p className="mt-2 max-w-md text-sm text-zinc-500 dark:text-zinc-400">
					Llegaste a horizontes desconocidos, regresemos.
				</p>

				<div className="mt-10 w-full max-w-sm">
					<img
						src={publicImages.imagen404}
						alt="Ilustración de exploración para página no encontrada"
						className="w-full select-none object-contain drop-shadow-sm"
						loading="lazy"
						draggable={false}
					/>
				</div>

				<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
					<button
						type="button"
						onClick={handleBack}
						className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-sky-500/30 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 dark:focus:ring-sky-300"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M15 18l-6-6 6-6" />
						</svg>
						Volver
					</button>
					
					<button
						type="button"
						onClick={() => navigate('/login')}
						className="inline-flex items-center gap-2 rounded-full bg-zinc-600 px-8 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-zinc-500/30 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:bg-zinc-500 dark:hover:bg-zinc-400 dark:focus:ring-zinc-300"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M9 12l2 2 4-4" />
							<path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
							<path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
						</svg>
						Iniciar sesión de nuevo
					</button>
				</div>
			</div>
		</main>
	)
}

	// Añadimos keyframes vía CSS-in-JS (tailwind arbitrary) en index.css sería mejor, pero aquí dejamos referencia:
	// @keyframes fade404 { from { opacity:0; transform: translateY(14px)} to { opacity:1; transform: translateY(0)} }

