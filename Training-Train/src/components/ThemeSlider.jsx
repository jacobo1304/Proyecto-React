import { useThemeStore } from '../store/themeStore'

export default function ThemeSlider() {
  const mode = useThemeStore((s) => s.mode)
  const toggle = useThemeStore((s) => s.toggleTheme)

  // Representamos 3 estados: system (posición inicial), dark (medio), light (final)
  const positionClass = mode === 'system' ? 'translate-x-0' : mode === 'dark' ? 'translate-x-1/2 -translate-x-1/2 left-1/2' : 'translate-x-full -translate-x-1 left-full'

  return (
    <button
      type="button"
      aria-label={`Cambiar tema (actual: ${mode})`}
      onClick={toggle}
      className="relative inline-flex h-7 w-24 items-center rounded-full border border-zinc-600/60 bg-zinc-700 px-1 transition dark:border-zinc-500/60"
    >
      {/* Track con labels */}
      <span className="flex w-full justify-between text-[10px] font-medium text-zinc-300">
        <span>S</span>
        <span>D</span>
        <span>L</span>
      </span>
      {/* Thumb */}
      <span
        className={`absolute top-1 h-5 w-7 rounded-full bg-white text-[10px] font-bold text-zinc-700 shadow transition-all flex items-center justify-center ${
          mode === 'system' ? 'left-1' : mode === 'dark' ? 'left-1/2 -translate-x-1/2' : 'right-1'
        }`}
      >
        {mode === 'system' ? 'S' : mode === 'dark' ? 'D' : 'L'}
      </span>
    </button>
  )
}
