import GlobalButton from "../../components/GlobalButton/Index";
import { Body, Container, Header, HeaderText } from "./Style";
import { useNavigate } from "react-router-dom";
const Menu = () => {

    const navigate = useNavigate();

    const startFight = () => {
        navigate(`/fight`);
    };

    return (
        <Container>
            <Header>
                <HeaderText>KILL MIONSAURO</HeaderText>
            </Header>
            <Body>
                <GlobalButton onClick={startFight} text="Fight" primary={true} />
            </Body>
        </Container>
    )
}

export default Menu;