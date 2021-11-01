import styled from "styled-components";

export const CardContainer = styled.div`
    
`;

export const Container = styled.div `
    display: flex;
    overflow: hidden;
`;

export const Menu = styled.div `
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