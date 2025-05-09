import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/ListaProjetos.css";

function ListaProjetos() {
  const projetos = [
    { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
     { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
      { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
       { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
        { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
         { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
          { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
           { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
            { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },


  ];

  return (
    <div className="projetos-lista">
      {projetos.map((projeto) => (
        <div key={projeto.id} className="projeto-item">
          <span className="projeto-texto">
            {projeto.id} - {projeto.nome}
          </span>
          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projeto-botao"
          >
            <FaArrowRight className="projeto-icone" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default ListaProjetos;
