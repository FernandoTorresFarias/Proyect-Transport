import './Formulario.css';

const Formulario = () => {
  return (
    <div className="form-container">
      <h2>Comprá tus pasajes acá</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Ciudad de origen</label>
            <input type="text"  placeholder="¿Desde dónde viajas?" />
          </div>
          <div className="form-group">
            <label>Salida</label>
            <input type="date" disabled/>
          </div>
          <div className="form-group">
            <label>Pasajeros</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Ciudad de destino</label>
            <input type="text" placeholder="¿Hasta dónde viajas?" />
          </div>
          <div className="form-group">
            <label>Regreso</label>
            <input type="date" disabled />
          </div>
          <div className="form-group radio-group">
            <label>
                Solo Ida
              <input type="radio" name="trip-type" value="solo-ida" checked />
            </label>
            <label>
                Ida y Vuelta
              <input type="radio" name="trip-type" value="ida-vuelta" />
            </label>
          </div>
        </div>
        <div className="form-row">
          <button type="submit" className="btn-search">Buscar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
