import styled from "styled-components";

export const Container = styled.div<{ primary: boolean }>`
    display: flex;
    background-color: #461414;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.primary ? "120px" : "60px"};
    width: ${(props) => props.primary ? "300px" : "150px"};
    border-radius: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: gold;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
`

export const BtnText = styled.p`
    font-size: 32px;
    font-weight: bolder;
    color: gold;
`