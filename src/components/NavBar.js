import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Ecommerce</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!">Home</a></li>
          <li><a href="#!">Products</a></li>
          {/* ... Otros elementos del menú */}
          <li><CartWidget /></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
