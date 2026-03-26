import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const springConfig = { damping: 28, stiffness: 280 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const ringSize = hovering ? 48 : 32;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]')
      ) {
        setHovering(true);
      }
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]')
      ) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          marginLeft: -2.5,
          marginTop: -2.5,
        }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        animate={{ width: ringSize, height: ringSize }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          x: ringX,
          y: ringY,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          opacity: hovering ? 0.6 : 0.35,
        }}
      />
    </>
  );
}
