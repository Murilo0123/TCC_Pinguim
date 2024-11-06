import React from 'react'
import { BgContainer, PosicaoContainer } from '../styles/hamburguer'
import { slide as Menu } from 'react-burger-menu'


export function MenuHamburger() {
  return (
    <Menu right>
      <PosicaoContainer>
        <BgContainer>
          <a href="/funcionamento" className="burger">Funcionamento</a>

          <a href="/componentes" className="burger">Materiais</a>

          <a href="/referencias" className="burger">Referências</a>

          <a href="/jogo" className="burger">Jogo</a>

          <a href="/sobrenos" className="burger">Sobre nós</a>

        </BgContainer>
      </PosicaoContainer>
    </Menu>
  )
}
