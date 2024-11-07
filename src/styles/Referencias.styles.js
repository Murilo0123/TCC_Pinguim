import styled from "styled-components";

export const ReferenciasContainer = styled.div`

    background: ${props => props.theme.preto};
    border-radius: 1rem;
    width: 560px;
    height: 1360px;
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.30);
    margin-bottom: 2rem;
    
    p {
        color: ${props => props.theme.laranjaAncora};
        margin-inline: 2rem;
        font-size: 30px;
        height: 684px;
        margin-bottom: 10rem;
    }

    h2 {
        color: white;
        text-align: center;
        text-transform: uppercase;
        margin-top: 1rem;
        font-size: 40px;
    }

    a {
        color: ${props => props.theme.laranjaAncora};
        text-decoration: none;
        margin-inline: 8rem;
        font-size: 25px;
        background: ${props => props.theme.preto};
        border: 5px solid ${props => props.theme.laranjaTitulo};
        padding-inline: 5rem;
        padding-block: 1rem;
        border-radius: 5rem;

    }
    img {
        width: 100%;
        height: 338px;
    }

    li {
        margin-left: 5rem;
    }    

    @media (max-width: 1140px){
        margin-left: 2rem;
        width: 320px;
        height: 812px;
        
        li {
            margin-left: 3rem;
        }

        h2 {
            font-size: 27px;
        }

        p {
            font-size: 16px;
            height: 480px;
            margin-bottom: -10px;
            
        }

        img {
            height: 13rem;   
        }

        a {
            font-size: 17px;
            margin-inline: 4rem;
            padding-inline: 3rem;
            padding-block: 0.5rem;
            margin-block: 0rem;
        }
    }
`

export const DivContainer = styled.div`

    display: flex;
    justify-content: center;
    gap: 3rem;
    img {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    @media (max-width: 1140px){

        display: block;
        padding-bottom:2rem;
        
        
}
    
`

export const PrincipalContainer = styled.div`

    h1 {
        text-align: center;
        margin-block: 2rem;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 64px;
        
    }

    @media (max-width: 1140px){

        h1{
            font-size: 40px;
        }
    
    }

    
`

export const TerContainer = styled.div`
     @media (min-width: 1140px){
        display: flex;
        justify-content: center;
    }
`