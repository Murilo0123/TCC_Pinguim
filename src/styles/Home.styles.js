import styled from "styled-components"

export const HomeContainer = styled.div`
    background: ${props => props.theme.preto};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    img {
        height: 67.86px;
        width: 120;
        margin-block: 1rem;
    }

    h1 {
        color: ${props => props.theme.laranjaTitulo};
    }

    a {
        color: ${props => props.theme.laranjaAncora};
        margin-left: 2rem;
        text-decoration: none;
    }

    .titulo {
        margin-left: -2rem;
    }
`