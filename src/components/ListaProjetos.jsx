import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/ListaProjetos.css";

function ListaProjetos() {
  const projetos = [
    { id: 1, nome: "aishjdiasd", link: "https://github.com/seuusuario/projeto1" },
    { id: 2, nome: "aosuhdaouis", link: "https://github.com/seuusuario/projeto2" },
    { id: 3, nome: "aosudhauoisd", link: "https://github.com/seuusuario/projeto3" },
    { id: 4, nome: "ashjdouiahsd", link: "https://github.com/seuusuario/projeto4" },
    { id: 5, nome: "aiushdiauysd", link: "https://github.com/seuusuario/projeto5" },
    { id: 6, nome: "aoushdauiosd", link: "https://github.com/seuusuario/projeto6" },
    { id: 7, nome: "asdau8sd", link: "https://github.com/seuusuario/projeto7" },
    // adicione mais projetos se quiser testar o scroll
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
