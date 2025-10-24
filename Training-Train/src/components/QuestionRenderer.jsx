import React from 'react'

export default function QuestionRenderer({ question, selectedId, onSelect }) {
  const opts = question.options || []
  const isTwo = opts.length === 2
  const gridCols = isTwo ? 'grid-cols-2' : 'grid-cols-2'

  return (
    <div className={`grid ${gridCols} gap-3`}>
      {opts.map((op) => {
        const active = selectedId === op.id
        return (
          <button
            key={op.id}
            type="button"
            onClick={() => onSelect(op)}
            className={`rounded-lg border px-4 py-3 transition-colors ${
              active
                ? 'border-sky-500 bg-sky-600 text-white dark:bg-sky-700'
                : 'border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
            }`}
          >
            {op.label}
          </button>
        )
      })}
    </div>
  )
}
