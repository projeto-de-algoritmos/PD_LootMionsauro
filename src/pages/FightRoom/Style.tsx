import styled, { keyframes, css } from "styled-components";

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 8px;
`

export const Mionsauro = styled.img<{ isBlinking: boolean }>`
    width: 250px;
    ${({ isBlinking }) =>
        isBlinking &&
        css`
      animation: ${blinkAnimation} 0.4s linear;
    `}
`

export const BossArea = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    height: 60%;
    align-items: center;
    flex-direction: column;
`;

export const ButtonsArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 400px;
    gap: 8px;
    height: 30%;
`;

export const HealthBar = styled.div`
    display: flex;
    width: 350px;
    height: 80px;
    background-color: gold;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const Health = styled.div<{ health: number }>`
    display: flex;
    width: ${(props) => `${props.health.toString()}%`};
    height: 100%;
    background-color: ${(props) => props.health > 66 && 'green' || props.health > 33 && 'yellow' || 'red'};
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
`;

export const HealthValue = styled.p`
    color: white;
    font-weight: bolder;
    font-size: 24px;
    align-self: center;
    position: absolute;
    justify-self: center;
    margin-left: 120px;
`