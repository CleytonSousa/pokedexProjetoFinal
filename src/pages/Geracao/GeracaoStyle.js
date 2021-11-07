import styled from "styled-components";

export const CardContainer = styled.section`
    margin: 10px;

    
    
`;

export const Container = styled.section `
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;

`;

export const Menu = styled.section `
    display: flex;
    justify-content: center;
    margin: 15px 0;

    button{
        background: #DCDCDC;
        height: 20px;
        align-self: center;
        margin: 0 8px;
        border: none;
        padding: 0 5px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 800;

        :hover{
            background: #C0C0C0;
        }
    }
`;

export const ArrowCarousel = styled.section `
    display: flex;
    justify-content: space-evenly;

    button{
        background: transparent;
        border: none;
        
        img{
        width: 50px;
        cursor: pointer;
    }

    }

    #left{
        transform: rotate(180deg);
    }
`;