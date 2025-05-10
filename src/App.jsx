import React from 'react';
import NavBar from './components/NavBar';
import './styles/App.css'; 

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';


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
      <section id="contato">
        <Contato />
      </section>
      
    </>
  );
}

export default App;
