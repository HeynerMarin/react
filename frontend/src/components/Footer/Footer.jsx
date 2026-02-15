import React from 'react';
import './Footer.scss';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa'; // ⬅️ Añadido FaGithub
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoSinFondo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo con enlace al Home */}
        <div className="footer-logo">
          <Link to="/" aria-label="Inicio">
            <img
              src={Logo}
              alt="Logo Heyner Marin"
              width="42"
              height="42"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Texto centrado */}
        <p className="footer-name">
          &copy; {new Date().getFullYear()} Heyner Marin
        </p>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/heyner-marinr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/573153719580"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:heyneryesid42@gmail.com"
            aria-label="Correo electrónico"
            title="Correo"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/HeynerMarin" // 🔗 Actualiza con tu usuario real
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
