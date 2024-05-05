 
import ProductoIndividual from './ProductoIndividual';

function ListaProductos({ productos }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.map((producto, index) => (
        <ProductoIndividual key={index} {...producto} />
      ))}

      <hr />
    </div>
  );
}

export default ListaProductos;