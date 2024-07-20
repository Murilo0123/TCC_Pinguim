import ilustracao from "../assets/ilustracao.png"
import { ProdutoComponent } from "../styles/SobreProduto.styles"

export function SobreProduto() {
  return (
    <ProdutoComponent>
        <img src= {ilustracao} alt="" />
        
        <section>
            <h1>Sobre o Produto</h1>
            <p>O Pinguim Vigilante é um robô que garantirá a segurança da vida de um idoso solitário, por meio de sensores de fumaça para previnir possíveis incêndios, e detectar gases tóxicos para o ser humano. Junto de um design agradável e marcante para ser um grande companheiro.</p>
        </section>
    </ProdutoComponent>
  )
}
