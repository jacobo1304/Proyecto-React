import FooterNav from './FooterNav'
import { useNavigate } from 'react-router-dom'

export default function AppLayout({ 
  children, 
  footerCurrent = "home",
  showSearchHeader = false,
  showBackHeader = false,
  backTitle = "",
  headerImage = null 
}) {
  const navigate = useNavigate()

  const renderHeader = () => {
    if (showSearchHeader) {
      return (
        <header className="flex items-center gap-3 px-4 pt-4">
          {/* Menú hamburguesa */}
          <button
            type="button"
            className="p-2 text-zinc-700 hover:text-sky-600 dark:text-zinc-100"
            aria-label="Abrir opciones"
            onClick={() => navigate('/opciones')}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          {/* Barra de búsqueda */}
          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-full border pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 border-zinc-300 bg-white/70 placeholder:text-zinc-500 dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:placeholder:text-zinc-400"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden="true">🔍</span>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-300" aria-label="Limpiar búsqueda">
              ⓧ
            </button>
          </div>
        </header>
      )
    }

    if (showBackHeader) {
      return (
        <div className="px-4">
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              aria-label="Volver"
              onClick={() => window.history.back()}
              className="rounded-lg p-2 text-zinc-900 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <h1 className="text-3xl font-extrabold tracking-wide text-sky-700 leading-tight dark:text-sky-300">
              {backTitle}
            </h1>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <main className="min-h-dvh pb-24 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
      <div className="mx-auto max-w-screen-sm">
        {/* Hero imagen principal (opcional) */}
        {headerImage && (
          <div className="relative">
            <img
              src={headerImage.src}
              alt={headerImage.alt}
              className="h-44 w-full object-cover md:h-56"
              loading="lazy"
            />
          </div>
        )}

        {/* Header dinámico */}
        {renderHeader()}

        {/* Contenido principal */}
        <div className={headerImage ? "px-4" : (showSearchHeader ? "px-4" : "")}>
          {children}
        </div>
      </div>

      <FooterNav current={footerCurrent} />
    </main>
  )
}