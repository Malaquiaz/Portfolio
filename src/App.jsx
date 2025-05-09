import React from 'react';
import Header from './components/Header';
import './styles/App.css'; // ou o seu principal de estilos

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

function App() {
  return (
    <>
      <Header />
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
