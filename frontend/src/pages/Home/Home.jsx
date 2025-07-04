import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.scss";
import Imagen from "../../assets/Img Laboral.jpeg"; // Asegúrate de que esta imagen exista


// React Icons
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
  SiHtml5, // Añadido
  SiCss3, // Añadido
  SiJavascript, // Añadido
  SiTypescript, // Añadido
  SiGit, // Añadido
  SiDocker, // Añadido
  SiSwagger, // Añadido
} from "react-icons/si";
import { RiCodeSSlashFill } from "react-icons/ri"; // Añadido para un ícono más general de "coding"

// Avatares de prueba (puedes reemplazar por imágenes locales si deseas)
// Considera usar un servicio como 'source.unsplash.com/random' o tus propias fotos si no son de personas reales
const avatar1 = "https://i.pravatar.cc/100?img=1";
const avatar2 = "https://i.pravatar.cc/100?img=2";
const avatar3 = "https://i.pravatar.cc/100?img=3";

// Componente para el título con efecto de ola
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

// Datos de testimonios (sin cambios, pero asegúrate que el contenido sea real y valioso)
const testimonials = [
  {
    text: "Heyner tiene una habilidad increíble para combinar diseño moderno con lógica backend.",
    author: "Carolina Rojas",
    role: "CEO de SolmedApp",
    avatar: avatar1,
  },
  {
    text: "Destacó por su dedicación y compromiso durante el desarrollo del sistema de pedidos.",
    author: "Jorge Díaz",
    role: "Dueño de Restaurante",
    avatar: avatar2,
  },
  {
    text: "Su apoyo en el desarrollo del panel administrativo fue clave para el éxito del proyecto.",
    author: "Luis Fernández",
    role: "CTO de TechVision",
    avatar: avatar3,
  },
];

// Nueva sección: Proyectos Destacados (Ejemplo de datos)
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


const Home = () => {
  return (
    <div className="home">
      {/* Hero principal */}
      <section className="hero">
        {/* Usar el TitleWave para tu nombre en el Hero si te gusta el efecto */}
        <TitleWave text="Heyner Marin" />
        <p className="tagline">
          Transformo ideas en código con pasión y precisión, construyendo soluciones web y de software robustas.
        </p>
        <div className="cta-buttons">
          {/* CTA Principal y más visible */}
          <Link to="/contacto" className="btn btn-primary-cta">
            <span>Hablemos de tu Proyecto</span>
          </Link>
          {/* CTAs Secundarios */}
          <a href="/CV-HeynerMarin.pdf" download className="btn btn-secondary-cta">
            <span>Descargar CV</span>
          </a>
          <Link to="/sobre-mi" className="btn btn-tertiary-cta"> {/* Enlace corregido a /sobre-mi */}
            <span>Conoce Más Sobre Mí</span>
          </Link>
        </div>
      </section>

      {/* Seccion de "Sobre Mí" - Resumen */}
      <section className="about-summary">
        <TitleWave text="¿Quién Soy?" />
        <div className="about-content">
          <img src={Imagen} alt="Heyner Marin" className="profile-pic" />
          <p>
            Soy **Heyner Marin**, un desarrollador apasionado por crear soluciones tecnológicas que resuelven problemas reales. Con experiencia en el desarrollo **Full Stack** y un fuerte enfoque en la **calidad del código y la experiencia de usuario**, disfruto transformando conceptos complejos en aplicaciones funcionales y atractivas. Mi compromiso es siempre aprender y aplicar las mejores prácticas para entregar productos de alto valor.
          </p>
          <Link to="/sobre-mi" className="btn btn-outline">
            Ver mi perfil completo
          </Link>
        </div>
      </section>


      {/* Stack tecnológico */}
      <section className="stack">
        <TitleWave text="Tecnologías y Herramientas" />
        <p className="stack-description">
          Mi arsenal tecnológico abarca desde el frontend hasta el backend, bases de datos y herramientas de DevOps.
        </p>
        <div className="stack-icons">
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <SiJavascript title="JavaScript" /> {/* Añadido */}
          <SiTypescript title="TypeScript" /> {/* Añadido */}
          <FaMicrosoft title=".NET" />
          <SiBlazor title="Blazor" />
          <FaPython title="Python" />
          <FaDatabase title="SQL" /> {/* General SQL */}
          <SiPostgresql title="PostgreSQL" />
          <SiMysql title="MySQL" />
          <FaGithub title="SIGitHub" />
          <SiGit title="Git" /> {/* Añadido */}
          <SiPostman title="Postman" />
          <SiSwagger title="Swagger" /> {/* Añadido */}
          <SiDocker title="Docker" /> {/* Añadido */}
          <FaChartBar title="Power BI" />
          <FaFileExcel title="Excel" />
          <SiHtml5 title="HTML5" /> {/* Añadido */}
          <SiCss3 title="CSS3" /> {/* Añadido */}
          <RiCodeSSlashFill title="Otros" /> {/* Para cubrir cualquier otra habilidad no específica */}
        </div>
      </section>

      {/* Proyectos Destacados (Nueva Sección) */}
      <section className="featured-projects">
        <TitleWave text="Proyectos Destacados" />
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

      {/* Carrusel de Testimonios */}
      <section className="testimonials">
        <TitleWave text="Lo Que Dicen de Mí" /> {/* Título más personal */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"{t.text}"</p>
                <div className="author">
                  <img src={t.avatar} alt={t.author} />
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
                <div className="quote-icon">❞</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Llamada a la Acción Final */}
      <section className="final-cta">
        <TitleWave text="¿Listo para tu próximo proyecto?" />
        <p>
          Si tienes una idea en mente o necesitas ayuda con un proyecto existente, no dudes en contactarme.
          Estoy aquí para convertir tus visiones en realidad digital.
        </p>
        <Link to="/contacto" className="btn btn-primary-cta">
          ¡Trabajemos Juntos!
        </Link>
      </section>
    </div>
  );
};

export default Home;