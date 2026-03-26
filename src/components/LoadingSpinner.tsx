import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'gold' | 'cream' | 'white';
}

export default function LoadingSpinner({ size = 'medium', color = 'gold' }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'loading-spinner--small',
    medium: 'loading-spinner--medium',
    large: 'loading-spinner--large'
  };

  const colorClasses = {
    gold: 'loading-spinner--gold',
    cream: 'loading-spinner--cream',
    white: 'loading-spinner--white'
  };

  return (
    <div className={`loading-spinner ${sizeClasses[size]} ${colorClasses[color]}`}>
      <motion.div
        className="loading-spinner__circle"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
