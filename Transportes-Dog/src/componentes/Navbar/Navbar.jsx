import './Navbar.css'; 

export default function Navbar() {
  return (
    <div className="Navbar-container">
      <img src="../../media/navbar-logo.svg" alt="Logo" />
      <div className="links">
        <ul>
          <li><a href="">Destinos</a></li>
          <li><a href="">Comprar pasajes</a></li>  
          <li><a href="">Contacto</a></li>  
          <li><a href="">Beneficios</a></li>  
        </ul>  
      </div>
    </div>
  )
}
