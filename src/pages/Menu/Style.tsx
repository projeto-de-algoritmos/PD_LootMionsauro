import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    height: 100vh;
    width: 100vw;
`;

export const Header = styled.div`
    height: 20%;
    justify-content: center;
    align-items: center;
`;

export const HeaderText = styled.p`
    font-size: 64px;
    color: gold;
    font-weight: bolder;
`;

export const Body = styled.div`
    display: flex;
    height: 75%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    margin-top: 5%;
`;

export const ModalComponentBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`
export const ModalComponent = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CloseButton = styled.div`
    position: fixed;
    color: white;
    font-size: 32px;
    font-weight: bolder;
    cursor: pointer;
    top: 32px;
    right: 38px;
`

export const Slected = styled.p`
    color: green;
    font-size: 16px;
    font-weight: bolder;
    margin-left: -32px;
`

