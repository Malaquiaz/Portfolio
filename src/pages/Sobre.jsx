import Foto from '../assets/fotografia.jpg';

function Sobre() {
  return (
    <div className="sobre">
      <h1>Sobre mim</h1>
      <div className="sobre-info">
        <img 
                src={Foto}
                className="sobre-imagem"
        />
        <p><strong> Apresentação: </strong> Olá, eu me chamo Higor Vieira da Franca. Sou estudante de Desenvolvimento de Software Multiplataforma na Fatec Itaquera (2022 - 2025).</p>
        <p><strong>Curso de Extensão:</strong> Inteligencia Artificial e Machine Learning com Reconhecimento Facial na Faculdade de Tecnologia de Itaquera, no período de 16 de setembro a 2 de dezembro de 2023</p>
        <p><strong>Proficiência em Inglês:</strong> Inglês de nível básico</p>
       
        <p><strong>Você pode acessar meu GitHub em: </strong>{" "}
          <a href="https://github.com/Malaquiaz" target="_blank" rel="noopener noreferrer">
            github.com/Malaquiaz
          </a>
        </p>
      </div>
    </div>
  );
}

export default Sobre;

