import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Disable sourcemaps in production for smaller bundle
    sourcemap: false,
    // Code splitting manual para separar librerías grandes
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks separados
          if (id.includes('node_modules')) {
            // React vendor
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // React icons
            if (id.includes('react-icons')) {
              return 'icons';
            }
            // SEO
            if (id.includes('react-helmet')) {
              return 'seo';
            }
            // Otros vendor
            return 'vendor';
          }
        },
        // Nombres de chunks más legibles
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Reducir tamaño de chunks
    chunkSizeWarningLimit: 500,
    // Minify with esbuild (más rápido y ya incluido)
    minify: 'esbuild',
    // CSS code splitting
    cssCodeSplit: true,
    target: 'es2015',
    // Habilitar compression
    compression: true,
  },
  // Optimizaciones de dependencias
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-icons/fa',
      'react-icons/si',
      'react-icons/ri'
    ]
  },
  // Server configuration
  server: {
    port: 3000,
    host: true,
  }
});
