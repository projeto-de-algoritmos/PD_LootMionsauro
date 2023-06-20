import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    gap: 8px;
`;

export const LootTable = styled.div`
    display: flex;
    width: 750px;
    background:#461414;
    border-radius: 10px;
    border-width: 5px;
    border-color: gold;
    border-style: solid;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;

export const LootGrid = styled.div`
    display: flex;
    width: 650px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Variables = styled.p`
    color: white;
    font-size: 32px;
    font-weight: bolder;
    margin-top: 0;
    margin-bottom: 0;
`;

export const TableText = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    flex-direction: row;
    margin-top: 8px;
    margin-bottom: 8px;
`;

export const HeaderText = styled.p`
    font-size: 64px;
    color: gold;
    font-weight: bolder;
    margin-bottom: 0;
    margin-top: 0;
`;

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
`