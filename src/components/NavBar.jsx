import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      // Se não está na home, volta para a home primeiro
      navigate(`portfolio/#${id}`);
      // Deixar o scroll para depois de voltar para home
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    } else {
      // Se já está na home
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => handleNavigation('home')}>Home</li>
        <li onClick={() => handleNavigation('projetos')}>Projetos</li>
        <li onClick={() => handleNavigation('sobre')}>Sobre</li>
        <li onClick={() => handleNavigation('contato')}>Contato</li>
      </ul>
    </nav>
  );
}

export default NavBar;
