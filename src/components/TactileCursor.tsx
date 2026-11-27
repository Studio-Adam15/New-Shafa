import React, { useEffect, useState } from 'react';
import { m, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

export const TactileCursor: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.35 });
  const springY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.35 });

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('a, button, [role="tab"], [data-cursor="dish"]')
      );
      setExpanded(isInteractive);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) return null;

  return (
    <m.div
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: expanded ? 1.55 : 1,
      }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className={`pointer-events-none fixed top-0 left-0 z-50 -ml-4 -mt-4 hidden h-8 w-8 rounded-full border transition-colors duration-200 lg:block ${
        expanded
          ? 'border-[#C69A63]/75 bg-[#C69A63]/20 backdrop-blur-[1px]'
          : 'border-[#171615]/25 bg-[#F5F0E6]/35 backdrop-blur-[1px]'
      }`}
    />
  );
};
