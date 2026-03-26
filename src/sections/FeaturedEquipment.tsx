import { useState } from 'react';
import { motion } from 'framer-motion';
import { equipment, type Equipment } from '../data/equipment';
import EquipmentCard from '../components/EquipmentCard';
import EquipmentDetailModal from '../components/EquipmentDetailModal';
import MagneticButton from '../components/MagneticButton';
import CallToAction from '../components/CallToAction';

interface FeaturedEquipmentProps {
  onAdd: (eq: Equipment) => void;
  isInCart: (id: string) => boolean;
}

export default function FeaturedEquipment({ onAdd, isInCart }: FeaturedEquipmentProps) {
  const featuredItems = equipment.filter(eq => eq.featured);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="featured" id="destacados">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="featured__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="featured__header-left">
            <span className="label-mono">Lo Mejor de Nuestro Inventario</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>
              Equipo Destacado
            </h2>
          </div>
          <div className="featured__header-right">
            <p className="featured__desc">
              Los equipos mas solicitados por las mejores producciones de RD.
              Tecnologia de punta para resultados excepcionales.
            </p>
          </div>
        </motion.div>

        {/* Decorative watermark */}
        <div className="featured__watermark" aria-hidden="true">16:9</div>

        {/* Grid de equipos destacados */}
        <motion.div
          className="featured__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          {featuredItems.map(item => (
            <motion.div key={item.id} variants={itemVariants}>
              <EquipmentCard
                equipment={item}
                onAdd={onAdd}
                inCart={isInCart(item.id)}
                onDetail={setSelectedEquipment}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de Detalle */}
        <EquipmentDetailModal
          equipment={selectedEquipment}
          isOpen={!!selectedEquipment}
          onClose={() => setSelectedEquipment(null)}
          onAdd={onAdd}
          inCart={selectedEquipment ? isInCart(selectedEquipment.id) : false}
        />

        {/* CTA */}
        <div style={{ marginTop: '80px' }}>
          <CallToAction
            title="Explora todo nuestro inventario"
            description="Estos son solo algunos de nuestros equipos destacados. Descubre el catálogo completo organizado por categorías."
            primaryButton={{
              text: 'Ver Catálogo Completo',
              href: '/catalogo/camara'
            }}
            variant="centered"
          />
        </div>

      </div>
    </section>
  );
}
