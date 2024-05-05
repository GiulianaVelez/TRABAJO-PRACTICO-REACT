

function CalculadoraPropina({total ,porcentajePropina}){
    const propina = (total * porcentajePropina)/100;
     
    return (
     <div>
        <h1>CALCULADORA DE PROPINA</h1>
        <p>total :{total} </p> 
        <p>porcentaje de propina: {porcentajePropina}</p>
        <p>propina : {propina}</p>

       <hr />

     </div>


    );





}

export default CalculadoraPropina ; 