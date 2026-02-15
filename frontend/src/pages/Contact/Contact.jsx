import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing icons
import './Contact.scss'; // SCSS for styling

// SEO Components
import SEO from "../../components/SEO/SEO";
import { WebPageSchema, BreadcrumbSchema } from "../../components/SEO/StructuredData";
import { getMetaDescription, getMetaTitle, getKeywords, getFullUrl } from "../../config/seo.config";

// Assuming TitleWave is a common component as used in About.jsx
const TitleWave = ({ text }) => (
    <h2 className="wave-title">
        {text.split("").map((char, idx) => (
            <span
                key={idx}
                style={{ animationDelay: `${idx * 0.05}s` }}
                className={char === " " ? "space" : ""}
            >
                {char}
            </span>
        ))}
    </h2>
);

const Contact = () => {
    // SEO Configuration
    const pageTitle = getMetaTitle('contact');
    const pageDescription = getMetaDescription('contact');
    const pageKeywords = getKeywords('contact');
    const pageUrl = getFullUrl('/contacto');

    return (
        <>
            {/* SEO Meta Tags */}
            <SEO
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                url={pageUrl}
                image="/assets/LogoSinFondo.png"
            />

            {/* Structured Data */}
            <WebPageSchema
                title={pageTitle}
                description={pageDescription}
                url={pageUrl}
            />

            <BreadcrumbSchema
                items={[
                    { name: 'Inicio', url: '/' },
                    { name: 'Contacto', url: '/contacto' }
                ]}
            />

            <div className="contact-page">
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="main-title">Ponte en Contacto</h1>
                    <p className="subtitle">¡Me encantaría saber de ti! Ya sea para discutir un proyecto, una oportunidad de colaboración o simplemente para saludar, no dudes en escribirme.</p>
                </div>
            </section>

            <section className="contact-info">
                <TitleWave text="Encuéntrame Aquí" />
                <div className="contact-methods">
                    <a
                        href="https://www.linkedin.com/in/heyner-marinr" // REPLACE with your LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card linkedin"
                    >
                        <FaLinkedin className="contact-icon" />
                        <h3>LinkedIn</h3>
                        <p>Conectemos profesionalmente.</p>
                    </a>

                    <a
                        href="https://wa.me/573153719580" // REPLACE with your WhatsApp number (include country code, e.g., +573001234567)
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card whatsapp"
                    >
                        <FaWhatsapp className="contact-icon" />
                        <h3>WhatsApp</h3>
                        <p>Envíame un mensaje directo.</p>
                    </a>

                    <a
                        href="mailto:heyneryesid42@gmail.com" // REPLACE with your email address
                        className="contact-card email"
                    >
                        <FaEnvelope className="contact-icon" />
                        <h3>Correo Electrónico</h3>
                        <p>Envíame un email.</p>
                    </a>
                </div>
                <p className="contact-note">
                    Prefiero estas vías de contacto para una comunicación rápida y eficiente. ¡Espero tu mensaje!
                </p>
            </section>

            {/* Optional: A simple form or call to action could go here */}
            {/* <section className="contact-form-section">
                <TitleWave text="O Envíame un Mensaje Directo" />
                // Add a contact form here if desired
                <p>Implementar un formulario de contacto aquí si lo necesitas.</p>
            </section> */}
        </div>
        </>
    );
};

export default Contact;