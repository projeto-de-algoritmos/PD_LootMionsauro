import { BtnText, Container } from "./Style";

interface GlobalButtonInterface {
    onClick: VoidFunction;
    text: string;
    primary: boolean;
}

const GlobalButton = ({
    onClick,
    text,
    primary }: GlobalButtonInterface) => {
        return(
            <Container onClick={onClick} primary={primary}>
                <BtnText>{text}</BtnText>
            </Container>
        )
}

export default GlobalButton;