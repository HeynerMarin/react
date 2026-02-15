# Portafolio Heyner Marin

Portafolio web profesional de Heyner Marin - Desarrollador Full Stack.

## 🚀 Estructura del Proyecto

```
react/
├── frontend/          # Aplicación React (código principal)
│   ├── public/        # Archivos estáticos
│   ├── src/           # Código fuente
│   ├── package.json   # Dependencias
│   └── vite.config.js # Configuración de Vite
├── netlify.toml      # Configuración de Netlify
└── .gitignore        # Archivos ignorados por Git
```

## 📦 Instalación Local

```bash
cd frontend
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🔨 Build para Producción

```bash
cd frontend
npm run build
```

Los archivos optimizados se generan en `frontend/dist/`

## 🌐 Deploy

Este sitio está configurado para despliegue automático en Netlify desde GitHub.

### Configuración de Netlify:
- **Directorio base**: Raíz del repositorio
- **Directorio de publicación**: `frontend/dist`
- **Comando de build**: `cd frontend && npm install && npm run build`
- **Branch principal**: `main`

## 📝 Notas

- El proyecto usa Vite como build tool
- React 19.1.0 con React Router v7
- Sass/SCSS para estilos
- SEO optimizado con meta tags y structured data
- CVs disponibles en español e inglés
