import styled from "styled-components";

export const Container = styled.section`
        display: grid;
        grid-template-columns: repeat(4, 2fr);
        grid-gap: 10px;
        margin: 0 20px;

        @media (max-width: 959px){
            grid-template-columns: repeat(3, 2fr);
        }

        @media (max-width: 725px){
            grid-template-columns: repeat(2, 2fr);
        }

        @media (max-width: 515px){
            grid-template-columns: repeat(1, 2fr);
        }

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

export const TypeBtn = styled.section`

    button{
        height: 35px;
        width: 100px;
        margin: 5px;
        cursor: pointer;
        border: none;
        border-radius: 15px;
        color: white;
        font-weight: bolder;
        font-size: 17px;
        text-transform: uppercase;
    }

    #fire{
        background: #FDA015;
    
        :hover{
            background: #fd8115;
        }
    }

    #fighting{
        background: #b01818;

        :hover{
            background: #b50707;
        }
    }

    #normal{
        background: #777777;

        :hover{
            background: #636363;
        }
    }

    #poison{
        background: #7F18B0;

        :hover{
            background: #5f1085;
        }
    }

    #ground{
        background: #B06A18;

        :hover{
            background: #9e5e13;
        }
    }

    #rock{
        background: #9F8F8F;

        :hover{
            background: #968484;
        }
    }

    #bug{
        background: #B2CA22;

        :hover{
            background: #a6bf0d;
        }
    }

    #ghost{
        background: #3B2A51;

        :hover{
            background: #462670;
        }
    }

    #whater{
        background: #15C5FD;

        :hover{
            background: #00ace3;
        }
    }

    #grass{
        background: #10B921;

        :hover{
            background: #039612;
        }
    }

    #eletric{
        background: #FEF517;

        :hover{
            background: #dbd300;
        }
    }

    #dragon{
        background: #2D0264;

        :hover{
            background: #390180;
        }
    }

    #dark{
        background: #562424;
        :hover{
            background: #401919;
        }
    }

    #fairy{
        background: #F54097;
        
        :hover{
            background: #fc1e89;
        }
    }
`;