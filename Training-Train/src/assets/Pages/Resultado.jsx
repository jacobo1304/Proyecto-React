import { useLocation, useNavigate } from 'react-router-dom'
import FooterNav from '../components/FooterNav'

export default function Resultado() {
	const navigate = useNavigate()
	const { state } = useLocation()
	const score = typeof state?.score === 'number' ? state.score : 86
	const reward = typeof state?.reward === 'number' ? state.reward : 8

	const progress = Math.max(0, Math.min(100, score))

	return (
		<main className="relative min-h-dvh bg-zinc-900 text-zinc-100 pb-28">
			{/* Confetti */}
			<img
				src="/images/Confetti.png"
				alt="Confetti"
				className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-90"
				onError={(e) => {
					e.currentTarget.style.display = 'none'
				}}
			/>

			<div className="relative z-10 mx-auto flex max-w-screen-sm flex-col items-center gap-8 px-4 pt-10 text-center">
				<h1 className="text-sky-300 text-4xl font-extrabold">Bien hecho!</h1>

				{/* Tren */}
				<img
					src="/images/Training Train Proyecto DCU. (3).png"
					alt="Training train"
					className="w-60 md:w-72 h-auto drop-shadow"
					onError={(e) => {
						e.currentTarget.onerror = null
						e.currentTarget.src = '/vite.svg'
					}}
				/>

				{/* Barra de progreso */}
				<div className="w-full max-w-md">
					<div className="relative h-3 w-full overflow-hidden rounded-full border border-amber-500/70 bg-zinc-800/70">
						<div
							className="h-full rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-amber-500"
							style={{ width: `${progress}%` }}
						/>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400">🚄</span>
					</div>
				</div>

				{/* Mensajes */}
				<div className="mt-2 space-y-4">
					<p className="text-3xl font-extrabold text-zinc-100">
						Tuviste un puntaje de <span className="text-4xl">{score}%</span>
					</p>
					<p className="text-2xl text-zinc-200">Ganaste {reward} monedas de recompensa.</p>
				</div>

				{/* Botones */}
				<div className="mt-2 flex w-full max-w-md items-center justify-center gap-4">
					<button
						type="button"
						className="flex-1 rounded-xl border border-amber-500/60 bg-transparent px-6 py-3 text-amber-300 shadow hover:bg-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
						onClick={() => navigate('/inicio')}
					>
						Inicio
					</button>
					<button
						type="button"
						className="flex-1 rounded-xl bg-sky-700 px-6 py-3 text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
						onClick={() => navigate('/actividades')}
					>
						Siguiente actividad
					</button>
				</div>
			</div>

			<FooterNav current="home" />
		</main>
	)
}
