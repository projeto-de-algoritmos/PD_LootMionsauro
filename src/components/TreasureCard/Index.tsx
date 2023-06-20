import { Container, Information, Picture } from "./Style";

interface TreasureCardProps {
    image: string | undefined;
    weight: number | undefined;
    value: number | undefined;
    onClick?: VoidFunction;
};

const TreasureCard = ({
    image,
    weight,
    value,
    onClick,
}: TreasureCardProps) => {
    return (
        <Container>
            {image != undefined &&
                <>
                    <Picture src={require(`../../assets/treasures/${image}`)} alt={image} />
                    <Information>{value} $</Information>
                    <Information>{weight} oz</Information>
                </>
            }
        </Container>
    );
}

export default TreasureCard;