import { NavLink } from 'react-router-dom'

export default function FooterNav({ current, onNavigate }) {
  const itemCls = (active) =>
    `flex flex-col items-center justify-center gap-1 text-xs ${active ? 'text-sky-300' : 'text-zinc-200'}`

  const btnCls = 'inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400'

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-700/60 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80">
      <div className="mx-auto grid max-w-screen-sm grid-cols-3 gap-2 px-6 py-3">
        {/* Home */}
        <NavLink
          to="/inicio"
          className={({ isActive }) => `${itemCls(isActive || current === 'home')} ${btnCls}`}
          aria-label="Inicio"
          onClick={() => onNavigate?.('home')}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
          </svg>
          <span className="sr-only">Inicio</span>
        </NavLink>

        {/* Store */}
        <NavLink
          to="/tienda"
          className={({ isActive }) => `${itemCls(isActive || current === 'store')} ${btnCls}`}
          aria-label="Tienda"
          onClick={() => onNavigate?.('store')}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9l1.5-4.5A1 1 0 015.46 4h13.08a1 1 0 01.96.66L21 9" />
            <path d="M3 9h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
            <path d="M7 13h10" />
          </svg>
          <span className="sr-only">Tienda</span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/perfil"
          className={({ isActive }) => `${itemCls(isActive || current === 'profile')} ${btnCls}`}
          aria-label="Perfil"
          onClick={() => onNavigate?.('profile')}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="sr-only">Perfil</span>
        </NavLink>
      </div>
    </nav>
  )
}
