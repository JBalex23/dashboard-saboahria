import type { EstadoReserva } from '../../types/reserva';

type FiltroOpcion = EstadoReserva | 'todas';

interface FiltrosProps {
  valor: FiltroOpcion;
  onCambiar: (nuevo: FiltroOpcion) => void;
}

const OPCIONES: FiltroOpcion[] = ['todas', 'pendiente', 'confirmada', 'cancelada'];

export function Filtros({ valor, onCambiar }: FiltrosProps) {
  return (
    <div className="filtros">
      {OPCIONES.map((opcion) => (
        <button
          key={opcion}
          type="button"
          className={opcion === valor ? 'chip activo' : 'chip'}
          onClick={() => onCambiar(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
}
