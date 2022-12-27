import styled from "styled-components";

export const Container = styled.div `
    p {
        font: 13px;
        color: #ad9978;
    }

    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr{
        height: 1px;
        border: 0;
        background-color: #594c2a;
        margin: 30px 0px;
    }

    label {
        font-size: 13px;
            input {
                display: block;
                margin-top: 7px;
                box-sizing: border-box;
                width: 100%;
                border-radius: 10px;
                padding: 20px 10px;
                border: 2px solid #619177;
                color: #fff;
                outline: 0;
                font-size: 16px;
                background-color: transparent;
            }
    }

    button {
        background-color: #619177;
        color: #fff;
        font-size: 14px;
        font-weight:  bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
`;