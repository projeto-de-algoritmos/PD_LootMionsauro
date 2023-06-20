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
`
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
`

export const LootGrid = styled.div`
    display: flex;
    width: 600px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`
