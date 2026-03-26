import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 80) {
      setPos({ x: dx * 0.35, y: dy * 0.35 });
    }
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {href ? (
          <a href={href} className={className} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
            {children}
          </a>
        ) : (
          <button onClick={onClick} className={className}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  );
}
