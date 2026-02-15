import React from 'react';
import './CVDownloadModal.scss';

const CVDownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = (language) => {
    const cvPath = language === 'es'
      ? '/assets/Heyner_Marin_CV_ES.pdf'
      : '/assets/Heyner_Marin_CV_EN.pdf';

    const link = document.createElement('a');
    link.href = cvPath;
    link.download = language === 'es'
      ? 'Heyner_Marin_CV_ES.pdf'
      : 'Heyner_Marin_CV_EN.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="cv-modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <div className="cv-modal-header">
          <h2>Descargar CV</h2>
          <p>Selecciona el idioma del CV que deseas descargar</p>
        </div>

        <div className="cv-modal-body">
          <button
            className="cv-language-btn cv-language-btn-es"
            onClick={() => handleDownload('es')}
          >
            <div className="cv-language-icon">🇪🇸</div>
            <div className="cv-language-info">
              <strong>Español</strong>
              <span>CV en español</span>
            </div>
            <div className="cv-language-arrow">→</div>
          </button>

          <button
            className="cv-language-btn cv-language-btn-en"
            onClick={() => handleDownload('en')}
          >
            <div className="cv-language-icon">🇺🇸</div>
            <div className="cv-language-info">
              <strong>English</strong>
              <span>CV in English</span>
            </div>
            <div className="cv-language-arrow">→</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadModal;
