import styled from "styled-components";

export const Container = styled.section`
        display: flex;
        grid-template-columns: repeat(4, 2fr);
        grid-gap: 10px;
        width: 90%;
        margin-left: 5%;
        flex-direction: column;

        h1{
            font-size: 20px;
            color: #fff;
            margin-top: 120px;
            margin-bottom: 0;
            text-align: center;
        }

        @media (max-width: 959px){
            grid-template-columns: repeat(3, 2fr);
        }

        @media (max-width: 725px){
            grid-template-columns: repeat(2, 2fr);
        }

        @media (max-width: 515px){
            grid-template-columns: repeat(1, 2fr);
        }

        /* section{
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
        } */

    
`;

export const TypeBtn = styled.section`
    grid-template-columns: repeat(4, 2fr);
    display: flex;
    width: 100%;
    text-align: center;
    margin: 2% 0;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;

     button{
        margin: 8px;
        cursor: pointer;
        border: none;
        border-radius: 15px;
        color: white;
        font-weight: bolder;
        font-size: 17px;
        text-transform: uppercase;
        display: flex;
        padding: 10px !important;
    }

    #fire{   
        :hover{
            background: #fd8115;
        }
    }

    #fighting{
        :hover{
            background: #b50707;
        }
    }

    #normal{
        :hover{
            background: #636363;
        }
    }

    #poison{
        :hover{
            background: #5f1085;
        }
    }

    #ground{
        :hover{
            background: #9e5e13;
        }
    }

    #rock{
        :hover{
            background: #968484;
        }
    }

    #bug{
        :hover{
            background: #a6bf0d;
        }
    }

    #ghost{
        :hover{
            background: #462670;
        }
    }

    #water{
        :hover{
            background: #00ace3;
        }
    }

    #grass{
        :hover{
            background: #039612;
        }
    }

    #electric{
        :hover{
            background: #FFD700;
        }
    }

    #dragon{
        :hover{
            background: #390180;
        }
    }

    #dark{
        :hover{
            background: #401919;
        }
    }

    #fairy{
        :hover{
            background: #fc1e89;
        }
    }
`;