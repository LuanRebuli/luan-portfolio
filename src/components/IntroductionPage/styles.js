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

    width: 1250px;
    height: 620px;

    background: #FFFFFF;

    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px #00000040;

    margin-bottom: 60px;

    @media screen and (max-width: 600px) {
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
    
`

export const SecondContainerDark = styled.div` 
    display: flex;

    width: 1250px;
    height: 620px;

    background: #363431;

    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px #00000040;

    margin-bottom: 60px;
    
    @media screen and (max-width: 600px) {
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

        @media screen and (min-width: 650px) and (max-width: 990px) {
        width: 730px;
        height: 600px;
    }
    
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    width: 30%;
    border-right: 1px solid #31363F;

    @media screen and (max-width: 600px) {
        height: 0;
        width: 0;
        border: none;
    }

    
    @media screen and (min-width: 650px) and (max-width: 990px) {
        width: 40%;
    }


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
        font-family: "Irish Grover", system-ui;
        font-weight: bold;

        .consoleText {
            color: #00A3FF;
            
    }
    }

    #constname {
        font-size: 24px;
        margin: 30px 0 0 20px;
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

    @media screen and (max-width: 1020px) {
        width: 100%;
        display: flex;
        flex-direction: column;

        overflow-y: auto;

        #console {
            font-size: 25px;
            margin-top: 40px;
            
        }
        #constname {
            font-size: 20px;
            margin: 20px 0 0 20px;
        }
        #constage {
            font-size: 20px;
            
        }
        #message {
            font-size: 20px;
            margin-right: 5px;
            margin-bottom: 5px;
        }
    }
`
export const ThreeBolls = styled.div`
    display: flex;
    width: 70px;
    height: 40px;
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
    
`

export const InputSearchLight = styled.input`
    width: 230px;
    height: 45px;
    margin: 0 0 60px 80px;;

    background: #F1F1F1;
    

    border-radius: 3px 0px 0px 0px;
    border: none;

    text-align: center;
    @media screen and (max-width: 650px) {
        visibility: hidden;
    }

    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        width: 200px;
        height: 45px;
        margin: 0 0 40px 35px;
    }

    @media screen and (min-width: 650px) and (max-width: 990px) {
        width: 195px;
        height: 45px;
        margin: 0 0 40px 35px;
    }
    
`

export const InputSearchDark = styled.input`
    width: 230px;
    height: 45px;
    margin: 0 0 60px 80px;;

    background: #31363F;

    border-radius: 3px 0px 0px 0px;
    border: none;

    text-align: center;
    @media screen and (max-width: 650px) {
        visibility: hidden;
    }

    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        width: 200px;
        height: 45px;
        margin: 0 0 40px 35px;
    }

    @media screen and (min-width: 650px) and (max-width: 990px) {
        width: 195px;
        height: 45px;
        margin: 0 0 40px 35px;
    }
`

export const IntrodutionOrnamentLight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 300px;
    height: 53px;

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
    @media screen and (max-width: 650px) {
        visibility: hidden;
    }

    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        width: 240px;
        height: 53px;
        margin: 0 0 260px 15px;
    }

    @media screen and (min-width: 650px) and (max-width: 990px) {
        width: 230px;
        height: 53px;
        margin: 0 20px 240px 15px;


        .text {
            margin-left: 20px;
        }
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
    @media screen and (max-width: 650px) {
        visibility: hidden;
    }

    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        width: 240px;
        height: 53px;
        margin: 0 0 240px 15px;
    }
    @media screen and (min-width: 650px) and (max-width: 990px) {
        width: 230px;
        height: 53px;
        margin: 0 20px 240px 15px;


        .text {
            margin-left: 20px;
        }
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
    @media screen and (max-width: 650px) {
        visibility: hidden;
    }

    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        margin: 0 0 10px 5px;
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
    @media screen and (max-width: 650px) {
        visibility: hidden;
    }

    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        margin: 0 0 10px 5px;
    }
`