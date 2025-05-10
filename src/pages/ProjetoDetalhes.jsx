import { useState } from "react";
import { useParams } from "react-router-dom";
import projetos from "../assets/projetos.json";
import "../styles/ProjetoDetalhes.css";
import capturas from "../assets/capturas";

function ProjetoDetalhes() {
  const { id } = useParams();
  const projeto = projetos.find((p) => p.id === parseInt(id));

  const [imagemAmpliada, setImagemAmpliada] = useState(null);

  if (!projeto) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div className="projeto-detalhes">
      <h1>{projeto.nome}</h1>
      <p>{projeto.descricao}</p>

      {projeto.capturasDeTela.length > 0 && (
        <div className="capturas">
          <h2>Capturas de Tela</h2>
          <div className="captura-grid">
            {projeto.capturasDeTela.map((img, index) => (
              <img
                key={index}
                src={capturas[img]}
                alt={`Captura de tela ${index + 1}`}
                className="captura-img"
                onClick={() => setImagemAmpliada(capturas[img])}
              />
            ))}
          </div>
        </div>
      )}

      {imagemAmpliada && (
        <div className="image-modal" onClick={() => setImagemAmpliada(null)}>
          <img src={imagemAmpliada} alt="Imagem ampliada" />
        </div>
      )}

      {projeto.video && (
        <div className="video">
          <h2>Vídeo</h2>
          <iframe
            width="560"
            height="315"
            src={projeto.video}
            title="Vídeo do projeto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="link-repo">
        <a
          href={projeto.linkRepositorio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Repositório
        </a>
      </div>
    </div>
  );
}

export default ProjetoDetalhes;