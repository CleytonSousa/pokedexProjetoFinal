import styled from 'styled-components';

export const MenuRocket = styled.nav`
    grid-template-columns: repeat(4, 2fr);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #382D29;
    height: 80px;
    border-bottom: 1px solid #fff;
    margin-bottom: 2%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    /* padding-left: 2%; */
    

    #active{
      border-bottom: 3px solid #fff;
      padding-bottom: 5px;
    }

    .noShow{
      display: none;
    }

    #img-menu{
      img{
        width: 40px;
        left: 0;
      }
    }
    
    .navItem{
        margin: 0 5%;
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-weight: bold;
        animation: opacidade 0.5s linear 1; /* anim menu */
        padding-bottom: 5px;
    }

    .navItem:hover{
      border-bottom: solid rgb(219, 219, 219) 3px;
      color: rgb(218, 226, 233);
    }

    svg{
      animation: opacidade 0.5s linear 1; /* anim menu */
    }

    #pokebola{
      animation: spin .3s linear 3;
      width: 3%;
    }

    #menu__toggle {
      opacity: 0;
    }

    #menu__toggle:checked ~ .menu__btn{
      span{
        transform: rotate(45deg);

        ::before {
          top: 0;
          transform: rotate(0);
        }

        ::after {
          top: 0;
          transform: rotate(90deg);
        }
      } 
    }

    #menu__toggle:checked ~ .menu__btn{
      #item{
        transform: rotate(-45deg);

        ::before {
          top: 0;
          transform: rotate(0);
        }

        ::after {
          top: 0;
          transform: rotate(-90deg);
        }
      }
    }

    #menu__toggle:checked ~ .menu__box {
      visibility: visible;
      left: 0;
    }

    .menu__btn {
      display: none;
      align-items: center;
      position: fixed;
      top: 20px;
      right: 20px;
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;

      span,
      span::before,
      span::after{
        display: block;
        position: absolute;

        width: 100%;
        height: 2px;

        background-color: #616161;

        transition-duration: .25s;
      }

      ::before{
        content: '';
        top: -8px;
      }

      ::after{
        content: '';
        top: 8px;
      }
    }

    .navRespo{
      display: flex;
      position: absolute;
      flex-direction: column;
      text-align: center;
      padding-bottom: 15px;
      margin-top: 80px;
    }

    .navItemRespo{
        margin-top: 15px;
    }

    @keyframes opacidade {
      0%{
        margin-top: -100px;
      }
      50%{
        margin-top: -50px;
      }

      100%{
        margin-top: 0;
      }
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 1020px){
      padding-left: 5%;

      #pokebola{
        margin-left: 5%;
      }
    }

    @media (max-width: 853px) {
      #pokebola{
        margin-left: 3%;
        width: 4%;
      }
    }

    @media (max-width: 690px){
      #pokebola{
        width: 5%;
        margin-left: 0;
      }
    }

    @media (max-width: 530px){
      #pokebola{
        width: 5%;
        margin-left: 3%;
      }
    }

    @media (max-width: 488px) {
      padding-left: 0;

      a{
        display: none;
      }

      nav{
        padding: 0 10%;
        justify-content: flex-start;
      }

      .navRespo{
        display: flex;
        background-color: #523c34;
        align-self: flex-start;
      }

      .navItemRespo{
        display: inline;
        width: 100vw;
      }

      .menu__btn{
        display: flex;
      }

      #pokebola{
        width: 8%;
        position: absolute;
        margin-top: -20px;
      }
  }

`