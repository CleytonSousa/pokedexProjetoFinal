const { default: styled } = require("styled-components");
// import styled from "styled-components";

export const Container = styled.section `
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    height: 25px;


    button{
        text-transform: uppercase;
        margin: 0 10px;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        background: transparent;

        img{
            width: 20px;
            height: 20px;
        }

        :hover{
            img{
                width: 23px;
                height: 23px;
            }
        }
    }
`;