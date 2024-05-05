import ItemCarrito from './itemCarrito';

const CarritoCompras = ({ productos }) => {
  const totalGeneral = productos.reduce((total, producto) => {
    return total + (producto.precio * producto.cantidad);
  }, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <ItemCarrito key={index} producto={producto} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>${totalGeneral}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CarritoCompras;