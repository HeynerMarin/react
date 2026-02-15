/**
 * Configuración centralizada de SEO
 * Facilita la gestión de meta tags y datos estructurados en toda la aplicación
 */

export const SEO_CONFIG = {
  // Información del sitio
  site: {
    name: 'Heyner Marin',
    url: 'https://heynermarin.com',
    domain: 'heynermarin.com',
    defaultImage: '/assets/LogoSinFondo.png',
    twitterHandle: '@heyneryesid42',
    author: 'Heyner Marin'
  },

  // Información de la persona
  person: {
    name: 'Heyner Marin',
    alternateName: 'Heyner Yesid Marin',
    jobTitle: 'Desarrollador Full Stack',
    email: 'heyneryesid42@gmail.com',
    phone: '+57 319 648 9740',
    location: 'Colombia',
    languages: ['Español', 'Inglés'],
    github: 'https://github.com/HeynerMarin',
    linkedin: 'https://www.linkedin.com/in/heyner-marinr',
    twitter: 'https://twitter.com/heyneryesid42'
  },

  // Configuración por página
  pages: {
    home: {
      title: 'Inicio',
      description: 'Heyner Marin - Desarrollador Full Stack especializado en React, Node.js, .NET y desarrollo web moderno. Transformo ideas en soluciones tecnológicas robustas y escalables.',
      keywords: [
        'Desarrollador Full Stack',
        'React Developer',
        'Node.js Developer',
        'Web Developer',
        '.NET Developer',
        'Desarrollo Web',
        'Portfolio',
        'Portafolio Desarrollo Web'
      ],
      url: '/'
    },

    about: {
      title: 'Sobre Mí',
      description: 'Conoce más sobre Heyner Marin, desarrollador Full Stack con experiencia en React, Node.js, .NET, Python y más. Ingeniero de software apasionado por crear soluciones innovadoras.',
      keywords: [
        'Sobre Heyner Marin',
        'Perfil Desarrollador',
        'Ingeniero de Software',
        'Desarrollador Full Stack Colombia',
        'Experiencia Desarrollo Web'
      ],
      url: '/sobre-mi'
    },

    contact: {
      title: 'Contacto',
      description: 'Contacta a Heyner Marin, desarrollador Full Stack. Disponible para proyectos freelance y colaboraciones. Conectemos a través de LinkedIn, WhatsApp o email.',
      keywords: [
        'Contactar Desarrollador',
        'Hire Developer',
        'Desarrollador Freelance',
        'Proyectos Web',
        'Contratar Developer'
      ],
      url: '/contacto'
    },

    portfolio: {
      title: 'Portafolio',
      description: 'Explora los proyectos de Heyner Marin. Aplicaciones web desarrolladas con React, Node.js, .NET y más. Saludfy, POS Restaurante, Dashboard Power BI y más.',
      keywords: [
        'Proyectos Desarrollo Web',
        'Portfolio React',
        'Proyectos Node.js',
        'Aplicaciones Web',
        'Desarrollo Software'
      ],
      url: '/portafolio'
    }
  },

  // Structured Data Templates
  structuredData: {
    organization: {
      context: 'https://schema.org',
      type: 'Person',
      name: 'Heyner Marin',
      url: 'https://heynermarin.com',
      logo: 'https://heynermarin.com/assets/LogoSinFondo.png'
    },

    socialLinks: [
      'https://github.com/HeynerMarin',
      'https://www.linkedin.com/in/heyner-marinr',
      'https://twitter.com/heyneryesid42'
    ]
  },

  // Open Graph Images (se recomiendan imágenes de 1200x630px)
  ogImages: {
    default: '/assets/og-image-default.png',
    home: '/assets/og-image-home.png',
    about: '/assets/og-image-about.png',
    contact: '/assets/og-image-contact.png'
  }
};

/**
 * Genera meta description optimizada para SEO
 * @param {string} pageKey - Clave de la página en SEO_CONFIG.pages
 * @returns {string} - Meta description
 */
export const getMetaDescription = (pageKey = 'home') => {
  return SEO_CONFIG.pages[pageKey]?.description || SEO_CONFIG.pages.home.description;
};

/**
 * Genera título optimizado para SEO
 * @param {string} pageKey - Clave de la página en SEO_CONFIG.pages
 * @returns {string} - Título completo
 */
export const getMetaTitle = (pageKey = 'home') => {
  const page = SEO_CONFIG.pages[pageKey];
  return page ? `${page.title} | Heyner Marin` : 'Heyner Marin | Desarrollador Full Stack';
};

/**
 * Genera URL completa
 * @param {string} path - Ruta relativa
 * @returns {string} - URL completa
 */
export const getFullUrl = (path = '/') => {
  return `${SEO_CONFIG.site.url}${path}`;
};

/**
 * Genera lista de keywords
 * @param {string} pageKey - Clave de la página
 * @returns {array} - Array de keywords
 */
export const getKeywords = (pageKey = 'home') => {
  return SEO_CONFIG.pages[pageKey]?.keywords || [];
};

export default SEO_CONFIG;
