import { motion } from 'framer-motion';

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card__image">
        <motion.div
          className="skeleton-shimmer"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      <div className="skeleton-card__body">
        <div className="skeleton-card__title">
          <motion.div
            className="skeleton-shimmer"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <div className="skeleton-card__specs">
          <div className="skeleton-card__spec" />
          <div className="skeleton-card__spec" />
          <div className="skeleton-card__spec" />
        </div>
        <div className="skeleton-card__footer">
          <div className="skeleton-card__price" />
          <div className="skeleton-card__button" />
        </div>
      </div>
    </div>
  );
}
