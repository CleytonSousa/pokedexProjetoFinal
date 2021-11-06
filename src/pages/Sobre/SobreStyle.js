import styled from 'styled-components';

export const Container = styled.section`
    grid-template-columns: repeat(4, 2fr);
    display: flex;
    justify-content: center;
    height: 95vh;
    color: #fff;
    font-family: 'Raleway';
    text-transform: uppercase;
    font-size: 16px;
    padding: 0 5%;
    width: 90%;

  .titulo {
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 10%;

    h1{
      margin-bottom: 2%;
    }
  }
  
  .alunos{
    display: flex;
    width: 100vw;
    align-content: space-evenly;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 22%;

    .detalhes{
      display: flex;
      text-align: center;
      width: 25%;
      float: left;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: stretch;

      img{
        width: 250px;
        height: 250px;
        display: flex;
        align-self: center;
      }

      h1{
        display: grid;
        margin: 2%;
        
      }

      .redesSociais{
        margin-top:5%;
        display: flex;
        align-self: center;

        .icon{
          margin: 0 10px;

          img{
            width: 50px;
            height: 50px;

          }
        }

        a:hover{
          border-bottom: none;
        }
      }
    }
  }

  @media (max-width: 1190px){
    padding: 0 10%;

      .titulo{
        margin-top: 12%;
      }

      .alunos{
        margin-top: 30%;
      }
    }

    @media (max-width: 1030px){
      padding: 0;
      margin: 0  5% 0 5%;

      .titulo{
        margin-top: 15%;
      }

      .alunos{
        margin-top: 35%;

        .detalhes{

          img{
            width: 100%;
            height: auto;
          }
        }
      }
    }

    @media (max-width: 850px){
      .titulo{
        margin-top: 20%;
      }

      .alunos{
        display: grid;
        align-content: stretch;
        justify-items: stretch;
        justify-content: space-around;
        padding: 0 25%;
        margin-top: 40%;
        height: 1750px;

        .detalhes{
          width: 100%;
          margin-bottom: 15%;
        }
      }
    }

    @media (max-width: 600px){
      .alunos{
        margin-top: 45%;
        height: 1200px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
      }
    }

    @media (max-width: 480px){
      .titulo{
        margin-top: 25%;
      }

      .alunos{
        display: flex;
        margin-top: 250px;
        height: 1050px;
        overflow-y: visible;
        margin-bottom: 5%;
        overflow-y: visible;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;

        .detalhes{
          .redesSociais{
            a{
              display: flex;
            }
          }
        }
      }
    }

    @media (max-width: 380px){
      .titulo{
        margin-top: 120px;
      }

      .alunos{
        display: flex;
        margin-top: 300px;
        height: 850px;

        .detalhes{
          .redesSociais{
            a{
              display: flex;
            }
          }
        }
      }
    }

`