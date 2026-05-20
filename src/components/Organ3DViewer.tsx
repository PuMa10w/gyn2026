import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PathologyHotspot {
  id: string;
  name: string;
  description: string;
  position: [number, number, number]; // x, y, z
  color?: number;
}

interface Organ3DViewerProps {
  organType?: 'uterus' | 'ovary' | 'fallopian_tube';
  className?: string;
  width?: number;
  height?: number;
}

type ThreeMesh = any;
type ThreeMeshBasicMaterial = any;

// Патологии для матки (примерные координаты)
const UTERUS_PATHOLOGIES: PathologyHotspot[] = [
  {
    id: 'fibroid',
    name: 'Миома матки',
    description: 'Доброкачественная опухоль матки. Лечение: наблюдение, миомэктомия или гистерэктомия.',
    position: [0.5, 0.3, 0.8],
    color: 0xff4444,
  },
  {
    id: 'endometriosis',
    name: 'Эндометриоз',
    description: 'Р азрастание ткани, похожей на эндометрий, за пределами матки.',
    position: [-0.6, -0.2, 0.7],
    color: 0xff8844,
  },
  {
    id: 'adenomyosis',
    name: 'Аденомиоз',
    description: 'Прорастание эндометрия в мышечный слой матки.',
    position: [0, 0, -0.9],
    color: 0xffaa66,
  },
  {
    id: 'polyps',
    name: 'Полипы эндометрия',
    description: 'Новообразования на внутренней стенке матки.',
    position: [0.2, 0.8, 0.1],
    color: 0xffcc00,
  },
];

export const Organ3DViewer: React.FC<Organ3DViewerProps> = ({
  organType = 'uterus',
  className = '',
  width = 300,
  height = 300,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPathology, setSelectedPathology] = useState<PathologyHotspot | null>(null);
  const [hoveredPathology, setHoveredPathology] = useState<string | null>(null);

  const getPathologies = (type: string): PathologyHotspot[] => {
    switch (type) {
      case 'uterus': return UTERUS_PATHOLOGIES;
      case 'ovary': return [
        { id: 'cyst', name: 'Киста яичника', description: 'Полостное образование яичника.', position: [0.5, 0, 0], color: 0x44ff44 },
      ];
      default: return [];
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Очищаем предыдущий рендер
    containerRef.current.innerHTML = '';

    // Проверяем, загружен ли уже Three.js
    if ((window as any).THREE) {
      initThree();
      return;
    }

    // Загружаем Three.js с CDN
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
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      // Создаем орган
      let geometry;
      let material;
      const pathologies = getPathologies(organType);
      const hotspots: ThreeMesh[] = [];
      
      switch (organType) {
        case 'uterus':
          geometry = new THREE.SphereGeometry(1, 32, 32);
          material = new THREE.MeshPhongMaterial({
            color: 0xff6b9d,
            transparent: true,
            opacity: 0.7,
            shininess: 100,
          });
          break;
        case 'ovary':
          geometry = new THREE.SphereGeometry(0.8, 32, 32);
          material = new THREE.MeshPhongMaterial({
            color: 0xffa726,
            transparent: true,
            opacity: 0.7,
          });
          break;
        case 'fallopian_tube':
          geometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
          material = new THREE.MeshPhongMaterial({
            color: 0xce93d8,
            transparent: true,
            opacity: 0.7,
          });
          break;
        default:
          geometry = new THREE.SphereGeometry(1, 32, 32);
          material = new THREE.MeshPhongMaterial({ color: 0xff6b9d });
      }

      const organ = new THREE.Mesh(geometry, material);
      scene.add(organ);

      // Добавляем хотспоты (патологии)
      pathologies.forEach((pathology) => {
        const hotspotGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const hotspotMaterial = new THREE.MeshBasicMaterial({
          color: pathology.color || 0xff0000,
          transparent: true,
          opacity: 0.8,
        });
        const hotspot = new THREE.Mesh(hotspotGeometry, hotspotMaterial);
        hotspot.position.set(...pathology.position);
        hotspot.userData = { pathologyId: pathology.id };
        scene.add(hotspot);
        hotspots.push(hotspot);
      });

      // Освещение
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      camera.position.z = 3;

      // Raycaster для кликов
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const handleClick = (event: MouseEvent) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(hotspots);

        if (intersects.length > 0) {
          const clickedMesh = intersects[0].object as ThreeMesh;
          const pathologyId = clickedMesh.userData.pathologyId;
          const pathology = pathologies.find(p => p.id === pathologyId);
          if (pathology) {
            setSelectedPathology(prev => prev?.id === pathology.id ? null : pathology);
          }
        }
      };

      containerRef.current.addEventListener('click', handleClick);

      // Анимация вращения и наведения
      let mouseX = 0;
      let mouseY = 0;
      let targetRotationY = organ.rotation.y;
      let targetRotationX = organ.rotation.x;

      document.addEventListener('mousemove', (event) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Проверка наведения на хотспоты
        raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
        const intersects = raycaster.intersectObjects(hotspots);
        
        if (intersects.length > 0) {
          const hoveredMesh = intersects[0].object as ThreeMesh;
          setHoveredPathology(hoveredMesh.userData.pathologyId);
          containerRef.current.style.cursor = 'pointer';
        } else {
          setHoveredPathology(null);
          containerRef.current.style.cursor = 'default';
        }
      });

      const animate = () => {
        requestAnimationFrame(animate);
        
        // Вращение от мыши
        targetRotationY = mouseX * 0.5;
        targetRotationX = mouseY * 0.3;
        
        organ.rotation.y += (targetRotationY - organ.rotation.y) * 0.05;
        organ.rotation.x += (targetRotationX - organ.rotation.x) * 0.05;
        
        // Автовращение (медленное)
        organ.rotation.y += 0.002;
        
        // Пульсация хотспотов
        hotspots.forEach((hotspot, index) => {
          const scale = 1 + Math.sin(Date.now() * 0.003 + index) * 0.2;
          hotspot.scale.setScalar(scale);
          
          // Подсветка при наведении
          const material = hotspot.material as ThreeMeshBasicMaterial;
          if (hoveredPathology === hotspot.userData.pathologyId) {
            material.opacity = 1.0;
          } else {
            material.opacity = 0.8;
          }
        });
        
        renderer.render(scene, camera);
      };

      animate();

      // Обработка ресайза
      const handleResize = () => {
        if (!containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current) {
          containerRef.current.removeEventListener('click', handleClick);
          containerRef.current.innerHTML = '';
        }
      };
    }
  }, [organType, width, height]);

  return (
    <motion.div
      ref={containerRef}
      className={`organ-3d-viewer ${className}`}
      style={{ width: '100%', height: '100%', minHeight: '300px', position: 'relative' }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      aria-label={`3D модель: ${organType}`}
    >
      {/* Попап с информацией о патологии */}
      {selectedPathology && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(28, 28, 30, 0.9)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            maxWidth: '280px',
            zIndex: 10,
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h4 style={{ margin: 0, color: '#B97886' }}>{selectedPathology.name}</h4>
            <button
              onClick={() => setSelectedPathology(null)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '18px',
              }}
            >
              ✕
            </button>
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.5, opacity: 0.9, margin: 0 }}>
            {selectedPathology.description}
          </p>
          <div style={{ marginTop: '12px' }}>
            <button
              style={{
                background: 'rgba(216, 184, 120, 0.18)',
                border: '1px solid rgba(216, 184, 120, 0.32)',
                color: '#B97886',
                padding: '6px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '12px',
              }}
              onClick={() => {
                // Здесь можно открыть модальное окно с полной инфой
                alert(`Переход к полной статье: ${selectedPathology.id}`);
              }}
            >
              Подробнее →
            </button>
          </div>
        </motion.div>
      )}

      {/* Подсказка */}
      {!selectedPathology && (
        <div
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.6)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            opacity: 0.8,
            pointerEvents: 'none',
          }}
        >
          рџ–±пёЏ Кликайте на красные точки (патологии)
        </div>
      )}
    </motion.div>
  );
};