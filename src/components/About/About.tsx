import { Container } from "./styles";
import expressIcon from "../../assets/express-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import angularIcon from "../../assets/angular-icon.png";
import typescriptIcon from "../../assets/typescript-icon.svg";
import postgresqlIcon  from "../../assets/postgresql.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import dockerIcon from "../../assets/docker-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.png";
import nextIcon from  "../../assets/nextjs-icon.svg";
import pythonIcon from  "../../assets/python-icon2.png";
import javaIcon from  "../../assets/java-icon.svg";
import mongoIcon from "../../assets/mongodb-icon.svg";
import kotlinIcon from "../../assets/kotlin-icon.png";
import redisIcon from  "../../assets/redis-icon.png";
import kafkaIcon from  "../../assets/kafka-icon.png";
import kubernetesIcon from "../../assets/kubernetes-icon.png";
import awsIcon from "../../assets/aws-icon.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mim 🧑‍💻</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Sou um desenvolvedor Full Stack com sólida experiência no mercado de tecnologia. Minha jornada profissional tem sido marcada por evolução constante e resultados concretos, com foco em soluções inovadoras e arquiteturas robustas.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>Iniciei minha carreira como Desenvolvedor Junior na RED Precatórios, onde desenvolvi expertise em automação e web scraping com Python, trabalhando com cloud computing na Digital Ocean e aprimorando minhas habilidades em bancos de dados relacionais (MySQL) e automações avançadas em Excel com VBA.</p>        
          </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>Atualmente, atuo como Desenvolvedor Full Stack Pleno na ComHub, uma software house onde tenho a oportunidade de trabalhar com um ecossistema tecnológico diversificado e de ponta. Esta experiência me permite aplicar conhecimentos em múltiplas linguagens e frameworks, incluindo TypeScript, Java, Kotlin, React, NextJS, Angular, Node.js e Spring Framework. Trabalho também com arquiteturas de microsserviços utilizando Apache Kafka e RabbitMQ, soluções em nuvem AWS (S3, ECS, EC2, Load Balancer) e Kubernetes para orquestração de containers.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>Um diferencial em minha atuação é a experiência no desenvolvimento de aplicações que incorporam Inteligência Artificial, utilizando LLMs como Chat GPT, Gemini, Grok e Groq para criar soluções inovadoras. Tenho expertise em arquitetura limpa, desenvolvimento de pipelines de CI/CD para deploys automatizados e implementação de API Gateways, sempre buscando entregar código de alta qualidade e sistemas escaláveis. Minha experiência inclui o desenvolvimento de integrações personalizadas com sistemas empresariais como Omie, Conta Azul e Itaú, além da implementação robusta de testes unitários, de integração e E2E com Vitest e Cypress, garantindo a confiabilidade das aplicações desenvolvidas.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>Como profissional, me defino como extremamente organizado, executor e proativo. Tenho facilidade para comunicação e trabalho em equipe, aliadas a um pensamento analítico e crítico que me permite encontrar soluções eficientes para desafios complexos. Minha persistência e autonomia me levam a buscar continuamente novos desafios e oportunidades de crescimento.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>Estou sempre em busca de projetos desafiadores onde possa contribuir com minha experiência técnica e visão estratégica, ajudando equipes e empresas a alcançarem seus objetivos através de soluções tecnológicas de excelência e alto desempenho.</p>
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
            <img src={kotlinIcon} alt="Kotlin" />
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
              <img src={angularIcon} alt="Angular" />
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
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={redisIcon} alt="Redis" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={dockerIcon} alt="Docker" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={kubernetesIcon} alt="Kubernetes" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={kafkaIcon} alt="Apache Kafka" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={awsIcon} alt="AWS" />
          </ScrollAnimation>
          </div>

        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={require("../../assets/profile-picture.jpg")} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
