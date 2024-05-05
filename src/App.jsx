import ListaProductos from "./componentes/ListaProductos";
import CalculadoraPropina from "./componentes/CalculadoraPropina";
import Conversor from "./componentes/Conversor";
import HolaMundo from "./componentes/HolaMundo";
import ListaUsuarios from "./componentes/ListaUsuarios";
import Producto from "./componentes/Producto";
import Relog from "./componentes/Relog";
import TablaCalificaciones from "./componentes/TablaCalificaciones";
import CarritoCompras from "./componentes/CarritoCompras";
import ListaTareas from "./componentes/ListaTareas";
import React, { useState } from 'react';




function App() {
  
  //conversor
  const hora = 10;
  const minutos = 30 ;

  //lista de usuarios
  let nombres = ["Juan", "María", "Carlos", "Laura", "Giuliana"];

  //producto
  const elemento = [
    { nombre: "BICICLETA", precio: "$500.000", imagen:"https://acdn.mitiendanube.com/stores/259/641/products/regal-negro-celeste-9c15e71610208e394916987841964166-640-0.png" }
  
  ]


  //listadeProductos

  let productos = [
    {
      "nombre": "telefono",
      "precio": "$300000",
      "descripcion": "Teléfono Celular Tcl 408 (6+64) Midnight Blue Rva Color Azul"
    },
    {
      "nombre": "Laptop",
      "precio": "$800000",
      "descripcion": "Notebook HP 14-DQ0515LA Intel Celeron 4GB RAM 256GB SSD 14” HD Webcam HD"
    }, 
    {
      "nombre": "Auriculares",
      "precio": 70000,
      "descripcion": "Auriculares Jbl Wave Buds Tws Negros Color Negro"
    }
  ]


  //estudiantes
  let estudiantes = [
    {
      "nombre": "Lorenzo",
      "calificaciones": {
        "matematicas": 70,
        "quimica": 90,
        "fisica": 75
      }
    },
    {
      "nombre": "Oriana",
      "calificaciones": {
        "matematicas": 95,
        "quimica": 80,
        "fisica": 85
      }
    },
    {
      "nombre": "Dilan",
      "calificaciones": {
        "matematicas": 60,
        "quimica": 75,
        "fisica": 80
      }
    }
  ];


  //carrito _productos

  let carritoData = {
    "productos": [
      {
        "nombre": "Camiseta",
        "precio": 20,
        "cantidad": 2
      },
      {
        "nombre": "Pantalones",
        "precio": 35,
        "cantidad": 1
      },
      {
        "nombre": "Zapatos",
        "precio": 50,
        "cantidad": 1
      }
    ]
  };


 //lista de tareas 

 const [tareas, setTareas] = useState([
  {
    "id": 1,
    "descripcion": "Hacer las compras en el supermercado",
    "estado": "pendiente"
  },
  {
    "id": 2,
    "descripcion": "realizar trabajo practico",
    "estado": "en progreso"
  },
  {
    "id": 3,
    "descripcion": "Llamar a mama ",
    "estado": "pendiente"
  },
  {
    "id": 4,
    "descripcion": "Acomodar la casa",
    "estado": "completada"
  }     

  ]);

  
  return (
    <>
        <div>
          <HolaMundo/>
          <Relog hora={hora} minutos={minutos} />
          <Conversor celsius={30}/>
          <ListaUsuarios usuarios ={nombres}/>
          <Producto producto={elemento}/>
          <CalculadoraPropina total={20000} porcentajePropina={20}/>
          <ListaProductos productos = {productos}  />
          <ListaTareas tareas={tareas} />
          <TablaCalificaciones estudiantes= {estudiantes}/>
          <CarritoCompras productos ={carritoData.productos}/>
         
        </div>
        
    </>
  )
}

export default App



