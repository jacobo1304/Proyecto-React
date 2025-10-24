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
        // progreso detallado por actividad
        progressByActivity: {}, // { [activityId]: { currentIndex, answers: [{questionId, optionId, correct, at}], startedAt, finishedAt } }

        startActivity: (id) =>
          set((state) => ({
            currentActivityId: id,
            progressByActivity: {
              ...state.progressByActivity,
              [id]: state.progressByActivity[id] ?? { currentIndex: 0, answers: [], startedAt: Date.now(), finishedAt: null },
            },
          })),
        saveAnswer: (id, answer) =>
          set((state) => ({
            answersByActivity: {
              ...state.answersByActivity,
              [id]: [...(state.answersByActivity[id] || []), answer],
            },
          })),
        // nueva API: registrar respuesta y avanzar índice
        selectOption: (activityId, { questionId, optionId, correct }) =>
          set((state) => {
            const prev = state.progressByActivity[activityId] ?? { currentIndex: 0, answers: [], startedAt: Date.now(), finishedAt: null }
            return {
              progressByActivity: {
                ...state.progressByActivity,
                [activityId]: {
                  ...prev,
                  answers: [...prev.answers, { questionId, optionId, correct, at: Date.now() }],
                },
              },
            }
          }),
        next: (activityId, total) =>
          set((state) => {
            const prev = state.progressByActivity[activityId]
            if (!prev) return state
            const nextIndex = prev.currentIndex + 1
            const finished = nextIndex >= total
            return {
              progressByActivity: {
                ...state.progressByActivity,
                [activityId]: {
                  ...prev,
                  currentIndex: Math.min(nextIndex, total - 1),
                  finishedAt: finished ? Date.now() : prev.finishedAt,
                },
              },
            }
          }),
        resetActivity: (activityId) =>
          set((state) => ({
            progressByActivity: {
              ...state.progressByActivity,
              [activityId]: { currentIndex: 0, answers: [], startedAt: Date.now(), finishedAt: null },
            },
          })),
        finishActivity: ({ score, reward }) => set({ lastScore: score, lastReward: reward }),
        clearCurrent: () => set({ currentActivityId: null }),
        resetAll: () => set({ currentActivityId: null, lastScore: null, lastReward: null, answersByActivity: {} }),
      }),
      {
        name: 'activity-store',
        version: 2,
        partialize: (state) => ({
          currentActivityId: state.currentActivityId,
          lastScore: state.lastScore,
          lastReward: state.lastReward,
          progressByActivity: state.progressByActivity,
        }),
      }
    )
  )
)
