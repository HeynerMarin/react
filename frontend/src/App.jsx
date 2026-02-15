import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy loading de componentes pesados
const Header = lazy(() => import('./components/Header/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

// SEO Components (livianos, cargan normal)
import { PersonSchema, WebSiteSchema } from './components/SEO/StructuredData';

import './styles/main.scss';

// Loading skeleton simple
const PageLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f8fafc'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #e2e8f0',
      borderTopColor: '#3b82f6',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
  </div>
);

function App() {
  return (
    <div className="App">
        {/* Structured Data global */}
        <PersonSchema />
        <WebSiteSchema />

        {/* Header con Suspense */}
        <Suspense fallback={<div style={{ height: '70px', background: '#f8fafc' }} />}>
          <Header />
        </Suspense>

        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-mi" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
  );
}

export default App;
