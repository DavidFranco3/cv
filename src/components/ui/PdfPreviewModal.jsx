import { useState, useEffect } from 'react';
import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';

export default function PdfPreviewModal({
  isOpen,
  onClose,
  language = 'es',
  onDownloadCv,
  onDownloadCoverLetter
}) {
  const [activeDoc, setActiveDoc] = useState('cv'); // 'cv' | 'cover'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        soundManager.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cvFileName = language === 'en' ? 'CV_David_Franco_EN.pdf' : 'CV_David_Franco_ES.pdf';
  const coverFileName = language === 'en' ? 'Cover_Letter_David_Franco_EN.pdf' : 'Carta_Presentacion_David_Franco_ES.pdf';
  const currentFileName = activeDoc === 'cv' ? cvFileName : coverFileName;
  const currentFileUrl = `/${currentFileName}`;

  const handlePrint = () => {
    soundManager.playBeep();
    const iframe = document.getElementById('pdf-preview-iframe');
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch {
        window.open(currentFileUrl, '_blank');
      }
    } else {
      window.open(currentFileUrl, '_blank');
    }
  };

  const handleDownload = () => {
    soundManager.playBeep();
    if (activeDoc === 'cv' && onDownloadCv) {
      onDownloadCv();
    } else if (activeDoc === 'cover' && onDownloadCoverLetter) {
      onDownloadCoverLetter();
    } else {
      const a = document.createElement('a');
      a.href = currentFileUrl;
      a.download = currentFileName;
      a.click();
    }
  };

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal-container beam-card" onClick={(e) => e.stopPropagation()}>
        <div className="beam-laser"></div>
        <div className="beam-laser-bottom"></div>

        {/* Modal Header */}
        <div className="pdf-modal-header">
          <div className="pdf-modal-title-group">
            <div className="pdf-doc-badge">
              <Icons.FileCode />
              <span className="pdf-filename">{currentFileName}</span>
            </div>
            <span className="pdf-meta-tag">
              {activeDoc === 'cv' ? 'ATS-Ready • 1 Page Exact' : 'Formal Letter'}
            </span>
          </div>

          {/* Doc Switcher */}
          <div className="pdf-switcher-tabs">
            <button
              type="button"
              className={`pdf-switch-btn ${activeDoc === 'cv' ? 'active' : ''}`}
              onClick={() => {
                soundManager.playClick();
                setActiveDoc('cv');
              }}
            >
              Curriculum (CV)
            </button>
            <button
              type="button"
              className={`pdf-switch-btn ${activeDoc === 'cover' ? 'active' : ''}`}
              onClick={() => {
                soundManager.playClick();
                setActiveDoc('cover');
              }}
            >
              {language === 'es' ? 'Carta Presentación' : 'Cover Letter'}
            </button>
          </div>

          {/* Actions */}
          <div className="pdf-modal-actions">
            <button 
              type="button"
              className="pdf-action-btn"
              onClick={handlePrint}
              title={language === 'es' ? 'Imprimir documento' : 'Print document'}
            >
              <Icons.ExternalLink />
              <span>{language === 'es' ? 'Imprimir' : 'Print'}</span>
            </button>

            <button 
              type="button"
              className="pdf-action-btn highlight"
              onClick={handleDownload}
              title={language === 'es' ? 'Descargar archivo PDF' : 'Download PDF file'}
            >
              <Icons.Download />
              <span>{language === 'es' ? 'Descargar' : 'Download'}</span>
            </button>

            <button 
              type="button"
              className="pdf-close-btn"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              title="Cerrar (Esc)"
            >
              <Icons.Close />
            </button>
          </div>
        </div>

        {/* PDF Iframe Viewport */}
        <div className="pdf-modal-body">
          <iframe
            id="pdf-preview-iframe"
            src={`${currentFileUrl}#toolbar=0&navpanes=0&scrollbar=1`}
            title="PDF Preview"
            className="pdf-iframe-viewport"
          />
        </div>

        {/* Modal Footer */}
        <div className="pdf-modal-footer">
          <div className="pdf-footer-left">
            <Icons.Check />
            <span>
              {language === 'es' 
                ? 'Validado para sistemas ATS (Harvard Standard) • 1 página sin desbordes' 
                : 'ATS Optimized (Harvard Standard) • Single Page Verified'}
            </span>
          </div>
          <div className="pdf-footer-right">
            <span>ESC para cerrar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

