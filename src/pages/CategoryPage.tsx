import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { equipment, categories, type Equipment } from '../data/equipment';
import EquipmentCard from '../components/EquipmentCard';
import EquipmentFilters from '../components/EquipmentFilters';
import EquipmentDetailModal from '../components/EquipmentDetailModal';
import Breadcrumbs from '../components/Breadcrumbs';

interface CategoryPageProps {
  onAdd: (eq: Equipment) => void;
  isInCart: (id: string) => boolean;
}

export default function CategoryPage({ onAdd, isInCart }: CategoryPageProps) {
  const { category } = useParams<{ category: string }>();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  // Validar que la categoría existe
  const categoryInfo = categories.find(c => c.id === category);
  if (!categoryInfo && category !== 'all') {
    return <Navigate to="/" replace />;
  }

  // Filtrar equipos por categoría, búsqueda y ordenar
  let filteredEquipment = equipment;

  // Filtro por categoría
  if (selectedCategory !== 'all') {
    filteredEquipment = filteredEquipment.filter(eq => eq.category === selectedCategory);
  }

  // Filtro por búsqueda
  if (searchQuery) {
    filteredEquipment = filteredEquipment.filter(eq =>
      eq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eq.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Ordenar
  filteredEquipment = [...filteredEquipment].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="category-page">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="category-page__header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-mono">CATÁLOGO</span>
          <h1 className="category-page__title">
            {selectedCategory === 'all' ? 'Todos los Equipos' : categoryInfo?.label}
          </h1>
          <div className="category-page__count">
            {filteredEquipment.length} {filteredEquipment.length === 1 ? 'equipo' : 'equipos'} disponibles
          </div>
        </motion.div>

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Catálogo', href: '/catalogo/camara' },
            { label: selectedCategory === 'all' ? 'Todos' : categoryInfo?.label || '' }
          ]}
        />

        {/* Watermark */}
        <div className="category-page__watermark" aria-hidden="true">16:9</div>

        {/* Filters */}
        <EquipmentFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Grid de equipos */}
        {filteredEquipment.length > 0 ? (
          <motion.div
            className="eq-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${selectedCategory}-${searchQuery}-${sortBy}`}
          >
            {filteredEquipment.map(item => (
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
        ) : (
          <div className="category-page__empty">
            <p>No se encontraron equipos con los filtros seleccionados.</p>
          </div>
        )}

        {/* Modal de Detalle */}
        <EquipmentDetailModal
          equipment={selectedEquipment}
          isOpen={!!selectedEquipment}
          onClose={() => setSelectedEquipment(null)}
          onAdd={onAdd}
          inCart={selectedEquipment ? isInCart(selectedEquipment.id) : false}
        />

      </div>
    </section>
  );
}
