'use client';

import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Progressive-enhancement scroll reveal.
 * - SSR / no-JS: renders fully visible (no `initial` hidden state), so content
 *   is always in the HTML and painted even if JS never runs.
 * - Above-the-fold at mount: left visible, never hidden (no flash).
 * - Below-the-fold: hidden after mount, then animated in when scrolled into view.
 * - Respects prefers-reduced-motion.
 */
export default function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) return; // keep visible, no flash

    controls.set({ opacity: 0, y }); // hide only off-screen content, post-mount

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
            });
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -70px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [controls, reduce, delay, y]);

  return (
    <motion.div ref={ref} className={className} animate={controls}>
      {children}
    </motion.div>
  );
}
