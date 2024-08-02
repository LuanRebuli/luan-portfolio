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
    display: grid;

    width: 1500px;
    height: 800px;

    background: #FFFFFF;

    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px #00000040;

    margin-bottom: 60px;
    overflow: hidden;
    overflow-y: scroll;
    
`

export const SecondContainerDark = styled.div` 
    display: grid;

    width: 1500px;
    height: 800px;

    background: #111111;

    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px #00000040;

    margin-bottom: 60px;
    overflow: hidden;
    overflow-y: scroll;
`

export const ProjectDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-template-rows: 1fr;


    p{
        text-align: center;
    }


    img {
        width: 300px;
        height: 200px;
        border-radius: 10px;
    }
    
`
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
`