import { useState, useCallback, useMemo } from 'react';
import type { Equipment } from '../data/equipment';

export interface CartItem {
  equipment: Equipment;
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((equipment: Equipment) => {
    setItems(prev => {
      const existing = prev.find(i => i.equipment.id === equipment.id);
      if (existing) {
        return prev.map(i =>
          i.equipment.id === equipment.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { equipment, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.equipment.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.equipment.id !== id));
      return;
    }
    setItems(prev =>
      prev.map(i =>
        i.equipment.id === id ? { ...i, quantity: qty } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const toggleCart = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const isInCart = useCallback(
    (id: string) => items.some(i => i.equipment.id === id),
    [items]
  );

  return {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    totalItems,
    isInCart,
  };
}
