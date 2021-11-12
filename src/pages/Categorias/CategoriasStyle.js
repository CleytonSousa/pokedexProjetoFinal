import styled from "styled-components";

export const Container = styled.section `
        display: grid;
        grid-template-columns: repeat(4, 2fr);
        grid-gap: 10px;
        margin: 0 20px;

        section{
            margin-top: 100px;
            background: #9A9795;
            text-align: center;
            border-radius: 15px;

        h1{
            text-align: center;
        }
        img{
            max-width: 150px;
            width: 20vw;
        }
    }

    
`;