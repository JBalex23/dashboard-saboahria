import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Reserva } from '../../types/reserva';

interface ReservaFormProps {
  onGuardar: (nueva: Reserva) => void;
}

export function ReservaForm({ onGuardar }: ReservaFormProps) {
  const [cliente, setCliente] = useState<string>('');
  const [fecha, setFecha] = useState<string>('2026-10-03');
  const [personas, setPersonas] = useState<number>(2);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nuevaReserva: Reserva = {
      id: Date.now(),
      cliente,
      fecha,
      personas: Number(personas),
      estado: 'pendiente',
    };

    onGuardar(nuevaReserva);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="cliente">Cliente</label>
      <input
        id="cliente"
        type="text"
        required
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        placeholder="Nombre del cliente"
      />

      <label htmlFor="fecha">Fecha</label>
      <input
        id="fecha"
        type="date"
        required
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <label htmlFor="personas">Personas</label>
      <input
        id="personas"
        type="number"
        min={1}
        required
        value={personas}
        onChange={(e) => setPersonas(Number(e.target.value))}
      />

      <button type="submit" className="btn">
        Guardar reserva
      </button>
    </form>
  );
}
