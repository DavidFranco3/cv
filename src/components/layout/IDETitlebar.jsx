import { useState, useRef, useEffect } from 'react';
import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';
import { THEMES } from '../../utils/themeManager';

export default function IDETitlebar({
  language,
  onLanguageChange,
  onDownloadCv,
  isDownloading,
  onOpenCommandPalette,
  onOpenPdfModal,
  onOpenRecruiterModal,
  currentTheme,
  onThemeChange,
  ui
}) {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <header className="ide-titlebar">
      <div className="titlebar-left">
        <div className="traffic-lights">
          <span 
            className="window-btn btn-close" 
            title="Close" 
            onClick={() => soundManager.playClick()}
          ></span>
          <span 
            className="window-btn btn-minimize" 
            title="Minimize" 
            onClick={() => soundManager.playClick()}
          ></span>
          <span 
            className="window-btn btn-maximize" 
            title="Maximize" 
            onClick={() => soundManager.playClick()}
          ></span>
        </div>

        <div className="tab-pill active-tab">
          <Icons.FileCode />
          <span className="tab-filename">DavidFranco.tsx</span>
        </div>

        <div className="git-indicator">
          <Icons.GitBranch />
          <span>main*</span>
        </div>
      </div>

      <div className="titlebar-center">
        {/* Command Palette Trigger Button */}
        <button 
          type="button"
          className="titlebar-cmd-palette-btn"
          onClick={() => {
            soundManager.playClick();
            onOpenCommandPalette();
          }}
          title="Abrir Command Palette (Ctrl+K o ⌘K)"
        >
          <Icons.Terminal />
          <span className="cmd-palette-label">Quick Search...</span>
          <kbd className="cmd-palette-kbd">⌘K</kbd>
        </button>

        {/* Live Status Chip - Clickable to open Recruiter Fast-Track Hub */}
        <div 
          className="live-status-chip hover-shine" 
          title="Click para ver opciones de contratación directa (Presencial / Híbrido / Remoto)"
          onClick={() => {
            soundManager.playClick();
            onOpenRecruiterModal();
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className="sonar-wrapper">
            <span className="sonar-ring ring-1"></span>
            <span className="sonar-ring ring-2"></span>
            <span className="green-pulse"></span>
          </div>
          <code>status: open_to_work (onsite/hybrid/remote)</code>
          <div className="eq-bars" title="Real-time Execution Activity">
            <span className="eq-bar"></span>
            <span className="eq-bar"></span>
            <span className="eq-bar"></span>
            <span className="eq-bar"></span>
          </div>
        </div>
      </div>

      <div className="titlebar-right">
        {/* Theme Picker Dropdown */}
        <div className="theme-picker-wrapper" ref={themeRef} style={{ position: 'relative' }}>
          <button
            type="button"
            className="theme-picker-btn"
            onClick={() => {
              soundManager.playClick();
              setIsThemeOpen(!isThemeOpen);
            }}
            title="Cambiar tema de color del IDE"
          >
            <span>{activeThemeObj.icon}</span>
            <span>{activeThemeObj.name.split(' ')[0]}</span>
          </button>

          {isThemeOpen && (
            <div className="theme-picker-dropdown animate-slide-up">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`theme-option-btn ${currentTheme === t.id ? 'active' : ''}`}
                  onClick={() => {
                    soundManager.playBeep();
                    onThemeChange(t.id);
                    setIsThemeOpen(false);
                  }}
                >
                  <span className="theme-dot" style={{ backgroundColor: t.accentColor }}></span>
                  <span>{t.icon} {t.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PDF Preview Button */}
        <button
          type="button"
          className="ide-btn-preview"
          onClick={() => {
            soundManager.playClick();
            onOpenPdfModal();
          }}
          title={language === 'es' ? 'Previsualizar CV en pantalla' : 'Preview CV Modal'}
        >
          <Icons.FileCode />
          <span>{language === 'es' ? 'Ver CV' : 'Preview'}</span>
        </button>

        {/* Language selector */}
        <div className="ide-lang-selector">
          <button 
            type="button"
            className={`ide-lang-btn ${language === 'es' ? 'active' : ''}`}
            onClick={() => {
              soundManager.playClick();
              onLanguageChange('es');
            }}
          >
            ES
          </button>
          <button 
            type="button"
            className={`ide-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => {
              soundManager.playClick();
              onLanguageChange('en');
            }}
          >
            EN
          </button>
        </div>

        {/* Download CV CTA */}
        <button 
          type="button"
          className="ide-btn-build shine-button"
          onClick={() => {
            soundManager.playBeep();
            onDownloadCv();
          }}
          disabled={isDownloading}
          title="Generar y descargar CV en formato PDF"
        >
          <Icons.Download />
          <span>{ui.downloadCv}</span>
        </button>
      </div>
    </header>
  );
}
