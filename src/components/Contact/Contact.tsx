import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import whatsappIcon from "../../assets/whatsapp.svg"


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Gostou do que viu? Então entre em contato comigo 📱</h2>
        <p>Responderei o mais rápido possível.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:guigui.dangelo@icloud.com"target="_blank" 
          rel="noreferrer">guigui.dangelo@icloud.com
          </a>
        </div>
        <div>
          <img src={whatsappIcon} alt="WhatsApp" />
          <a href="https://wa.me/11993683581" target="_blank"
          rel="noreferrer">(11) 99368-3581
          </a>
        </div>  
      </div>
    </Container>
  )
}