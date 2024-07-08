import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header >
      <nav>
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/login">INICIAR SESIÓN</Link></li>
          <li><Link to="/register">REGISTRARSE</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
