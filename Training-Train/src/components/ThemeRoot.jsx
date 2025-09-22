import { useEffect } from 'react'
import { useThemeStore } from '../store/themeStore'

export default function ThemeRoot({ children }) {
  const theme = useThemeStore((s) => s.theme)

  useEffect(() => {
    const root = document.documentElement
    console.log(`🔧 [ThemeRoot] Setting theme: ${theme}`)
    console.log(`🔧 [ThemeRoot] HTML classes before:`, root.className)
    
    // LIMPIAR localStorage una vez para testing
    if (localStorage.getItem('theme-test-cleared') !== 'true') {
      localStorage.removeItem('theme-store')
      localStorage.setItem('theme-test-cleared', 'true')
      console.log('🔧 [ThemeRoot] CLEARED localStorage for testing')
    }
    
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    console.log(`🔧 [ThemeRoot] HTML classes after:`, root.className)
    console.log(`🔧 [ThemeRoot] Has dark class:`, root.classList.contains('dark'))
    
    // Test DIRECTO sin usar dark: - solo colores básicos
    const testDiv = document.createElement('div')
    testDiv.className = 'bg-green-500'  // Verde siempre, sin dark:
    document.body.appendChild(testDiv)
    const computedStyle = window.getComputedStyle(testDiv)
    console.log(`🔧 [ThemeRoot] Test BASIC green div:`, computedStyle.backgroundColor)
    document.body.removeChild(testDiv)
    
    // Test CON dark: para ver si está respetando la clase
    const testDiv2 = document.createElement('div')
    testDiv2.className = 'bg-red-500 dark:bg-blue-500'
    document.body.appendChild(testDiv2)
    const computedStyle2 = window.getComputedStyle(testDiv2)
    console.log(`🔧 [ThemeRoot] Test DARK-AWARE div (should be RED):`, computedStyle2.backgroundColor)
    document.body.removeChild(testDiv2)
    
    // Test: Aplicar manualmente la clase dark al HTML para ver qué pasa
    document.documentElement.classList.add('dark')
    const testDiv3 = document.createElement('div')
    testDiv3.className = 'bg-red-500 dark:bg-blue-500'
    document.body.appendChild(testDiv3)
    const computedStyle3 = window.getComputedStyle(testDiv3)
    console.log(`🔧 [ThemeRoot] Test WITH FORCED dark class (should be BLUE):`, computedStyle3.backgroundColor)
    document.body.removeChild(testDiv3)
    
    // Restaurar el estado correcto
    if (theme !== 'dark') {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-100">
      {children}
    </div>
  )
}
