import React from 'react';
import NavBar from './components/NavBar';
import './styles/App.css'; // ou o seu principal de estilos

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

function App() {
  return (
    <>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="projetos">
        <Projetos />
      </section>
      <section id="sobre">
        <Sobre />
      </section>
    </>
  );
}

export default App;
