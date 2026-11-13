import { useState, useEffect } from 'react';
import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';

export default function RecruiterModal({
  isOpen,
  onClose,
  contactInfo,
  language = 'es'
}) {
  const [copiedSummary, setCopiedSummary] = useState(false);

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

  const atsSummaryText = `Candidato: José David Ayala Franco
Rol: Senior TypeScript / AWS & Frontend Developer
Ubicación: Parácuaro, Michoacán, México
Disponibilidad: Inmediata
Modalidad de Trabajo: Presencial (On-Site), Híbrido o Remoto
Teléfono: +52 453-152-7363
Email: josedavidayalafranco3@gmail.com
LinkedIn: https://linkedin.com/in/david-franco-247701220
GitHub: https://github.com/DavidFranco3
NPM: https://www.npmjs.com/~davidfranco3
Inglés: C1-C2 Certificado (Edutin Academy 177h)`;

  const handleCopyAtsText = () => {
    soundManager.playBeep();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(atsSummaryText).catch(() => {});
    }
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const handleDownloadVCard = () => {
    soundManager.playBeep();
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:Ayala Franco;José David;;;
FN:José David Ayala Franco
ORG:Senior Software Developer
TITLE:Senior TypeScript / AWS & Frontend Developer
TEL;TYPE=CELL,VOICE:+524531527363
EMAIL;TYPE=INTERNET,PREF:josedavidayalafranco3@gmail.com
URL:https://linkedin.com/in/david-franco-247701220
ADR;TYPE=HOME:;;Parácuaro;Michoacán;;México
NOTE:Open to On-Site, Hybrid & Remote opportunities.
END:VCARD`;

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'David_Franco_Developer.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const whatsappUrl = `https://wa.me/524531527363?text=${encodeURIComponent(
    'Hola David, revisé tu portafolio y tu CV para la vacante de Senior Developer. Me gustaría agendar una breve conversación contigo.'
  )}`;

  return (
    <div className="recruiter-modal-overlay" onClick={onClose}>
      <div className="recruiter-modal-box beam-card" onClick={(e) => e.stopPropagation()}>
        <div className="beam-laser"></div>
        <div className="beam-laser-bottom"></div>

        <div className="recruiter-modal-header">
          <div className="recruiter-modal-title">
            <Icons.Sparkles size={18} />
            <h3>{language === 'es' ? 'Centro de Contacto & Contratación' : 'Recruiter Fast-Track Hub'}</h3>
          </div>
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

        <div className="recruiter-modal-body">
          {/* Work Modality Explicit Confirmation Banner */}
          <div className="recruiter-modality-banner">
            <div className="recruiter-modality-left">
              <span>📍</span>
              <span>
                {language === 'es'
                  ? 'Abierto a vacantes Presenciales, Híbridas o Remotas'
                  : 'Open to On-Site, Hybrid & Remote roles'}
              </span>
            </div>
            <span className="recruiter-badge-pill">
              {language === 'es' ? 'Disponibilidad Inmediata' : 'Immediate Start'}
            </span>
          </div>

          {/* Action Cards Grid */}
          <div className="recruiter-actions-grid">
            {/* WhatsApp Quick Message */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="recruiter-action-card whatsapp"
              onClick={() => soundManager.playClick()}
            >
              <span className="recruiter-card-icon">💬</span>
              <div className="recruiter-card-text">
                <span className="recruiter-card-title">WhatsApp Directo</span>
                <span className="recruiter-card-subtitle">+52 453-152-7363</span>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+524531527363"
              className="recruiter-action-card"
              onClick={() => soundManager.playClick()}
            >
              <span className="recruiter-card-icon">📞</span>
              <div className="recruiter-card-text">
                <span className="recruiter-card-title">Llamada Telefónica</span>
                <span className="recruiter-card-subtitle">Contacto directo</span>
              </div>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:josedavidayalafranco3@gmail.com?subject=Propuesta%20Laboral%20-%20Senior%20Developer"
              className="recruiter-action-card"
              onClick={() => soundManager.playClick()}
            >
              <span className="recruiter-card-icon">✉️</span>
              <div className="recruiter-card-text">
                <span className="recruiter-card-title">Correo Electrónico</span>
                <span className="recruiter-card-subtitle">{contactInfo?.email || 'josedavidayalafranco3@gmail.com'}</span>
              </div>
            </a>

            {/* vCard Download */}
            <div
              className="recruiter-action-card"
              onClick={handleDownloadVCard}
            >
              <span className="recruiter-card-icon">📇</span>
              <div className="recruiter-card-text">
                <span className="recruiter-card-title">Descargar vCard (.vcf)</span>
                <span className="recruiter-card-subtitle">Guardar en agenda</span>
              </div>
            </div>
          </div>

          {/* Quick ATS Snippet Box */}
          <div className="recruiter-ats-snippet-box">
            <div className="recruiter-snippet-header">
              <span className="recruiter-snippet-title">
                {language === 'es' ? 'Ficha Rápida para Reclutador / ATS' : 'Candidate Summary for ATS Notes'}
              </span>
              <button
                type="button"
                className="recruiter-copy-btn"
                onClick={handleCopyAtsText}
              >
                {copiedSummary ? <Icons.Check size={12} /> : <Icons.Copy size={12} />}
                <span>{copiedSummary ? '¡Copiado!' : 'Copiar todo'}</span>
              </button>
            </div>
            <pre className="recruiter-snippet-body">{atsSummaryText}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

