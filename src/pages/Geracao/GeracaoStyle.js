import styled from "styled-components";

export const CardContainer = styled.section`
    margin: 10px;
`;

export const Container = styled.section `
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    width: 90%;
    margin-left: 5%;
    justify-content: 5%;

`;

export const Menu = styled.section `
    display: flex;
    justify-content: center;
    margin: 15px 0;
    color: #fff;

    button{
        background: transparent;
        height: 20px;
        align-self: center;
        margin: 0 8px;
        border: none;
        padding: 0 5px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 800;

        :hover{
            img{
                width: 23px;
                height: 23px;
            }
        }

        img{
            width: 20px;
            height: 20px;
        }
    }
`;