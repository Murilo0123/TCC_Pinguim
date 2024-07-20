import styled from "styled-components";

export const SepararContainer = styled.div`

    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 2rem;
`

export const ParticipantesContainer = styled.div`

    background: ${props => props.theme.preto};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 318px;

    img.integrantes {
        width: 213.69px;
        height: 200px;
        margin: 2rem;
    }

    h2 {
        color: ${props => props.theme.laranjaTitulo};
        margin-bottom: 1rem;
    }

    p {
        color: ${props => props.theme.laranjaAncora};
        max-width: 75%;
        margin-bottom: 1rem;
    }
`

export const EquipeContainer = styled.div`

    text-transform: uppercase;
    margin-top: 2rem;
    text-align: center;
`