import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useState } from "react";

import { Home } from './pages/Home'
import { theme } from './styles/theme.js'
import { Globalstyle } from './styles/global.js'
import { SobreProduto } from './pages/SobreProduto.jsx'
import { Funcionamento } from './pages/Funcionamento.jsx'
import { Componentes } from './pages/Componentes.jsx'
import { Referencias } from './pages/Referencias.jsx'
import { SobreNos } from './pages/SobreNos.jsx'
import { MenuHamburger } from './pages/Hamburger.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <SobreProduto />
  },
  
  {
    path: "/funcionamento",
    element: <Funcionamento />
  },

  {
    path: "/componentes",
    element: <Componentes />
  },

  {
    path: "/referencias",
    element: <Referencias />
  },

  {
    path: "/sobrenos",
    element: <SobreNos />
  }
]);

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      
      <Home />
      <MenuHamburger/>
      <RouterProvider router={router} />
      <Globalstyle />
    </ThemeProvider>
  )
}
