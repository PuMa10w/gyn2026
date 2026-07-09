import React, { useEffect, useRef } from 'react';

interface Particle3DBackgroundProps {
  className?: string;
  particleCount?: number;
  color?: string;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const clean = hex.replace('#', '');
  const full =
    clean.length === 3
      ? clean.split('').map((c) => c + c).join('')
      : clean.padEnd(6, '0').slice(0, 6);
  const int = parseInt(full, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
};

export const Particle3DBackground: React.FC<Particle3DBackgroundProps> = ({
  className = '',
  particleCount = 100,
  color = '#D89AA7',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (import.meta.env.MODE === 'test') {
      return undefined;
    }

    if (!container || reducedMotion || particleCount <= 0) {
      return undefined;
    }

    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      canvas.remove();
      return undefined;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = Math.max(container.clientWidth, 1);
    let height = Math.max(container.clientHeight, 1);
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const [r, g, b] = hexToRgb(color);
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const count = isMobile ? Math.min(particleCount, 40) : particleCount;

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.8 + 0.2,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
    }));

    const resize = () => {
      width = Math.max(container.clientWidth, 1);
      height = Math.max(container.clientHeight, 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      pointerY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx + pointerX * 0.25 * p.z;
        p.y += p.vy + pointerY * 0.2 * p.z;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const rad = 1.1 + p.z * 1.8;
        const alpha = 0.18 + p.z * 0.32;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad * 4);
        grd.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        grd.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      frameId = window.requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      canvas.remove();
    };
  }, [particleCount, color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.32 }}
      aria-hidden="true"
    />
  );
};
