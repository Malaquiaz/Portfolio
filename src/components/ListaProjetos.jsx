import { Link, useParams } from "react-router-dom"; 
import { FaArrowRight } from "react-icons/fa";
import projetos from "../assets/projetos.json";
import "../styles/ListaProjetos.css"; 
import miniaturas from "./miniaturas";

function ListaProjetos() {
  return (
    <div className="projetos-lista">
      {projetos.map((projeto) => (
        <div key={projeto.id} className="projeto-item">
          <img
            src={miniaturas[projeto.imagem]} // usa o campo imagem do JSON para pegar
            alt={`Miniatura de ${projeto.nome}`}
            className="projeto-imagem"
          />

          <div className="projeto-info">
            <span className="projeto-titulo">{projeto.nome}</span>
            {projeto.descricao && (
              <span className="projeto-descricao">{projeto.descricao}</span>
            )}
          </div>
          <Link
            to={`/projeto/${projeto.id}`} // redireciona para a página do projeto
            className="projeto-botao"
          >
            <FaArrowRight className="projeto-icone" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListaProjetos;

