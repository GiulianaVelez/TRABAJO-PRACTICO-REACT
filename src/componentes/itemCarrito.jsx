const ItemCarrito = ({ producto }) => {
    const subtotal = producto.precio * producto.cantidad;
  
    return (
      <tr>
        <td>{producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>{producto.cantidad}</td>
        <td>${subtotal}</td>
      </tr>
    );
  };
  
  export default ItemCarrito;