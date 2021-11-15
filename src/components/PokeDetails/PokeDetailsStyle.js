import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 95vh;
  color: #fff;
  font-family: 'Raleway';
  text-transform: uppercase;
  font-size: 16px;

  .pokemonInfos{
      display: flex;
      margin: 8% 0;
      font-weight: 700;

    h1{
      margin: 20% 0 3% 0;
    }

    .types{
      display: flex;
      height: 40px;
      width: 100px;
      position: absolute;
      margin-top: 55px;
    }
  }

  .pokemonImage{
      align-self: center;

      img{
          width: 40vw;
          max-width: 500px;
      }
  }

  .moreInfos{
    align-self: flex-start;
    font-weight: 700;
    margin: 95px 0;
    position: absolute;
  }

  .about{
      align-self: flex-end;
      margin: 5rem 5rem 10rem 5rem;
      font-weight: 700;
      font-size: 16em;
  }

  .pokemonImage{
      align-self: center;

      img{
          width: 40vw;
          max-width: 500px;
      }
  }
  
  @media (max-width: 1160px) {
    grid-template-columns: repeat(4, 2fr);
    font-size: 16px;

    .pokemonInfos{
      margin: 8% 0;

      h1{
        margin: 50px 0 0 30px;
        font-size: 25px;
      }

      .types{
        margin: 80px 30px;
      }

      .moreInfos{
        margin: 120px 0 0 30px;
      }
    }

    .about{
      display: grid;
      justify-content: center;
      align-items: end;
      margin: 5rem 10px 8rem 0;
      width: 400px;
      z-index: 2;
    }

    .pokemonImage{
      display: grid;
      justify-content: space-evenly;
      img{
          width: 37vw;
      }
    }

  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(1, 3fr);
    align-content: space-between;

    .pokemonInfos{
      margin: 8% 0 0 10%;

      h1{
        margin: 50px 0 0 0;
        font-size: 25px;
      }

      .types{
        margin: 80px 0;
      }

      .moreInfos{
        margin: 120px 0 0 0;
      }
    }

    .about{
      /* grid-template-columns: repeat(1, 3fr); */
      justify-content: space-evenly;
      width: 360px;
      margin: 0 5% 10% auto;
      float: right;
      z-index: 0;
    }

    .pokemonImage{
      display: grid;
      justify-content: space-evenly;
      /* margin-top: 100px; */

      img{
        width: 40vw;
        min-width: 320px;
        margin-left: 10%;
      }
    }
  }

  @media (max-width: 575px){
    .pokemonImage{
      img{
        margin-left: 20%;
      }
    }
  }

  @media (max-width: 475px) {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    align-content: space-between;
    overflow-x: hidden;

    .pokemonInfos{
      grid-template-columns: 1fr, 1fr, 1fr;
      display: grid;
      align-self: flex-start;
      margin: 20% 0 0 10%;

      h1{
        margin-left: 0;
        font-size: 25px;
      }

      .types{
        grid-template-columns: repeat(3, 3fr);
        margin: 0;
        position: inherit;
        display: grid;
      }

      .moreInfos{
        margin: 0;
        position: inherit;
      }
    }

    .about{
      margin: 5% auto 20% 5%;
    }

    .pokemonImage{
      align-self: center;
      /* margin-top: 5%; */

      img{
          width: 50vw;
          min-width: 280px;
          margin-left: 0;
      }
    }
  }


    /* AJUSTE PARA TELA SMART MÉDIA */
    @media (max-width: 375px) {
      .about{
        margin: 5% auto 22% 2%;
      }
    }


    /* AJUSTE PARA TELA SMART PEQUENA */
    @media (max-width: 350px){
      .about{
        margin: 5% auto 25% 2%;
        width: 100vw;
      }

      .pokemonImage{
        align-self: center;
        margin-top: 5%;

        img{
            width: 40vw;
            min-width: 200px;
        }
      }
  }

`;

// CSS DAS BARRAS DE PROGRESSO DO POKEMON

export const StatsDiv = styled.div `
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    align-items: center;
    height: 30px;
    
    progress{
      margin-left: 15px;
    }

    progress[value] {
      height: 20px;
    }

    @media (max-width: 360px){
      font-size: 12px;
    }

`;


// CSS CARD TIPO DO POKEMON
export const Types = styled.p `
text-align: center;
border-radius: 5px;
font-size: 15px;
margin: 5px;
text-transform: capitalize;
color: #fff;
font-weight: bold;
font-size: 18px;

#grass{
  background-color: #10B921;
  padding: 5px;
}

#poison{
  background-color: #5B18B0;
  padding: 5px 15px;
}

#fire{
  background-color: #FDA015;
  padding: 5px 15px;
}

#flying{
  background-color: #1B18B0;
  padding: 5px 15px;
}

#water{
  background-color: #15C5FD;
  padding: 5px 15px;
}

#bug{
  background-color: #B2CA22;
  padding: 5px 15px;
}

#normal{
  background-color: #777777;
  padding: 5px 15px;
}

#electric{
  background-color: #FEF517;
  padding: 5px 15px;
}

#ground{
  background-color: #B06A18;
  padding: 5px 15px;
}

#fairy{
  background-color: #F54097;
  padding: 5px 15px;
}

#psychic{
  background-color: #BB7070;
  padding: 5px 15px;
}

#fighting{
  background-color: #B01818;
  padding: 5px 15px;
}

#steel{
  background-color: #3A3333;
  padding: 5px 15px;
}

#ice{
  background-color: #66ABA7;
  padding: 5px 15px;
}

#ghost{
  background-color: #3B2A51;
  padding: 5px 15px;
}

#rock{
  background-color: #9F8F8F;
  padding: 5px 15px;
}

#dragon{
  background-color: #2D0264;
  padding: 5px 15px;
}

#dark{
  background-color: #562424;
  padding: 5px 15px;
}
`;

// CSS BOTÃO SAIR DE DETALHES
export const Button = styled.button `
  background: transparent;
  color: #fff;
  font-weight: 300;
  font-size: 25px;
  border: none;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  top: 15%;
  right: 8%;
`;