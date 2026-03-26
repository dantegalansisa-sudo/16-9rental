import { motion } from 'framer-motion';
import { categories } from '../data/equipment';

interface EquipmentFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'name' | 'category';
  onSortChange: (sort: 'name' | 'category') => void;
}

export default function EquipmentFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange
}: EquipmentFiltersProps) {
  return (
    <motion.div
      className="equipment-filters"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Search */}
      <div className="filter-group">
        <label className="filter-label">Buscar</label>
        <div className="search-input">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              className="search-clear"
              onClick={() => onSearchChange('')}
              aria-label="Limpiar búsqueda"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="filter-group">
        <label className="filter-label">Categoría</label>
        <div className="filter-pills">
          <button
            className={`filter-pill${selectedCategory === 'all' ? ' active' : ''}`}
            onClick={() => onCategoryChange('all')}
          >
            Todas
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-pill${selectedCategory === cat.id ? ' active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="filter-group">
        <label className="filter-label">Ordenar por</label>
        <select
          className="filter-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as 'name' | 'category')}
        >
          <option value="name">Nombre</option>
          <option value="category">Categoría</option>
        </select>
      </div>
    </motion.div>
  );
}
