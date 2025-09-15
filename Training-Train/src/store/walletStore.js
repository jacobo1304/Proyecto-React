import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useWalletStore = create(
  devtools(
    persist(
      (set, get) => ({
        coins: 50,
        addCoins: (n) => set({ coins: Math.max(0, get().coins + Number(n || 0)) }),
        spendCoins: (n) => set({ coins: Math.max(0, get().coins - Number(n || 0)) }),
        resetCoins: () => set({ coins: 0 }),
      }),
      { name: 'wallet-store', version: 1 }
    )
  )
)
