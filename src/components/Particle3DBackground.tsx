import React, { useEffect, useRef, useState } from 'react';

interface Particle3DBackgroundProps {
  className?: string;
  particleCount?: number;
  color?: string;
}

export const Particle3DBackground: React.FC<Particle3DBackgroundProps> = ({
  className = '',
  particleCount = 100,
  color = '#D89AA7',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Проверяем, загружен ли уже Three.js
    if ((window as any).THREE) {
      initThree();
      return;
    }

    // Загружаем Three.js с CDN (как в Voice Remover)
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => {
      setIsLoaded(true);
      initThree();
    };
    document.head.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };

    function initThree() {
      const THREE = (window as any).THREE;
      if (!THREE || !containerRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      // Создаем частицы
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = particleCount;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(posArray, 3)
      );

      // Материал частиц
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      camera.position.z = 3;

      // Анимация
      let mouseX = 0;
      let mouseY = 0;

      document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      });

      const animate = () => {
        requestAnimationFrame(animate);

        particlesMesh.rotation.y += 0.0005;
        particlesMesh.rotation.x += 0.0003;

        // Эффект следования за мышью
        particlesMesh.rotation.y += mouseX * 0.0005;
        particlesMesh.rotation.x += mouseY * 0.0005;

        renderer.render(scene, camera);
      };

      animate();

      // Обработка ресайза
      const handleResize = () => {
        if (!containerRef.current) return;
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      };
    }
  }, [particleCount, color]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.4 }}
    />
  );
};