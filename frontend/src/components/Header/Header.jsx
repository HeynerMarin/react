import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import './Header.scss';

const Header = () => {
  return (
    <header className="header-minimal">
      <div className="header-container">
        <h1 className="typed-name">
          <Typewriter
            words={['Developer Heyner Marin']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </h1>

        <nav className="main-nav">
          <ul>
            <li><NavLink to="/" className="nav-link">Inicio</NavLink></li>
            <li><NavLink to="/sobre-mi" className="nav-link">Sobre mí</NavLink></li>
            <li><NavLink to="/contacto" className="nav-link">Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
