import { useEffect } from 'react'
import { useThemeStore } from '../store/themeStore'

export default function ThemeRoot({ children }) {
  const theme = useThemeStore((s) => s.themeEffective)
  const initSystemListener = useThemeStore((s) => s.initSystemListener)
  const mode = useThemeStore((s) => s.mode)

  // Inicializar listener una vez
  useEffect(() => {
    initSystemListener()
  }, [initSystemListener])

  useEffect(() => {
    const root = document.documentElement
    
    // Aplicar o remover la clase 'dark' del elemento html
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-100">
      {children}
      {/* Debug opcional: <div className="fixed bottom-1 right-2 text-xs opacity-40">mode:{mode} theme:{theme}</div> */}
    </div>
  )
}
