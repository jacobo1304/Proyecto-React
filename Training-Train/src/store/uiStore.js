import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

let idSeq = 1

export const useUIStore = create(
  devtools((set, get) => ({
    loading: false,
    toasts: [],

    setLoading: (loading) => set({ loading }),
    showToast: ({ type = 'info', message }) => {
      const id = idSeq++
      set((state) => ({ toasts: [...state.toasts, { id, type, message }] }))
      return id
    },
    hideToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
    clearToasts: () => set({ toasts: [] }),
  }))
)
