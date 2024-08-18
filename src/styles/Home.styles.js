import styled from "styled-components"

export const HomeContainer = styled.div`
    background: ${props => props.theme.preto};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    height:75px;

    img {
        height: 67.86px;
        margin-block: 0.5rem;
        margin-top: -0.5rem;
    }

    h1 {
        color: ${props => props.theme.laranjaTitulo};
        
    }

    a {
        color: ${props => props.theme.laranjaAncora};
        margin-left: 2rem;
        text-decoration: none;
    }

    button {
        display:none;
    }

    .titulo {
        margin-left: -3rem;
    }

    @media (max-width: 1140px) {
        justify-content:left;
        text-align:none;
        height:75px;
        
        .titulo h1 {
            font-size: 1.40rem;
        }
        > .ancora {
            display:none;
        }; 
        img {
            width: 77px;
            height: 44px;
            margin-left:1rem;
        }  
        button {
            display:block;
            background:none;
            border:none
        }
        button img {
            margin-left:2rem;
            width: 29px;
            height:29px;
            margin-top:0.75rem;
        }
  }
`
export function burger(verificar){
    if (verificar == 0) {

    }
}