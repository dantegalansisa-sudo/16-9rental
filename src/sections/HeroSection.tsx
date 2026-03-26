import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, 60]);

  const brands = [
    { name: 'Sony', icon: '📹' },
    { name: 'Canon', icon: '📷' },
    { name: 'ARRI', icon: '🎬' },
    { name: 'Blackmagic', icon: '🎥' },
    { name: 'Aputure', icon: '💡' },
  ];

  // Timecode animation
  const [timecode, setTimecode] = useState('01:42:33:12');
  useEffect(() => {
    let h = 1, m = 42, s = 33, f = 12;
    const interval = setInterval(() => {
      f++;
      if (f >= 24) { f = 0; s++; }
      if (s >= 60) { s = 0; m++; }
      if (m >= 60) { m = 0; h++; }
      setTimecode(
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:${String(f).padStart(2, '0')}`
      );
    }, 1000 / 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Watermark */}
      <div className="hero__watermark" aria-hidden="true">16:9</div>

      {/* Decorative text - esquina superior derecha */}
      <motion.div
        className="hero__decorative-text"
        aria-hidden="true"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <span>CINEMA</span>
        <span>RENTALS</span>
        <span>2025</span>
      </motion.div>

      {/* Background - Video */}
      <div className="hero__bg">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ scale: bgScale }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </motion.video>
        <div className="hero__overlay" />
      </div>

      {/* Tech overlay */}
      <div className="hero__tech" aria-hidden="true">
        <div className="hero__tech-top">
          <span className="hero__timecode">{timecode}</span>
          <div className="hero__rec">
            <div className="hero__rec-dot" />
            <span>REC</span>
          </div>
          <span className="hero__fps">24fps &middot; 4K</span>
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="hero__content section-container"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rental Boutique &middot; Santo Domingo, RD
        </motion.span>

        <div style={{ marginTop: '24px' }}>
          <RevealText tag="h1" className="hero-title hero-title--xlarge" delay={0.3}>
            Equipa tu
          </RevealText>
          <div className="hero__title-indent">
            <RevealText tag="h1" className="hero-title hero-title--xlarge" delay={0.45} style={{ fontStyle: 'italic' }}>
              proxima vision
            </RevealText>
          </div>
        </div>

        {/* Hero Tagline - Frase impactante */}
        <motion.div
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <span className="hero__tagline-text">
            Donde la tecnología cinematográfica
            <br />
            se encuentra con tu creatividad
          </span>
        </motion.div>

        {/* Brand badges */}
        <motion.div
          className="hero__brands"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <span className="hero__brands-label">Trabajamos con las mejores marcas</span>
          <div className="hero__brands-list">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                className="brand-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 + (i * 0.08), duration: 0.4 }}
              >
                <span className="brand-badge__icon">{brand.icon}</span>
                <span className="brand-badge__name">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Inline stats */}
        <motion.div
          className="hero__inline-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="hero-stat">
            <span className="hero-stat__num">500+</span>
            <span className="hero-stat__label">Producciones</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat__num">3,411</span>
            <span className="hero-stat__label">Seguidores</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat__num">50+</span>
            <span className="hero-stat__label">Equipos Premium</span>
          </div>
        </motion.div>

        <motion.div
          className="hero__gold-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          Renta los mejores equipos cinematograficos de RD.
          Camaras, opticas, luces y mas -- para producciones que dejan huella.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
