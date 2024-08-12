import styled from "styled-components";

export const ReferenciasContainer = styled.div`

    background: ${props => props.theme.preto};
    border-radius: 15px;
    width: 560px;
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.30);
    margin-bottom: 2rem;
    
    p {
        color: ${props => props.theme.laranjaAncora};
        margin-inline: 2rem;
        font-size: 30px;
        height: 684px;
        margin-bottom: 4rem;
    }

    h2 {
        color: white;
        text-align: center;
        text-transform: uppercase;
        margin-top: 1rem;
        font-size: 40px;
    }

    a {
        color: white;
        text-decoration: none;
        margin-left: 1rem;
        font-size: 30px;
    }
    img {
        width: 100%;
        height: 338px;
    }

    li {
        margin-left: 5rem;
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
        font-size: 64px;
    }
`