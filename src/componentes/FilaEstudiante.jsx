  

const FilaEstudiante = ({ nombre, calificaciones }) => (
    <tr>
      <td>{nombre}</td>
      <td>{calificaciones.matematicas}</td>
      <td>{calificaciones.quimica}</td>
      <td>{calificaciones.fisica}</td>
    </tr>
);
  
export default FilaEstudiante;