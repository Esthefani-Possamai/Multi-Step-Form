import styled from "styled-components";

export const Container = styled.div `
    margin-bottom: 60px;

    p {
        font-size: 14px;
        color: #fff;
    }
    h4 {
        font-size: 20px;
        font-weight: bold;
        margin: 10px 0px 0px 0px;
        color: #fff;
    }

    .editar {
    color: #fff;
    font-size: 14px;
    font-weight:  bold;
    border: 0;
    border-radius: 30px;
    padding: 12px 14px 10px 14px;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid  #619177;
    }

    .editar:hover {
        border: 2px solid #ad9978;
        transition: 0.5s;
    }
`;

export const Secao = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    margin: 0px;
`;

export const Link = styled.div `
    display: flex;
    align-items: center;
`;

