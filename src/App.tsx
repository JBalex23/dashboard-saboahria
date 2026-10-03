import { useEffect, useState } from 'react';
import type { EstadoReserva, Reserva } from './types/reserva';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { MetricCard } from './components/MetricCard';
import { Modal } from './components/Modal';
import { Filtros } from './features/reservas/Filtros';
import { ReservasTable } from './features/reservas/ReservasTable';
import { ReservaForm } from './features/reservas/ReservaForm';
import { reservasIniciales } from './services/reservas';
import { totalPersonas } from './lib/reservas';

export default function App() {
  const [reservas, setReservas] = useState<Reserva[]>(() => {
    const guardadas = localStorage.getItem('reservas');
    if (guardadas) {
      try {
        return JSON.parse(guardadas) as Reserva[];
      } catch {
        return reservasIniciales;
      }
    }
    return reservasIniciales;
  });

  const [modalAbierto, setModalAbierto] = useState<boolean>(false);
  const [filtro, setFiltro] = useState<EstadoReserva | 'todas'>('todas');

  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservas));
  }, [reservas]);

  function agregar(nueva: Reserva) {
    setReservas((prev) => [...prev, nueva]);
    setModalAbierto(false);
  }

  const reservasVisibles =
    filtro === 'todas'
      ? reservas
      : reservas.filter((reserva) => reserva.estado === filtro);

  const confirmadas = reservas.filter(
    (reserva) => reserva.estado === 'confirmada'
  ).length;

  const pendientes = reservas.filter(
    (reserva) => reserva.estado === 'pendiente'
  ).length;

  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Topbar onNueva={() => setModalAbierto(true)} />
        <section className="metrics">
          <MetricCard titulo="Reservas" valor={reservas.length} />
          <MetricCard titulo="Confirmadas" valor={confirmadas} />
          <MetricCard titulo="Pendientes" valor={pendientes} />
          <MetricCard
            titulo="Personas"
            valor={totalPersonas(reservas)}
            detalle="en total"
          />
        </section>
        <Filtros valor={filtro} onCambiar={setFiltro} />
        <ReservasTable reservas={reservasVisibles} />
        {modalAbierto && (
          <Modal titulo="Nueva reserva" onCerrar={() => setModalAbierto(false)}>
            <ReservaForm onGuardar={agregar} />
          </Modal>
        )}
      </main>
    </div>
  );
}
