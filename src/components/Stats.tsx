import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="stats-section">
      <div className="section-container">
        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="stat-card" variants={itemVariants}>
            <div className="stat-card__number">
              <AnimatedCounter target={500} suffix="+" />
            </div>
            <div className="stat-card__label">Producciones Realizadas</div>
          </motion.div>

          <motion.div className="stat-card" variants={itemVariants}>
            <div className="stat-card__number">
              <AnimatedCounter target={3411} />
            </div>
            <div className="stat-card__label">Seguidores en Instagram</div>
          </motion.div>

          <motion.div className="stat-card" variants={itemVariants}>
            <div className="stat-card__number">50+</div>
            <div className="stat-card__label">Equipos Premium</div>
          </motion.div>

          <motion.div className="stat-card" variants={itemVariants}>
            <div className="stat-card__number">6</div>
            <div className="stat-card__label">Categorías de Equipo</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
