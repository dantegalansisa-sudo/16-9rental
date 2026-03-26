import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/equipment';

const categoryIcons: Record<string, string> = {
  camara: '📷',
  opticas: '🔭',
  luz: '💡',
  audio: '🎙️',
  soporte: '🎯',
  accesorios: '⚙️',
};

export default function CategoryGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="category-grid-section">
      <div className="section-container">

        <motion.div
          className="category-grid-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="label-mono">Explora por Categoría</span>
          <h3 className="category-grid-title">Equipamiento Completo</h3>
        </motion.div>

        <motion.div
          className="category-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map(cat => (
            <motion.div key={cat.id} variants={itemVariants}>
              <Link to={`/catalogo/${cat.id}`} className="category-card">
                <div className="category-card__icon">{categoryIcons[cat.id]}</div>
                <h4 className="category-card__label">{cat.label}</h4>
                <div className="category-card__arrow">→</div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
