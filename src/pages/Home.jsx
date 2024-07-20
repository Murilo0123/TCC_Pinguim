import { createBrowserRouter } from "react-router-dom"
import logo from "../assets/logo.png"
import { HomeContainer } from "../styles/Home.styles"

export function Home() {
  return (
    <HomeContainer>
      <img src= {logo} alt="logo" />
        <a href="/"><h1>Pinguim Vigilante</h1></a>
        <a href="/funcionamento">Funcionamento</a>
        <a href="/componentes">Materiais</a>
        <a href="/referencias">Referências</a>
        <a href="/sobrenos">Sobre nós</a>
    </HomeContainer>
  )
}
