import { useState } from "react";
import { Container, Information, Picture } from "./Style";

interface TreasureCardProps {
    image: string | undefined;
    weight: number | undefined;
    value: number | undefined;
    setLootValue: (value: number) => void;
    setLootWeight: (weight: number) => void;
    lootValue: number;
    lootWeight: number;
};

const TreasureCard = ({
    image,
    weight,
    value,
    setLootValue,
    setLootWeight,
    lootValue,
    lootWeight,
}: TreasureCardProps) => {

    const [selected, setSelected] = useState<boolean>(false);

    const togleSelected = () => {
        setSelected(!selected);
    }

    const select = () => {
        if (value && weight) {
            if (!selected) {
                setLootValue(lootValue + value);
                setLootWeight(lootWeight + weight);
            } else {
                setLootValue(lootValue - value);
                setLootWeight(lootWeight - weight);
            }
        }
        togleSelected();
    }
    return (
        <Container selected={selected} onClick={select}>
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