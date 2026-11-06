import { useState, useEffect } from 'react';

const TOKENS = ['{ }', '</>', 'const', '01', '=>', 'npm', '★', '++', 'git', 'void', 'true'];

/**
 * ClickParticles - Genera partículas de código y destellos al hacer click
 * en elementos interactivos de la interfaz.
 */
export default function ClickParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // No disparar si es scrollbar o fuera de foco
      const target = e.target;
      const isInteractive = target.closest('button, a, .cli-tag, .cmd-pill, .skill-module-box, .cert-code-entry');

      const count = isInteractive ? 8 : 4;
      const newParticles = [];

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
        const velocity = 25 + Math.random() * 45;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity - 20; // sesgo hacia arriba

        newParticles.push({
          id: Math.random().toString(36).substr(2, 9),
          x: e.clientX,
          y: e.clientY,
          dx,
          dy,
          text: TOKENS[Math.floor(Math.random() * TOKENS.length)],
          color: i % 2 === 0 ? '#38bdf8' : '#3fb950',
          size: Math.random() > 0.5 ? '0.75rem' : '0.65rem'
        });
      }

      setParticles((prev) => [...prev.slice(-30), ...newParticles]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Limpiar partículas viejas
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(6));
    }, 900);
    return () => clearTimeout(timer);
  }, [particles]);

  if (particles.length === 0) return null;

  return (
    <div className="click-particles-layer">
      {particles.map((p) => (
        <span
          key={p.id}
          className="click-particle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            color: p.color,
            fontSize: p.size
          }}
        >
          {p.text}
        </span>
      ))}
    </div>
  );
}
