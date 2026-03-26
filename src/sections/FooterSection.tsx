import { categories } from '../data/equipment';

export default function FooterSection() {
  return (
    <footer id="contacto" className="footer">
      <div className="section-container">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">16:9</div>
            <p className="footer__tagline">
              Rental boutique de equipos cinematograficos en Santo Domingo,
              Republica Dominicana.
            </p>
            <a
              href="https://instagram.com/16.9cinerentals"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__ig"
            >
              @16.9cinerentals
            </a>
          </div>

          {/* Catalogo column */}
          <div>
            <div className="footer__col-title">Catalogo</div>
            <ul className="footer__col-links">
              {categories.map(cat => (
                <li key={cat.id}>
                  <a href={`#${cat.id}`}>{cat.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info column */}
          <div>
            <div className="footer__col-title">Info</div>
            <ul className="footer__col-links">
              <li>
                <a href="#quienes-somos">Quienes Somos</a>
              </li>
              <li>
                <a href="#como-funciona">Como Funciona</a>
              </li>
              <li>
                <span style={{ color: 'var(--cream-dim)', fontSize: '13px' }}>
                  Plaza Castilla, Av. Abraham Lincoln 609, SD
                </span>
              </li>
              <li>
                <a href="https://wa.me/18294207487" target="_blank" rel="noopener noreferrer">
                  829-420-7487
                </a>
              </li>
              <li>
                <a href="https://wa.me/18294207487" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; 2025 Rental 16:9 | Cine Rentals. Republica Dominicana.
          </span>
          <span className="footer__credit">
            Disenado por <a href="https://nexix.tech" target="_blank" rel="noopener noreferrer">NEXIX Tech Studio</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
