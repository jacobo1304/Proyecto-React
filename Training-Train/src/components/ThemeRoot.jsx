import { useEffect } from 'react'
import { useThemeStore } from '../store/themeStore'

export default function ThemeRoot({ children }) {
  const theme = useThemeStore((s) => s.theme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-100">
      {children}
    </div>
  )
}
