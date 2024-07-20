import ilustracao from '../assets/ilustracao.png'
import { ProdutoComponent } from '../styles/SobreProduto.styles.js'

export function Funcionamento() {
  return (
    <ProdutoComponent>       
        <section>
            <h1>Como Funciona</h1>
            <p>O produto é um robô segurança que identificará movimentos  através do sensor ultrassônico enquanto movimenta sua cabeça. Por meio de um sensor de fumaça ele detectará possíveis incêndios e gases tóxicos ativando o buzzer para fazer um barulho alto de alarme. Também mostrará informações coletadas do ar em seu display oled e caso haja uma variação no ar, o robô mandará uma notificação ao celular conectado a ele.</p>
        </section>

        <img src= {ilustracao} alt="" />
    </ProdutoComponent>
  )
}