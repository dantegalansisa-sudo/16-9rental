import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../data/equipment';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  totalItems: number;
  onCartClick: () => void;
}

export default function Navbar({ totalItems, onCartClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        <img src="/images/LOGO.jpeg" alt="Rental 16:9" className="navbar__logo-img" />
      </Link>

      <ul className="navbar__links">
        <li className="navbar__item">
          <span className="navbar__link navbar__link--dropdown">Catalogo</span>
          <ul className="navbar__submenu">
            {categories.map(cat => (
              <li key={cat.id}>
                <Link to={`/catalogo/${cat.id}`}>{cat.label}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="navbar__item">
          <Link to="/quienes-somos" className="navbar__link">Quienes Somos</Link>
        </li>
        {location.pathname === '/' && (
          <li className="navbar__item">
            <a href="#como-funciona" className="navbar__link">Como Funciona</a>
          </li>
        )}
        <li className="navbar__item">
          <a href="#contacto" className="navbar__link">Contacto</a>
        </li>
      </ul>

      <div className="navbar__right">
        <button className="cart-btn" onClick={onCartClick} aria-label="Carrito de compras">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalItems > 0 && <span className="cart-btn__badge">{totalItems}</span>}
        </button>

        {/* Hamburger button - visible on mobile */}
        <button
          className={`hamburger-btn${mobileMenuOpen ? ' active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </nav>
  );
}
