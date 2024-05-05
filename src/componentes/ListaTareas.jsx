import Tarea from './Tarea'

function ListaTareas({ tareas }) {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map(tarea => (
          <Tarea key={tarea.id} tarea={tarea} />
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas