import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import CallToAction from '../components/CallToAction';

const steps = [
  {
    num: '01',
    title: 'Explora el Catalogo',
    desc: 'Navega por categorias y agrega los equipos que necesitas a tu solicitud.',
  },
  {
    num: '02',
    title: 'Especifica las Fechas',
    desc: 'Indica cuando retiras, cuando devuelves y cuantos dias necesitas.',
  },
  {
    num: '03',
    title: 'Envia tu Solicitud',
    desc: 'Tu solicitud llega directamente al WhatsApp de nuestro equipo.',
  },
  {
    num: '04',
    title: 'Confirmamos y Listo',
    desc: 'Te confirmamos disponibilidad y coordinas el retiro en Plaza Castilla.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="steps-section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proceso de Renta
        </motion.span>

        <RevealText
          tag="h2"
          className="section-title"
          delay={0.1}
          style={{ marginTop: '16px', marginBottom: '64px' }}
        >
          Como Funciona
        </RevealText>

        <motion.div
          className="steps-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {steps.map(step => (
            <motion.div
              key={step.num}
              className="step-card"
              variants={cardVariants}
            >
              <div className="step-num">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div style={{ marginTop: '80px' }}>
          <CallToAction
            title="¿Listo para tu próxima producción?"
            description="Explora nuestro catálogo completo y selecciona el equipo que necesitas. Te contactaremos para confirmar disponibilidad."
            primaryButton={{
              text: 'Ver Catálogo Completo',
              href: '/catalogo/camara'
            }}
            secondaryButton={{
              text: 'Contáctanos',
              href: 'https://wa.me/18294207487',
              external: true
            }}
          />
        </div>
      </div>
    </section>
  );
}
