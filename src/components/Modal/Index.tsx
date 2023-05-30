import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, StyledModal, Backdrop } from './Style';

export interface FilterModalInterface {
    isShown: boolean;
    hide?: () => void;
};

const Modal = ({
    isShown,
    hide,
    children
}: FilterModalInterface & { children: React.ReactNode }) => {

    const backdropClick = () => {
        if (hide) {
            hide();
        }
    };

    const modal = (
        <React.Fragment>
            <Backdrop onClick={backdropClick} />
            <Wrapper>
                <StyledModal>{children}</StyledModal>
            </Wrapper>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;