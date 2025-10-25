import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { publicImages } from '../assets/images'

export default function LandingHeader({ useRoutes = false }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // Si useRoutes=true, usamos rutas dedicadas; si no, anclas en la landing
  const anchorLinks = [
    { href: '#contacto', label: 'Contacto' },
    { href: '#nuestro-trabajo', label: 'Nuestro trabajo' },
    { href: '#soporte', label: 'Soporte' },
  ]
  const routeLinks = [
    { to: '/contacto', label: 'Contacto' },
    { to: '/nuestro-trabajo', label: 'Nuestro trabajo' },
    { to: '/soporte', label: 'Soporte' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 bg-[#163477] text-white shadow">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          onClick={() => navigate('/')}
          aria-label="Inicio"
        >
          <img src={publicImages.trainingProject} alt="Training Train" className="h-9 w-auto" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {!useRoutes
            ? anchorLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:underline underline-offset-4">
                  {l.label}
                </a>
              ))
            : routeLinks.map((l) => (
                <Link key={l.to} to={l.to} className="hover:underline underline-offset-4">
                  {l.label}
                </Link>
              ))}
          <Link to="/login" className="rounded bg-amber-400 px-3 py-1.5 font-medium text-black hover:bg-amber-300">
            Ingresa
          </Link>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden">
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 ${open ? 'translate-x-0' : 'translate-x-full'} bg-[#163477] p-5 text-white shadow-lg transition-transform`}
          role="dialog"
          aria-modal="true"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-semibold">Menú</span>
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            {!useRoutes
              ? anchorLinks.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-white/10">
                    {l.label}
                  </a>
                ))
              : routeLinks.map((l) => (
                  <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-white/10">
                    {l.label}
                  </Link>
                ))}
            <Link to="/login" onClick={() => setOpen(false)} className="mt-4 block rounded bg-amber-400 px-3 py-2 text-center font-medium text-black hover:bg-amber-300">
              Ingresa
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
