import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'
function Menu() {
  return (
<nav className="nav-bar">
        <div>
            <ul className="nav-items">
                <li className="nav-item"><Link to="/">Inicio</Link></li>
                <li className="nav-item"><Link to="/paciente">Paciente</Link></li>
            </ul>
        </div>
    </nav>
  );
}

export default Menu;