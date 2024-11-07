import styled from "styled-components";

export const JogoContainer = styled.div`
    text-align: center;
    padding: auto;
    padding-bottom: 2rem;
    margin-top: 2rem;
    
    h1 {
        margin-bottom: 2rem;
        font-size: 64px;
    }

    @media (max-width: 1140px){
        iframe{
            width: 300px;
            height: 169px;
        }

        h1{
            font-size:40px ;
        }
    }
`

export const BotJogoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
        color: ${props => props.theme.laranjaAncora};
        text-decoration: none;
        margin-inline: 8rem;
        font-size: 25px;
        background: ${props => props.theme.preto};
        border: 5px solid ${props => props.theme.laranjaTitulo};
        padding-inline: 2rem;
        padding-block: 0.5rem;
        border-radius: 5rem;

    }

    button {
        font-size: 17px;
        margin-inline: 4rem;
        padding-inline: 3rem;
        padding-block: 0.5rem;
        margin-block: 0rem;
    }
`