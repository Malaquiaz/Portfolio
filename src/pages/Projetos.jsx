import React from "react";
import ListaProjetos from "../components/ListaProjetos"; 


function Projetos() {
  return (
    <div className="projetos-container">
      <div className="projetos-texto">
      <h1>Meus projetos</h1>
      <p>A lista abaixo contém alguns dos projetos feitos durante minha formação</p>
      </div>
      <ListaProjetos /> 
    </div>
  );
}

export default Projetos;
