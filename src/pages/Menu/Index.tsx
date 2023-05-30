import { useEffect, useState } from "react";
import GlobalButton from "../../components/GlobalButton/Index";
import Modal from "../../components/Modal/Index";
import { Body, CloseButton, Container, Header, HeaderText, ModalComponent, ModalComponentBox, Slected } from "./Style";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../LocalStorage";
import { ModalText } from "../FightRoom/Style";
const Menu = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<string>();
    const navigate = useNavigate();

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    const startFight = () => {
        navigate(`/fight`);
    };

    useEffect(() => {
        setDifficulty(LocalStorage.getDifficulty());
    }, []);

    return (
        <Container>
            <Header>
                <HeaderText>KILL MIONSAURO</HeaderText>
            </Header>
            <Body>
                <GlobalButton onClick={startFight} text="Fight" primary={true} />
                <GlobalButton onClick={toggleModal} text="Difficulty" primary={true} />
            </Body>
            <Modal isShown={showModal} hide={toggleModal}>
                <ModalComponentBox>
                    <ModalComponent>
                        <ModalText>Choose Difficulty</ModalText>
                    </ModalComponent>
                    <ModalComponent>
                        <CloseButton onClick={toggleModal}>X</CloseButton>
                    </ModalComponent>
                </ModalComponentBox>
                <ModalComponentBox>
                    <ModalComponent>
                        <GlobalButton onClick={() => {
                            LocalStorage.setDifficulty('easy')
                            setDifficulty('easy');
                        }} text="Easy" primary={false} />
                    </ModalComponent>
                    <ModalComponent>
                        {difficulty === 'easy' && <Slected>Selected</Slected>}
                    </ModalComponent>
                </ModalComponentBox>
                <ModalComponentBox>
                    <ModalComponent>
                        <GlobalButton onClick={() => {
                            LocalStorage.setDifficulty('medium')
                            setDifficulty('medium');
                        }} text="Medium" primary={false} />
                    </ModalComponent>
                    <ModalComponent>
                        {difficulty === 'medium' && <Slected>Selected</Slected>}
                    </ModalComponent>
                </ModalComponentBox>
                <ModalComponentBox>
                    <ModalComponent>
                        <GlobalButton onClick={() => {
                            LocalStorage.setDifficulty('hard')
                            setDifficulty('hard');
                        }} text="Hard" primary={false} />
                    </ModalComponent>
                    <ModalComponent>
                        {difficulty === 'hard' && <Slected>Selected</Slected>}
                    </ModalComponent>
                </ModalComponentBox>



            </Modal>
        </Container>
    )
}

export default Menu;