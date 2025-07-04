import React from 'react';
import { Link } from 'react-router-dom';
import Imagen from "../../assets/Img Laboral.jpeg"; 
import './About.scss'; // Notice the import path for SCSS

import {
    FaReact,
    FaNodeJs,
    FaMicrosoft,
    FaGithub,
    FaDatabase,
    FaFileExcel,
    FaChartBar, // Imported and suitable for data analytics
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
import { RiCodeSSlashFill } from "react-icons/ri"; // Imported and can be used as a generic code/idea icon

// Assuming TitleWave is a common component or defined here (copied from previous response)
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

const About = () => {
    // This data should ideally come from a separate data file or a CMS for larger projects
    const skills = {
        frontend: [
            { name: "React", icon: <FaReact /> },
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3 / Sass", icon: <SiCss3 /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            // Add more as needed: e.g., Next.js, Redux, Context API
        ],
        backend: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: ".NET (C#, ASP.NET Core)", icon: <FaMicrosoft /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Blazor", icon: <SiBlazor /> },
            // Add more: e.g., Express, Flask, Django, Spring Boot
        ],
        databases: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "SQL Server", icon: <FaDatabase /> },
            // Add more: e.g., MongoDB, Firebase
        ],
        devops_tools: [
            { name: "Git & GitHub", icon: <FaGithub /> },
            { name: "Docker", icon: <SiDocker /> },
            // Removed Azure/AWS as they were not imported, but you can add them back if you import their respective icons
            { name: "Postman", icon: <SiPostman /> },
            { name: "Swagger", icon: <SiSwagger /> },
            // Add more: e.g., Jenkins, Kubernetes, GitLab CI/CD
        ],
        data_analytics: [
            { name: "Power BI", icon: <FaChartBar /> }, // Using FaChartBar instead of SiPowerbi
            { name: "Excel", icon: <FaFileExcel /> },
            // Add more: e.g., Tableau, SQL Analytics
        ],
        soft_skills: [
            { name: "Resolución de Problemas", icon: <RiCodeSSlashFill /> }, // Using RiCodeSSlashFill
            { name: "Trabajo en Equipo", icon: <RiCodeSSlashFill /> }, // Using RiCodeSSlashFill
            { name: "Comunicación Efectiva", icon: <RiCodeSSlashFill /> }, // Using RiCodeSSlashFill
            { name: "Aprendizaje Continuo", icon: <RiCodeSSlashFill /> }, // Using RiCodeSSlashFill
            // Add more: e.g., Adaptabilidad, Proactividad, Gestión del Tiempo
        ]
    };

    const experience = [
        {
            title: "Desarrollador Full Stack",
            company: "Tech Solutions S.A.",
            period: "Enero 2022 - Presente",
            description: [
                "Desarrollo y mantenimiento de aplicaciones web con React y Node.js, incluyendo APIs RESTful y bases de datos PostgreSQL.",
                "Implementación de CI/CD para automatizar despliegues, reduciendo el tiempo de lanzamiento en un 30%.",
                "Colaboración en el diseño de arquitecturas de microservicios en Azure." // Keep this text, but note Azure icon isn't imported
            ]
        },
        {
            title: "Desarrollador Junior .NET",
            company: "Innovatech Ltda.",
            period: "Julio 2020 - Diciembre 2021",
            description: [
                "Participación en el desarrollo de aplicaciones empresariales utilizando .NET Core y SQL Server.",
                "Soporte y optimización de bases de datos existentes, mejorando el rendimiento de consultas críticas."
            ]
        }
    ];

    return (
        <div className="about-me-page"> {/* Retaining .about-me-page class for styling consistency */}
            <section className="hero-about">
                <div className="hero-content">
                    {/* Placeholder image - Replace with your actual photo path */}
                    <img src={Imagen} alt="Heyner Marin" className="profile-photo" />
                    <h1 className="main-title">Heyner Marin: Desarrollador & Creador de Soluciones</h1>
                    <p className="subtitle">Transformando ideas en código elegante y experiencias de usuario excepcionales.</p>
                </div>
            </section>

            <section className="my-story">
                <TitleWave text="Mi Trayectoria" />
                <div className="story-content">
                    <p>
                        Mi viaje en el mundo del desarrollo comenzó con una fascinación temprana por cómo la tecnología podía resolver problemas y automatizar tareas. Lo que empezó como curiosidad por desarmar y rearmar computadoras, pronto se convirtió en el deseo de construir software. Mi primer '¡Ajá!' vino al ver una página web que codifiqué cobrar vida en el navegador; desde ese momento, supe que quería dedicarme a esto.
                    </p>
                    <p>
                        Soy estudiante de Ingeniería Informática y egresado de la Universidad de Caldas como desarrollador de software, estas son mis formaciones mas sobresalientes. Siempre he sido un defensor del autoaprendizaje, dedicando horas a explorar nuevas tecnologías, leer documentación y participar en proyectos personales que me desafían constantemente.
                    </p>
                    <p>
                        A lo largo de mi carrera, he tenido la oportunidad de trabajar en diversos entornos, desde startups ágiles hasta empresas establecidas, lo que me ha permitido consolidar una visión integral del ciclo de vida del desarrollo de software y la importancia de la colaboración en equipo.
                    </p>
                </div>
            </section>

            <section className="skills-section">
                <TitleWave text="Mis Habilidades Técnicas y Blandas" />
                <p className="skills-intro">Mi arsenal de herramientas y mi enfoque para construir software de calidad.</p>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-category-card">
                            <h3>{category.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}</h3> {/* Format category name */}
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
                <TitleWave text="Experiencia Laboral" />
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
                <TitleWave text="Mi Filosofía de Trabajo" />
                <div className="philosophy-content">
                    <div className="philosophy-card">
                        <RiCodeSSlashFill className="philosophy-icon" /> {/* Using the generic code icon */}
                        <h3>Código Limpio y Eficiente</h3>
                        <p>Me esfuerzo por escribir código que no solo funcione, sino que sea legible, mantenible y escalable, aplicando las mejores prácticas y patrones de diseño.</p>
                    </div>
                    <div className="philosophy-card">
                        <RiCodeSSlashFill className="philosophy-icon" /> {/* Using the generic code icon */}
                        <h3>Solución de Problemas Creativa</h3>
                        <p>Abordo cada desafío con una mentalidad innovadora, buscando siempre la solución más efectiva y optimizada para las necesidades específicas del proyecto.</p>
                    </div>
                    <div className="philosophy-card">
                        <RiCodeSSlashFill className="philosophy-icon" /> {/* Using the generic code icon */}
                        <h3>Colaboración y Comunicación</h3>
                        <p>Creo firmemente en el poder del trabajo en equipo y la comunicación abierta para alcanzar objetivos comunes y construir productos excepcionales.</p>
                    </div>
                    <div className="philosophy-card">
                        <RiCodeSSlashFill className="philosophy-icon" /> {/* Using the generic code icon */}
                        <h3>Aprendizaje Continuo</h3>
                        <p>El mundo de la tecnología evoluciona rápidamente. Me mantengo actualizado con las últimas tendencias y herramientas para ofrecer soluciones de vanguardia.</p>
                    </div>
                </div>
            </section>

            <section className="interests-section">
                <TitleWave text="Un Poco Sobre Mí" />
                <p className="interests-text">
Fuera del teclado, me apasiona explorar nuevas ideas de negocio, ya sea en tecnología, gastronomía o educación. Disfruto también de sumergirme en libros de ciencia y desarrollo personal, que me ayudan a crecer como profesional y como persona. Además, me gusta probar recetas caseras, especialmente cuando se trata de mejorar los sabores de mi emprendimiento de cocina.

Creo firmemente que mantener un equilibrio entre el trabajo y la vida personal es esencial para mantener la creatividad, la disciplina y el entusiasmo con cada nuevo proyecto.                </p>
            </section>

            <section className="about-cta">
                <TitleWave text="¿Listo para Construir Algo Impresionante?" />
                <p>
                    Si mi perfil se alinea con lo que buscas o tienes una idea que quieres desarrollar, no dudes en contactarme.
                </p>
                <div className="cta-buttons">
                    <Link to="/portafolio" className="btn btn-primary-cta">
                        Ver mis Proyectos
                    </Link>
                    <Link to="/contacto" className="btn btn-tertiary-cta">
                        Hablemos
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;