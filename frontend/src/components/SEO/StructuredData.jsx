import { Helmet } from 'react-helmet-async';

/**
 * Componente para añadir Structured Data (JSON-LD) para rich snippets
 * Mejora la apariencia en resultados de búsqueda de Google
 */
const StructuredData = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

/**
 * Datos estructurados para una persona (Organization/Person schema)
 */
export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Heyner Marin",
    "alternateName": "Heyner Yesid Marin",
    "jobTitle": "Desarrollador Full Stack",
    "url": "https://heynermarin.com",
    "image": "https://heynermarin.com/assets/Img%20Laboral.jpeg",
    "sameAs": [
      "https://github.com/HeynerMarin",
      "https://www.linkedin.com/in/heyner-marinr",
      "https://twitter.com/heyneryesid42"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SASS",
      ".NET",
      "C#",
      "Blazor",
      "Python",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Power BI",
      "UI/UX Design",
      "Web Development",
      "Full Stack Development"
    ],
    "description": "Desarrollador Full Stack apasionado por crear soluciones tecnológicas que resuelven problemas reales. Especializado en React, Node.js y .NET con experiencia en desarrollo de aplicaciones web modernas.",
    "alumniOf": "Universidad de Caldas",
    "birthPlace": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Colombia"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Colombia"
    }
  };

  return <StructuredData data={schema} />;
};

/**
 * Datos estructurados para WebSite
 */
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Heyner Marin - Portfolio",
    "url": "https://heynermarin.com",
    "description": "Portfolio de Heyner Marin - Desarrollador Full Stack especializado en React, Node.js y desarrollo web moderno",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://heynermarin.com/search?q={search_term_string}"
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        "valueRequired": true,
        "valueName": "search_term_string"
      }
    },
    "publisher": {
      "@type": "Person",
      "name": "Heyner Marin",
      "url": "https://heynermarin.com"
    }
  };

  return <StructuredData data={schema} />;
};

/**
 * Datos estructurados para WebPage
 */
export const WebPageSchema = ({ title, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": url,
    "description": description,
    "inLanguage": "es",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Heyner Marin - Portfolio",
      "url": "https://heynermarin.com"
    },
    "about": {
      "@type": "Person",
      "name": "Heyner Marin",
      "jobTitle": "Desarrollador Full Stack"
    }
  };

  return <StructuredData data={schema} />;
};

/**
 * Datos estructurados para BreadcrumbList
 */
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://heynermarin.com${item.url}`
    }))
  };

  return <StructuredData data={schema} />;
};

/**
 * Datos estructurados para Article/Portfolio
 */
export const ArticleSchema = ({ title, description, datePublished, dateModified, url, image }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || "https://heynermarin.com/assets/LogoSinFondo.png",
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": "Heyner Marin",
      "url": "https://heynermarin.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Heyner Marin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heynermarin.com/assets/LogoSinFondo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return <StructuredData data={schema} />;
};

export default StructuredData;
