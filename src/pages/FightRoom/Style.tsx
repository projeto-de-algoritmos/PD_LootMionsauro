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
    justify-content: center;
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