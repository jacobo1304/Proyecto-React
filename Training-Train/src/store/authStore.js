import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        company: '',
        userName: '',
        isAuthenticated: false,

        selectCompany: (company) => set({ company }),
        setUserName: (userName) => set({ userName }),
        login: () => {
          // simple login flag; validaciones se hacen en la UI
          set({ isAuthenticated: true })
        },
        logout: () => set({ isAuthenticated: false, company: '', userName: '' }),
      }),
      {
        name: 'auth-store',
        version: 1,
      }
    )
  )
)
