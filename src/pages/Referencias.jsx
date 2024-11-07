import { DivContainer, ReferenciasContainer, PrincipalContainer, TerContainer } from "../styles/Referencias.styles";
import Queda from "../imgs/quedas.png"
import Auto from "../imgs/autoidosos.jpg"
import Triste from "../imgs/Idosotriste.png"

export function Referencias() {
  return (
    <PrincipalContainer>
      <h1>Referências</h1>
      <DivContainer>
        <ReferenciasContainer className="Primeiro">
          <img src={Queda} alt="" />
          <h2>SEGURANÇA DOMICILIAR</h2><br />
          <p>Um estudo com 288 idosos na zona rural do RN mostrou que quase um quarto deles já caiu, com quase um quarto dessas quedas resultando em fraturas. A maioria das quedas aconteceu dentro de casa, principalmente no banheiro.  A pesquisa revelou que a maioria dos lares não possui itens de segurança básicos, como pisos uniformes, tapetes fixos, antiderrapante no chuveiro e escadas seguras.  A falta desses itens está diretamente ligada ao risco de quedas.  O estudo conclui que a maioria dos idosos vive em ambientes inseguros,  e que medidas de prevenção e segurança domiciliar são cruciais para garantir a qualidade de vida deles. 
          </p>
          <a href="https://periodicos.ufrn.br/rcp/article/view/23018">Saiba mais</a>
        </ReferenciasContainer>
        <ReferenciasContainer className="Segundo">
          <img src={Auto} alt="" />
          <h2>	AUTOMAÇÃO RESIDENCIAL</h2><br />
          <p>O projeto de automação residencial assistiva (ARA) visa melhorar a qualidade de vida de idosos, com foco na segurança e independência. O sistema utiliza sensores, dispositivos inteligentes e um aplicativo móvel para monitorar o ambiente e a saúde do usuário, além de permitir o controle remoto por parte do cuidador. O projeto se baseia nos conceitos de Ambient Assisted Living (AAL), com foco na segurança, bem-estar e independência do usuário. É importante considerar aspectos éticos e sociais, como privacidade e acessibilidade, para garantir que o sistema seja desenvolvido de forma responsável e ética. 
          </p>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjFxZiZ5MiJAxVbJrkGHaMxCc4QFnoECB0QAQ&url=http%3A%2F%2Frepositorio.anhanguera.edu.br%3A8080%2Fbitstream%2F123456789%2F395%2F1%2FAutomac%25CC%25A7a%25CC%2583o%2520Residencial%2520para%2520Auxi%25CC%2581lio%2520a%25CC%2580%2520Terceira%2520Idade%2520-%2520Souza%2520Sobrinho%2520e%2520Santos%2520%25281%2529.pdf&usg=AOvVaw1C7dOPSP1aCzWoizOZwceb&opi=89978449">Saiba mais</a>
        </ReferenciasContainer>
      </DivContainer>
      <TerContainer>
      <ReferenciasContainer className="Segundo">
          <img src={Triste} alt="" />
          <h2>Solidão</h2><br />
          <p>Uma pesquisa realizada em Portugal (2019) envolvendo 213 pessoas entre 65 e 96 anos, revelou que: <br /><br />
          <ul>
            <li>12,7% sofrem com solidão;</li>
            <li>26,76% apresentam depressão;</li>
            <li>35,1% sofrem com solidão e depressão;</li><br />
          </ul>
        
          A solidão é mais frequente em mulheres;<br /><br />

          Os estados civis que mais afetam são: <br /><br />
          <ul>
            <li>Solteiro(a);</li>
            <li>Viúvo(a);</li>
            <li>Divorciados(as);</li>
          </ul>

          </p>
          <a href="https://repositorio.ispa.pt/handle/10400.12/7115">Saiba mais</a>
        </ReferenciasContainer>
      
      </TerContainer>
    </PrincipalContainer>
  )
}
