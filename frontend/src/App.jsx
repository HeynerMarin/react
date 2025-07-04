import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/Cursor/CustomCursor';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;