export default function FooterNav({ current = 'home', onNavigate }) {
  const itemCls = (key) =>
    `flex flex-col items-center justify-center gap-1 text-xs ${
      current === key ? 'text-sky-300' : 'text-zinc-200'
    }`

  const btnCls = 'inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400'

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-700/60 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80">
      <div className="mx-auto grid max-w-screen-sm grid-cols-3 gap-2 px-6 py-3">
        {/* Home */}
        <button
          type="button"
          className={`${itemCls('home')} ${btnCls}`}
          onClick={() => onNavigate?.('home')}
          aria-label="Inicio"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
          </svg>
          <span className="sr-only">Inicio</span>
        </button>

        {/* Store */}
        <button
          type="button"
          className={`${itemCls('store')} ${btnCls}`}
          onClick={() => onNavigate?.('store')}
          aria-label="Tienda"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9l1.5-4.5A1 1 0 015.46 4h13.08a1 1 0 01.96.66L21 9" />
            <path d="M3 9h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
            <path d="M7 13h10" />
          </svg>
          <span className="sr-only">Tienda</span>
        </button>

        {/* Profile */}
        <button
          type="button"
          className={`${itemCls('profile')} ${btnCls}`}
          onClick={() => onNavigate?.('profile')}
          aria-label="Perfil"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="sr-only">Perfil</span>
        </button>
      </div>
    </nav>
  )
}
