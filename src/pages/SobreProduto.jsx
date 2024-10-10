import ilustracao from "../assets/ilustracao.png"
import { ProdutoComponent } from "../styles/SobreProduto.styles"

export function SobreProduto() {
  return (
    <ProdutoComponent>
        <img src= {ilustracao} alt="" />
        
        <section>
            <h1>Sobre o Produto</h1>
            <p>O Pinguim Vigilante é um robô que garantirá a segurança da vida de um idoso solitário, por meio de sensores de fumaça para prevenir possíveis incêndios, e detectar gases tóxicos para o ser humano. Equipado com uma câmera, o projeto será capaz de fotografar possíveis invasores. Junto de um design agradável e marcante para ser um grande companheiro.</p>
        </section>
    </ProdutoComponent>
  )
}
