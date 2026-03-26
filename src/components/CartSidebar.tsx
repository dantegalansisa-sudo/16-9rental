import { motion, AnimatePresence } from 'framer-motion';
import type { CartItem } from '../hooks/useCart';
import RentalForm from './RentalForm';

interface CartSidebarProps {
  isOpen: boolean;
  items: CartItem[];
  toggleCart: () => void;
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export default function CartSidebar({
  isOpen,
  items,
  toggleCart,
  updateQuantity,
  removeItem,
  clearCart,
}: CartSidebarProps) {
  const handleSent = () => {
    clearCart();
    toggleCart();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cart-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
            <div className="cart-header">
              <span className="cart-header__title">Tu Solicitud</span>
              <button onClick={toggleCart} className="cart-close">{'\u2715'}</button>
            </div>

            <div className="cart-items">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <p>Agrega equipos para comenzar</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.equipment.id} className="cart-item">
                    <div className="cart-item__thumb">
                      <img src={item.equipment.image} alt={item.equipment.name} />
                    </div>
                    <div className="cart-item__info">
                      <div className="cart-item__name">{item.equipment.name}</div>
                      <span className="cart-item__cat">{item.equipment.category}</span>
                      <div className="cart-item__controls">
                        <button
                          className="cart-item__qty-btn"
                          onClick={() => updateQuantity(item.equipment.id, item.quantity - 1)}
                        >
                          {'\u2212'}
                        </button>
                        <span className="cart-item__qty">{item.quantity}</span>
                        <button
                          className="cart-item__qty-btn"
                          onClick={() => updateQuantity(item.equipment.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeItem(item.equipment.id)}
                    >
                      {'\u2715'}
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-footer">
                <RentalForm items={items} onSent={handleSent} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
