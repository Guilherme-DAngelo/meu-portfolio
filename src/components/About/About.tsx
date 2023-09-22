import { Container } from "./styles";
import cssIcon from "../../assets/css-icon.svg";
import expressIcon from "../../assets/express-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import postgresqlIcon  from "../../assets/postgresql.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mim 🧑‍💻</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Me chamo Guilherme D'Angelo, sou Desenvolvedor Web com uma grande paixão por programação. Sou apaixonado por entregar soluções que agregam na vida das pessoas e que ao mesmo tempo sejam complexas e me desafiem. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Desenvolvo sites e aplicações utilizando HTML, CSS, JavaScript e TypeScript. Tenho familiaridade em desenvolver layouts, tanto de Frontend quanto de Backend, que me fornecem. Estou sempre me aprimorando e aprendendo mais a cada projeto que colocam em minhas mãos.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Sou uma pessoa dedicada que tem facilidade para me comunicar e trabalhar em equipe, pensamento crítico, analítico, autonomia, proativo, orientado a resultados e sempre busco alcançar a melhor versão de mim mesmo.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Aqui estão as minhas principais habilidades:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={nodeIcon} alt="NodeJS" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={expressIcon} alt="ExpressJS" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={postgresqlIcon} alt="PostgreSQL" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={typescriptIcon} alt="TypeScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={htmlIcon} alt="HTML" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={cssIcon} alt="CSS" />
          </ScrollAnimation>
          </div>


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={require("../../assets/profile-image.jpeg")} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
