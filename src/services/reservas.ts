import type { Reserva } from '../types/reserva';

export const reservasIniciales: Reserva[] = [
  {
    id: 1,
    cliente: 'Carlos Mendoza',
    fecha: '2026-10-03',
    personas: 4,
    estado: 'confirmada',
    notas: 'Mesa cerca de la ventana',
  },
  {
    id: 2,
    cliente: 'Lucía Ramos',
    fecha: '2026-10-04',
    personas: 6,
    estado: 'confirmada',
  },
  {
    id: 3,
    cliente: 'Andrés Gil',
    fecha: '2026-10-04',
    personas: 2,
    estado: 'pendiente',
    notas: 'Celebración de aniversario',
  },
  {
    id: 4,
    cliente: 'Sofía Vargas',
    fecha: '2026-10-05',
    personas: 5,
    estado: 'pendiente',
  },
  {
    id: 5,
    cliente: 'Mateo Flores',
    fecha: '2026-10-05',
    personas: 3,
    estado: 'cancelada',
  },
];
