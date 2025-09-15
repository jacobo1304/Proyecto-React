import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useActivityStore = create(
  devtools(
    persist(
      (set, get) => ({
        currentActivityId: null,
        lastScore: null,
        lastReward: null,
        answersByActivity: {},

        startActivity: (id) => set({ currentActivityId: id }),
        saveAnswer: (id, answer) =>
          set((state) => ({
            answersByActivity: {
              ...state.answersByActivity,
              [id]: [...(state.answersByActivity[id] || []), answer],
            },
          })),
        finishActivity: ({ score, reward }) => set({ lastScore: score, lastReward: reward }),
        clearCurrent: () => set({ currentActivityId: null }),
        resetAll: () => set({ currentActivityId: null, lastScore: null, lastReward: null, answersByActivity: {} }),
      }),
      { name: 'activity-store', version: 1 }
    )
  )
)
