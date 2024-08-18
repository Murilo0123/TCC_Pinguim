import styled from "styled-components"

export const ProdutoComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    margin-top: 2rem;

    p {
        max-width: 50rem;
        margin-top: 1rem;
        font-size: 1.75rem;
    }

    h1 {
        font-weight: bolder;  
        font-size: 40px; 
        margin-bottom : 2rem;
    }

    @media (max-width: 1140px) {
        display: block;
        text-align: center;
        padding-bottom: 2rem;
        padding-inline: 2rem;

        img {
            width: 14.375rem;
        }

        h1 {
            font-size:2.5rem;
        }

        p {
            font-size:1.25rem
        }
    }  
        
`