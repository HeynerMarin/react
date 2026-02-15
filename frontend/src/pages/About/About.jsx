import React from 'react';
import { Link } from 'react-router-dom';
import Imagen from "../../assets/Img Laboral.jpeg";
import './About.scss';

// SEO Components
import SEO from "../../components/SEO/SEO";
import { WebPageSchema, BreadcrumbSchema } from "../../components/SEO/StructuredData";
import { getMetaDescription, getMetaTitle, getKeywords, getFullUrl } from "../../config/seo.config";

import {
    FaReact,
    FaNodeJs,
    FaMicrosoft,
    FaGithub,
    FaDatabase,
    FaFileExcel,
    FaChartBar,
    FaPython,
} from "react-icons/fa";
import {
    SiBlazor,
    SiPostgresql,
    SiMysql,
    SiPostman,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiGit,
    SiDocker,
    SiSwagger,
} from "react-icons/si";
import { RiCodeSSlashFill } from "react-icons/ri";

const About = () => {
    // SEO Configuration
    const pageTitle = getMetaTitle('about');
    const pageDescription = getMetaDescription('about');
    const pageKeywords = getKeywords('about');
    const pageUrl = getFullUrl('/sobre-mi');

    const skills = {
        frontend: [
            { name: "React", icon: <FaReact /> },
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3 / Sass", icon: <SiCss3 /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "TypeScript", icon: <SiTypescript /> },
        ],
        backend: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: ".NET (C#, ASP.NET Core)", icon: <FaMicrosoft /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Blazor", icon: <SiBlazor /> },
        ],
        databases: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "SQL Server", icon: <FaDatabase /> },
        ],
        devops_tools: [
            { name: "Git & GitHub", icon: <FaGithub /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Swagger", icon: <SiSwagger /> },
        ],
        data_analytics: [
            { name: "Power BI", icon: <FaChartBar /> },
            { name: "Excel", icon: <FaFileExcel /> },
        ],
        soft_skills: [
            { name: "Resolución de Problemas", icon: <RiCodeSSlashFill /> },
            { name: "Trabajo en Equipo", icon: <RiCodeSSlashFill /> },
            { name: "Comunicación Efectiva", icon: <RiCodeSSlashFill /> },
            { name: "Aprendizaje Continuo", icon: <RiCodeSSlashFill /> },
        ]
    };

    const experience = [
        {
            title: "Data Analyst",
            company: "Globant",
            period: "2024 - 2025",
            description: [
                "Análisis y preparación de datos con SQL y Python para soportar decisiones de negocio.",
                "Construcción de dashboards en Power BI y automatización de tareas de análisis recurrentes."
            ]
        },
        {
            title: "Junior Developer",
            company: "Boxmark Digital",
            period: "2025 - 2025",
            description: [
                "Desarrollo de automatizaciones en Python para tareas web, con manejo de errores, reintentos y logging.",
                "Implementación de bots con Playwright/Selenium para flujos repetitivos (navegación, validación y extracción).",
                "Integración de automatizaciones con servicios web y fuentes de datos para apoyar procesos operativos."
            ]
        },
        {
            title: ".NET Developer",
            company: "Finanzauto",
            period: "2025 - Presente",
            description: [
                "Desarrollo y mantenimiento de componentes backend en C#/.NET Framework para sistemas internos.",
                "Implementación de acceso a datos con Entity Framework y optimización de consultas en SQL Server.",
                "Construcción y ajuste de servicios y endpoints para integración entre módulos (operativo/contable).",
                "Automatización de reportes y soporte a incidentes en producción, priorizando estabilidad y tiempos de respuesta.",
                "Documentación técnica y mejora continua de código siguiendo estándares y buenas prácticas."
            ]
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                url={pageUrl}
                image="/assets/Img Laboral.jpeg"
            />

            <WebPageSchema
                title={pageTitle}
                description={pageDescription}
                url={pageUrl}
            />

            <BreadcrumbSchema
                items={[
                    { name: 'Inicio', url: '/' },
                    { name: 'Sobre Mí', url: '/sobre-mi' }
                ]}
            />

            <div className="about-me-page">
                <section className="hero-about">
                    <div className="hero-content">
                        <img
                            src={Imagen}
                            alt="Heyner Marin"
                            className="profile-photo"
                            width="150"
                            height="150"
                            loading="eager"
                        />
                        <h1 className="main-title">Heyner Marin</h1>
                        <p className="subtitle">Desarrollador Full Stack de Bogotá, apasionado por construir soluciones que marcan la diferencia.</p>
                    </div>
                </section>

                <section className="my-story">
                    <h2 className="section-title">Mi Trayectoria</h2>
                    <div className="story-content">
                        <p>
                            Mi camino en el desarrollo de software comenzó con curiosidad por cómo la tecnología puede resolver problemas reales. Estudié Desarrollo Web en la Universidad de Caldas en 2022, y actualmente estoy cursando Ingeniería Informática en ESEIT (2023-2026). Desde el principio, me atrapó la idea de que código bien escrito puede mejorar procesos de negocio y hacer la diferencia.
                        </p>
                        <p>
                            He tenido la oportunidad de trabajar en empresas como Globant, donde aprendí sobre análisis de datos y construcción de dashboards en Power BI; en Boxmark Digital, donde me sumergí en el mundo de las automatizaciones con Python y herramientas como Playwright; y actualmente en Finanzauto, donde desarrollo mis habilidades como .NET Developer, construyendo backend con C# y optimizando sistemas en SQL Server.
                        </p>
                        <p>
                            Más allá de mi formación académica, siempre he creído en el autoaprendizaje. He tomado cursos profesionales como el de Power BI y Python en Código Facilito, y tengo un nivel de inglés B2 (intermedio alto) certificado por EF SET. Creo que la tecnología avanza rápido y mantenerse actualizado no es una opción, es una necesidad. Cada proyecto es una oportunidad para aprender algo nuevo.
                        </p>
                    </div>
                </section>

                <section className="skills-section">
                    <h2 className="section-title">Mis Habilidades Técnicas y Blandas</h2>
                    <p className="skills-intro">Mi arsenal de herramientas y mi enfoque para construir software de calidad.</p>
                    <div className="skills-grid">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="skill-category-card">
                                <h3>{category.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}</h3>
                                <ul className="skill-list">
                                    {items.map((skill, idx) => (
                                        <li key={idx} className="skill-item">
                                            {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="experience-section">
                    <h2 className="section-title">Experiencia Laboral</h2>
                    <p className="experience-intro">Un vistazo a mi trayectoria profesional y los proyectos en los que he contribuido.</p>
                    <div className="experience-timeline">
                        {experience.map((job, idx) => (
                            <div key={idx} className="experience-item">
                                <div className="job-header">
                                    <h3 className="job-title">{job.title}</h3>
                                    <span className="job-period">{job.period}</span>
                                </div>
                                <p className="job-company">{job.company}</p>
                                <ul className="job-description">
                                    {job.description.map((point, pointIdx) => (
                                        <li key={pointIdx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="philosophy-section">
                    <h2 className="section-title">Mi Filosofía de Trabajo</h2>
                    <div className="philosophy-content">
                        {[
                            { icon: <RiCodeSSlashFill />, title: "Código Limpio y Eficiente", text: "Me esfuerzo por escribir código que no solo funcione, sino que sea legible, mantenible y escalable, aplicando las mejores prácticas y patrones de diseño." },
                            { icon: <RiCodeSSlashFill />, title: "Solución de Problemas Creativa", text: "Abordo cada desafío con una mentalidad innovadora, buscando siempre la solución más efectiva y optimizada para las necesidades específicas del proyecto." },
                            { icon: <RiCodeSSlashFill />, title: "Colaboración y Comunicación", text: "Creo firmemente en el poder del trabajo en equipo y la comunicación abierta para alcanzar objetivos comunes y construir productos excepcionales." },
                            { icon: <RiCodeSSlashFill />, title: "Aprendizaje Continuo", text: "El mundo de la tecnología evoluciona rápidamente. Me mantengo actualizado con las últimas tendencias y herramientas para ofrecer soluciones de vanguardia." }
                        ].map((item, idx) => (
                            <div key={idx} className="philosophy-card">
                                {item.icon}
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="interests-section">
                    <h2 className="section-title">Un Poco Sobre Mí</h2>
                    <div>
                        <p className="interests-text">
                            Fuera del desarrollo, me apasiona explorar ideas de negocio en diferentes campos: la tecnología obviamente, pero también la gastronomía y la educación. De hecho, tengo un emprendimiento de cocina que me mantiene experimentando con recetas y mejorando sabores siempre que puedo.
                        </p>
                        <p className="interests-text">
                            Soy de los que cree que un buen desarrollador necesita más que solo código. Por eso dedico tiempo a leer libros de ciencia y desarrollo personal, y a mantener un equilibrio entre el trabajo y la vida personal. Creo que esa mezcla de creatividad, disciplina y curiosidad por aprender es lo que me ayuda a enfrentar cada nuevo proyecto con entusiasmo.
                        </p>
                    </div>
                </section>

                <section className="about-cta">
                    <h2 className="section-title">¿Listo para Construir Algo Impresionante?</h2>
                    <p>
                        Si mi perfil se alinea con lo que buscas o tienes una idea que quieres desarrollar, no dudes en contactarme.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/#proyectos-destacados" className="btn btn-primary-cta">
                            Ver mis Proyectos
                        </Link>
                        <Link to="/contacto" className="btn btn-tertiary-cta">
                            Hablemos
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
