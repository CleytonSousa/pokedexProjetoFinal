import styled from 'styled-components';

export const FooterRocket = styled.footer`
    display: flex;
    justify-content: space-around;
    color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: #332e04;
    border-top: #fff 1px solid;
    font-family: 'Raleway';
    padding-top: 1% ;

    @media (max-width: 420px) {
        display: flex;
        /* margin-top: 320vh; */
        align-items: center;
        flex-direction: column;
        align-self: center;
        padding-bottom: 3%;

        p{
          margin: 0px;
          padding-top: 10px;
        }
    }

    p, h3{
      align-content: center;
    }
`