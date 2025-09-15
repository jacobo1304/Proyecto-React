import { toast } from 'react-hot-toast'

export default function ErrorToast({ t, message = 'Ha ocurrido un error', actionLabel = 'Intentar de nuevo', onAction }) {
  return (
    <div
      className="pointer-events-auto flex max-w-md items-center gap-3 rounded-xl border border-red-500/40 bg-zinc-900/95 px-4 py-3 text-zinc-100 shadow-lg backdrop-blur"
      role="alert"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600/90 text-white">!</span>
      <div className="flex-1 text-left">
        <p className="text-sm leading-snug text-zinc-100">{message}</p>
      </div>
      <button
        type="button"
        className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
        onClick={() => {
          toast.dismiss(t.id)
          if (typeof onAction === 'function') onAction()
        }}
      >
        {actionLabel}
      </button>
    </div>
  )
}
