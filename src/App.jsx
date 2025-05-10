import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import NavBar from './components/NavBar';
import './styles/App.css'; 

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import ProjetoDetalhes from './pages/ProjetoDetalhes'; //

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        {/* Página só de detalhes do projeto */}
        <Route path="/projeto/:id" element={<ProjetoDetalhes />} />
        
        {/* Página inicial (normal, SEM usar Route para Home) */}
        <Route path="*" element={
          <>
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
        } />
      </Routes>

    </Router>
  );
}

export default App;