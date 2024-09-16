import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerClose = styled.div``;

export const ContainerOpen = styled.div``;

export const SecondContainerLight = styled.div`
  display: grid;

  width: 1250px;
  height: 620px;

  background: #ffffff;

  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px #00000040;

  margin-bottom: 60px;
  overflow: hidden;
  overflow-y: scroll;

  @media screen and (max-width: 1020px) {
    width: 350px;
    height: 440px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 900px;
    height: 500px;
  }
  @media screen and (min-width: 650px) and (max-width: 990px) {
    width: 730px;
    height: 600px;
  }
`;

export const SecondContainerDark = styled.div`
  display: grid;

  width: 1250px;
  height: 620px;

  background: #363431;

  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px #00000040;

  margin-bottom: 60px;
  overflow: hidden;
  overflow-y: scroll;
  color: white;
  @media screen and (max-width: 1020px) {
    width: 350px;
    height: 440px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 900px;
    height: 500px;
  }
  @media screen and (min-width: 650px) and (max-width: 990px) {
    width: 730px;
    height: 600px;
  }
`;

export const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-template-rows: 1fr;
  margin-bottom: 30px;

  p {
    text-align: center;
    font-family: "Irish Grover", system-ui;
    font-weight: 500;
    font-size: 20px;
  }
  @media screen and (max-width: 1020px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 170px;

    p {
      font-size: 15px;
    }

    img {
      width: 170px;
      height: 100px;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 900px;
    height: 500px;
    p {
      font-size: 15px;
    }

    img {
      width: 250px;
      height: 150px;
    }
  }

  @media screen and (min-width: 650px) and (max-width: 990px) {
    width: 730px;
    height: 600px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const FSWDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  height: 670px;
  background: white;

  margin-bottom: 60px;
  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px #00000040;

  .esquerda {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .direita {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .arrow {
    background: transparent;
    outline: none;
    border: none;
    position: relative;
    top: -290px;
    left: 50px;
    cursor: pointer;
  }

  h1 {
    color: #000000;

    margin-bottom: 10px;
    font-family: "Irish Grover", system-ui;
    font-weight: 500;
  }

  span {
    color: #000000;

    font-weight: 500;
    font-size: 26px;
  }

  .tecnologias {
    margin-top: 30px;

    img {
      margin-left: 10px;
      width: 86px;
      height: 73px;
    }
  }

  .buttons {
    margin-top: 30px;

    button {
      width: 219px;
      height: 41px;

      border-radius: 3px 0px 0px 0px;

      background: #fcfbf7;

      margin-left: 10px;
      outline: none;
      border: 1px solid #f0eeeb;
      cursor: pointer;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    height: 440px;
    margin-bottom: 40px;

    .esquerda {
      visibility: hidden;
      width: 0;
      height: 0;
    }
    .arrow {
      background: transparent;
      outline: none;
      border: none;
      position: absolute;
      top: 100px;
      left: 30px;
      cursor: pointer;
    }
    span {
      color: #000000;

      font-weight: 500;
      font-size: 15px;
      margin: 0 10px 0 15px;
    }
    h1 {
      margin-top: 30px;
      font-size: 20px;
    }
    .tecnologias {
      margin-top: 30px;

      img {
        margin-left: 10px;
        width: 33px;
        height: 33px;
      }
    }
    .buttons {
      button {
        width: 130px;
        height: 30px;
        font-size: 10px;
      }
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 900px;
    height: 500px;

    .esquerda {
      img {
        width: 400px;
        height: 250px;
      }
    }
    .arrow {
      background: transparent;
      outline: none;
      border: none;
      position: absolute;
      top: 110px;
      left: 210px;
      cursor: pointer;
    }
    span {
      color: #000000;

      font-weight: 500;
      font-size: 20px;
      margin: 0 10px 0 15px;
    }
    h1 {
      margin-top: 20px;
      font-size: 25px;
    }
    .tecnologias {
      margin-top: 20px;

      img {
        margin-left: 10px;
        width: 50px;
        height: 50px;
      }
    }
    .buttons {
      button {
        width: 160px;
        height: 30px;
        font-size: 13px;
      }
    }
  }
  @media screen and (min-width: 650px) and (max-width: 990px) {
    width: 730px;
    height: 600px;

    .esquerda {
      img {
        width: 350px;
        height: 200px;
      }
    }
    .arrow {
      background: transparent;
      outline: none;
      border: none;
      position: absolute;
      top: 240px;
      left: 80px;
      cursor: pointer;
    }
    span {
      color: #000000;

      font-weight: 500;
      font-size: 18px;
      margin: 0 10px 0 15px;
    }
    h1 {
      margin-top: 30px;
      font-size: 23px;
    }
    .tecnologias {
      margin-top: 20px;
      margin-left: 10px;

      img {
        margin-left: 10px;
        width: 50px;
        height: 50px;
      }
    }
    .buttons {
      button {
        width: 160px;
        height: 30px;
        font-size: 13px;
      }
    }
  }
`;

export const ThreeBolls = styled.div`
  margin: 12px 0px 0px 16px;
  z-index: 1;

  button {
    border: none;
    outline: none;
    background: transparent;
  }

  #bollsimg {
    width: 70px;
    height: 40px;
    cursor: pointer;
  }

  #bollsimg:hover {
    opacity: 70%;
  }
`;
