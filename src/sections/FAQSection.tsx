import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cómo funciona el proceso de renta?',
    answer: 'Navega por nuestro catálogo, agrega los equipos que necesitas a tu solicitud, especifica las fechas y envíanos tu solicitud por WhatsApp. Te contactaremos para confirmar disponibilidad y coordinar el retiro en Plaza Castilla.'
  },
  {
    question: '¿Dónde puedo retirar el equipo?',
    answer: 'Todos los equipos se retiran y devuelven en nuestra ubicación en Plaza Castilla, Av. Abraham Lincoln 609, Santo Domingo, República Dominicana.'
  },
  {
    question: '¿Cuál es el tiempo mínimo de renta?',
    answer: 'El tiempo mínimo de renta es de 1 día. Ofrecemos precios especiales para rentas de varios días y producciones largas.'
  },
  {
    question: '¿Qué necesito para rentar equipo?',
    answer: 'Necesitas una cédula o pasaporte vigente y un depósito de garantía que varía según el equipo. El depósito se devuelve al entregar el equipo en perfecto estado.'
  },
  {
    question: '¿Ofrecen soporte técnico durante la renta?',
    answer: 'Sí, ofrecemos soporte técnico durante todo el periodo de renta. Puedes contactarnos por WhatsApp para cualquier consulta sobre el uso del equipo.'
  },
  {
    question: '¿Qué pasa si se daña el equipo?',
    answer: 'El equipo está asegurado. En caso de daño por uso normal, no hay cargos adicionales. Los daños por negligencia o mal uso pueden tener un costo adicional según el caso.'
  },
  {
    question: '¿Puedo extender mi renta?',
    answer: 'Sí, puedes extender tu renta sujeto a disponibilidad. Contáctanos antes de la fecha de devolución para coordinar la extensión.'
  },
  {
    question: '¿Hacen entregas a domicilio?',
    answer: 'Para producciones grandes o rentas extensas podemos coordinar entregas. Contáctanos para discutir opciones y costos de entrega.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="faq__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-mono">Preguntas Frecuentes</span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>
            ¿Tienes dudas?
          </h2>
          <p className="faq__subtitle">
            Encuentra respuestas a las preguntas más comunes sobre nuestro servicio de renta.
          </p>
        </motion.div>

        {/* Watermark */}
        <div className="faq__watermark" aria-hidden="true">16:9</div>

        {/* FAQ List */}
        <motion.div
          className="faq__list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
              }
            }
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item${openIndex === index ? ' faq-item--open' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <button
                className="faq-item__question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="faq-item__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.25, delay: 0.1 }
                      }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.2 }
                      }
                    }}
                  >
                    <div className="faq-item__answer-content">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="faq__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>¿No encuentras lo que buscas?</p>
          <a
            href="https://wa.me/18294207487"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
