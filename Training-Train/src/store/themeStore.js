import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useThemeStore = create(
  devtools(
    persist(
      (set, get) => ({
        theme: 'light', // Cambiar default a light
        setTheme: (theme) => set({ theme }),
        toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      }),
      { name: 'theme-store', version: 2 } // Cambiar versión para forzar reset
    )
  )
)
