import logo from "../assets/logo.png"
import hamburger from "../assets/hamburger.png"
import { HomeContainer } from "../styles/Home.styles"

export function Home() {

  return (
    <HomeContainer>
      <img src= {logo} alt="logo" />
      <a href="/" className="titulo"><h1>Pinguim Vigilante</h1></a>
      <a href="/funcionamento" className="ancora">Funcionamento</a>
      <a href="/componentes" className="ancora">Materiais</a>
      <a href="/referencias" className="ancora">Referências</a>
      <a href="/sobrenos" className="ancora">Sobre nós</a>
      <button><img src={hamburger} alt="" /></button>
    </HomeContainer>
  )
}