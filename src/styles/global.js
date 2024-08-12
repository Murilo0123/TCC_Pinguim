import { createGlobalStyle } from "styled-components"

export const Globalstyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.fundo};
        height: 100vh;

    }

    h1 {
        font-family: "Osawald", sans-serif;
        font-weight: bold;
        font-size: 40px;
    }

    h2 {
        font-family: "Oswald", sans-serif;
    }

    p, a {
        font-family: "Radio Canada Big", sans-serif;
        font-weight: 400;
    }
`