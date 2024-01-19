import React from "react";
import { Link, Outlet } from "react-router-dom";
import Registro from './Registro';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/perfil">Perfil</Link>
                </li>
                <li>
                    <Link to="/registro">Registro</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/galeria">Galeria</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;