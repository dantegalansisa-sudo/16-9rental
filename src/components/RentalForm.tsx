import { useState } from 'react';
import type { CartItem } from '../hooks/useCart';

interface RentalFormProps {
  items: CartItem[];
  onSent: () => void;
}

export default function RentalForm({ items, onSent }: RentalFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [days, setDays] = useState(1);
  const [notes, setNotes] = useState('');
  const [pickup, setPickup] = useState<'local' | 'delivery'>('local');

  const buildMessage = () => {
    let msg = `*SOLICITUD DE RENTA -- Rental 16:9*\n\n`;
    msg += `*Cliente:* ${name}\n`;
    msg += `*Telefono:* ${phone}\n\n`;
    msg += `*EQUIPOS SOLICITADOS:*\n`;
    items.forEach(item => {
      msg += `- ${item.equipment.name} x ${item.quantity} unidad(es)\n`;
    });
    msg += `\n*Fecha de retiro:* ${pickupDate}\n`;
    msg += `*Fecha de devolucion:* ${returnDate}\n`;
    msg += `*Dias de renta:* ${days} dia(s)\n`;
    msg += `*Modalidad:* ${pickup === 'local' ? 'Retiro en local' : 'Delivery'}\n`;
    if (notes) msg += `*Notas:* ${notes}\n`;
    msg += `\n_Enviado desde rental169.com_`;
    return `https://wa.me/18294207487?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !pickupDate || !returnDate) return;
    window.open(buildMessage(), '_blank');
    onSent();
  };

  return (
    <form className="rental-form" onSubmit={handleSubmit}>
      <label className="form-label">Datos de contacto</label>
      <input
        className="form-input"
        placeholder="Tu nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="form-input"
        placeholder="Telefono / WhatsApp"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
      />

      <label className="form-label">Fechas</label>
      <div className="form-row">
        <input
          className="form-input"
          type="date"
          value={pickupDate}
          onChange={e => setPickupDate(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="date"
          value={returnDate}
          onChange={e => setReturnDate(e.target.value)}
          required
        />
      </div>

      <label className="form-label">Dias de renta</label>
      <div className="days-counter">
        <button type="button" className="days-btn" onClick={() => setDays(Math.max(1, days - 1))}>
          {'\u2212'}
        </button>
        <span className="days-value">{days}</span>
        <button type="button" className="days-btn" onClick={() => setDays(days + 1)}>+</button>
      </div>

      <label className="form-label">Modalidad</label>
      <div className="toggle-row">
        <button
          type="button"
          className={`toggle-btn${pickup === 'local' ? ' toggle-btn--active' : ''}`}
          onClick={() => setPickup('local')}
        >
          Retiro en local
        </button>
        <button
          type="button"
          className={`toggle-btn${pickup === 'delivery' ? ' toggle-btn--active' : ''}`}
          onClick={() => setPickup('delivery')}
        >
          Delivery
        </button>
      </div>

      <textarea
        className="form-input"
        placeholder="Notas adicionales (opcional)"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        rows={3}
        style={{ resize: 'none' }}
      />

      <button type="submit" className="send-btn">
        Enviar Solicitud
      </button>
    </form>
  );
}
