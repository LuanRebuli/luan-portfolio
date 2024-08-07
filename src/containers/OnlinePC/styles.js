import styled from "styled-components"

import Background from "../../assets/background-pc.svg";

export const Container = styled.div`
    background-image: url(${Background});

    background-size: cover;
    background-position: center;

    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const HotBar = styled.div`
    display: flex;

    position: absolute;
    bottom: 50px;
    
    width: 1350px;
    height: 70px;

    border-radius: 19px;
    box-shadow: 0px 4px 4px 0px #00000040;

    background: #D9D9D94A;

    gap: 20px;
    padding: 0 0 5px 25px;

    img {
        width: 50px;
        height: 50px;
    }

    button {
        background: transparent;
        outline: none;
        border: none;
        padding-bottom: 0px;
        cursor: pointer;
    }

    button:hover {
        opacity: 50%;
    }

    p {
        color: #D9D9D9;
    }
    

`