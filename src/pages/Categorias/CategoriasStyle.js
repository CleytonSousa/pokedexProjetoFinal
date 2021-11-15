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

        .pokedexGrid{
            display: grid;
            grid-template-columns: repeat(5, 2fr);
            grid-gap: 10px;
            padding-bottom: 0;
            justify-items: center;
            margin-bottom: 10%;
        }

        @media (max-width: 1260px){
            .pokedexGrid{
                padding-bottom: 10%;
            }
        }

        @media (max-width: 1029px) {
            .pokedexGrid{
                grid-template-columns: repeat(4, 2fr);
                padding-bottom: 15%;
            }
        }
        @media (max-width: 851px) {
            .pokedexGrid{
                grid-template-columns: repeat(3, 2fr);
            }
        }
        @media (max-width: 645px) {
            .pokedexGrid{
                grid-template-columns: repeat(2, 2fr);
                padding-bottom: 20%;
            }
        }
        @media (max-width: 460px) {
            .pokedexGrid{
                padding-bottom: 25%;
            }
        }
        @media (max-width: 419px) {
            .pokedexGrid{
                grid-template-columns: repeat(1, 1fr);
                padding-bottom: 35%;
            }
        }
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
        font-size: 16px;
        text-transform: uppercase;
        display: flex;
        padding: 10px !important;
        font-weight: 800;
        font-family: 'raleway'
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

export const PokemonCard = styled.section`
    display: grid;
    border-radius: 15px;
    width: 200px;


    :hover{
        cursor: pointer;
    }

    .areaPokemon{
        background: #9A9795;
        border-radius: 15px;
        max-width: 160px;
        max-height: 160px;
        margin: 0;
        padding: 20px;
        font-family: "raleway";
        font-weight: 700;


        img{
            width: 150px;
            height: 150px;
        }
    }

    .pokemon-img:hover{
        margin-left: -15px;
    }

    .pokemon-types{
        display: flex;
    }

    .pokemon-type-text{
        margin-right: 10px;
        border-radius: 5px;
        text-transform: uppercase;
        font-weight: 800;
        color: #fff;
    }

    .card-body{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-top{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0;
        color: rgb(255, 255, 255);
    }

    .card-bottom, .card-top{
        margin: 0 25px;
    }

    .types{
        text-align: start;
    }

    .card-top h3{
        text-transform: capitalize;
    }

`
