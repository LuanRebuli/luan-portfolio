import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerClose = styled.div`

`

export const ContainerOpen = styled.div`
`

export const SecondContainerLight = styled.div` 
    display: flex;

    width: 1200px;
    height: 600px;

    background: #FFFFFF;

    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px #00000040;

    margin-bottom: 60px;
    
`

export const SecondContainerDark = styled.div` 
    display: flex;

    width: 1200px;
    height: 600px;

    background: #111111;

    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px #00000040;

    margin-bottom: 60px;
    
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    width: 30%;
    border-right: 1px solid #a0a0a0;
`

export const RightContainer = styled.div`
    height: 100%;
    width: 70%;
    
    p {
        font-family: "Irish Grover", system-ui; 
        font-weight: 500;
        color: #FFAE50;
    }
    
    a {
        font-family: "Irish Grover", system-ui; 
        font-weight: 500;
    }

    #console {
        text-align: center;
        font-size: 48px;
        margin-top: 20px;

        .consoleText {
            color: #00A3FF;
    }
    }

    #constname {
        font-size: 24px;
        margin: 10px 0 0 20px;
        .consoleText {
            color: #00A3FF;
    }
    }

    #constage {
        font-size: 24px;
        margin: 10px 0 0 20px;
        .consoleText {
            color: #00A3FF;
    }
    }

    #message {
        font-size: 24px;
        margin: 10px 0 0 20px;
        .consoleText {
            color: #00A3FF;
    }
    }

    .barra {
        color: #FFE500;

    }

    .Log {
        color: #E300E8;
    }

    .const {
        color: #FF008A;

    }
`
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
`

export const InputSearchLight = styled.input`
    width: 200px;
    height: 40px;
    margin: 0 0 60px 80px;;

    background: #F1F1F1;
    

    border-radius: 3px 0px 0px 0px;
    border: none;

    text-align: center;
`

export const InputSearchDark = styled.input`
    width: 200px;
    height: 40px;
    margin: 0 0 60px 80px;;

    background: #31363F;

    border-radius: 3px 0px 0px 0px;
    border: none;

    text-align: center;
`

export const IntrodutionOrnamentLight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 280px;
    height: 50px;

    margin: 0 0 300px 40px;
    padding: 10px;

    border-radius: 11px;
    cursor: pointer;

    background: #D0D0D0;
    

    img {
        width: 30px;
        height: 25px;
    }
    #text{
        margin-right: 60px;

    }
    #text:hover {
        opacity: 40%;
    }

    #number {
        color: #A2A2A2;
    font-size: 12px;
    }
`

export const IntrodutionOrnamentDark = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 280px;
    height: 50px;

    margin: 0 0 300px 40px;
    padding: 10px;

    border-radius: 11px;
    cursor: pointer;

    background: #31363F;

    img {
        width: 30px;
        height: 25px;
    }
    #text{
        margin-right: 60px;
        color: white;

    }
    #text:hover {
        opacity: 40%;
    }

    #number {
        color: #A2A2A2;
    font-size: 12px;
    }

`

export const ProfileLight = styled.div`
    display: flex;
    align-items: flex-start;

    width: 100%;
    height: 50px;
    
    img {
        margin: 0 20px 0 30px;
        width: 40px;
        height: 35px;
    }

    p {
        font-size: 13px;
    }
`

export const ProfileDark = styled.div`
    display: flex;
    align-items: flex-start;

    width: 100%;
    height: 50px;
    
    img {
        margin: 0 20px 0 30px;
        width: 40px;
        height: 35px;
    }

    p {
        font-size: 13px;
        color: white;
    }
`