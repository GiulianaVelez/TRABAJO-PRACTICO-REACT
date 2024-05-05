

const Producto = ({ producto }) => (
    <div>
      <h1>TARJETA PRODUCTO</h1>
      {producto.map((item, index) => (
        <div key={index}>
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio}</p>
          <img src={item.imagen} alt={item.nombre} />
        </div>
      ))}
      <hr/>
    </div>
  );
  
  export default Producto;