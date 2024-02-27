// NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'; // Importa el archivo de estilos
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Mi Tienda</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
                <li><Link className="dropdown-item" to="../home/products/audio">Audio</Link></li>
                <li><Link className="dropdown-item" to="../home/products/video">Video</Link></li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
