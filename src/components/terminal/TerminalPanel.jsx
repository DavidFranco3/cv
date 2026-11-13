import { useState, useRef } from 'react';
import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';

const AVAILABLE_COMMANDS = ['whoami', 'test', 'metrics', 'skills', 'hire', 'clear', 'help', 'cat profile.json'];

export default function TerminalPanel({ cvData }) {
  const [terminalCmd, setTerminalCmd] = useState('whoami');
  const [cliInput, setCliInput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [testProgress, setTestProgress] = useState(100);
  const [testStage, setTestStage] = useState(4);
  const [history, setHistory] = useState(['whoami', 'npm test']);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  const runTestRunnerAnimation = () => {
    setIsExecuting(true);
    setTestProgress(0);
    setTestStage(0);
    soundManager.playClick();

    const t1 = setTimeout(() => { setTestProgress(25); setTestStage(1); soundManager.playClick(); }, 120);
    const t2 = setTimeout(() => { setTestProgress(50); setTestStage(2); soundManager.playClick(); }, 240);
    const t3 = setTimeout(() => { setTestProgress(75); setTestStage(3); soundManager.playClick(); }, 360);
    const t4 = setTimeout(() => {
      setTestProgress(100);
      setTestStage(4);
      setIsExecuting(false);
      soundManager.playBeep();
    }, 480);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  };

  const switchTerminalCmd = (cmd) => {
    soundManager.playClick();
    setTerminalCmd(cmd);
    if (cmd === 'test') {
      runTestRunnerAnimation();
    } else {
      setIsExecuting(true);
      setTimeout(() => setIsExecuting(false), 80);
    }
  };

  const executeCliCommand = (commandStr) => {
    const cleanCmd = commandStr.trim().toLowerCase();
    if (!cleanCmd) return;

    // Add to history
    setHistory((prev) => [...prev, cleanCmd]);
    setHistoryIndex(-1);

    if (cleanCmd.includes('test') || cleanCmd === 'npm test') {
      setTerminalCmd('test');
      runTestRunnerAnimation();
    } else if (cleanCmd.includes('whoami')) {
      switchTerminalCmd('whoami');
    } else if (cleanCmd.includes('metric') || cleanCmd.includes('sysinfo') || cleanCmd.includes('telemetry')) {
      switchTerminalCmd('metrics');
    } else if (cleanCmd.includes('skill')) {
      switchTerminalCmd('skills');
    } else if (cleanCmd.includes('hire') || cleanCmd.includes('contact')) {
      switchTerminalCmd('hire');
      soundManager.playBeep();
    } else if (cleanCmd.includes('clear')) {
      switchTerminalCmd('clear');
    } else if (cleanCmd.includes('cat') || cleanCmd.includes('profile')) {
      switchTerminalCmd('skills');
    } else {
      switchTerminalCmd('help');
    }

    setCliInput('');
  };

  const handleKeyDown = (e) => {
    // Autocompletion on Tab
    if (e.key === 'Tab') {
      e.preventDefault();
      const val = cliInput.trim().toLowerCase();
      if (!val) return;
      const match = AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(val));
      if (match) {
        setCliInput(match);
        soundManager.playClick();
      }
      return;
    }

    // History navigation with ArrowUp / ArrowDown
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setCliInput(history[nextIndex]);
      soundManager.playClick();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setCliInput('');
      } else {
        setHistoryIndex(nextIndex);
        setCliInput(history[nextIndex]);
      }
      soundManager.playClick();
    }
  };

  return (
    <section id="terminal-section" className="terminal-panel beam-card animate-slide-up" style={{ animationDelay: '0.12s' }}>
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
            type="button"
            className={`cmd-pill ${terminalCmd === 'whoami' ? 'active' : ''}`}
            onClick={() => switchTerminalCmd('whoami')}
          >
            $ whoami
          </button>
          <button 
            type="button"
            className={`cmd-pill ${terminalCmd === 'test' ? 'active' : ''}`}
            onClick={() => switchTerminalCmd('test')}
          >
            <Icons.Play /> $ npm test
          </button>
          <button 
            type="button"
            className={`cmd-pill ${terminalCmd === 'metrics' ? 'active' : ''}`}
            onClick={() => switchTerminalCmd('metrics')}
          >
            <Icons.Cpu /> $ sysinfo
          </button>
          <button 
            type="button"
            className={`cmd-pill ${terminalCmd === 'skills' ? 'active' : ''}`}
            onClick={() => switchTerminalCmd('skills')}
          >
            $ skills
          </button>
          <button 
            type="button"
            className={`cmd-pill ${terminalCmd === 'hire' ? 'active' : ''}`}
            onClick={() => switchTerminalCmd('hire')}
          >
            <Icons.Sparkles /> $ sudo hire
          </button>
          <button 
            type="button"
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
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            executeCliCommand(cliInput);
          }} 
          className="terminal-cli-form"
        >
          <input 
            ref={inputRef}
            type="text" 
            className="terminal-cli-input"
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="escribe 'test', 'whoami', 'skills', 'hire', 'clear' (Tab para autocompletar)..."
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
                ✓ Core Stack: TypeScript, React, Node.js, Express <span className="time-tag">[0.4ms]</span>
              </div>
            )}
            {testStage >= 2 && (
              <div className="test-subline pass-pop">
                ✓ Cloud & DevOps: AWS (S3/EC2), Docker, CI/CD, Git <span className="time-tag">[0.2ms]</span>
              </div>
            )}
            {testStage >= 3 && (
              <div className="test-subline pass-pop">
                ✓ Open Source: 3 Published NPM Packages & Clean Architecture <span className="time-tag">[0.3ms]</span>
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
              <span className="sysinfo-note">Full Stack & Cloud</span>
            </div>

            <div className="sysinfo-item glow-hover-item">
              <span className="sysinfo-key">uptime.availability:</span>
              <strong className="sysinfo-val">24/7 Remote</strong>
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
  "frontend": ["TypeScript", "JavaScript", "React", "HTML5", "SCSS / CSS3"],
  "cloud_devops": ["AWS (S3/EC2)", "Docker", "CI/CD", "Git", "Postman", "Linux"],
  "backend": ["Node.js", "Express.js", "RESTful APIs", "JWT", "Laravel", "PHP"],
  "databases": ["MongoDB", "MySQL", "SQLite"],
  "methodologies": ["Agile / Scrum", "Unit Testing (Jest)", "Clean Architecture"],
  "open_source": ["fluent-rest-client", "react-apextable-pro", "intl-currency-helper"],
  "english": "C1-C2 Certified (177h)"
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
            <div>⚡ Specialization: Senior TypeScript / AWS & Frontend Developer</div>
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
              <span className="sysinfo-note">Full Stack & Cloud</span>
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
  );
}
