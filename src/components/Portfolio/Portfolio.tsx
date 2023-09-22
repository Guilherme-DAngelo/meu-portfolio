import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Meu Portfólio 🚀</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <img width= "182px" src={require("../../assets/pokedex.gif")} alt="Imagem do projeto" />          
          <div className="project-links">
            <a href="https://github.com/Guilherme-DAngelo/pokedex-api-com-react" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://pokedex-api-com-react.vercel.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Pokédex</h3>
            <p>Este projeto é uma aplicação web que permite pesquisar Pokémons pelo nome ou ID. Ela oferece uma interface limpa e responsiva onde você pode explorar o vasto mundo dos Pokémons.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>Styled Components</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <img width= "182px" src={require("../../assets/movieflix.gif")} alt="Imagem do projeto" />         
           <div className="project-links">
            <a href="https://github.com/Guilherme-DAngelo/movieflix-api" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>MovieFlix</h3>
            <p>Esse projeto foi criado para ser uma API de filmes, que se comunica perfeitamente entre Frontend e Backend, nela você consegue pesquisar, filtrar, adicionar e deletar filmes do banco de dados.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>ExpressJS</li>
              <li>PostgreSQL</li>
              <li>TypeScript</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <img width= "182px" src={require("../../assets/api-github.gif")} alt="Imagem do projeto" />         
           <div className="project-links">
            <a href="https://github.com/Guilherme-DAngelo/Quest-API-GitHub" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://guilherme-dangelo.github.io/Quest-API-GitHub/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>GitHub Searcher</h3>
            <p>Uma versão mais agradável para ver seu perfil do GitHub, inclui visualização de dados , repositórios, compartilhamento entre outras funcionalidades.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>API</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <img width= "182px" src={require("../../assets/base-apparel.gif")} alt="Imagem do projeto" />         
           <div className="project-links">
            <a href="https://github.com/Guilherme-DAngelo/Base-Apparel-coming-soon-page-challenge" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://guilherme-dangelo.github.io/Base-Apparel-coming-soon-page-challenge/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Página de "Lançamento em breve"</h3>
            <p>É uma página web de "Lançamento em breve" de uma empresa, tem um design limpo, moderno, responsivo e um campo para inserir o e-mail.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <img width= "182px" src={require("../../assets/sneaker.gif")} alt="Imagem do projeto" />          
          <div className="project-links">
            <a href="https://github.com/Guilherme-DAngelo/product-page-sneaker" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://guilherme-dangelo.github.io/product-page-sneaker/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
          </div>
          </header>
          <div className="body">
            <h3>Página de compra de produto</h3>
            <p>Essa é uma página web de uma loja com um produto sendo vendido, com um design responsivo, limpo, moderno e com algumas funcionalidades.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>
     
      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <img width= "182px" src={require("../../assets/portfolio.gif")} alt="Imagem do projeto" />          
          <div className="project-links">
            <a href="https://github.com/Guilherme-DAngelo/my-portfolio" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
              </a>
            
          </div>
          </header>
          <div className="body">
            <h3>Guilherme D'Angelo | Portfólio</h3>
            <p>Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais. É o projeto mais profissional, descritivo e organizado que já construí do zero.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>ReactJS</li>
              <li>Styled Components</li>
              <li>TypeScript</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>



      </div>
    </Container>
  );
}