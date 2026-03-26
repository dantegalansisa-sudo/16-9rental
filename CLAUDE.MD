# CLAUDE.md — Rental 16:9 | Cine Rentals
## VERSIÓN 2.0 — EDITORIAL CINEMA
## Proyecto NEXIX Tech Studio · República Dominicana
## ⚡ SKILL: https://github.com/Leonxlnx/taste-skill

---

## 0. FILOSOFÍA DE DISEÑO

**Referentes:** A24 Films · Dezeen · Wallpaper* · Acne Studios · Leica Camera
**Concepto:** "BOUTIQUE CINEMATOGRÁFICA"

No es un catálogo de ferretería audiovisual.
Es el lugar donde los mejores cineastas de RD consiguen
los equipos que hacen posible su visión.

La web debe sentirse como entrar a una galería de arte
donde el producto es el cine mismo.

**Principios de diseño:**
- Espacio negativo generoso — respirar es elegancia
- Tipografía como elemento visual principal
- El "16:9" como watermark editorial — no como efecto gamer
- Fotografía contrastada — sin filtros de color artificiales
- Interacciones sutiles — no llamativas

---

## 1. DATOS DEL CLIENTE

```
Empresa:      Rental 16:9 | Cine Rentals
Tagline:      Rental boutique de equipos cinematográficos
Instagram:    @16.9cinerentals | 3,411 seguidores
WhatsApp:     829-420-7487  →  https://wa.me/18294207487
Dirección:    Plaza Castilla, Av. Abraham Lincoln 609, SD, RD
Imagen:       /public/images/placeholder.jpg
```

---

## 2. SETUP

```bash
npm create vite@latest rental-169 -- --template react-ts
cd rental-169
npm install framer-motion
npm run dev
```

---

## 3. PALETA — EDITORIAL NOIR

```css
:root {
  /* Fondos */
  --bg:           #0A0A0A;   /* Negro elegante — no puro */
  --bg-surface:   #111111;
  --bg-elevated:  #181818;
  --bg-card:      #141414;
  --bg-overlay:   rgba(10,10,10,0.95);

  /* Crema — blanco cálido editorial */
  --cream:        #EDE8DF;
  --cream-dim:    #B8B0A4;
  --cream-muted:  #6B6560;

  /* Dorado tostado — acento premium */
  --gold:         #C9A96E;
  --gold-dim:     rgba(201,169,110,0.6);
  --gold-pale:    rgba(201,169,110,0.08);

  /* Texto */
  --text:         #EDE8DF;   /* crema */
  --text-sec:     #8A8279;
  --text-muted:   #3D3A37;

  /* Bordes */
  --border:       rgba(237,232,223,0.07);
  --border-mid:   rgba(237,232,223,0.15);
  --border-gold:  rgba(201,169,110,0.25);

  /* Gradientes */
  --gradient-gold:    linear-gradient(135deg, #C9A96E 0%, #E8C98A 100%);
  --gradient-card:    linear-gradient(145deg, #141414 0%, #181818 100%);
  --gradient-overlay: linear-gradient(to top,
    rgba(10,10,10,0.98) 0%,
    rgba(10,10,10,0.5) 60%,
    transparent 100%);

  /* Sombras */
  --shadow-card:  0 4px 32px rgba(0,0,0,0.6);
  --shadow-hover: 0 24px 64px rgba(0,0,0,0.8);
  --shadow-gold:  0 8px 32px rgba(201,169,110,0.2);
}
```

---

## 4. TIPOGRAFÍAS — EDITORIAL SERIF + SANS

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans:  'DM Sans', system-ui, sans-serif;
  --font-mono:  'DM Mono', monospace;
}

/* "16:9" watermark — serif italiana */
.brand-watermark {
  font-family: var(--font-serif);
  font-size: clamp(200px, 35vw, 480px);
  font-weight: 300;
  font-style: italic;
  letter-spacing: -8px;
  color: var(--cream);
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

/* Títulos editoriales */
.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(64px, 10vw, 140px);
  font-weight: 300;
  font-style: italic;
  letter-spacing: -2px;
  line-height: 0.95;
  color: var(--cream);
}

/* Section titles */
.section-title {
  font-family: var(--font-serif);
  font-size: clamp(48px, 6vw, 88px);
  font-weight: 300;
  color: var(--cream);
  letter-spacing: -1px;
  line-height: 1;
}

/* Labels técnicos */
.label-mono {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
}

/* Nombres de equipos */
.eq-name {
  font-family: var(--font-serif);
  font-size: 26px;
  font-weight: 400;
  color: var(--cream);
  letter-spacing: -0.5px;
}

/* Category titles */
.cat-title {
  font-family: var(--font-serif);
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 300;
  font-style: italic;
  color: var(--cream);
  opacity: 0.9;
  letter-spacing: -1px;
}
```

---

## 5. ESPACIADO NEXIX

```css
:root {
  --section-padding:   140px 0;
  --container-width:   1320px;
  --container-padding: 0 80px;
}
@media (max-width: 768px) {
  :root {
    --section-padding:   80px 0;
    --container-padding: 0 24px;
  }
}
```

---

## 6. ESTRUCTURA DE ARCHIVOS

```
src/
├── components/
│   ├── Navbar.tsx              ← menú completo con sub-menús
│   ├── SearchBar.tsx           ← buscador de equipos
│   ├── CustomCursor.tsx        ← cursor minimalista
│   ├── ScrollProgress.tsx      ← línea dorada top
│   ├── RevealText.tsx          ← serif reveal animation
│   ├── MagneticButton.tsx
│   ├── AnimatedCounter.tsx
│   ├── EquipmentCard.tsx       ← card editorial
│   ├── CartSidebar.tsx         ← carrito lateral
│   ├── RentalForm.tsx
│   └── WhatsAppButton.tsx
├── hooks/
│   ├── useMouse.ts
│   ├── useCart.ts
│   └── useSearch.ts            ← lógica del buscador
├── data/
│   └── equipment.ts
├── sections/
│   ├── HeroSection.tsx
│   ├── ManifestoSection.tsx    ← QUIÉNES SOMOS
│   ├── CatalogSection.tsx      ← menú + sub-menús + buscador
│   ├── HowItWorksSection.tsx
│   └── FooterSection.tsx
├── App.tsx
├── App.css
└── index.css
```

---

## 7. NAVBAR — MENÚ COMPLETO CON SUB-MENÚS

```tsx
// NAVBAR ESTRUCTURA:
// Logo "16:9" (serif italic) + links + buscador + carrito

const navLinks = [
  {
    label: 'Catálogo',
    href: '#catalogo',
    submenu: [
      { label: 'Cámara',     href: '#camara',     icon: '📷' },
      { label: 'Ópticas',    href: '#opticas',    icon: '🔭' },
      { label: 'Luz & Grip', href: '#luz',        icon: '💡' },
      { label: 'Audio',      href: '#audio',      icon: '🎙️' },
      { label: 'Soporte',    href: '#soporte',    icon: '🎯' },
      { label: 'Accesorios', href: '#accesorios', icon: '⚙️' },
    ]
  },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Cómo Funciona', href: '#proceso' },
  { label: 'Contacto',      href: '#contacto' },
];

// Al hover en "Catálogo" — mega-menu desplegable con las 6 categorías
// CTA derecha: carrito [🛒 2] + "Hacer Solicitud"

// NAVBAR CSS:
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  padding: 0 80px;
  height: 72px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background 0.4s, border-color 0.4s;
}
.navbar--scrolled {
  background: var(--bg-overlay);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
}
.navbar__logo {
  font-family: var(--font-serif);
  font-size: 28px; font-weight: 300; font-style: italic;
  color: var(--cream); letter-spacing: -1px;
  text-decoration: none;
}
.navbar__links {
  display: flex; align-items: center; gap: 40px;
  list-style: none;
}
.navbar__link {
  font-family: var(--font-sans); font-size: 13px; font-weight: 400;
  color: var(--text-sec); text-decoration: none; letter-spacing: 0.5px;
  transition: color 0.2s; position: relative;
}
.navbar__link:hover { color: var(--cream); }

/* Sub-menú desplegable */
.submenu {
  position: absolute; top: calc(100% + 20px); left: -20px;
  background: var(--bg-surface);
  border: 1px solid var(--border-mid); border-radius: 12px;
  padding: 8px; min-width: 200px;
  opacity: 0; transform: translateY(-8px);
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.navbar__link:hover .submenu {
  opacity: 1; transform: translateY(0); pointer-events: all;
}
.submenu__item {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 16px; border-radius: 8px;
  font-family: var(--font-sans); font-size: 13px;
  color: var(--text-sec); text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.submenu__item:hover {
  background: var(--bg-elevated); color: var(--cream);
}

/* Buscador en navbar */
.navbar__search {
  display: flex; align-items: center; gap: 8px;
  background: var(--bg-surface); border: 1px solid var(--border);
  border-radius: 100px; padding: 8px 16px;
  font-family: var(--font-sans); font-size: 13px;
  color: var(--text-sec); cursor: pointer;
  transition: border-color 0.2s, width 0.3s;
  width: 160px;
}
.navbar__search:focus-within {
  border-color: var(--border-gold); width: 240px;
}
.navbar__search input {
  background: none; border: none; outline: none;
  font-family: var(--font-sans); font-size: 13px;
  color: var(--cream); width: 100%;
}
.navbar__search input::placeholder { color: var(--text-muted); }

/* Cart badge */
.cart-btn {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 11px;
  color: var(--cream); background: none; border: 1px solid var(--border-mid);
  padding: 8px 16px; border-radius: 100px; cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.cart-btn:hover { border-color: var(--gold); background: var(--gold-pale); }
.cart-badge {
  background: var(--gold); color: var(--bg);
  width: 18px; height: 18px; border-radius: 50%;
  font-size: 10px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
```

---

## 8. HERO SECTION — EDITORIAL NOIR

```tsx
<section className="hero">

  {/* "16:9" GIGANTE watermark — serif italic */}
  <div className="hero__watermark" aria-hidden="true">
    16:9
  </div>

  {/* Imagen del set — sutil detrás */}
  <div className="hero__bg">
    <img src="/images/placeholder.jpg" alt="" aria-hidden="true" />
    <div className="hero__bg-overlay" />
  </div>

  {/* Overlay técnico minimalista */}
  <div className="hero__tech-overlay" aria-hidden="true">
    <span className="hero__timecode">01:42:33:12</span>
    <div className="hero__rec">
      <div className="rec-dot" />
      REC
    </div>
    <span className="hero__fps">24fps · 4K</span>
  </div>

  <div className="hero__content section-container">

    <motion.span className="label-mono" style={{marginBottom: '32px', display:'block'}}>
      Rental Boutique · Santo Domingo, RD
    </motion.span>

    {/* Título en 2 líneas — serif editorial */}
    <RevealText tag="h1" className="hero-title" delay={0.2}>
      Equipa tu
    </RevealText>
    <RevealText tag="h1" className="hero-title hero-title--indent" delay={0.35}>
      próxima visión
    </RevealText>

    {/* Línea decorativa */}
    <motion.div className="hero__line"
      initial={{ width: 0 }} animate={{ width: 120 }}
      transition={{ delay: 1, duration: 0.8 }}
    />

    <motion.p className="hero__sub">
      Cámaras, ópticas, luces y accesorios cinematográficos
      de primera línea. Para producciones que dejan huella.
    </motion.p>

    <motion.div className="hero__actions">
      <MagneticButton className="btn-cream" href="#catalogo">
        Ver Catálogo
      </MagneticButton>
      <MagneticButton className="btn-ghost" href="#nosotros">
        Quiénes Somos →
      </MagneticButton>
    </motion.div>

  </div>

  {/* Scroll indicator */}
  <div className="hero__scroll-indicator">
    <motion.div className="scroll-line"
      animate={{ scaleY: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    />
    <span className="label-mono" style={{fontSize:'9px'}}>SCROLL</span>
  </div>

</section>
```

```css
.hero {
  min-height: 100vh; position: relative; overflow: hidden;
  display: flex; align-items: center;
  background: var(--bg);
}
/* Watermark 16:9 — grande, sutil, serif */
.hero__watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-serif);
  font-size: clamp(200px, 38vw, 520px);
  font-weight: 300; font-style: italic;
  letter-spacing: -12px; line-height: 1;
  color: var(--cream); opacity: 0.05;
  pointer-events: none; user-select: none;
  white-space: nowrap; z-index: 0;
}
.hero__bg { position: absolute; inset: 0; }
.hero__bg img {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.12) grayscale(0.3);
  mix-blend-mode: luminosity;
}
.hero__bg-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(160deg,
    rgba(10,10,10,0.6) 0%,
    rgba(10,10,10,0.3) 50%,
    rgba(10,10,10,0.8) 100%);
}
/* Overlay técnico */
.hero__tech-overlay {
  position: absolute; inset: 0;
  display: flex; align-items: flex-start;
  justify-content: space-between;
  padding: 32px 80px; z-index: 3;
  pointer-events: none;
}
.hero__timecode {
  font-family: var(--font-mono); font-size: 12px;
  color: var(--gold-dim); letter-spacing: 2px;
}
.hero__rec {
  display: flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: 11px;
  color: rgba(239,68,68,0.7); letter-spacing: 3px;
}
.rec-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #EF4444; opacity: 0.8;
  animation: blink 1s ease-in-out infinite;
}
@keyframes blink { 0%,100%{opacity:0.8} 50%{opacity:0.2} }
.hero__fps {
  font-family: var(--font-mono); font-size: 12px;
  color: var(--gold-dim); letter-spacing: 2px;
}
/* Contenido */
.hero__content {
  position: relative; z-index: 4; padding-top: 80px;
}
.hero-title--indent { margin-left: 80px; }
.hero__line {
  height: 1px; background: var(--gold);
  margin: 40px 0; opacity: 0.6;
}
.hero__sub {
  font-family: var(--font-sans); font-size: 16px;
  line-height: 1.8; color: var(--text-sec);
  max-width: 440px; margin-bottom: 48px;
}
.hero__scroll-indicator {
  position: absolute; right: 80px; bottom: 48px;
  display: flex; flex-direction: column;
  align-items: center; gap: 12px; z-index: 4;
}
.scroll-line {
  width: 1px; height: 60px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  transform-origin: top;
}
```

---

## 9. MANIFESTO SECTION — QUIÉNES SOMOS

```tsx
// ID: nosotros
// Fondo: var(--bg-surface)
// Layout: texto izquierda + imagen derecha con marco

<section id="nosotros" className="manifesto">
  <div className="section-container manifesto__grid">

    <div className="manifesto__left">
      <span className="label-mono">Sobre Nosotros</span>

      <RevealText tag="h2" className="section-title" style={{marginTop:'20px'}}>
        Donde la técnica
        sirve al arte
      </RevealText>

      <p className="manifesto__body">
        Somos un rental boutique de equipos cinematográficos
        en República Dominicana. No somos una ferretería de cámaras
        — somos el equipo detrás del equipo.
      </p>
      <p className="manifesto__body">
        Cada producción merece herramientas que estén a la altura
        de su visión. Por eso cubrimos cada área de la producción:
        imagen, óptica, luz, audio y soporte.
      </p>

      <div className="manifesto__stats">
        <div className="mstat">
          <AnimatedCounter number={3411} suffix="+" className="mstat__num" />
          <span className="mstat__label">Seguidores en Instagram</span>
        </div>
        <div className="mstat">
          <span className="mstat__num">SDQ</span>
          <span className="mstat__label">Santo Domingo, RD</span>
        </div>
        <div className="mstat">
          <span className="mstat__num">6</span>
          <span className="mstat__label">Categorías de equipo</span>
        </div>
      </div>
    </div>

    {/* Imagen con marco editorial */}
    <div className="manifesto__right">
      <div className="manifesto__img-frame">
        <img src="/images/placeholder.jpg" alt="Rental 16:9" />
        <div className="manifesto__img-label">
          <span className="label-mono">Plaza Castilla · Av. Abraham Lincoln 609</span>
        </div>
      </div>
    </div>

  </div>
</section>
```

```css
.manifesto { padding: var(--section-padding); background: var(--bg-surface); }
.manifesto__grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 100px; align-items: center;
}
.manifesto__body {
  font-size: 16px; line-height: 1.9; color: var(--text-sec);
  margin-top: 24px;
}
.manifesto__stats {
  display: flex; gap: 48px; margin-top: 56px;
  padding-top: 40px; border-top: 1px solid var(--border);
}
.mstat__num {
  font-family: var(--font-serif); font-size: 40px;
  font-weight: 300; color: var(--cream); display: block;
}
.mstat__label {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--text-sec); display: block; margin-top: 4px;
}
/* Marco editorial de imagen */
.manifesto__img-frame {
  position: relative;
  border: 1px solid var(--border-mid); border-radius: 4px; overflow: hidden;
  aspect-ratio: 4/5;
}
.manifesto__img-frame img {
  width: 100%; height: 100%; object-fit: cover;
  filter: grayscale(0.2) brightness(0.8);
  transition: filter 0.5s;
}
.manifesto__img-frame:hover img { filter: grayscale(0) brightness(0.9); }
.manifesto__img-label {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 16px 20px;
  background: linear-gradient(to top, rgba(10,10,10,0.9), transparent);
}
```

---

## 10. CATALOG SECTION — CON SUB-MENÚ Y BUSCADOR

```tsx
// ID: catalogo

<section id="catalogo">

  {/* Sub-nav sticky */}
  <div className="cat-nav-sticky">
    <div className="section-container cat-nav-inner">

      {/* Buscador */}
      <div className="search-widget">
        <span>🔍</span>
        <input
          type="text"
          placeholder="Buscar equipo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && <button onClick={() => setSearch('')}>✕</button>}
      </div>

      {/* Links de categoría */}
      <nav className="cat-nav-links">
        {categories.map(cat => (
          <a key={cat.id} href={`#${cat.id}`} className="cat-nav-link">
            {cat.label}
          </a>
        ))}
      </nav>

    </div>
  </div>

  {/* Si hay búsqueda activa — mostrar resultados */}
  {search && (
    <div className="section-container search-results">
      <span className="label-mono">{filtered.length} resultados para "{search}"</span>
      <div className="eq-grid">
        {filtered.map(eq => <EquipmentCard key={eq.id} equipment={eq} />)}
      </div>
    </div>
  )}

  {/* Secciones por categoría */}
  {!search && categories.filter(c => c.id !== 'all').map(cat => (
    <div key={cat.id} id={cat.id} className="cat-section section-container">

      {/* Header de sección */}
      <div className="cat-section__header">
        <div className="cat-section__title-group">
          <span className="label-mono">{cat.icon} {cat.id.toUpperCase()}</span>
          <h3 className="cat-title">{cat.label}</h3>
        </div>
        <div className="cat-section__rule" />
        <span className="label-mono">{getCountByCategory(cat.id)} equipos</span>
      </div>

      {/* Watermark 16:9 pequeño por sección */}
      <div className="cat-section__watermark" aria-hidden="true">16:9</div>

      <div className="eq-grid">
        {getByCategory(cat.id).map(eq => (
          <EquipmentCard key={eq.id} equipment={eq} />
        ))}
      </div>

    </div>
  ))}

</section>
```

```css
/* Sub-nav sticky */
.cat-nav-sticky {
  position: sticky; top: 72px; z-index: 90;
  background: var(--bg-overlay); backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.cat-nav-inner {
  display: flex; align-items: center;
  gap: 32px; padding-top: 16px; padding-bottom: 16px;
}
.search-widget {
  display: flex; align-items: center; gap: 8px;
  background: var(--bg-elevated); border: 1px solid var(--border);
  border-radius: 8px; padding: 8px 14px;
  flex-shrink: 0; transition: border-color 0.2s;
}
.search-widget:focus-within { border-color: var(--border-gold); }
.search-widget input {
  background: none; border: none; outline: none;
  font-family: var(--font-sans); font-size: 13px;
  color: var(--cream); width: 180px;
}
.search-widget input::placeholder { color: var(--text-muted); }
.cat-nav-links {
  display: flex; gap: 4px; overflow-x: auto; flex: 1;
}
.cat-nav-link {
  padding: 6px 16px; border-radius: 100px;
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--text-sec); text-decoration: none; white-space: nowrap;
  border: 1px solid transparent;
  transition: all 0.2s;
}
.cat-nav-link:hover {
  color: var(--cream); border-color: var(--border-mid);
}
.cat-nav-link.active {
  color: var(--gold); border-color: var(--border-gold);
  background: var(--gold-pale);
}

/* Sección por categoría */
.cat-section {
  padding: 80px 80px; position: relative; overflow: hidden;
  border-bottom: 1px solid var(--border);
}
.cat-section__header {
  display: flex; align-items: flex-end; gap: 32px; margin-bottom: 56px;
}
.cat-title {
  font-family: var(--font-serif); font-size: clamp(40px, 5.5vw, 72px);
  font-weight: 300; font-style: italic; color: var(--cream);
  letter-spacing: -1px; line-height: 1; margin-top: 6px;
}
.cat-section__rule {
  flex: 1; height: 1px;
  background: linear-gradient(to right, var(--border-mid), transparent);
  margin-bottom: 12px;
}
/* Watermark 16:9 por sección */
.cat-section__watermark {
  position: absolute; right: 60px; top: 40px;
  font-family: var(--font-serif); font-size: 140px;
  font-weight: 300; font-style: italic;
  color: var(--cream); opacity: 0.03;
  letter-spacing: -4px; pointer-events: none;
  user-select: none;
}

/* Grid de equipos */
.eq-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

---

## 11. EQUIPMENT CARD — EDITORIAL

```tsx
// Sin letterbox — imagen limpia y elegante
// Hover: imagen se revela, info aparece desde abajo

<motion.div className="eq-card" whileHover={{ y: -4 }}>
  <div className="eq-card__media">
    <img src={equipment.image} className="eq-card__img" alt={equipment.name} />
    <div className="eq-card__media-overlay" />
    <span className="eq-card__cat-badge">{equipment.category}</span>
    <button className="eq-card__quick-add" onClick={() => addItem(equipment)}>
      {isInCart ? '✓' : '+'}
    </button>
  </div>
  <div className="eq-card__body">
    <div className="eq-card__meta">
      <span className="label-mono" style={{fontSize:'9px'}}>{equipment.category}</span>
    </div>
    <h3 className="eq-card__name">{equipment.name}</h3>
    <p className="eq-card__desc">{equipment.description}</p>
    <div className="eq-card__specs">
      {equipment.specs.map(s => (
        <span key={s} className="spec-tag">{s}</span>
      ))}
    </div>
    <div className="eq-card__footer">
      <span className="eq-card__price">Consultar precio</span>
      <button className="eq-card__cta"
        onClick={() => addItem(equipment)}
        style={isInCart ? {background: '#22C55E'} : {}}>
        {isInCart ? '✓ Agregado' : 'Rentar →'}
      </button>
    </div>
  </div>
</motion.div>
```

```css
.eq-card {
  background: var(--bg-card); border-radius: 8px; overflow: hidden;
  border: 1px solid var(--border);
  transition: border-color 0.3s, box-shadow 0.4s;
}
.eq-card:hover {
  border-color: var(--border-mid);
  box-shadow: var(--shadow-hover);
}
.eq-card__media {
  position: relative; aspect-ratio: 16/9; overflow: hidden;
}
.eq-card__img {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.75) grayscale(0.2);
  transition: transform 0.6s ease, filter 0.5s;
}
.eq-card:hover .eq-card__img {
  transform: scale(1.04);
  filter: brightness(0.9) grayscale(0);
}
.eq-card__media-overlay {
  position: absolute; inset: 0;
  background: var(--gradient-overlay);
}
.eq-card__cat-badge {
  position: absolute; top: 12px; left: 14px;
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 3px; text-transform: uppercase;
  color: var(--gold); background: rgba(10,10,10,0.7);
  padding: 3px 10px; border-radius: 3px;
  border: 1px solid var(--border-gold);
}
.eq-card__quick-add {
  position: absolute; bottom: 12px; right: 14px;
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--gold); color: var(--bg);
  border: none; font-size: 18px; font-weight: 300;
  cursor: pointer; opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}
.eq-card:hover .eq-card__quick-add {
  opacity: 1; transform: scale(1);
}
.eq-card__body { padding: 20px 22px; }
.eq-card__name {
  font-family: var(--font-serif); font-size: 22px; font-weight: 400;
  color: var(--cream); margin: 6px 0 8px; letter-spacing: -0.3px;
}
.eq-card__desc {
  font-size: 13px; line-height: 1.6; color: var(--text-sec); margin-bottom: 14px;
}
.eq-card__specs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.spec-tag {
  font-family: var(--font-mono); font-size: 9px; letter-spacing: 1px;
  color: var(--cream-dim); background: var(--bg-elevated);
  border: 1px solid var(--border); padding: 3px 8px; border-radius: 3px;
}
.eq-card__footer { display: flex; align-items: center; justify-content: space-between; }
.eq-card__price {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 2px; color: var(--text-muted); text-transform: uppercase;
}
.eq-card__cta {
  background: transparent; border: 1px solid var(--border-mid);
  color: var(--cream); font-family: var(--font-sans); font-size: 12px;
  font-weight: 500; padding: 8px 16px; border-radius: 4px;
  cursor: pointer; transition: all 0.2s;
}
.eq-card__cta:hover {
  background: var(--cream); color: var(--bg);
  border-color: var(--cream);
}
```

---

## 12. CART SIDEBAR — MINIMALISTA

```css
.cart-sidebar {
  position: fixed; top: 0; right: 0; width: 400px; height: 100vh;
  background: var(--bg-surface); border-left: 1px solid var(--border-mid);
  z-index: 9990; display: flex; flex-direction: column;
}
.cart-header {
  padding: 28px 32px; border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
}
.cart-header h3 {
  font-family: var(--font-serif); font-size: 24px;
  font-weight: 300; font-style: italic; color: var(--cream);
}
```

---

## 13. HOW IT WORKS SECTION

```tsx
// Fondo: var(--bg)
// 4 pasos con numeración serif grande

const steps = [
  { num: '01', title: 'Explora',    desc: 'Navega por nuestro catálogo y agrega los equipos al carrito.' },
  { num: '02', title: 'Selecciona', desc: 'Especifica fechas, días de renta y modalidad de retiro.' },
  { num: '03', title: 'Solicita',   desc: 'Tu solicitud llega directamente a nuestro WhatsApp.' },
  { num: '04', title: 'Confirma',   desc: 'Coordinamos disponibilidad y retiras en Plaza Castilla.' },
];

.step-num {
  font-family: var(--font-serif);
  font-size: 80px; font-weight: 300; font-style: italic;
  color: var(--cream); opacity: 0.08; line-height: 1;
}
.step-title {
  font-family: var(--font-serif);
  font-size: 28px; font-weight: 400;
  color: var(--cream);
}
```

---

## 14. FOOTER

```
Fondo: var(--bg)
Borde top: 1px solid var(--border-mid)

Logo: "16:9" serif italic grande + "Cine Rentals" en mono pequeño

Col 1: Logo + tagline + IG @16.9cinerentals
Col 2: Catálogo (links por categoría)  
Col 3: Info
        Plaza Castilla, Av. Abraham Lincoln 609, SD
        829-420-7487
        WhatsApp link

© 2025 Rental 16:9 | Cine Rentals. República Dominicana.
Diseñado por NEXIX Tech Studio
```

---

## 15. CSS GLOBAL

```css
*, *::before, *::after {
  box-sizing: border-box; margin: 0; padding: 0; cursor: none !important;
}
html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--gold-dim) var(--bg);
}
body {
  font-family: var(--font-sans); background: var(--bg); color: var(--text);
  overflow-x: hidden; -webkit-font-smoothing: antialiased;
}
::selection { background: var(--gold); color: var(--bg); }

/* Cursor — minimalista punto + ring crema */
.cursor-dot {
  position: fixed; top: 0; left: 0;
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--cream); pointer-events: none; z-index: 99999;
}
.cursor-ring {
  position: fixed; top: 0; left: 0;
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid rgba(237,232,223,0.4);
  pointer-events: none; z-index: 99998;
  transition: width 0.3s, height 0.3s, border-color 0.3s;
}
.cursor-ring.cursor--hover {
  width: 48px; height: 48px;
  border-color: var(--gold);
  background: rgba(201,169,110,0.05);
}

/* Scroll progress — dorado */
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 1px;
  background: var(--gradient-gold);
  z-index: 9997; transform-origin: left;
}

/* Layout */
.section-container {
  max-width: var(--container-width); margin: 0 auto;
  padding: var(--container-padding);
}

/* Botones */
.btn-cream {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--cream); color: var(--bg);
  font-family: var(--font-sans); font-size: 13px; font-weight: 500;
  padding: 14px 32px; border-radius: 4px; text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-cream:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(237,232,223,0.15); }
.btn-ghost {
  font-family: var(--font-sans); font-size: 13px; font-weight: 400;
  color: var(--text-sec); text-decoration: none;
  border-bottom: 1px solid var(--border-mid); padding-bottom: 3px;
  transition: color 0.2s, border-color 0.2s;
}
.btn-ghost:hover { color: var(--cream); border-color: var(--cream); }

/* WhatsApp */
.whatsapp-float {
  position: fixed; bottom: 28px; right: 28px;
  width: 52px; height: 52px; border-radius: 50%;
  background: #25D366; display: flex; align-items: center;
  justify-content: center; font-size: 22px; text-decoration: none;
  box-shadow: 0 4px 20px rgba(37,211,102,0.3); z-index: 9999;
  transition: transform 0.3s;
}
.whatsapp-float:hover { transform: scale(1.1); }

@media (max-width: 768px) {
  * { cursor: auto !important; }
  .cursor-dot, .cursor-ring { display: none; }
  .hero-title--indent { margin-left: 24px; }
  .manifesto__grid { grid-template-columns: 1fr; gap: 48px; }
  .eq-grid { grid-template-columns: 1fr; }
  .cat-nav-sticky { top: 60px; }
  .navbar { padding: 0 24px; }
  .cat-section { padding: 60px 24px; }
}
```

---

## 16. REGLAS ABSOLUTAS

1. `padding: 140px 0` secciones principales
2. `max-width: 1320px; padding: 0 80px` contenedores
3. **NUNCA Tailwind**
4. **"16:9" watermark** en serif italic — hero + cada sección
5. **Navbar con sub-menú** de categorías + buscador
6. **Manifesto** "Quiénes somos" antes del catálogo
7. **Cat-nav sticky** con links a cada sección
8. **Sección por categoría** con título serif italic grande
9. **Cards** con imagen 16:9 + grayscale → color en hover
10. **Cursor** dot crema + ring minimal
11. **Scroll progress** dorado 1px
12. `npm run build` sin errores TypeScript

---

## 17. INSTRUCCIÓN PARA CLAUDE CODE

```
Use this skill https://github.com/Leonxlnx/taste-skill

Lee el CLAUDE.md completo. VERSIÓN 2.0 — desde cero.
Proyecto: Rental 16:9 | Cine Rentals
Concepto: EDITORIAL CINEMA — negro elegante + crema + dorado
Referentes: A24, Dezeen, Wallpaper*, Leica

Paleta: Negro #0A0A0A + Crema #EDE8DF + Dorado #C9A96E
Tipografía: Cormorant Garamond (serif) + DM Sans + DM Mono

ORDEN ESTRICTO:

1. index.html → SEO + Google Fonts (Cormorant Garamond + DM Sans + DM Mono)
   Title: "Rental 16:9 | Cine Rentals — Santo Domingo, RD"

2. index.css → variables completas + reset + cursor crema + scrollbar dorado

3. data/equipment.ts → todos los equipos
   PLACEHOLDER_IMAGE = '/images/placeholder.jpg'

4. hooks/useCart.ts → useState para carrito
5. hooks/useSearch.ts → lógica de búsqueda por nombre/categoría
6. hooks/useMouse.ts + hooks/useScrollProgress.ts

7. components/ScrollProgress.tsx → 1px dorado sin glow

8. components/CustomCursor.tsx
   → dot 5px crema + ring 32px crema
   → NO crosshair — minimalista elegante
   → useSpring suave

9. components/Navbar.tsx
   → Logo: "16:9" en Cormorant italic + "CINE RENTALS" en DM Mono 9px
   → Links con sub-menú de categorías al hover en "Catálogo"
   → Buscador en navbar (input expandible)
   → Cart button con badge contador
   → Transparente → blur oscuro al scroll

10. components/RevealText.tsx → word mask reveal, serif
11. components/MagneticButton.tsx → radio 100px, strength 0.3
12. components/AnimatedCounter.tsx
13. components/WhatsAppButton.tsx → verde flotante

14. components/EquipmentCard.tsx
    → Imagen 16:9, grayscale en estado normal
    → Color al hover
    → Badge dorado de categoría
    → Botón "+" circular dorado aparece en hover
    → Footer: "Consultar precio" + "Rentar →"

15. components/CartSidebar.tsx + components/RentalForm.tsx
    → Sidebar minimal desde la derecha
    → Formulario: nombre, teléfono, fechas, días, notas
    → Botón: "Enviar Solicitud por WhatsApp" → wa.me/18294207487

16. sections/HeroSection.tsx
    → "16:9" watermark GIGANTE en Cormorant serif italic opacity 0.05
      font-size 38vw centrado absolutamente detrás del contenido
    → Imagen placeholder.jpg muy oscura (brightness 0.12)
    → Overlay técnico: timecode + REC + fps en DM Mono dorado
    → Título 2 líneas Cormorant italic: "Equipa tu" / "próxima visión"
      Segunda línea con margin-left 80px (asimetría editorial)
    → Línea dorada decorativa 120px
    → Subtítulo DM Sans 16px crema/dim
    → 2 CTAs: "Ver Catálogo" (crema sólido) + "Quiénes Somos →" (ghost)

    ↓ DETENTE. Muéstrame Hero + Navbar con sub-menú.
    ↓ Espera aprobación.

Continuación:
17. ManifestoSection → quiénes somos, stats, imagen con marco
18. CatalogSection:
    → Cat-nav sticky con buscador + links por categoría
    → Una sub-sección por categoría con título serif italic grande
    → Watermark "16:9" pequeño por sección
    → Grid 3 columnas
19. HowItWorksSection → 4 pasos con numeración serif
20. FooterSection → minimal, crema sobre negro
21. App.tsx → integrar todo con CartSidebar global
22. Copia placeholder.jpg a public/images/
23. npm run build → cero errores TypeScript
```

---

*NEXIX Tech Studio — Rental 16:9 | Cine Rentals V2*
*Concepto: EDITORIAL CINEMA*
*Negro #0A0A0A + Crema #EDE8DF + Dorado #C9A96E*
*Cormorant Garamond + DM Sans + DM Mono*
*Skill: https://github.com/Leonxlnx/taste-skill*