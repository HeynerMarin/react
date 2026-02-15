import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Imagen from "../../assets/Img Laboral.jpeg";

// SEO Components
import SEO from "../../components/SEO/SEO";
import { WebPageSchema, BreadcrumbSchema } from "../../components/SEO/StructuredData";
import { getMetaDescription, getMetaTitle, getKeywords, getFullUrl } from "../../config/seo.config";

// Lazy loading de componentes pesados
const CVDownloadModal = lazy(() => import("../../components/CVDownloadModal/CVDownloadModal"));

// React Icons - import solo los necesarios
import { FaReact, FaNodeJs, FaMicrosoft, FaGithub, FaDatabase, FaFileExcel, FaChartBar, FaPython } from "react-icons/fa";
import { SiBlazor, SiPostgresql, SiMysql, SiPostman, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiGit, SiDocker, SiSwagger } from "react-icons/si";
import { RiCodeSSlashFill } from "react-icons/ri";

// Datos estáticos
const featuredProjects = [
  {
    title: "Saludfy",
    description: "Plataforma SaaS para optimizar procesos empresariales con React y Node.js.",
    link: "https://github.com/HeynerMarin/Salud-Web",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Postman"],
  },
  {
    title: "Pos Restaurante",
    description: "Aplicación híbrida para restaurantes, mejorando la experiencia del cliente.",
    link: "/portafolio/app-pedidos",
    tags: [".Web Forms", ".Net"],
  },
  {
    title: "Dashboard Analítico Power BI",
    description: "Desarrollo de paneles interactivos para visualización de datos de ventas.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7297968249231593472/",
    tags: ["Power BI", "SQL Server"],
  },
];

// Tech stack data
const techStack = [
  <FaReact title="React" />,
  <FaNodeJs title="Node.js" />,
  <SiJavascript title="JavaScript" />,
  <SiTypescript title="TypeScript" />,
  <FaMicrosoft title=".NET" />,
  <SiBlazor title="Blazor" />,
  <FaPython title="Python" />,
  <FaDatabase title="SQL" />,
  <SiPostgresql title="PostgreSQL" />,
  <SiMysql title="MySQL" />,
  <FaGithub title="GitHub" />,
  <SiGit title="Git" />,
  <SiPostman title="Postman" />,
  <SiSwagger title="Swagger" />,
  <SiDocker title="Docker" />,
  <FaChartBar title="Power BI" />,
  <FaFileExcel title="Excel" />,
  <SiHtml5 title="HTML5" />,
  <SiCss3 title="CSS3" />,
  <RiCodeSSlashFill title="Otros" />
];

// Testimonios estáticos (sin Swiper - más ligero)
const testimonials = [
  {
    text: "Heyner tiene una habilidad increíble para combinar diseño moderno con lógica backend.",
    author: "Carolina Rojas",
    role: "CEO de SolmedApp",
    initials: "CR",
  },
  {
    text: "Destacó por su dedicación y compromiso durante el desarrollo del sistema de pedidos.",
    author: "Jorge Díaz",
    role: "Dueño de Restaurante",
    initials: "JD",
  },
  {
    text: "Su apoyo en el desarrollo del panel administrativo fue clave para el éxito del proyecto.",
    author: "Luis Fernández",
    role: "CTO de TechVision",
    initials: "LF",
  },
];

const Home = () => {
  // SEO Configuration
  const pageTitle = getMetaTitle('home');
  const pageDescription = getMetaDescription('home');
  const pageKeywords = getKeywords('home');
  const pageUrl = getFullUrl('/');

  // CV Modal State
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        url={pageUrl}
        image="/assets/Img Laboral.jpeg"
      />

      {/* Structured Data */}
      <WebPageSchema
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' }
        ]}
      />

      <div className="home">
        {/* Hero principal */}
        <section className="hero">
          <h1 className="hero-title">Heyner Marin</h1>
          <p className="tagline">
            Transformo ideas en código con pasión y precisión, construyendo soluciones web y de software robustas.
          </p>
          <div className="cta-buttons">
            <Link to="/contacto" className="btn btn-primary-cta">
              Hablemos de tu Proyecto
            </Link>
            <button
              onClick={() => setIsCVModalOpen(true)}
              className="btn btn-secondary-cta"
            >
              Descargar CV
            </button>
            <Link to="/sobre-mi" className="btn btn-tertiary-cta">
              Conoce Más Sobre Mí
            </Link>
          </div>
        </section>

        {/* Seccion de "Sobre Mí" - Resumen */}
        <section className="about-summary">
          <h2 className="section-title">¿Quién Soy?</h2>
          <div className="about-content">
            <img
              src={Imagen}
              alt="Heyner Marin"
              className="profile-pic"
              width="150"
              height="150"
              loading="eager"
            />
            <p>
              Soy Heyner Marin, un desarrollador apasionado por crear soluciones tecnológicas que resuelven problemas reales. Con experiencia en el desarrollo Full Stack y un fuerte enfoque en la calidad del código y la experiencia de usuario, disfruto transformando conceptos complejos en aplicaciones funcionales y atractivas. Mi compromiso es siempre aprender y aplicar las mejores prácticas para entregar productos de alto valor.
            </p>
            <Link to="/sobre-mi" className="btn btn-outline">
              Ver mi perfil completo
            </Link>
          </div>
        </section>

        {/* Stack tecnológico */}
        <section className="stack">
          <h2 className="section-title">Tecnologías y Herramientas</h2>
          <p className="stack-description">
            Mi arsenal tecnológico abarca desde el frontend hasta el backend, bases de datos y herramientas de DevOps.
          </p>
          <div className="stack-icons">
            {techStack.map((icon, idx) => (
              <div key={idx} className="tech-icon">
                {icon}
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section id="proyectos-destacados" className="featured-projects">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="projects-description">
            Algunos de mis trabajos más recientes y relevantes que demuestran mi capacidad para entregar soluciones completas.
          </p>
          <div className="project-grid">
            {featuredProjects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to={project.link} className="btn btn-details">
                  Ver Detalles
                </Link>
              </div>
            ))}
          </div>
          <div className="view-all-projects-cta">
            <Link to="/portafolio" className="btn btn-outline">
              Ver Todos mis Proyectos
            </Link>
          </div>
        </section>

        {/* Testimonios - Estático sin Swiper */}
        <section className="testimonials">
          <h2 className="section-title">Lo Que Dicen de Mí</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="stars">★★★★★</div>
                <p>"{t.text}"</p>
                <div className="author">
                  <div className="avatar-initials">
                    {t.initials}
                  </div>
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Llamada a la Acción Final */}
        <section className="final-cta">
          <h2 className="cta-title">¿Listo para tu próximo proyecto?</h2>
          <p>
            Si tienes una idea en mente o necesitas ayuda con un proyecto existente, no dudes en contactarme.
            Estoy aquí para convertir tus visiones en realidad digital.
          </p>
          <Link to="/contacto" className="btn btn-primary-cta">
            ¡Trabajemos Juntos!
          </Link>
        </section>
      </div>

      {/* CV Download Modal - Lazy Loaded */}
      <Suspense fallback={null}>
        {isCVModalOpen && (
          <CVDownloadModal
            isOpen={isCVModalOpen}
            onClose={() => setIsCVModalOpen(false)}
          />
        )}
      </Suspense>
    </>
  );
};

export default Home;
