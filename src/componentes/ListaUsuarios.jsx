function ListaUsuarios({ usuarios }) {
    return (
      <div>
        <h1>LISTA DE USUARIOS</h1>
        {usuarios.map((nombre, index) => (
          <div key={index}>{nombre}</div>
        ))}
        <hr />
      </div>
    );
  }
  
  export default ListaUsuarios;
  