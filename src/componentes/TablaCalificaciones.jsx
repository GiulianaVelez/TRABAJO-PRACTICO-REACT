

import FilaEstudiante from './FilaEstudiante';

const TablaCalificaciones = ({ estudiantes }) => (
  <div>
    <h2>Tabla de Calificaciones</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Matemáticas</th>
          <th>quimica</th>
          <th>fisica</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map((estudiante, index) => (
          <FilaEstudiante key={index} {...estudiante} />
        ))}
      </tbody>
    </table>
  </div>
);

export default TablaCalificaciones;