import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Lazy loading del App principal
const App = lazy(() => import('./App.jsx'));

// Estilos críticos inline para render inmediato
const CriticalStyles = () => (
  <style>{`
    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #f8fafc;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #e2e8f0;
      border-top-color: #3b82f6;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `}</style>
);

const LoadingFallback = () => (
  <div className="loading-screen">
    <div className="loading-spinner" />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CriticalStyles />
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
