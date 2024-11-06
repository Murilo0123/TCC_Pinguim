import React from 'react'
import { JogoContainer } from '../styles/Jogo.styles'

export function Jogo() {
  return (
    <JogoContainer>
        <h1>JOGO</h1>
        <iframe width="800" height="450" src="https://www.youtube.com/embed/5kwsE5S5RfA?si=B5tjqB4UX9exeFpf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </JogoContainer>
  )
}
