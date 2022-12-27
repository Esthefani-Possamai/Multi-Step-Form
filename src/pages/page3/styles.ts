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
        background-color: #ad9978;
        margin: 30px 0px;
    }

    label {
        font-size: 13px;
        display: block;
        margin-bottom: 25px;

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

    .btn {
        color: #fff;
        font-size: 14px;
        font-weight:  bold;
        padding: 16px 45px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px !important;
        margin-right: 30px;
        text-decoration: none;
        border: 2px solid  #619177;
    }

    .btn:hover {
        border: 2px solid #ad9978;
        transition: 0.5s;
    }
`;


