import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, StyledModal, Backdrop, ModalText } from './Style';
import GlobalButton from '../GlobalButton/Index';

export interface FilterModalInterface {
    isShown: boolean;
    hide: () => void;
    won: boolean;
    retry: VoidFunction;
    menu: VoidFunction;
    playAgain: VoidFunction;
};

const Modal = ({
    isShown,
    hide,

    won,
    retry,
    menu,
    playAgain
}: FilterModalInterface) => {

    const modal = (
        <React.Fragment>
            <Backdrop />
            <Wrapper>
                <StyledModal>
                    {won ? <ModalText>You've beaten Mionsauro!</ModalText> : <ModalText>You lost to Mionsauro.</ModalText>}
                    {!won && <GlobalButton onClick={() => {
                        retry();
                        hide();
                    }} text='Retry' primary={true} />}
                    <GlobalButton onClick={() => {
                        playAgain();
                        hide();
                    }} text='Play again' primary={true} />
                    <GlobalButton onClick={menu} text='Menu' primary={true} />
                </StyledModal>
            </Wrapper>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;