import styled from "styled-components";

export const Container = styled.div `
    background-color: #161618;
    color: #ffffff;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 60px;
    margin: 0px;
    background-repeat: repeat;
`;

export const Area = styled.div `
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div `
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div `
    width: 250px;
    border-right: 1px solid #ad9978;
`;

export const Page = styled.div `
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;

export const Footer = styled.h4 `
    background-color: #161618;
    margin: 0px;
    padding-bottom: 15px;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 200;
`;
