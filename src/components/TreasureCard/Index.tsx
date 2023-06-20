import { useEffect, useState } from "react";
import { Container, IconImage, IconText, Information, Picture } from "./Style";

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
    };

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
    };

    useEffect(() => {
        if (lootWeight === 0) {
            setSelected(false);
        }

    }, [weight, image, value, lootWeight]);

    return (
        <Container selected={selected} onClick={select}>
            {image != undefined &&
                <>
                    <Picture src={require(`../../assets/treasures/${image}`)} alt={image} />
                    <IconText>
                        <Information>{value && value < 10 && '0'}{value}</Information>
                        <IconImage size={20} src={require('../../assets/BlackCoin.png')} />
                    </IconText>
                    <IconText>
                        <Information>{weight && weight < 10 && '0'}{weight}</Information>
                        <IconImage size={20} src={require('../../assets/BlackWeight.png')} />
                    </IconText>

                </>
            }
        </Container>
    );
}

export default TreasureCard;