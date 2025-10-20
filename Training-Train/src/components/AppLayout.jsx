import FooterNav from './FooterNav'
import SidebarNav from './SidebarNav'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import OptionsPanel from './OptionsPanel'

export default function AppLayout({ 
  children, 
  footerCurrent = "home",
  showSearchHeader = false,
  showBackHeader = false,
  backTitle = "",
  headerImage = null 
}) {
  const navigate = useNavigate()
  const [showOptions, setShowOptions] = useState(false)

  const renderHeader = () => {
    if (showSearchHeader) {
      return (
        <header className="flex items-center gap-3 px-4 pt-4">
          {/* Menú hamburguesa (oculto en md+ porque aparece la Sidebar) */}
          <button
            type="button"
            className="p-2 text-zinc-700 hover:text-sky-600 dark:text-zinc-100 md:hidden"
            aria-label="Abrir opciones"
            onClick={() => setShowOptions(true)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
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
    <main className="relative min-h-dvh pb-24 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors overflow-hidden">
      {/* Sidebar para md+ */}
      <SidebarNav current={footerCurrent} />

      <div className="relative mx-auto max-w-screen-sm md:max-w-none md:pl-20">
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

        {/* Panel de opciones animado */}
        <OptionsPanel open={showOptions} onClose={() => setShowOptions(false)} />

        {/* Contenido principal */}
        <div className={(headerImage || showSearchHeader ? "px-4" : "px-0") + ' md:px-6'}>
          {children}
        </div>
      </div>

      <FooterNav current={footerCurrent} />
    </main>
  )
}