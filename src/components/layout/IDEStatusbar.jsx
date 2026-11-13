import { Icons } from '../common/Icons';
import { soundManager } from '../../utils/soundEffects';

export default function IDEStatusbar({
  uptimeSeconds,
  cpuLoad,
  formatUptime,
  isMatrixActive,
  setIsMatrixActive,
  soundEnabled,
  setSoundEnabled,
  onDownloadCoverLetter,
  onDownloadCv,
  onOpenPdfModal,
  onOpenCommandPalette
}) {
  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    soundManager.setEnabled(newState);
    if (newState) soundManager.playBeep();
  };

  return (
    <footer className="ide-statusbar">
      <div className="statusbar-left">
        <span className="status-item pulse-item" title="Git Branch">
          <Icons.GitBranch />
          <span>main</span>
        </span>
        <span className="status-item">UTF-8</span>
        <span className="status-item">TypeScript React</span>
        <span className="status-item online-status">ESLint: 0 errors</span>
        <button 
          type="button"
          className="statusbar-quick-cmd"
          onClick={() => {
            soundManager.playClick();
            onOpenCommandPalette();
          }}
          title="Abrir Command Palette"
        >
          ⌘K
        </button>
      </div>

      {/* Telemetría en vivo y Toggles */}
      <div className="telemetry-group">
        <span className="telemetry-item" title="Tiempo de sesión activa">
          <span className="pulse-dot"></span>
          <span>UPTIME:</span>
          <strong className="telemetry-val green">{formatUptime(uptimeSeconds)}</strong>
        </span>
        <span className="telemetry-item" title="Carga sintética de CPU">
          <span>CPU:</span>
          <strong className="telemetry-val">{cpuLoad.toFixed(1)}%</strong>
        </span>
        <span className="telemetry-item" title="Consumo de memoria">
          <span>RAM:</span>
          <strong className="telemetry-val">418 MB</strong>
        </span>

        {/* Audio Toggle */}
        <button
          type="button"
          className={`sound-toggle-btn ${!soundEnabled ? 'off' : ''}`}
          onClick={toggleSound}
          title={soundEnabled ? 'Desactivar efectos de sonido SFX' : 'Activar efectos de sonido SFX'}
        >
          SFX: {soundEnabled ? 'ON' : 'OFF'}
        </button>

        {/* Matrix FX Toggle */}
        <button 
          type="button"
          className={`matrix-toggle-btn ${!isMatrixActive ? 'off' : ''}`}
          onClick={() => {
            soundManager.playClick();
            setIsMatrixActive(!isMatrixActive);
          }}
          title="Activar o desactivar fondo de lluvia Matrix"
        >
          FX: MATRIX {isMatrixActive ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Acciones directas de documentos */}
      <div className="statusbar-right">
        <button
          type="button"
          className="statusbar-btn"
          onClick={() => {
            soundManager.playClick();
            onOpenPdfModal();
          }}
          title="Previsualizar PDF en pantalla"
        >
          <Icons.FileCode />
          <span>preview_cv.pdf</span>
        </button>
        <span className="status-sep">|</span>
        <button 
          type="button"
          className="statusbar-btn"
          onClick={() => {
            soundManager.playBeep();
            onDownloadCoverLetter();
          }}
          title="Descargar carta de presentación"
        >
          carta_presentacion.pdf
        </button>
        <span className="status-sep">|</span>
        <button 
          type="button"
          className="statusbar-btn highlight"
          onClick={() => {
            soundManager.playBeep();
            onDownloadCv();
          }}
          title="Descargar CV ATS de 1 página"
        >
          cv_ats.pdf
        </button>
      </div>
    </footer>
  );
}

