import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import AnimatedCounter from '../components/AnimatedCounter';

export default function ManifestoSection() {
  return (
    <section id="quienes-somos" className="manifesto">
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Quienes Somos
        </motion.span>

        <RevealText
          tag="h2"
          className="section-title"
          delay={0.1}
          style={{ marginTop: '16px', marginBottom: '0' }}
        >
          El equipo detras de tu vision
        </RevealText>

        <div className="manifesto__grid" style={{ marginTop: '64px' }}>
          <div className="manifesto__text">
            <motion.p
              className="manifesto__body"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Somos un rental boutique basado en Santo Domingo, enfocado en
              proporcionar equipos cinematograficos de alta gama para
              producciones que exigen calidad. Desde camaras full-frame hasta
              iluminacion profesional, cada pieza de nuestro inventario esta
              seleccionada para elevar tu proyecto al siguiente nivel.
            </motion.p>

            <motion.div
              className="manifesto__stats"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="manifesto__stat">
                <AnimatedCounter
                  target={3411}
                  suffix="+"
                  className="manifesto__stat-num"
                />
                <span className="manifesto__stat-label">Followers</span>
              </div>
              <div className="manifesto__stat">
                <span className="manifesto__stat-num">SDQ</span>
                <span className="manifesto__stat-label">Base</span>
              </div>
              <div className="manifesto__stat">
                <AnimatedCounter
                  target={6}
                  className="manifesto__stat-num"
                />
                <span className="manifesto__stat-label">Categorias</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="manifesto__img-frame"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <img src="/images/placeholder.jpg" alt="Rental 16:9 Studio" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
