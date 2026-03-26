import { useState, useMemo } from 'react';
import { equipment } from '../data/equipment';

export function useSearch() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return equipment.filter(eq =>
      eq.name.toLowerCase().includes(q) ||
      eq.category.toLowerCase().includes(q) ||
      eq.description.toLowerCase().includes(q) ||
      eq.specs.some(s => s.toLowerCase().includes(q))
    );
  }, [search]);
  return { search, setSearch, filtered, hasResults: filtered.length > 0 };
}
