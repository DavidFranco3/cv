import { useState, useEffect, useRef } from 'react';
import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';

export default function CommandPalette({
  isOpen,
  onClose,
  onLanguageChange,
  currentLanguage,
  onDownloadCv,
  onDownloadCoverLetter,
  onPreviewPdf,
  onRunTest,
  onCopyText,
  contactInfo,
  onOpenRecruiterModal,
  onThemeChange
}) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setSearch('');
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands = [
    {
      id: 'preview-cv',
      group: 'Quick Actions',
      title: currentLanguage === 'es' ? 'Previsualizar CV en pantalla' : 'Preview CV in Modal',
      subtitle: 'Harvard ATS Single-Page PDF',
      icon: <Icons.Eye />,
      action: () => onPreviewPdf('cv')
    },
    {
      id: 'download-cv',
      group: 'Quick Actions',
      title: currentLanguage === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)',
      subtitle: 'A4 ATS Optimized',
      icon: <Icons.Download />,
      action: onDownloadCv
    },
    {
      id: 'download-cl',
      group: 'Quick Actions',
      title: currentLanguage === 'es' ? 'Descargar Carta de Presentación (PDF)' : 'Download Cover Letter (PDF)',
      subtitle: 'Formal Cover Letter',
      icon: <Icons.FileCode />,
      action: onDownloadCoverLetter
    },
    {
      id: 'run-test',
      group: 'Quick Actions',
      title: '$ npm test',
      subtitle: currentLanguage === 'es' ? 'Ejecutar suite de pruebas unitarias' : 'Run unit & architecture tests',
      icon: <Icons.Terminal />,
      action: onRunTest
    },
    {
      id: 'copy-email',
      group: 'Contact',
      title: currentLanguage === 'es' ? 'Copiar correo electrónico' : 'Copy email address',
      subtitle: contactInfo.email,
      icon: <Icons.Copy />,
      action: () => onCopyText(contactInfo.email, 'email')
    },
    {
      id: 'copy-phone',
      group: 'Contact',
      title: currentLanguage === 'es' ? 'Copiar número de teléfono' : 'Copy phone number',
      subtitle: contactInfo.phone,
      icon: <Icons.Copy />,
      action: () => onCopyText(contactInfo.phone, 'phone')
    },
    {
      id: 'lang-es',
      group: 'Language',
      title: 'Español (ES)',
      subtitle: 'Cambiar idioma del portafolio',
      icon: <Icons.Sparkles />,
      action: () => onLanguageChange('es')
    },
    {
      id: 'lang-en',
      group: 'Language',
      title: 'English (EN)',
      subtitle: 'Switch portfolio language to English',
      icon: <Icons.Sparkles />,
      action: () => onLanguageChange('en')
    },
    {
      id: 'hire-hub',
      group: 'Quick Actions',
      title: currentLanguage === 'es' ? 'Contratación Rápida • vCard & WhatsApp' : 'Hire Fast-Track • vCard & WhatsApp',
      subtitle: 'On-site / Hybrid / Remote',
      icon: <Icons.Sparkles />,
      action: () => {
        onClose();
        if (onOpenRecruiterModal) onOpenRecruiterModal();
      }
    },
    {
      id: 'theme-cyber',
      group: 'Themes',
      title: 'Theme: Cyberpunk Neon',
      subtitle: 'Cyan & Violet Accent',
      icon: <Icons.Sparkles />,
      action: () => onThemeChange && onThemeChange('cyberpunk')
    },
    {
      id: 'theme-matrix',
      group: 'Themes',
      title: 'Theme: Matrix Hacker',
      subtitle: 'Green Terminal Phosphor',
      icon: <Icons.Sparkles />,
      action: () => onThemeChange && onThemeChange('matrix')
    },
    {
      id: 'theme-synth',
      group: 'Themes',
      title: 'Theme: Synthwave 84',
      subtitle: 'Neon Magenta & Amber Glow',
      icon: <Icons.Sparkles />,
      action: () => onThemeChange && onThemeChange('synthwave')
    },
    {
      id: 'theme-tokyo',
      group: 'Themes',
      title: 'Theme: Tokyo Night',
      subtitle: 'Deep Indigo & Soft Lilac',
      icon: <Icons.Sparkles />,
      action: () => onThemeChange && onThemeChange('tokyonight')
    },
    {
      id: 'nav-arch',
      group: 'Navigation',
      title: currentLanguage === 'es' ? 'Ir a Arquitectura Cloud & Microservicios' : 'Jump to Cloud Architecture',
      subtitle: 'system.topology',
      icon: <Icons.Cpu />,
      action: () => scrollTo('architecture-section')
    },
    {
      id: 'nav-npm',
      group: 'Navigation',
      title: currentLanguage === 'es' ? 'Ir a Librerías Open Source' : 'Jump to Open Source Packages',
      subtitle: 'NPM Packages',
      icon: <Icons.Package />,
      action: () => scrollTo('npm-packages-section')
    },
    {
      id: 'nav-exp',
      group: 'Navigation',
      title: currentLanguage === 'es' ? 'Ir a Experiencia Profesional' : 'Jump to Experience Timeline',
      subtitle: 'git log / Isotech',
      icon: <Icons.GitCommit />,
      action: () => scrollTo('experience-section')
    },
    {
      id: 'nav-certs',
      group: 'Navigation',
      title: currentLanguage === 'es' ? 'Ir a Certificaciones y Educación' : 'Jump to Verified Credentials',
      subtitle: 'credentials.lock',
      icon: <Icons.ShieldCheck />,
      action: () => scrollTo('credentials-section')
    },
    {
      id: 'ext-gh',
      group: 'Social & Repos',
      title: 'GitHub / DavidFranco3',
      subtitle: 'Ver repositorios y proyectos',
      icon: <Icons.ExternalLink />,
      action: () => window.open(`https://github.com/${contactInfo.github}`, '_blank')
    },
    {
      id: 'ext-li',
      group: 'Social & Repos',
      title: 'LinkedIn / David Franco',
      subtitle: 'Conectar profesionalmente',
      icon: <Icons.ExternalLink />,
      action: () => window.open(`https://linkedin.com/in/${contactInfo.linkedin}`, '_blank')
    },
    {
      id: 'ext-npm',
      group: 'Social & Repos',
      title: 'NPM / davidfranco3',
      subtitle: 'Ver paquetes publicados en registry',
      icon: <Icons.ExternalLink />,
      action: () => window.open(`https://www.npmjs.com/~${contactInfo.npm}`, '_blank')
    }
  ];

  const filteredCommands = commands.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) || 
    c.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    c.group.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e) => {
    soundManager.playMechanicalClick(750, 0.015);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        execute(filteredCommands[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const execute = (cmd) => {
    soundManager.playBeepSuccess();
    onClose();
    cmd.action();
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-backdrop animate-fade-in" onClick={onClose}>
      <div 
        className="command-palette-dialog animate-scale-up" 
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="cmd-input-wrap">
          <Icons.Search size={18} className="cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder={currentLanguage === 'es' ? 'Escribe un comando o busca una sección...' : 'Type a command or search sections...'}
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <span className="cmd-esc-badge" onClick={onClose}>ESC</span>
        </div>

        <div className="cmd-list-wrap">
          {filteredCommands.length === 0 ? (
            <div className="cmd-empty-state">
              {currentLanguage === 'es' ? 'No se encontraron comandos.' : 'No commands found.'}
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                className={`cmd-item ${idx === selectedIndex ? 'selected' : ''}`}
                onMouseEnter={() => setSelectedIndex(idx)}
                onClick={() => execute(cmd)}
              >
                <div className="cmd-item-icon">{cmd.icon}</div>
                <div className="cmd-item-text">
                  <div className="cmd-item-title">{cmd.title}</div>
                  <div className="cmd-item-subtitle">{cmd.subtitle}</div>
                </div>
                <span className="cmd-item-group">{cmd.group}</span>
              </div>
            ))
          )}
        </div>

        <div className="cmd-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> {currentLanguage === 'es' ? 'Navegar' : 'Navigate'}</span>
          <span><kbd>↵</kbd> {currentLanguage === 'es' ? 'Seleccionar' : 'Select'}</span>
          <span><kbd>ESC</kbd> {currentLanguage === 'es' ? 'Cerrar' : 'Close'}</span>
        </div>
      </div>
    </div>
  );
}
