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
        <p><strong>Curso de Extensão</strong> Inteligencia Artificial e Machine Learning com Reconhecimento Facial</p>
        <p><strong>Proficiência em Inglês:</strong> Inglês de nível básico</p>
       
        <p><strong>Você pode acessar meu GitHub em</strong> github.com/Malaquiaz</p>
      </div>
    </div>
  );
}

export default Sobre;

