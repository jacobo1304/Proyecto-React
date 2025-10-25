import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { publicImages } from '../assets/images'
import { useCallback, useState, useRef } from 'react'

export default function DesktopHeader({ onOpenOptions }) {
  const navigate = useNavigate()
  const userName = useAuthStore((s) => s.userName) || 'Usuario'
  const logout = useAuthStore((s) => s.logout)
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)

  const handleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpen(true)
  }

  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  const handleLogout = useCallback(() => {
    logout()
    navigate('/login')
  }, [logout, navigate])

  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden h-14 items-center justify-between bg-[#163477] px-6 text-white shadow lg:flex">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
          onClick={() => navigate('/inicio')}
        >
          <img src={publicImages.trainingProject} alt="Training Train" className="h-10 w-auto" />
        </button>
      </div>

      <nav className="flex items-center gap-14 text-lg">
        <NavLink to="/inicio" className={({ isActive }) => isActive ? 'font-semibold hover:underline underline-offset-4' : 'hover:underline underline-offset-4'}>
          Cursos
        </NavLink>
        <NavLink to="/progreso" className={({ isActive }) => isActive ? 'font-semibold hover:underline underline-offset-4' : 'hover:underline underline-offset-4'}>
          Progreso
        </NavLink>
        <NavLink to="/tienda" className={({ isActive }) => isActive ? 'font-semibold hover:underline underline-offset-4' : 'hover:underline underline-offset-4'}>
          Tienda
        </NavLink>

        {/* Perfil con dropdown al hover/click */}
        <div
          className="relative group"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <button
            type="button"
            className={`${open ? 'underline' : ''} underline-offset-4 rounded-md px-1 focus:outline-none focus:ring-2 focus:ring-amber-400 group-hover:underline`}
          >
            {userName}
          </button>

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-3 w-56 overflow-hidden rounded-b-xl border border-white/20 bg-[#163477] p-0 shadow transition-opacity ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div className="h-px w-full bg-white/30" />
            <ul className="p-3 space-y-3">
              <li>
                <NavLink to="/perfil" className="block rounded px-2 py-1 hover:bg-white/10">
                  Perfil
                </NavLink>
              </li>
              <li>
                <button type="button" className="block w-full rounded px-2 py-1 text-left hover:bg-white/10" onClick={() => onOpenOptions?.()}>
                  Configuración
                </button>
              </li>
              <li>
                <button type="button" className="block w-full rounded px-2 py-1 text-left hover:bg-white/10" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
