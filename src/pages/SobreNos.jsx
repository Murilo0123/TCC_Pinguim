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
          <img src={Linkedin} alt="" />
          <img className="semFundo" src={GitHub} alt="" />
          <img src={Insta} alt="" />
        </div>
      </ParticipantesContainer>

      <ParticipantesContainer>
        <img className="integrantes" src={Murilo} alt="" />
        <h2>Murilo Monteiro</h2>
        <p>Responsável pela programação e montagem</p>
        <div>
          <img src={Linkedin} alt="" />
          <img className="semFundo" src={GitHub} alt="" />
          <img src={Insta} alt="" />
        </div>
      </ParticipantesContainer>

      <ParticipantesContainer>
        <img className="integrantes" src={Rafael} alt="" />
        <h2>Rafael Casemiro</h2>
        <p>Responsável pelo design do projeto</p>
        <div>
          <img src={Linkedin} alt="" />
          <img className="semFundo" src={GitHub} alt="" />
          <img src={Insta} alt="" />
        </div>
      </ParticipantesContainer>
    </SepararContainer>
    </EquipeContainer>
  )
}
