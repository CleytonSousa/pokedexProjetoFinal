const { default: styled } = require("styled-components");
// import styled from "styled-components";

export const Container = styled.section `
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    button{
        text-transform: uppercase;
        margin: 0 10px;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        background: black;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
    }
`;