import { Helmet } from 'react-helmet';

/**
 * Componente SEO para optimización de motores de búsqueda
 * Maneja meta tags, Open Graph, Twitter Cards y canonical URLs
 */
const SEO = ({
  title,
  description,
  image = 'https://heynermarin.com/assets/LogoSinFondo.png',
  url = 'https://heynermarin.com',
  type = 'website',
  keywords = [],
  author = 'Heyner Marin'
}) => {
  // Meta descripción por defecto si no se proporciona
  const defaultDescription = 'Heyner Marin - Desarrollador Full Stack especializado en React, Node.js, .NET y desarrollo web moderno. Transformo ideas en soluciones tecnológicas robustas.';

  // Título completo con nombre del sitio
  const fullTitle = title ? `${title} | Heyner Marin` : 'Heyner Marin | Desarrollador Full Stack';

  // URL base del sitio
  const siteUrl = 'https://heynermarin.com';

  // Imagen por defecto si se proporciona una ruta relativa
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Keywords completas
  const defaultKeywords = [
    'Heyner Marin',
    'Desarrollador Full Stack',
    'React Developer',
    'Node.js',
    '.NET',
    'JavaScript',
    'TypeScript',
    'Web Developer',
    'Desarrollo Web',
    'Portfolio',
    'Portafolio'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />

      {/* Charset y Viewport */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Heyner Marin Portfolio" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@heyneryesid42" />
      <meta name="twitter:creator" content="@heyneryesid42" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:url" content={url} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#0ff0fc" />

      {/* Language */}
      <html lang="es" />

      {/* Additional meta tags for social sharing */}
      <meta name="application-name" content="Heyner Marin Portfolio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Heyner Marin" />
    </Helmet>
  );
};

export default SEO;
