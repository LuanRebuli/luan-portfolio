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

  width: 1300px;
  height: 670px;

  background: #ffffff;

  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px #00000040;

  margin-bottom: 60px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const SecondContainerDark = styled.div`
  display: grid;

  width: 1300px;
  height: 670px;

  background: #111111;

  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px #00000040;

  margin-bottom: 60px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-template-rows: 1fr;
  margin-bottom: 10px;

  p {
    text-align: center;
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
    position: absolute;
    top: 150px;
    left: 320px;
    cursor: pointer;
  }

  h1 {
    color: #000000;

    margin-bottom: 20px;
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
    }
  }

  .buttons {
    margin-top: 50px;

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
`;

export const ThreeBolls = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
  width: 70px;
  height: 40px;

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
