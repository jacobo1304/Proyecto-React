import { useNavigate } from 'react-router-dom'
import { useWalletStore } from '../../store/walletStore'
import { useUIStore } from '../../store/uiStore'
import FooterNav from '../../components/FooterNav'

const REWARDS = [
  { id: 'g5', cost: 100, label: '5$ amazon giftcard.' },
  { id: 'g10', cost: 150, label: '10$ amazon giftcard.' },
  { id: 'g15', cost: 200, label: '15$ amazon giftcard.' },
  { id: 'g20', cost: 300, label: '20$ amazon giftcard.' },
]

export default function Tienda() {
  const navigate = useNavigate()
  const coins = useWalletStore((s) => s.coins)
  const spend = useWalletStore((s) => s.spendCoins)
  const showToast = useUIStore((s) => s.showToast)

  const buy = (reward) => {
    if (coins < reward.cost) {
      showToast({ type: 'error', message: 'Monedas insuficientes' })
      return
    }
    spend(reward.cost)
    showToast({ type: 'success', message: `Canjeado: ${reward.label}` })
  }

  return (
    <main className="min-h-dvh pb-28 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Header */}
  <header className="sticky top-0 z-20 flex items-center gap-4 border-b px-4 py-3 backdrop-blur border-zinc-200 bg-zinc-50/95 dark:border-zinc-700/60 dark:bg-zinc-900/95">
        <button
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/inicio'))}
          aria-label="Volver"
          className="group rounded-md p-1 text-2xl leading-none text-zinc-200 transition hover:bg-zinc-700/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <span className="block translate-x-0 transition group-active:-translate-x-1">❮</span>
        </button>
  <h1 className="flex-1 text-center text-3xl font-extrabold tracking-tight text-sky-700 dark:text-sky-300">Tienda</h1>
        <div className="w-8" />
      </header>

      <section className="mx-auto w-full max-w-screen-sm px-5 pt-8 space-y-10">
        {/* Saldo */}
        <div className="mx-auto flex w-56 items-center justify-center gap-3 rounded-xl px-6 py-6 shadow-inner ring-1 ring-amber-600/40 bg-amber-200/80 text-zinc-900 dark:bg-amber-700/70 dark:text-amber-100">
          <CoinIcon className="h-10 w-10" />
          <span className="text-4xl font-bold">{coins}</span>
        </div>

        {/* Lista recompensas */}
        <ul className="space-y-4">
          {REWARDS.map((r) => {
            const disabled = coins < r.cost
            return (
              <li key={r.id}>
                <button
                  onClick={() => buy(r)}
                  disabled={disabled}
                  className={`group flex w-full items-center gap-4 rounded-sm border px-4 py-4 text-left shadow transition focus:outline-none focus:ring-2 focus:ring-sky-400 md:rounded-md ${
                    disabled ? 'opacity-60 cursor-not-allowed' : 'hover:bg-zinc-100 dark:hover:bg-zinc-700/60'
                  }`}
                  style={{
                    backgroundColor: 'var(--tw-colors-zinc-100, rgba(244,244,245,0.7))',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <CoinIcon className="h-10 w-10 flex-shrink-0" />
                    <div className="h-12 w-px bg-zinc-600/60" />
                    <p className="text-lg font-semibold tracking-wide">
                      x{r.cost}
                    </p>
                  </div>
                  <p className="ml-4 flex-1 text-lg font-medium text-zinc-700 dark:text-zinc-200">{r.label}</p>
                  <span className="text-sm text-sky-700 dark:text-sky-300 opacity-0 transition group-hover:opacity-100 md:text-base">
                    {disabled ? 'Faltan' : 'Canjear'}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* Botón volver */}
        <div className="pt-4">
          <button
            onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/inicio'))}
            className="mx-auto block w-full max-w-xs rounded-lg border border-zinc-200 px-6 py-3 text-lg font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Volver
          </button>
        </div>
      </section>

      <FooterNav current="store" />
    </main>
  )
}

function CoinIcon({ className = 'h-6 w-6' }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full bg-amber-500/90 p-2 text-zinc-900 shadow-inner ring-1 ring-amber-400 ${className}`}
    >
      <span className="text-xl font-bold tracking-tight">$</span>
    </span>
  )
}
