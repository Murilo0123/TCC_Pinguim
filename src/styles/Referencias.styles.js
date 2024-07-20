import styled from "styled-components";

export const ReferenciasContainer = styled.div`

    background: ${props => props.theme.preto};
    border-radius: 15px;
    max-width: 560px;
    
    p {
        color: ${props => props.theme.laranjaAncora};
        margin-left: 1rem;
    }

    h2 {
        color: white;
        text-align: center;
        text-transform: uppercase;
    }

    a {
        color: white;
        text-decoration: none;
        margin-left: 1rem;
    }
    img {
        height: 50%;
        width: 100%;
    }

    li {
        margin-left: 2rem;
    }    

`

export const DivContainer = styled.div`

    display: flex;
    justify-content: center;
    gap: 3rem;

    
`

export const PrincipalContainer = styled.div`

    h1 {
        text-align: center;
        margin-block: 2rem;
        text-transform: uppercase;
        font-weight: bolder;
    }
`