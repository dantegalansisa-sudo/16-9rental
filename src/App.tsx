import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import WhatsAppButton from './components/WhatsAppButton';
import FooterSection from './sections/FooterSection';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import { useCart } from './hooks/useCart';

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

  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar totalItems={totalItems} onCartClick={toggleCart} />

      <Routes>
        <Route path="/" element={<HomePage onAdd={addItem} isInCart={isInCart} />} />
        <Route path="/catalogo/:category" element={<CategoryPage onAdd={addItem} isInCart={isInCart} />} />
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
    </BrowserRouter>
  );
}

export default App;
