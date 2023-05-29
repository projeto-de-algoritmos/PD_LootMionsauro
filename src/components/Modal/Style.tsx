import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 700;
    width: inherit;
    outline: 0;
`;

export const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 500;
`;

export const StyledModal = styled.div`
    display: flex;
    z-index: 100;
    background:#461414;;
    position: relative;
    margin: auto;
    border-radius: 10px;
    border-width: 5px;
    border-color: gold;
    border-style: solid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    gap: 8px;
    min-width: 600px;
    

    @media (max-width: 750px){
        width: 95vw;
    }
`;

export const ModalText = styled.div`
    font-weight: bolder;
    font-size: 32px;
    color: gold;
    margin-top: 16px;
    margin-bottom: 16px;
`