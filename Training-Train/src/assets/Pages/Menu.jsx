import { NavLink } from 'react-router-dom'

export default function Menu() {
    const linkCls = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
            isActive
                ? 'bg-sky-600 text-white dark:bg-sky-700'
                : 'text-sky-700 hover:bg-sky-100 dark:text-sky-300 dark:hover:bg-sky-800/40'
        }`

    return (
        <nav className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90 border-zinc-200 dark:bg-zinc-900/95 dark:border-zinc-800 dark:supports-[backdrop-filter]:bg-zinc-900/80">
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
                <li><NavLink to="/opciones" className={linkCls}>Opciones</NavLink></li>
            </ul>
        </nav>
    )
}
