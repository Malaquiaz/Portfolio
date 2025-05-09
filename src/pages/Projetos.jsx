import React from "react";
import ListaProjetos from "../components/ListaProjetos"; // Importando
//import "../styles/Projetos.css"; // Se quiser ter um css para a página Projetos também

function Projetos() {
  return (
    <div className="projetos-container">
      <h1>Meus projetos</h1>
      <p>Alguns Projetos</p>
      <ListaProjetos /> {/* Chamando a lista aqui */}
    </div>
  );
}

export default Projetos;
