import { NavLink } from 'react-router-dom'

export default function Menu() {
    const linkCls = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
            isActive ? 'bg-sky-700 text-white' : 'text-sky-300 hover:bg-sky-800/40'
        }`

    return (
        <nav className="sticky top-0 z-40 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80">
            <ul className="mx-auto flex max-w-screen-xl flex-wrap items-center gap-2 p-2">
        
                <li><NavLink to="/inicio" className={linkCls}>Inicio</NavLink></li>
                <li><NavLink to="/actividades" className={linkCls}>Actividades</NavLink></li>
                <li><NavLink to="/actividad" className={linkCls}>Actividad</NavLink></li>
                <li><NavLink to="/info-actividad" className={linkCls}>Info Actividad</NavLink></li>
                <li><NavLink to="/perfil" className={linkCls}>Perfil</NavLink></li>
                <li><NavLink to="/progreso" className={linkCls}>Progreso</NavLink></li>
                <li><NavLink to="/tienda" className={linkCls}>Tienda</NavLink></li>
                <li><NavLink to="/correcto" className={linkCls}>Correcto</NavLink></li>
                <li><NavLink to="/confirmacion" className={linkCls}>Confirmación</NavLink></li>
                <li><NavLink to="/loading" className={linkCls}>Loading</NavLink></li>
                <li><NavLink to="/login" className={linkCls}>Login</NavLink></li>
                <li><NavLink to="/resultado" className={linkCls}>Resultado</NavLink></li>
            </ul>
        </nav>
    )
}
