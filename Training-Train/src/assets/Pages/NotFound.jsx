import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white text-slate-800 px-4">
			<div className="text-center max-w-xl">
				<p className="text-sm sm:text-base font-medium text-indigo-600 mb-2">Error 404</p>
				<h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Página no encontrada</h1>
				<p className="text-base sm:text-lg text-slate-600 mb-8">
					Lo sentimos, no pudimos encontrar la página que buscas. Verifica la URL o vuelve al inicio.
				</p>
				<div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
					<Link
						to="/"
						className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white text-sm sm:text-base font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
					>
						Volver al inicio
					</Link>
					<Link
						to="/actividades"
						className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 text-sm sm:text-base font-semibold hover:bg-slate-50"
					>
						Ver actividades
					</Link>
				</div>
			</div>

			<div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-20">
				<svg aria-hidden="true" width="100%" height="120" viewBox="0 0 1440 120" preserveAspectRatio="none">
					<path d="M0,64L120,69.3C240,75,480,85,720,101.3C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" fill="currentColor"></path>
				</svg>
			</div>
		</main>
	)
}

