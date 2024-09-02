import './navbar.css'; 
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar-container">
      <img src="../../media/navbar-logo.svg" alt="Logo" />
      
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="">Destinos</a></li>
          <li><a href="">Comprar pasajes</a></li>  
          <li><a href="">Beneficios</a></li>  
          <li><a href="">Nosotros</a></li>  
        </ul>  
      </div>
    </div>
  );
}