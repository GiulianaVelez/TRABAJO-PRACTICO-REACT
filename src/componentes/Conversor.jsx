function Conversor({ celsius }) {
    let far = (celsius * 9/5) + 32;
  
    return (
      <div>
        <h1>CONVERSOR DE TEMPERATURA</h1>
        <p>Celsius: {celsius}</p>
        <p>Fahrenheit: {far}</p>
        <hr />
      </div>
    );
  }
  
  export default Conversor;