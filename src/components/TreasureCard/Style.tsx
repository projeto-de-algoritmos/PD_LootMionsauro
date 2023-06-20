import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 125px;
    border-radius: 10px;
    background-color: white;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 4px;
    margin-left: 4px;
    border-width: 3.5px;
    border-color: ${(props) => props.selected ? 'gold' : 'white'};
    border-style: solid;
`

export const Information = styled.p`
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bolder;
`

export const Picture = styled.img`
    width: 62px;
    margin-bottom: 8px;
`