import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useThemeStore = create(
  devtools(
    persist(
      (set, get) => ({
        theme: 'dark',
        setTheme: (theme) => set({ theme }),
        toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      }),
      { name: 'theme-store', version: 1 }
    )
  )
)
