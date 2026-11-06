import { useEffect, useRef } from 'react';

/**
 * MatrixRain - Componente de lluvia digital y flujo de código binario en Canvas
 * Ofrece un fondo animado de alto impacto visual para la estética de desarrollador.
 */
export default function MatrixRain({ enabled = true, opacity = 0.16 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caracteres estilo Matrix y tokens de código (JS, TS, React, Binary)
    const characters = '01010101<>{}[]/*+=~$_;:!?&|^ReactTSNodeAWSDeelSpeedDavidFranco';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    
    // Inicializar posiciones de las gotas (gotas con posición y velocidad variable)
    let drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    let speeds = Array.from({ length: columns }, () => 0.8 + Math.random() * 1.4);

    let mouse = { x: -1000, y: -1000, radius: 120 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let lastDraw = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const draw = (currentTime) => {
      animationFrameId = requestAnimationFrame(draw);

      const delta = currentTime - lastDraw;
      if (delta < interval) return;
      lastDraw = currentTime - (delta % interval);

      // Desvanecimiento suave para la estela (trail)
      ctx.fillStyle = 'rgba(12, 16, 23, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      const currentColumns = Math.floor(canvas.width / fontSize);
      if (currentColumns !== columns) {
        columns = currentColumns;
        drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
        speeds = Array.from({ length: columns }, () => 0.8 + Math.random() * 1.4);
      }

      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Distancia al cursor para interacción dinámica
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          // Si el mouse está cerca, el texto brilla en cian brillante
          ctx.fillStyle = '#38bdf8';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 8;
        } else if (Math.random() > 0.94) {
          // Cabeza del flujo en blanco/cian luminoso
          ctx.fillStyle = '#e0f2fe';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 6;
        } else if (i % 3 === 0) {
          // Tono verde terminal cyber
          ctx.fillStyle = 'rgba(63, 185, 80, 0.65)';
          ctx.shadowBlur = 0;
        } else {
          // Tono cian código
          ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Resetear sombra
        ctx.shadowBlur = 0;

        // Si sobrepasa la pantalla o aleatoriamente, reiniciar arriba
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas-layer"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: opacity,
        transition: 'opacity 0.4s ease'
      }}
    />
  );
}
