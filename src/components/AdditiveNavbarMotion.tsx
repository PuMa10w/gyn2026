import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Additive, zero-behavior-change enhancement:
 *  - a fixed gradient scroll-progress rail (scaleX) tracking page scroll
 *  - toggles `.is-scrolled` on `.navbar` after 120px for a tighter glass state
 * Both are purely cosmetic. Disabled under prefers-reduced-motion.
 */
export function AdditiveNavbarMotion() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const bar = barRef.current;
    const navbar = document.querySelector('.navbar');
    if (!bar) return;

    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, doc.scrollTop / scrollable)) : 0;
      bar.style.transform = `scaleX(${progress})`;
      bar.style.opacity = progress > 0.001 ? '1' : '0';
      navbar?.classList.toggle('is-scrolled', doc.scrollTop > 120);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      navbar?.classList.remove('is-scrolled');
    };
  }, [prefersReduced]);

  return <div className="gyn-scroll-progress" ref={barRef} aria-hidden="true" />;
}

export default AdditiveNavbarMotion;
