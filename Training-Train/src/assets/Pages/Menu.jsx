import { NavLink } from "react-router-dom";
export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/Actividades">Actividades</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/perfil">Perfil</NavLink>
                </li>
            </ul>
        </nav>
    );
}
