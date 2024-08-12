import styled from "styled-components"

export const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    background: ${props => props.theme.caixas};
    border-radius: 2rem;
    margin-inline: 1rem;
    margin-block: 2rem;
    gap: 2rem;
    font-size: 1rem;

    li {
        font-size: 30px;
        margin-left: 8rem;
    }

    img {
        width: 332px;
        height: 295px;
        margin: 1rem;
    }


`

export const CompContainer = styled.div`

text-align: center;

h1 {
    margin-block: 5rem;
    text-transform: uppercase;
    font-size: 40px;
    }
`