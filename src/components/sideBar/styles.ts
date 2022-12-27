import styled from "styled-components";

export const Container = styled.div `
    margin: 55px 0px;
    cursor: pointer;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div `
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div `
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 16px;
    color: #fff;
`;

export const Description = styled.div `
    text-align: right;
    font-style: 13px;
    color: #ad9978;
`;

export const IconArea = styled.div <{active: boolean;}> `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color #619177;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Point = styled.div <{active: boolean;}> `
    width: 10px;
    height: 10px;
    border: 2px solid #619177;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -7px;
    background-color: ${props => props.active ? '#619177' : '#161618'};
    `;
