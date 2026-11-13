import { useState, useEffect } from 'react';
import { generatePdf } from './utils/pdfGenerator';
import { generateCoverLetter } from './utils/coverLetterGenerator';
import { translations } from './utils/translations';
import { soundManager } from './utils/soundEffects';
import { getSavedTheme, saveTheme } from './utils/themeManager';

import MatrixRain from './components/MatrixRain';
import ClickParticles from './components/ClickParticles';

import IDETitlebar from './components/layout/IDETitlebar';
import IDEStatusbar from './components/layout/IDEStatusbar';
import CommandPalette from './components/ui/CommandPalette';
import PdfPreviewModal from './components/ui/PdfPreviewModal';
import RecruiterModal from './components/ui/RecruiterModal';

import ProfileHeader from './components/sections/ProfileHeader';
import TerminalPanel from './components/terminal/TerminalPanel';
import SkillsGrid from './components/sections/SkillsGrid';
import NpmPackages from './components/sections/NpmPackages';
import ArchitectureExplorer from './components/sections/ArchitectureExplorer';
import ExperienceLog from './components/sections/ExperienceLog';
import CredentialsLock from './components/sections/CredentialsLock';

import './App.css';

const CODE_PARTICLES = [
  { text: 'const app = express();', top: '15%', left: '4%', duration: '22s', delay: '0s' },
  { text: '<ApexTable virtualize={true} />', top: '28%', right: '5%', duration: '26s', delay: '3s' },
  { text: 'await client.get("/users");', top: '48%', left: '2%', duration: '24s', delay: '1s' },
  { text: 'docker compose up -d', top: '65%', right: '3%', duration: '28s', delay: '4s' },
  { text: 'export type TS_AWS_Dev = true;', top: '82%', left: '5%', duration: '20s', delay: '2s' },
];

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

function App() {
  const [language, setLanguage] = useState('es');
  const [currentTheme, setCurrentTheme] = useState(getSavedTheme);
  const [copiedKey, setCopiedKey] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isOverdriveActive, setIsOverdriveActive] = useState(false);

  const [uptimeSeconds, setUptimeSeconds] = useState(138);
  const [cpuLoad, setCpuLoad] = useState(14.2);

  const { ui, cv: cvData } = translations[language];

  // Theme change handler
  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    saveTheme(newTheme);
  };

  // Uptime timer
  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // CPU Load simulation (higher when overdrive is active)
  useEffect(() => {
    const cpuTimer = setInterval(() => {
      if (isOverdriveActive) {
        setCpuLoad(85 + Math.random() * 14);
      } else {
        setCpuLoad(12 + Math.random() * 8);
      }
    }, 2500);
    return () => clearInterval(cpuTimer);
  }, [isOverdriveActive]);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K & Konami Code)
  useEffect(() => {
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      // Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundManager.playClick();
        setIsCommandPaletteOpen((prev) => !prev);
        return;
      }

      // Konami Code sequence tracker
      const requiredKey = KONAMI_CODE[konamiIndex];
      if (e.key === requiredKey || e.key.toLowerCase() === requiredKey) {
        konamiIndex += 1;
        if (konamiIndex === KONAMI_CODE.length) {
          konamiIndex = 0;
          soundManager.playBeep();
          setIsOverdriveActive((prev) => !prev);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const formatUptime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  const handleCopy = (text, key) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleDownloadCv = async () => {
    try {
      setIsDownloading(true);
      await generatePdf(cvData, language);
    } catch (err) {
      console.error('Error generating CV PDF:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadCoverLetter = async () => {
    try {
      await generateCoverLetter(cvData, language);
    } catch (err) {
      console.error('Error generating Cover Letter PDF:', err);
    }
  };

  return (
    <div className="ide-shell" data-theme={currentTheme}>
      {/* Overdrive HUD Banner when Easter Egg is active */}
      {isOverdriveActive && (
        <div 
          className="overdrive-hud-banner"
          onClick={() => {
            soundManager.playClick();
            setIsOverdriveActive(false);
          }}
          title="Click para desactivar modo sobrecarga"
        >
          <span>⚡</span>
          <span>SYSTEM OVERDRIVE ENGAGED [MAX CLOCK SPEED]</span>
          <span>✕</span>
        </div>
      )}

      {/* Matrix Canvas FX */}
      <MatrixRain 
        isActive={isMatrixActive} 
        opacity={isOverdriveActive ? 0.38 : 0.16} 
      />

      {/* Interactive Cursor Particle Bursts */}
      <ClickParticles />

      {/* Cyber Grid & Ambient Orbs */}
      <div className="animated-cyber-grid"></div>
      <div className="ide-ambient-glow glow-blue"></div>
      <div className="ide-ambient-glow glow-purple"></div>

      {/* Floating Code Particles */}
      <div className="particles-layer">
        {CODE_PARTICLES.map((p, i) => (
          <span 
            key={i} 
            className="floating-code-particle"
            style={{ 
              top: p.top, 
              left: p.left, 
              right: p.right, 
              animationDuration: p.duration,
              animationDelay: p.delay 
            }}
          >
            {p.text}
          </span>
        ))}
      </div>

      {/* Titlebar macOS / IDE Window Chrome */}
      <IDETitlebar
        language={language}
        onLanguageChange={setLanguage}
        onDownloadCv={handleDownloadCv}
        isDownloading={isDownloading}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        ui={ui}
      />

      {/* Breadcrumb Bar */}
      <div className="ide-breadcrumbs">
        <span className="crumb-root">cv</span>
        <span className="crumb-sep">/</span>
        <span className="crumb-dir">src</span>
        <span className="crumb-sep">/</span>
        <span className="crumb-file">DavidFranco.tsx</span>
        <span className="crumb-sep">&gt;</span>
        <span className="crumb-symbol">Profile()</span>
      </div>

      {/* Main Canvas with Modular Sections */}
      <main className="editor-canvas">
        <ProfileHeader 
          cvData={cvData} 
          handleCopy={handleCopy} 
          copiedKey={copiedKey} 
        />

        <TerminalPanel 
          cvData={cvData}
          onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
          onToggleOverdrive={() => setIsOverdriveActive((prev) => !prev)}
          onThemeChange={handleThemeChange}
        />

        <SkillsGrid 
          skills={cvData.skills} 
        />

        <NpmPackages 
          language={language} 
        />

        <ArchitectureExplorer 
          language={language} 
        />

        <ExperienceLog 
          experience={cvData.experience} 
        />

        <CredentialsLock 
          education={cvData.education}
          languages={cvData.languages}
          certifications={cvData.certifications}
        />
      </main>

      {/* Status Bar */}
      <IDEStatusbar
        uptimeSeconds={uptimeSeconds}
        cpuLoad={cpuLoad}
        formatUptime={formatUptime}
        isMatrixActive={isMatrixActive}
        setIsMatrixActive={setIsMatrixActive}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onDownloadCoverLetter={handleDownloadCoverLetter}
        onDownloadCv={handleDownloadCv}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Global Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onLanguageChange={setLanguage}
        currentLanguage={language}
        onDownloadCv={handleDownloadCv}
        onDownloadCoverLetter={handleDownloadCoverLetter}
        onPreviewPdf={() => {
          setIsCommandPaletteOpen(false);
          setIsPdfModalOpen(true);
        }}
        onRunTest={() => {
          setIsCommandPaletteOpen(false);
          const el = document.getElementById('terminal-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onCopyText={handleCopy}
        contactInfo={cvData.contact}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        onThemeChange={handleThemeChange}
      />

      {/* In-App PDF Preview Modal */}
      <PdfPreviewModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        language={language}
        onDownloadCv={handleDownloadCv}
        onDownloadCoverLetter={handleDownloadCoverLetter}
      />

      {/* Recruiter Fast-Track Contact & vCard Modal */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
        contactInfo={cvData.contact}
        language={language}
      />
    </div>
  );
}

export default App;
