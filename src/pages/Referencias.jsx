import { DivContainer, ReferenciasContainer, PrincipalContainer } from "../styles/Referencias.styles";
import Sozinho from "../imgs/Idososozinho.png"
import Triste from "../imgs/Idosotriste.png"

export function Referencias() {
  return (
    <PrincipalContainer>
      <h1>Referências</h1>
      <DivContainer>
        <ReferenciasContainer className="Primeiro">
          <img src={Sozinho} alt="" />
          <h2>Solidão</h2><br />
          <p>Segundo o Instituto Brasileiro de Geografia e Estatística (IBGE), 4,3 Milhões de idosos vivem sozinhos; <br /><br />

          Pessoas com idade mais avançadas necessitam de cuidados e monitoramentos; <br /><br />

          No ano de 2006 foi notado o aumento da população com mais de 60 anos morando sozinhos em cerca de 40,3% dos domicílios unipessoais brasileiros;</p>
          <a href="">Saiba mais</a>
        </ReferenciasContainer>
        <ReferenciasContainer className="Segundo">
          <img src={Triste} alt="" />
          <h2>Dados</h2><br />
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
          <a href="">Saiba mais</a>
        </ReferenciasContainer>
      </DivContainer>
    </PrincipalContainer>
  )
}
