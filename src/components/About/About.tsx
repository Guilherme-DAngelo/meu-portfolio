import { Container } from "./styles";
import cssIcon from "../../assets/css-icon.svg";
import expressIcon from "../../assets/express-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import postgresqlIcon  from "../../assets/postgresql.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import dockerIcon from "../../assets/docker-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.png";
import nextIcon from  "../../assets/nextjs-icon.svg";
import vueIcon from  "../../assets/vuejs-icon.png";
import pythonIcon from  "../../assets/python-icon2.png";
import javaIcon from  "../../assets/java-icon.svg";
import mongoIcon from "../../assets/mongodb-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";



export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mim 🧑‍💻</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Sou um Desenvolvedor Full Stack com uma grande paixão por programação. Sou apaixonado por entregar soluções que agregam na vida das pessoas e que ao mesmo tempo sejam complexas e me desafiem. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Desenvolvo sites e aplicações com JavaScript, TypeScript, Python, Java, HTML , CSS e WordPress. Atualmente estou trabalhando como Desenvolvedor Full Stack na Comhub e a Stack que usamos é TypeScript/JavaScript, Tailwind, React, Next.JS, Vue.JS, TypeORM Prisma, Docker e Linux (Ubuntu) para desenvolvimento de sites, softwares e APIs. Estou sempre estudando, aprendendo e me aprimorando mais a cada projeto que colocam em minhas mãos.</p>        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Sou uma pessoa dedicada, comunicativa, que sabe trabalhar em equipe, analítica, autonoma, proativa, estudiosa, orientada a resultados e sempre busco alcançar a melhor versão de mim mesmo.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Aqui está a minha Stack:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

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
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={pythonIcon} alt="Python" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000} > 
            <img src={javaIcon} alt="Java" />
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

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={tailwindIcon} alt="Tailwind" />
          </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={nextIcon} alt="NextJS" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={vueIcon} alt="VueJS" />
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
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={mysqlIcon} alt="MySQL" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={mongoIcon} alt="MongoDB" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={dockerIcon} alt="Docker" />
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
