import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/ListaProjetos.css"; // já está certo

import cinza1 from '../assets/project_icons/cinza1.png';
import azul1 from '../assets/project_icons/azul1.png';
import amarelo2 from '../assets/project_icons/amarelo2.png';

function ListaProjetos() {
  const projetos = [
    { id: 1, nome: "Projeto", link: "https://github.com/Malaquiaz/projeto1", imagem: cinza1, descricao: "Testezinho" },
    { id: 2, nome: "Semáforo", link: "https://github.com/Malaquiaz/projeto2", imagem: azul1, descricao: "Controlador de semáforo feito com arduíno" },
    { id: 3, nome: "QRCode App", link: "https://github.com/Malaquiaz/projeto3", imagem: amarelo2, descricao: "Leitor QR code para validação de ingressos em eventos" },
    // continue...
  ];

  return (
  <div className="projetos-lista">
    {projetos.map((projeto) => (
      <div key={projeto.id} className="projeto-item">
        <img src={projeto.imagem} alt={`Imagem de ${projeto.nome}`} className="projeto-imagem" />
        
        <div className="projeto-info"> {/* NOVA DIV agrupando */}
          <span className="projeto-titulo">
            {projeto.nome}
          </span>
          {projeto.descricao && ( // descrição só se existir
            <span className="projeto-descricao">
              {projeto.descricao}
            </span>
          )}
        </div>

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
