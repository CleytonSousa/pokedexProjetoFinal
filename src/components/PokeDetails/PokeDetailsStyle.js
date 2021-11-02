import styled from 'styled-components';

export const Container = styled.div`
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
      margin-bottom: 10rem;
      font-weight: 700;
      font-size: 16em;
  }
`;

export const StatsDiv = styled.div `
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    
    progress{
      margin-left: 15px;
    }

    progress[value] {
      height: 20px;
    }

    span{
        width: 25px;
        height: 10px;
        background: #8BD192;
        align-self: center;
        margin: 0 15px;
        border-radius: 5px;
    }
`;

export const Types = styled.p `
text-align: center;
border-radius: 5px;
font-size: 15px;
margin: 5px;


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