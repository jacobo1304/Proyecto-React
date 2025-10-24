import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useThemeStore = create(
  devtools(
    persist(
      (set, get) => ({
        // mode puede ser 'light' | 'dark' | 'system'
        mode: 'system',
        // themeEffective es el tema que realmente se aplica (derivado si mode==='system')
        themeEffective: 'light',
        // bandera para saber cuando terminó la rehidratación del storage
        hasHydrated: false,
        // bandera interna para no añadir múltiples listeners
        __listenerAdded: false,

        setMode: (mode) => {
          set({ mode })
          // recalcular inmediatamente
          const mql = window.matchMedia('(prefers-color-scheme: dark)')
            .matches
          const next = mode === 'system' ? (mql ? 'dark' : 'light') : mode
          set({ themeEffective: next })
        },
        toggleTheme: () => {
          const { mode } = get()
          // si está en system, pasa a dark directamente (ciclo system -> dark -> light -> system)
          let nextMode
          if (mode === 'system') nextMode = 'dark'
          else if (mode === 'dark') nextMode = 'light'
          else nextMode = 'system'
          get().setMode(nextMode)
        },
        // Forzar light/dark explícito
        setTheme: (explicit) => get().setMode(explicit),
        // Inicializador para escuchar cambios del SO
        initSystemListener: () => {
          if (get().__listenerAdded) return
          const media = window.matchMedia('(prefers-color-scheme: dark)')
          const handler = (e) => {
            const { mode } = get()
            if (mode === 'system') {
              set({ themeEffective: e.matches ? 'dark' : 'light' })
            }
          }

          media.addEventListener('change', handler)
          // Fijar estado inicial solo si el modo es 'system'
          const { mode } = get()
          if (mode === 'system') {
            set({ themeEffective: media.matches ? 'dark' : 'light' })
          }
          set({ __listenerAdded: true })
        },
      }),
      {
        name: 'theme-store',
        version: 3,
        // Solo persistimos la preferencia del usuario (mode); lo demás es derivado o interno
        partialize: (state) => ({ mode: state.mode }),
        // Al terminar de rehidratar, recalculamos el tema efectivo y marcamos hydrated
        onRehydrateStorage: () => {
          return (state, error) => {
            try {
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
              const storedMode = state?.mode ?? get().mode
              const next = storedMode === 'system' ? (prefersDark ? 'dark' : 'light') : storedMode
              // Asegurar que el store refleje el modo almacenado y su tema efectivo
              set({ mode: storedMode, themeEffective: next })
            } finally {
              set({ hasHydrated: true })
            }
          }
        }
      }
    )
  )
)
