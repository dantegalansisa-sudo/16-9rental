import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import WhatsAppButton from './components/WhatsAppButton';
import Toast from './components/Toast';
import FooterSection from './sections/FooterSection';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import { useCart } from './hooks/useCart';
import { useToast } from './hooks/useToast';
import type { Equipment } from './data/equipment';

function App() {
  const {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    totalItems,
    isInCart,
  } = useCart();

  const { toast, showToast, hideToast } = useToast();

  const handleAddItem = (equipment: Equipment) => {
    addItem(equipment);
    showToast(`${equipment.name} agregado a tu solicitud`, 'success');
  };

  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar totalItems={totalItems} onCartClick={toggleCart} />

      <Routes>
        <Route path="/" element={<HomePage onAdd={handleAddItem} isInCart={isInCart} />} />
        <Route path="/catalogo/:category" element={<CategoryPage onAdd={handleAddItem} isInCart={isInCart} />} />
        <Route path="/quienes-somos" element={<AboutPage />} />
      </Routes>

      <FooterSection />

      <CartSidebar
        isOpen={isOpen}
        items={items}
        toggleCart={toggleCart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        clearCart={clearCart}
      />

      <WhatsAppButton />
      <ScrollToTop />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </BrowserRouter>
  );
}

export default App;
