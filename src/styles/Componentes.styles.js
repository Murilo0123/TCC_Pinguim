import styled from "styled-components"

export const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    background: ${props => props.theme.caixas};
    border-radius: 2rem;
    margin-inline: auto;
    margin-top: 2rem;
    gap: 2rem;
    font-size: 1rem;
    padding-bottom: 2rem;
    max-width: 1140px;
    

    p {
        font-size: 30px;
        margin-left: 3rem;
        padding-right: 5rem;
    }

    img {
        width: 332px;
        height: 295px;
        margin: 1rem;
    }

    @media (max-width: 1140px){

        display: block;
        text-align: center;
        max-width: 340px;
        p {
            font-size: 20px;
            margin-left: 10rem;
            margin-inline: 1rem;
            padding-right: 0;
        }
        img {
            width: 151px;
            height: 129px;
        } 
        
    }




`

export const CompContainer = styled.div`

padding-bottom: 2rem;

    h1 {
        margin-block: 2rem;
        text-transform: uppercase;
        font-size: 64px;
        text-align: center;
    }


    @media (max-width: 1140px){
        h1{
            font-size:40px ;
            margin-block:3rem ;
        }
    }
`