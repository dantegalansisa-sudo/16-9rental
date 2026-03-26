import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../data/equipment';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="mobile-menu__header">
              <span className="mobile-menu__logo">16:9</span>
              <button
                className="mobile-menu__close"
                onClick={onClose}
                aria-label="Cerrar menú"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="mobile-menu__nav">
              <motion.div variants={itemVariants}>
                <Link
                  to="/"
                  className="mobile-menu__link mobile-menu__link--main"
                  onClick={handleLinkClick}
                >
                  Inicio
                </Link>
              </motion.div>

              {/* Catálogo con subcategorías */}
              <motion.div variants={itemVariants} className="mobile-menu__section">
                <span className="mobile-menu__section-title">Catálogo</span>
                <div className="mobile-menu__submenu">
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      to={`/catalogo/${cat.id}`}
                      className="mobile-menu__sublink"
                      onClick={handleLinkClick}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/quienes-somos"
                  className="mobile-menu__link mobile-menu__link--main"
                  onClick={handleLinkClick}
                >
                  Quiénes Somos
                </Link>
              </motion.div>

              {location.pathname === '/' && (
                <motion.div variants={itemVariants}>
                  <a
                    href="#como-funciona"
                    className="mobile-menu__link mobile-menu__link--main"
                    onClick={handleLinkClick}
                  >
                    Cómo Funciona
                  </a>
                </motion.div>
              )}

              {location.pathname === '/' && (
                <motion.div variants={itemVariants}>
                  <a
                    href="#faq"
                    className="mobile-menu__link mobile-menu__link--main"
                    onClick={handleLinkClick}
                  >
                    Preguntas Frecuentes
                  </a>
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <a
                  href="#contacto"
                  className="mobile-menu__link mobile-menu__link--main"
                  onClick={handleLinkClick}
                >
                  Contacto
                </a>
              </motion.div>
            </nav>

            {/* Footer CTA */}
            <motion.div
              className="mobile-menu__footer"
              variants={itemVariants}
            >
              <a
                href="https://wa.me/18294207487"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu__cta"
                onClick={handleLinkClick}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
