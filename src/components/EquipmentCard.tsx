import { motion } from 'framer-motion';
import type { Equipment } from '../data/equipment';
import { categories } from '../data/equipment';

interface EquipmentCardProps {
  equipment: Equipment;
  onAdd: (eq: Equipment) => void;
  inCart: boolean;
  onDetail?: (eq: Equipment) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

function getCategoryLabel(cat: string) {
  return categories.find(c => c.id === cat)?.label || cat;
}

export default function EquipmentCard({ equipment, onAdd, inCart, onDetail }: EquipmentCardProps) {
  return (
    <motion.div
      className="eq-card"
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onClick={() => onDetail && onDetail(equipment)}
      style={{ cursor: onDetail ? 'pointer' : 'default' }}
    >
      <div className="eq-card__frame">
        <img src={equipment.image} alt={equipment.name} className="eq-card__img" />
        <div className="eq-card__img-overlay" />
        <span className="eq-card__cat">{getCategoryLabel(equipment.category)}</span>
        <button
          className={`eq-card__quick-add${inCart ? ' eq-card__quick-add--added' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onAdd(equipment);
          }}
        >
          {inCart ? '\u2713' : '+'}
        </button>
      </div>

      <div className="eq-card__body">
        <h3 className="eq-card__name">{equipment.name}</h3>
        <div className="eq-card__specs">
          {equipment.specs.map(spec => (
            <span key={spec} className="spec-tag">{spec}</span>
          ))}
        </div>
        <div className="eq-card__footer">
          <span className="eq-card__price">Consultar precio</span>
          <button
            className="eq-card__cta"
            onClick={(e) => {
              e.stopPropagation();
              onAdd(equipment);
            }}
          >
            {inCart ? 'Agregado' : 'Rentar \u2192'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
