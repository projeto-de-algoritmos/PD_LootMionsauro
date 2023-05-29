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
    height: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;