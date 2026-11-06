import { useState, useEffect } from 'react'
import { generatePdf } from './utils/pdfGenerator'
import { generateCoverLetter } from './utils/coverLetterGenerator'
import MatrixRain from './components/MatrixRain'
import ClickParticles from './components/ClickParticles'
import TypewriterRole from './components/TypewriterRole'
import './App.css'
import { translations } from './utils/translations'

// Iconos SVG limpios estilo editor / terminal
const Icons = {
  Terminal: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  GitBranch: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  ),
  GitCommit: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="1.05" y1="12" x2="7" y2="12" />
      <line x1="17.05" y1="12" x2="23" y2="12" />
    </svg>
  ),
  FileCode: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  ),
  Download: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  ExternalLink: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Copy: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  ),
  Check: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  Play: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  Cpu: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  Sparkles: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  )
};

// Partículas de código flotantes en el espacio
const CODE_PARTICLES = [
  { text: '{ React 19 }', top: '15%', left: '3%', duration: '9s', delay: '0s' },
  { text: 'type SaaS = 24/7;', top: '35%', right: '2%', duration: '12s', delay: '1.5s' },
  { text: '<TypeScript />', top: '60%', left: '2%', duration: '11s', delay: '3s' },
  { text: 'const ecosystem = "NPM";', top: '78%', right: '3%', duration: '10s', delay: '2s' },
  { text: '01000011 01101111', top: '92%', left: '4%', duration: '14s', delay: '0.5s' }
];

function App() {
  const [language, setLanguage] = useState('es');
  const [copiedKey, setCopiedKey] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [terminalCmd, setTerminalCmd] = useState('whoami');
  const [cliInput, setCliInput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(true);

  // Telemetría en tiempo real para el status bar
  const [uptimeSeconds, setUptimeSeconds] = useState(138);
  const [cpuLoad, setCpuLoad] = useState(14.2);

  // Animación del test runner interactivo
  const [testProgress, setTestProgress] = useState(100);
  const [testStage, setTestStage] = useState(4);

  const { ui, cv: cvData } = translations[language];

  // Contador de sesión en tiempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Oscilación de carga de CPU simulada
  useEffect(() => {
    const cpuTimer = setInterval(() => {
      setCpuLoad(12 + Math.random() * 6.5);
    }, 2800);
    return () => clearInterval(cpuTimer);
  }, []);

  const formatUptime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const runTestRunnerAnimation = () => {
    setTestProgress(10);
    setTestStage(0);

    setTimeout(() => { setTestProgress(35); setTestStage(1); }, 180);
    setTimeout(() => { setTestProgress(65); setTestStage(2); }, 380);
    setTimeout(() => { setTestProgress(88); setTestStage(3); }, 580);
    setTimeout(() => { setTestProgress(100); setTestStage(4); }, 780);
  };

  const switchTerminalCmd = (cmd) => {
    setIsExecuting(true);
    setTerminalCmd(cmd);

    if (cmd === 'test') {
      runTestRunnerAnimation();
    }

    setTimeout(() => setIsExecuting(false), 260);
  };

  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = cliInput.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'whoami' || cleanCmd.includes('whoami')) {
      switchTerminalCmd('whoami');
    } else if (cleanCmd === 'test' || cleanCmd.includes('test')) {
      switchTerminalCmd('test');
    } else if (cleanCmd === 'sysinfo' || cleanCmd.includes('metric') || cleanCmd === 'info') {
      switchTerminalCmd('metrics');
    } else if (cleanCmd === 'skills' || cleanCmd.includes('skill')) {
      switchTerminalCmd('skills');
    } else if (cleanCmd === 'hire' || cleanCmd.includes('hire')) {
      switchTerminalCmd('hire');
    } else if (cleanCmd === 'clear') {
      switchTerminalCmd('clear');
    } else {
      switchTerminalCmd('help');
    }

    setCliInput('');
  };

  const handleDownloadCv = async () => {
    try {
      setIsDownloading(true);
      await generatePdf(
        { ...cvData, summary: cvData.summary },
        `CV_DavidFranco_${language.toUpperCase()}.pdf`
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadCoverLetter = async () => {
    await generateCoverLetter(
      cvData,
      `Cover_Letter_DavidFranco_${language.toUpperCase()}.pdf`
    );
  };

  return (
    <div className="ide-shell">
      {/* Fondo Canvas de Lluvia de Código Matrix Reactivo */}
      <MatrixRain enabled={isMatrixActive} opacity={0.16} />

      {/* Partículas reactivas a los clicks del desarrollador */}
      <ClickParticles />

      {/* Fondo animado Cyber Grid & Ambient Orbs */}
      <div className="animated-cyber-grid"></div>
      <div className="ide-ambient-glow glow-blue"></div>
      <div className="ide-ambient-glow glow-purple"></div>

      {/* Partículas flotantes de código fijas */}
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

      {/* Barra de Título Superior (macOS / IDE Window Chrome) */}
      <header className="ide-titlebar">
        <div className="titlebar-left">
          <div className="traffic-lights">
            <span className="window-btn btn-close" title="close"></span>
            <span className="window-btn btn-minimize" title="minimize"></span>
            <span className="window-btn btn-maximize" title="maximize"></span>
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
          <div className="live-status-chip">
            <div className="sonar-wrapper">
              <span className="sonar-ring ring-1"></span>
              <span className="sonar-ring ring-2"></span>
              <span className="green-pulse"></span>
            </div>
            <code>status: 24/7_remote_available</code>
            <div className="eq-bars" title="Real-time Execution Activity">
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
            </div>
          </div>
        </div>

        <div className="titlebar-right">
          <div className="ide-lang-selector">
            <button 
              className={`ide-lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <button 
              className={`ide-lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>

          <button 
            className="ide-btn-build shine-button"
            onClick={handleDownloadCv}
            disabled={isDownloading}
            title="Generar y descargar CV en formato PDF"
          >
            <Icons.Download />
            <span>{ui.downloadCv}</span>
          </button>
        </div>
      </header>

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

      {/* Contenido Principal con Estilo de Editor de Código */}
      <main className="editor-canvas">
        {/* Bloque 1: Declaración de Tipo & Hero con Dual Laser Beams */}
        <section className="code-section animate-slide-up" style={{ animationDelay: '0.05s' }}>
          <div className="code-line-block">
            <span className="code-comment">// ─────────────────────────────────────────────────────────────</span>
            <span className="code-comment">// {cvData.role}</span>
            <span className="code-comment">// ─────────────────────────────────────────────────────────────</span>
          </div>

          <div className="hero-statement beam-card glow-hover-card">
            <div className="beam-laser"></div>
            <div className="beam-laser-bottom"></div>

            <h1 className="dev-name">
              <span className="code-kw">const</span>{' '}
              <span className="glitch-name-wrap" title="Cyberpunk Dev Identity">
                <span className="dev-identifier glitch-text">{cvData.name.replace(/\s+/g, '')}</span>
              </span>: <span className="code-type">SoftwareDeveloper</span> = &#123;
            </h1>

            <div className="code-indent-block">
              <div className="code-kv">
                <span className="prop-name">name:</span>
                <span className="prop-string">"{cvData.name}"</span>,
              </div>
              <div className="code-kv">
                <span className="prop-name">role:</span>
                <span className="prop-string">"</span>
                <TypewriterRole 
                  words={[
                    cvData.role,
                    'Full Stack & Backend Architect',
                    'NPM Open Source Maintainer',
                    'Node.js, Express & React 19',
                    'Bilingual English C1-C2'
                  ]}
                  defaultRole={cvData.role}
                />
                <span className="prop-string">"</span>,
              </div>
              <div className="code-kv">
                <span className="prop-name">location:</span>
                <span className="prop-string">"{cvData.contact.location}"</span>,
              </div>
              <div className="code-kv">
                <span className="prop-name">stack:</span>
                <span className="prop-array">[<span className="prop-string">"Node.js"</span>, <span className="prop-string">"Express.js"</span>, <span className="prop-string">"React 19"</span>, <span className="prop-string">"TypeScript"</span>]</span>,
              </div>
              <div className="code-kv">
                <span className="prop-name">culture:</span>
                <span className="prop-obj">&#123; <span className="inner-prop">architecture</span>: <span className="prop-string">"Microservices"</span>, <span className="inner-prop">english</span>: <span className="prop-string">"C1-C2"</span> &#125;</span>
              </div>
            </div>

            <div className="closing-brace">&#125;;</div>
          </div>

          {/* Contact Interactive Terminal Flags */}
          <div className="cli-contact-strip">
            <button 
              className="cli-tag interactive-tag hover-shine" 
              onClick={() => handleCopy(cvData.contact.email, 'email')}
              title="Copiar email"
            >
              <Icons.Terminal />
              <code>--email="{cvData.contact.email}"</code>
              <span className="cli-badge">
                {copiedKey === 'email' ? <Icons.Check /> : <Icons.Copy />}
              </span>
            </button>

            <button 
              className="cli-tag interactive-tag hover-shine" 
              onClick={() => handleCopy(cvData.contact.phone, 'phone')}
              title="Copiar teléfono"
            >
              <Icons.Terminal />
              <code>--phone="{cvData.contact.phone}"</code>
              <span className="cli-badge">
                {copiedKey === 'phone' ? <Icons.Check /> : <Icons.Copy />}
              </span>
            </button>

            <a 
              href={`https://github.com/${cvData.contact.github}`} 
              target="_blank" 
              rel="noreferrer" 
              className="cli-tag link-tag hover-shine"
            >
              <code>github/{cvData.contact.github}</code>
              <Icons.ExternalLink />
            </a>

            <a 
              href={`https://linkedin.com/in/${cvData.contact.linkedin}`} 
              target="_blank" 
              rel="noreferrer" 
              className="cli-tag link-tag hover-shine"
            >
              <code>linkedin/{cvData.contact.linkedin}</code>
              <Icons.ExternalLink />
            </a>

            <a 
              href={`https://www.npmjs.com/~${cvData.contact.npm}`} 
              target="_blank" 
              rel="noreferrer" 
              className="cli-tag link-tag hover-shine"
            >
              <code>npm/~{cvData.contact.npm}</code>
              <Icons.ExternalLink />
            </a>
          </div>
        </section>

        {/* Bloque 2: Terminal Interactivo con Shell CLI Real y Animaciones */}
        <section className="terminal-panel beam-card animate-slide-up" style={{ animationDelay: '0.12s' }}>
          <div className="beam-laser"></div>
          <div className="beam-laser-bottom"></div>
          <div className="scanline-overlay"></div>
          
          <div className="terminal-panel-header">
            <div className="terminal-prompt-title">
              <Icons.Terminal />
              <span>
                $ {terminalCmd === 'whoami' 
                    ? 'whoami --summary' 
                    : terminalCmd === 'test' 
                    ? 'npm test --runInBand' 
                    : terminalCmd === 'metrics' 
                    ? 'sysinfo --telemetry' 
                    : terminalCmd === 'skills'
                    ? 'cat skills.config.json'
                    : terminalCmd === 'hire'
                    ? 'sudo hire david --speed=FastTrack'
                    : terminalCmd === 'clear'
                    ? 'clear'
                    : 'help --all'}
              </span>
              <span className="terminal-cursor">█</span>
            </div>

            {/* Selector de comandos interactivos */}
            <div className="terminal-quick-cmds">
              <button 
                className={`cmd-pill ${terminalCmd === 'whoami' ? 'active' : ''}`}
                onClick={() => switchTerminalCmd('whoami')}
              >
                $ whoami
              </button>
              <button 
                className={`cmd-pill ${terminalCmd === 'test' ? 'active' : ''}`}
                onClick={() => switchTerminalCmd('test')}
              >
                <Icons.Play /> $ npm test
              </button>
              <button 
                className={`cmd-pill ${terminalCmd === 'metrics' ? 'active' : ''}`}
                onClick={() => switchTerminalCmd('metrics')}
              >
                <Icons.Cpu /> $ sysinfo
              </button>
              <button 
                className={`cmd-pill ${terminalCmd === 'skills' ? 'active' : ''}`}
                onClick={() => switchTerminalCmd('skills')}
              >
                $ skills
              </button>
              <button 
                className={`cmd-pill ${terminalCmd === 'hire' ? 'active' : ''}`}
                onClick={() => switchTerminalCmd('hire')}
              >
                <Icons.Sparkles /> $ sudo hire
              </button>
              <button 
                className={`cmd-pill ${terminalCmd === 'clear' ? 'active' : ''}`}
                onClick={() => switchTerminalCmd('clear')}
              >
                $ clear
              </button>
            </div>
          </div>

          {/* Línea de entrada interactiva CLI */}
          <div className="terminal-interactive-bar">
            <span className="terminal-prompt-prefix">
              <Icons.Terminal /> david@macbook:~$
            </span>
            <form onSubmit={handleCliSubmit} className="terminal-cli-form">
              <input 
                type="text" 
                className="terminal-cli-input"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="escribe un comando: 'test', 'whoami', 'skills', 'hire', 'clear' o 'help'..."
              />
            </form>
            <span className="terminal-run-hint">↵ ENTER</span>
          </div>

          <div className={`terminal-panel-body ${isExecuting ? 'cmd-flicker' : ''}`}>
            {terminalCmd === 'whoami' && (
              <p className="terminal-summary-text terminal-fade-in">
                {cvData.summary}
              </p>
            )}

            {terminalCmd === 'test' && (
              <div className="terminal-test-output terminal-fade-in">
                <div className="pass-badge">
                  RUNS src/DavidFranco.spec.ts ({testProgress}%)
                </div>
                <div className="test-progress-track">
                  <div className="test-progress-fill" style={{ width: `${testProgress}%` }}></div>
                </div>

                {testStage >= 1 && (
                  <div className="test-subline pass-pop">
                    ✓ Core Stack: React 19 (Hooks & Class), TypeScript, Node.js <span className="time-tag">[0.4ms]</span>
                  </div>
                )}
                {testStage >= 2 && (
                  <div className="test-subline pass-pop">
                    ✓ High Availability: 24/7 Cloud SaaS Architecture <span className="time-tag">[0.2ms]</span>
                  </div>
                )}
                {testStage >= 3 && (
                  <div className="test-subline pass-pop">
                    ✓ Velocity: High velocity execution & autonomous ownership <span className="time-tag">[0.3ms]</span>
                  </div>
                )}
                {testStage >= 4 && (
                  <div className="test-subline pass-pop">
                    ✓ Language: English C1-C2 certified (Edutin Academy 177h) <span className="time-tag">[0.1ms]</span>
                  </div>
                )}

                {testStage === 4 && (
                  <div className="test-summary-row pass-pop">
                    Test Suites: 1 passed, 1 total | Tests: 4 passed, 4 total | Snapshots: 0 | Time: 0.184s
                  </div>
                )}
              </div>
            )}

            {terminalCmd === 'metrics' && (
              <div className="sysinfo-matrix terminal-fade-in">
                <div className="sysinfo-item glow-hover-item">
                  <span className="sysinfo-key">runtime.experience:</span>
                  <strong className="sysinfo-val">4 Años</strong>
                  <span className="sysinfo-note">Full Stack & Backend</span>
                </div>

                <div className="sysinfo-item glow-hover-item">
                  <span className="sysinfo-key">uptime.availability:</span>
                  <strong className="sysinfo-val">24/7 Web</strong>
                  <span className="sysinfo-note">Microservices & APIs</span>
                </div>

                <div className="sysinfo-item glow-hover-item">
                  <span className="sysinfo-key">language.english:</span>
                  <strong className="sysinfo-val">C1-C2</strong>
                  <span className="sysinfo-note">Edutin Academy (177h)</span>
                </div>

                <div className="sysinfo-item glow-hover-item">
                  <span className="sysinfo-key">delivery.velocity:</span>
                  <strong className="sysinfo-val">High Impact</strong>
                  <span className="sysinfo-note">Clean Code & Ownership</span>
                </div>
              </div>
            )}

            {terminalCmd === 'skills' && (
              <div className="terminal-fade-in">
                <pre style={{ color: 'var(--syntax-string)', fontSize: '0.82rem', lineHeight: 1.5, background: 'rgba(0,0,0,0.4)', padding: '14px', borderRadius: '4px', border: '1px solid #21262d' }}>
{`{
  "backend": ["Node.js", "Express.js", "Laravel", "PHP", "RESTful APIs", "Microservicios"],
  "frontend": ["React 19", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  "mobile": ["Flutter", "Dart", "Kotlin"],
  "databases": ["MongoDB", "MySQL", "PostgreSQL"],
  "devops": ["Docker", "CI/CD", "AWS", "Git", "Vite", "Postman", "Linux"],
  "open_source": ["NPM Utility Libraries"],
  "english": "C1-C2 Certified"
}`}
                </pre>
              </div>
            )}

            {terminalCmd === 'hire' && (
              <div className="ascii-hire-banner terminal-fade-in">
                <pre>{`
  ██████╗  █████╗ ██╗   ██╗██╗██████╗     ███████╗██████╗  █████╗ ███╗   ██╗ ██████╗ ██████╗ 
  ██╔══██╗██╔══██╗██║   ██║██║██╔══██╗    ██╔════╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔═══██╗
  ██║  ██║███████║██║   ██║██║██║  ██║    █████╗  ██████╔╝███████║██╔██╗ ██║██║     ██║   ██║
  ██║  ██║██╔══██║╚██╗ ██╔╝██║██║  ██║    ██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║██║     ██║   ██║
  ██████╔╝██║  ██║ ╚████╔╝ ██║██████╔╝    ██║     ██║  ██║██║  ██║██║ ╚████║╚██████╗╚██████╔╝
  ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═════╝     ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ 
                `}</pre>
                <div style={{ color: 'var(--green-online)', fontWeight: 700, marginBottom: '6px' }}>
                  ✓ [SUCCESS]: Candidate David Franco ready for onboarding!
                </div>
                <div>⚡ Mode: Full Stack Developer & Backend Specialist</div>
                <div>📧 Direct Contact: {cvData.contact.email}</div>
                <div>📱 Phone: {cvData.contact.phone}</div>
              </div>
            )}

            {terminalCmd === 'help' && (
              <div className="terminal-help-table terminal-fade-in">
                <div className="terminal-help-row">
                  <span className="help-cmd-name">$ whoami</span>
                  <span className="help-cmd-desc">Muestra el resumen profesional del ingeniero.</span>
                </div>
                <div className="terminal-help-row">
                  <span className="help-cmd-name">$ npm test</span>
                  <span className="help-cmd-desc">Ejecuta la suite de pruebas unitarias y de arquitectura.</span>
                </div>
                <div className="terminal-help-row">
                  <span className="help-cmd-name">$ sysinfo</span>
                  <span className="help-cmd-desc">Muestra telemetría de experiencia, uptime y velocidad.</span>
                </div>
                <div className="terminal-help-row">
                  <span className="help-cmd-name">$ skills</span>
                  <span className="help-cmd-desc">Imprime el objeto JSON de competencias técnicas.</span>
                </div>
                <div className="terminal-help-row">
                  <span className="help-cmd-name">$ sudo hire</span>
                  <span className="help-cmd-desc">Inicia el proceso de contacto y contratación.</span>
                </div>
                <div className="terminal-help-row">
                  <span className="help-cmd-name">$ clear</span>
                  <span className="help-cmd-desc">Limpia la ventana del terminal.</span>
                </div>
              </div>
            )}

            {terminalCmd === 'clear' && (
              <div style={{ color: 'var(--text-dim)', fontStyle: 'italic', padding: '10px 0' }}>
                Terminal despejado. Escribe un comando o haz click en los botones superiores.
              </div>
            )}

            {/* Sysinfo siempre visible al fondo del terminal para consulta rápida salvo que estemos en metrics o clear */}
            {terminalCmd !== 'metrics' && terminalCmd !== 'clear' && (
              <div className="sysinfo-matrix">
                <div className="sysinfo-item glow-hover-item">
                  <span className="sysinfo-key">runtime.experience:</span>
                  <strong className="sysinfo-val">4 Años</strong>
                  <span className="sysinfo-note">Full Stack & Backend</span>
                </div>

                <div className="sysinfo-item glow-hover-item">
                  <span className="sysinfo-key">uptime.availability:</span>
                  <strong className="sysinfo-val">24/7 Web</strong>
                  <span className="sysinfo-note">Microservices & APIs</span>
                </div>

                <div className="sysinfo-item glow-hover-item">
                  <span className="sysinfo-key">language.english:</span>
                  <strong className="sysinfo-val">C1-C2</strong>
                  <span className="sysinfo-note">Edutin Academy (177h)</span>
                </div>

                <div className="sysinfo-item glow-hover-item">
                  <span className="sysinfo-key">delivery.velocity:</span>
                  <strong className="sysinfo-val">High Impact</strong>
                  <span className="sysinfo-note">Clean Code & Ownership</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bloque 3: Competencias Técnicas (`skills.config.ts`) */}
        <section className="code-module-section animate-slide-up" style={{ animationDelay: '0.18s' }}>
          <div className="module-header">
            <span className="code-kw">import</span> &#123; <span className="code-type">TechnicalCompetencies</span> &#125; <span className="code-kw">from</span> <span className="prop-string">'./skills.config'</span>;
          </div>

          <div className="skills-code-grid">
            {cvData.skills.map((skill, idx) => (
              <div key={idx} className="skill-module-box glow-hover-card">
                <div className="skill-module-top">
                  <span className="skill-accent-bar" style={{ backgroundColor: skill.color }}></span>
                  <span className="skill-module-title">{skill.category}</span>
                  <span className="skill-qty">[{skill.techs.length}]</span>
                </div>
                <div className="skill-pills-container">
                  {skill.techs.map((t, i) => (
                    <span key={i} className="code-chip shine-tag">
                      <code>{t}</code>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bloque 4: Experiencia Profesional con Línea Láser Animada y Git Data Pulse */}
        <section className="code-module-section animate-slide-up" style={{ animationDelay: '0.24s' }}>
          <div className="module-header">
            <span className="code-kw">export default function</span> <span className="code-fn">ExperienceTimeline</span>(): <span className="code-type">JSX.Element</span> &#123;
          </div>

          <div className="git-log-container beam-card glow-hover-card">
            <div className="beam-laser"></div>
            <div className="beam-laser-bottom"></div>
            <div className="git-data-pulse"></div>

            {cvData.experience.map((exp, idx) => (
              <div key={idx} className="git-commit-entry">
                <div className="commit-header-line">
                  <div className="commit-id-wrap">
                    <Icons.GitCommit />
                    <span className="commit-hash pulse-hash">commit 8f3d10a</span>
                    <span className="commit-branch">(HEAD -&gt; master)</span>
                  </div>
                  <span className="commit-timestamp">{exp.date}</span>
                </div>

                <div className="commit-role-line">
                  <strong className="company-tag">{exp.company}</strong>
                  <span className="sep-slash">/</span>
                  <span className="role-tag">{exp.role}</span>
                </div>

                <p className="commit-overview-text">{exp.desc}</p>

                <div className="commit-diff-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <div key={i} className="diff-line hover-diff">
                      <span className="diff-plus">+</span>
                      <span className="diff-text">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="commit-tags-strip">
                  <span className="tags-label">production_commits:</span>
                  <div className="tags-wrap">
                    {exp.commits.map((c, i) => (
                      <span key={i} className="git-tag-pill">
                        <code>{c}</code>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="closing-brace">&#125;</div>
        </section>

        {/* Bloque 5: Formación, Certificaciones e Idiomas (`credentials.lock`) */}
        <section className="code-module-section animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="module-header">
            <span className="code-comment">// lockfile: credentials.lock & academic_records.json</span>
          </div>

          <div className="credentials-code-grid">
            {/* Columna 1: Educación e Idiomas */}
            <div className="cred-module-card glow-hover-card">
              <div className="cred-header-kicker">
                <Icons.FileCode />
                <span>academic_education.json</span>
              </div>
              <div className="cred-card-body">
                <div className="cred-degree-name">{cvData.education.degree}</div>
                <div className="cred-school-name">{cvData.education.school}</div>
                <div className="cred-period-code"><code>// {cvData.education.period}</code></div>
                <p className="cred-summary-desc">{cvData.education.desc}</p>
              </div>

              {/* Idiomas */}
              <div className="languages-inner-box">
                <div className="lang-inner-header">
                  <code>languages.config</code>
                </div>
                <div className="lang-code-rows">
                  {cvData.languages.map((lang, i) => (
                    <div key={i} className="lang-code-row">
                      <span className="lang-key">{lang.name.toLowerCase()}:</span>
                      <span className="lang-val">"{lang.level}"</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna 2: Certificaciones Oficiales con Holographic Badge */}
            <div className="cred-module-card certs-module glow-hover-card holo-card">
              <div className="beam-laser"></div>
              <div className="beam-laser-bottom"></div>
              <div className="cred-header-kicker">
                <Icons.ShieldCheck />
                <span>verified_credentials.lock</span>
              </div>

              <div className="certs-code-list">
                {cvData.certifications.map((cert, i) => (
                  <div key={i} className="cert-code-entry holo-item">
                    <div className="cert-entry-header">
                      <span className="cert-entry-name">{cert.title}</span>
                      <span className="cert-entry-hours glow-badge">[{cert.hours}]</span>
                    </div>
                    <div className="cert-entry-issuer">
                      <code>{cert.issuer} • {cert.date}</code>
                    </div>
                    {cert.credentialId && (
                      <div className="cert-entry-id">
                        <code>id: "{cert.credentialId}"</code>
                      </div>
                    )}
                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="cert-cli-link arrow-bounce"
                      >
                        <code>$ verify_credential()</code>
                        <Icons.ExternalLink />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Barra de Estado Inferior de IDE con Telemetría en Vivo y Matrix Toggle */}
      <footer className="ide-statusbar">
        <div className="statusbar-left">
          <span className="status-item pulse-item">
            <Icons.GitBranch />
            <span>main</span>
          </span>
          <span className="status-item">UTF-8</span>
          <span className="status-item">TypeScript React</span>
          <span className="status-item online-status">ESLint: 0 errors</span>
        </div>

        {/* Telemetría en vivo */}
        <div className="telemetry-group">
          <span className="telemetry-item">
            <span className="pulse-dot"></span>
            <span>UPTIME:</span>
            <strong className="telemetry-val green">{formatUptime(uptimeSeconds)}</strong>
          </span>
          <span className="telemetry-item">
            <span>CPU:</span>
            <strong className="telemetry-val">{cpuLoad.toFixed(1)}%</strong>
          </span>
          <span className="telemetry-item">
            <span>RAM:</span>
            <strong className="telemetry-val">418 MB</strong>
          </span>
          <button 
            className={`matrix-toggle-btn ${!isMatrixActive ? 'off' : ''}`}
            onClick={() => setIsMatrixActive(!isMatrixActive)}
            title="Activar o desactivar fondo de lluvia de código Matrix"
          >
            FX: MATRIX {isMatrixActive ? 'ON' : 'OFF'}
          </button>
        </div>

        <div className="statusbar-right">
          <button 
            className="statusbar-btn"
            onClick={handleDownloadCoverLetter}
          >
            carta_presentacion.pdf
          </button>
          <span className="status-sep">|</span>
          <button 
            className="statusbar-btn highlight"
            onClick={handleDownloadCv}
          >
            cv_ats.pdf
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
