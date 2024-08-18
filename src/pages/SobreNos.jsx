import Murilo from "../imgs/Murilo.png"
import Fred from "../imgs/Fredson.png"
import Rafael from "../imgs/Rafael.png"
import Insta from "../assets/InstagramLogo.png"
import GitHub from "../assets/GitHubLogo.png"
import Linkedin from "../assets/LinkedinLogo.png"
import { ParticipantesContainer, SepararContainer, EquipeContainer } from "../styles/Sobrenos.styles"

export function SobreNos() {
  return (
    <EquipeContainer>
      <h1>Equipe</h1>
      <SepararContainer>
      <ParticipantesContainer>
        <img className="integrantes" src={Fred} alt="" />
        <h2>Fredson Vicente</h2>
        <p>Responsável pelo site e divulgação</p>
        <div>
          <a href="https://www.linkedin.com/in/fredson-vicente/" target="_blank"><img src={Linkedin} alt="" /></a>
          <a href="https://github.com/FredsonV" target="_blank"><img src={GitHub} alt="" /></a>
          <a href="https://www.instagram.com/fredsonvicentejr?igsh=azNidnJ4NW1la2M2" target="_blank"><img src={Insta} alt="" /></a>
        </div>
      </ParticipantesContainer>

      <ParticipantesContainer>
        <img className="integrantes" src={Murilo} alt="" />
        <h2>Murilo Monteiro</h2>
        <p>Responsável pela programação e montagem</p>
        <div>
          <a href="https://www.linkedin.com/in/murilo-monteiro-3a74422ba/" target="_blank"><img src={Linkedin} alt="" /></a>
          <a href="https://github.com/Murilo0123" target="_blank"><img src={GitHub} alt="" /></a>
          <a href="https://www.instagram.com/murilom_silva?utm_source=qr&igsh=MWc2NmpmaTY1amJ2Mw==" target="_blank"><img src={Insta} alt="" /></a>
        </div>
      </ParticipantesContainer>

      <ParticipantesContainer>
        <img className="integrantes" src={Rafael} alt="" />
        <h2>Rafael Casemiro</h2>
        <p>Responsável pelo design do projeto</p>
        <div>
          <a href="https://www.linkedin.com/in/rafael-dos-santos-borges-casemiro-0b48582ba/" target="_blank"><img src={Linkedin} alt="" /></a> 
          <a href="https://github.com/RafaelCasemiro" target="_blank"><img src={GitHub} alt="" /></a>
          <a href="https://www.instagram.com/rxfinzs?igsh=MWJieHczaXQyNTJ3dA==" target="_blank"><img src={Insta} alt="" /></a>
        </div>
      </ParticipantesContainer>
    </SepararContainer>
    </EquipeContainer>
  )
}
