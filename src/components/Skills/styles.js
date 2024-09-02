import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerClose = styled.div``;

export const ContainerOpen = styled.div``;

export const SecondContainerLight = styled.div`
  display: flex;

  width: 1300px;
  height: 670px;

  background: #ffffff;

  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px #00000040;

  margin-bottom: 60px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-family: "Irish Grover", system-ui;
    font-weight: 500;
    color: #ffae50;
  }
  .const {
    color: #ff008a;
    font-family: "Irish Grover", system-ui;
  }
  .consoleText {
    color: #00a3ff;
    font-family: "Irish Grover", system-ui;
  }

  .tecnologias {
    img {
      width: 130px;
      height: 130px;
      margin-left: 20px;
      margin-bottom: 20px;
    }
    img:hover {
      opacity: 0.8;
    }
  }
`;

export const SecondContainerDark = styled.div`
  display: flex;

  width: 1300px;
  height: 670px;

  background: #363431;

  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px #00000030;

  margin-bottom: 60px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-family: "Irish Grover", system-ui;
    font-weight: bold;
    color: white;
  }

  .tecnologias {
    img {
      width: 130px;
      height: 130px;
      margin-left: 20px;
      margin-bottom: 20px;
    }
    img:hover {
      opacity: 0.8;
    }
  }
`;

export const ThreeBolls = styled.div`
  margin: 12px 0px 0px 16px;

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
