import styled from "styled-components"
import BackGround from "../../assets/poster.jpg"


export const Container = styled.div`
`

export const Logo = styled.img`
  width: 250px;
  height: 170px;
  margin-bottom: 30px;
`;

export const LoadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: black;
    width: 100vw;
    height: 100vh;

    img {
        width: 200px;
        height: 200px;
    }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw; 

  background-image: url(${BackGround});

  background-size: cover;
  background-position: center;
`

export const InputNameLight = styled.input`

    width: 277px;
    height: 56px;

    border-radius: 22px;
    border: none;
    outline: none;

    background: #D9D9D9;

    font-size: 24px;
    font-weight: 400;

    padding-left: 18px;
`

export const InputNameDark = styled.input`
    width: 277px;
    height: 56px;

    border-radius: 22px;
    border: none;
    outline: none;

    background: #342C2C;

    font-size: 24px;
    font-weight: 400;

    padding-left: 18px;

`

export const ButtonGoDark = styled.button`
    width: 46px;
    height: 48px;

    border-radius: 22px;

    background: #342C2C;
    
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
    margin-left: 17px;

    img {
        width: 20px;
        height: 20px;
    }

`
export const ButtonGoLight = styled.button`
    width: 46px;
    height: 48px;

    border-radius: 22px;

    background: #D9D9D9;
    
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 17px;

    img {
        width: 15px;
        height: 15px;
    }

`


