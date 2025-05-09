import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
