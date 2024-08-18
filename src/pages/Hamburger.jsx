import React from 'react'
import { BgContainer, PosicaoContainer } from '../styles/hamburguer'


export function MenuHamburger() {
  return (
    <PosicaoContainer>
      <BgContainer>
        <a href="/funcionamento" className="ancora">Funcionamento</a>
        <a href="/componentes" className="ancora">Materiais</a>
        <a href="/referencias" className="ancora">Referências</a>
        <a href="/sobrenos" className="ancora">Sobre nós</a>
      </BgContainer>
    </PosicaoContainer>
  )
}
