import { motion, AnimatePresence } from 'framer-motion';
import type { Equipment } from '../data/equipment';
import { categories } from '../data/equipment';

interface EquipmentDetailModalProps {
  equipment: Equipment | null;
  isOpen: boolean;
  onClose: () => void;
  onAdd: (eq: Equipment) => void;
  inCart: boolean;
}

function getCategoryLabel(cat: string) {
  return categories.find(c => c.id === cat)?.label || cat;
}

export default function EquipmentDetailModal({
  equipment,
  isOpen,
  onClose,
  onAdd,
  inCart
}: EquipmentDetailModalProps) {
  if (!equipment) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="modal-container">
            <motion.div
              className="modal-content eq-detail-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close button */}
              <button className="modal-close" onClick={onClose} aria-label="Cerrar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="eq-detail-grid">
                {/* Left: Image */}
                <div className="eq-detail-image">
                  <div className="eq-detail-image-frame">
                    <img src={equipment.image} alt={equipment.name} />
                    <div className="eq-detail-image-overlay" />
                    <span className="eq-detail-cat-badge">{getCategoryLabel(equipment.category)}</span>
                  </div>
                </div>

                {/* Right: Info */}
                <div className="eq-detail-info">
                  <span className="label-mono" style={{ marginBottom: '12px', display: 'block' }}>
                    {getCategoryLabel(equipment.category)}
                  </span>

                  <h2 className="eq-detail-title">{equipment.name}</h2>

                  <p className="eq-detail-desc">{equipment.description}</p>

                  {/* Specs */}
                  <div className="eq-detail-specs-section">
                    <h3 className="eq-detail-subtitle">Especificaciones</h3>
                    <div className="eq-detail-specs-list">
                      {equipment.specs.map(spec => (
                        <div key={spec} className="eq-detail-spec-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="eq-detail-info-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                    <p>
                      Los precios y disponibilidad varían según fechas.
                      Envía tu solicitud y te contactaremos con una cotización exacta.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="eq-detail-actions">
                    <button
                      className={`btn-primary${inCart ? ' btn-primary--added' : ''}`}
                      onClick={() => {
                        onAdd(equipment);
                        setTimeout(onClose, 300);
                      }}
                    >
                      {inCart ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Ya está en tu solicitud
                        </>
                      ) : (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          </svg>
                          Agregar a solicitud
                        </>
                      )}
                    </button>
                    <button className="btn-ghost-detail" onClick={onClose}>
                      Seguir explorando
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
