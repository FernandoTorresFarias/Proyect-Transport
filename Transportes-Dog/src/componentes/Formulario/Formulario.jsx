import "./Formulario.css";

export default function Formulario() {
  return (
    <div className="Formulario-container">
      <div className="formulario">
        <h1>Compra tus pasajes acá ⬇️</h1>

        <div className="inputs-formularios">
          <div className="origen-destino">
            <span>Ciudad de origen</span>
            <input type="text" placeholder="Origen" />
            <span>Ciudad de destino</span>
            <input type="text" placeholder="Destino" />
            <div className="checkbox-ida-vuelta">
              <span>Sólo ida</span>
              <input type="checkbox" name="ida" id="" />
              <span>Ida y vuelta</span>
              <input type="checkbox" name="ida-vuelta" id="" />
            </div>
          </div>

          <div className="fechas">
            <span>Salida</span>
            <input type="date" />
            <span>Regreso</span>
            <input type="date" />
          </div>

          <div className="cant-pasajes">
            <span>Pasajeros</span>
            <select name="cant-pasajes" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>

            <button>Comprar boleto</button>
          </div>
        </div>
      </div>

      <img src="../../media/form-banner.svg" alt="Banner" />
    </div>
  );
}
