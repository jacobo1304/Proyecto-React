import { useThemeStore } from '../store/themeStore'

export default function ThemeSlider() {
  const theme = useThemeStore((s) => s.theme)
  const setTheme = useThemeStore((s) => s.setTheme)

  const isLight = theme === 'light'

  return (
    <button
      role="switch"
      aria-checked={isLight}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className={`relative inline-flex h-7 w-14 items-center rounded-full border border-zinc-600/60 bg-zinc-700 transition dark:border-zinc-500/60 ${
        isLight ? 'bg-sky-200' : 'bg-zinc-700'
      }`}
    >
      <span
        className={`absolute left-1 inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
          isLight ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
      <span className="sr-only">Cambiar tema</span>
    </button>
  )
}
