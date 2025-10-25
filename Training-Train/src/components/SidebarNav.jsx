import { NavLink } from 'react-router-dom'

export default function SidebarNav({ current, onNavigate, onOpenOptions }) {
  const itemCls = (active) =>
    `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium 
     text-zinc-600 dark:text-zinc-300 
     hover:bg-zinc-100 dark:hover:bg-zinc-800/70 
     hover:text-zinc-900 dark:hover:text-white 
     ${active ? 'text-sky-600 bg-zinc-100 dark:text-sky-300 dark:bg-zinc-800/80' : ''}`

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-16 flex-col items-center justify-between border-r 
      border-zinc-200 dark:border-zinc-700/60 
      bg-white/90 dark:bg-zinc-900/95 
      backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-zinc-900/80 
      px-2 py-4 md:flex lg:hidden">
      {/* Top icons */}
      <div className="flex flex-col items-center gap-6">
        {/* Botón hamburguesa: abre el panel de opciones (misma acción que en móvil) */}
        <button
          aria-label="Menú"
          className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/70 dark:hover:text-white"
          onClick={() => onOpenOptions?.()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Middle nav */}
      <nav className="flex flex-col items-center gap-6">
        <NavLink to="/inicio" className={({ isActive }) => itemCls(isActive || current === 'home')} onClick={() => onNavigate?.('home')} aria-label="Inicio">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
          </svg>
        </NavLink>
        <NavLink to="/tienda" className={({ isActive }) => itemCls(isActive || current === 'store')} onClick={() => onNavigate?.('store')} aria-label="Tienda">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9l1.5-4.5A1 1 0 015.46 4h13.08a1 1 0 01.96.66L21 9" />
            <path d="M3 9h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
            <path d="M7 13h10" />
          </svg>
        </NavLink>
        <NavLink to="/perfil" className={({ isActive }) => itemCls(isActive || current === 'profile')} onClick={() => onNavigate?.('profile')} aria-label="Perfil">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </NavLink>
      </nav>

      {/* Bottom spacer / profile shortcut */}
      <div className="h-6" />
    </aside>
  )
}
