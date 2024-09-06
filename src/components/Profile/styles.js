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
  overflow: hidden;
  overflow-y: scroll;

  h1 {
    text-align: center;
    font-family: "Irish Grover", system-ui;
    font-weight: 500;
    color: #ffae50;
    margin-bottom: 15px;
  }
  .const {
    color: #ff008a;
    font-family: "Irish Grover", system-ui;
  }
  .consoleText {
    color: #00a3ff;
    font-family: "Irish Grover", system-ui;
  }

  .infos {
    position: relative;
    img {
      position: absolute;
      right: 10px;

      width: 500px;
      height: 570px;
    }
    .texts {
      h2 {
        margin-left: 10px;
        width: 80%;
        position: relative;
        z-index: 1;
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
    }
  }
  @media screen and (max-width: 1020px) {
    width: 350px;
    height: 440px;
    margin-bottom: 40px;
    h1 {
      font-size: 25px;
      
    }
    h2 {
      font-size: 22px;
     
    }
    .infos {

      img {
        visibility: hidden;
      }
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
  overflow: hidden;
  overflow-y: scroll;

  h1 {
    text-align: center;
    font-family: "Irish Grover", system-ui;
    font-weight: 500;
    color: #ffae50;
    margin-bottom: 15px;
  }
  .const {
    color: #ff008a;
    font-family: "Irish Grover", system-ui;
  }
  .consoleText {
    color: #00a3ff;
    font-family: "Irish Grover", system-ui;
  }

  .infos {
    position: relative;
    img {
      position: absolute;
      right: 10px;

      width: 500px;
      height: 570px;
    }
    .texts {
      h2 {
        margin-left: 10px;
        width: 80%;
        position: relative;
        z-index: 1;
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
    }
  }
  @media screen and (max-width: 1020px) {
    width: 350px;
    height: 440px;
    margin-bottom: 40px;
    h1 {
      font-size: 25px;
      
    }
    h2 {
      font-size: 22px;
     
    }
    .infos {

      img {
        visibility: hidden;
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
