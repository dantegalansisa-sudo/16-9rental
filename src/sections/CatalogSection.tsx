import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import EquipmentCard from '../components/EquipmentCard';
import { equipment, categories } from '../data/equipment';
import { useSearch } from '../hooks/useSearch';
import type { Equipment } from '../data/equipment';

interface CatalogSectionProps {
  onAdd: (eq: Equipment) => void;
  isInCart: (id: string) => boolean;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function CatalogSection({ onAdd, isInCart }: CatalogSectionProps) {
  const { search, setSearch, filtered, hasResults } = useSearch();

  return (
    <section id="catalogo" className="catalog-section">
      <div className="section-container" style={{ position: 'relative', zIndex: 1, paddingBottom: '40px' }}>
        <motion.span
          className="label-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Inventario Disponible
        </motion.span>

        <RevealText tag="h2" className="section-title" delay={0.1} style={{ marginTop: '16px', marginBottom: '0' }}>
          Equipos Disponibles
        </RevealText>
      </div>

      {/* Sticky nav */}
      <div className="cat-nav-sticky">
        <div className="cat-nav-inner">
          <div className="search-widget">
            <span className="search-widget__icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Buscar equipo..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="cat-nav-links">
            {categories.map(cat => (
              <a key={cat.id} href={`#${cat.id}`}>{cat.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Search results */}
        {search.trim() && (
          <div className="search-results">
            <p className="search-results__title">
              {hasResults
                ? <>Resultados para <strong>&ldquo;{search}&rdquo;</strong> ({filtered.length})</>
                : <>Sin resultados para <strong>&ldquo;{search}&rdquo;</strong></>
              }
            </p>
            {hasResults && (
              <motion.div
                className="eq-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filtered.map(eq => (
                  <EquipmentCard
                    key={eq.id}
                    equipment={eq}
                    onAdd={onAdd}
                    inCart={isInCart(eq.id)}
                  />
                ))}
              </motion.div>
            )}
          </div>
        )}

        {/* Category sections */}
        {!search.trim() && categories.map(cat => {
          const items = equipment.filter(eq => eq.category === cat.id);
          return (
            <div key={cat.id} id={cat.id} className="cat-section">
              {/* Watermark */}
              <div className="cat-watermark" aria-hidden="true">16:9</div>

              <div className="cat-section__header">
                <span className="label-mono">{cat.label}</span>
              </div>
              <motion.h3
                className="cat-title"
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                {cat.label}
              </motion.h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                <div className="cat-rule" style={{ flex: 1 }} />
                <span className="cat-count">{items.length} items</span>
              </div>

              <motion.div
                className="eq-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
              >
                {items.map(eq => (
                  <EquipmentCard
                    key={eq.id}
                    equipment={eq}
                    onAdd={onAdd}
                    inCart={isInCart(eq.id)}
                  />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
