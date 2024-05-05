import React, { useState } from 'react';

function Tarea({ tarea }) {
  const [completada, setCompletada] = useState(false);

  const toggleCompletada = () => {
    setCompletada(!completada);
  };

  return (
    <li style={{ textDecoration: completada ? 'line-through' : 'none' }}>
      <span>{tarea.descripcion}</span> - <span>{tarea.estado}</span>
      <button onClick={toggleCompletada}>
        {completada ? 'Marcar como pendiente' : 'Marcar como completada'}
      </button>
    </li>
  );
}

export default Tarea;