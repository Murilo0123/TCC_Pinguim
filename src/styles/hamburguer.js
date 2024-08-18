import styled from "styled-components";

export const BgContainer = styled.div`
    background: black;
    width: 155px;
    position: absolute;
    border-bottom-left-radius: 1rem;
    z-index: 5;

    a{
        text-decoration: none;
        color: ${props => props.theme.laranjaAncora};
        display: flex;
        border-top: 1px solid;
        padding-inline: left;
        padding: 1rem;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }

    a:first-child {
        border: none;
    }
    
`

export const PosicaoContainer = styled.div`

    display: none;
    .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 36px;
    }

    @media (max-width: 1140px) {
        display: flex;
        opacity: 1;
        padding-left: 9.5rem;

        
    }
    

`