import "./contenidos.css"


function content() {
  return (
    <div>
     
     <div id="Title">
      <h3>Comprá tus pasajes acá</h3>
     </div>
     
     <div id="Origen-Destino">
      <p>Ciudad de Origen:</p>
      <br />
      <input type="text" />
      <br /> 
      <p>Ciudad de Destino:</p>
      <br /> 
      <input type="text" />
     </div>

     <div id="CheckButtons">
     <p>Solo Ida:</p> 
      <input type="checkbox"  />
      <br />
      <p>Ida y Vuelta:</p>
      <input type="checkbox"  />
     </div>


     <div id="Fechas">
      <p>Salida:</p>
      <br />
      <input type="date"  />
      <br />
      <p>Regreso:</p>
      <br />
      <input type="date" />
     </div>

     <div id="Pasajeros">
        <p>Pasajeros:</p>
        <br />
      <select  id="seleccion">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
      </select>
      <br /> <br />
     </div>



  
    
      <button id="Boton"> Comprar Pasaje</button>
  

    </div>
  )
}

export default content