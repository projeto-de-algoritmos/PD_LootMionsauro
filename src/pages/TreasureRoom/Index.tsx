import { useEffect, useState } from "react";
import { Treasure, getRandomLoot } from "../../utils/Treasures";
import GlobalButton from "../../components/GlobalButton/Index";
import { Container, LootGrid, LootTable } from "./Style";
import TreasureCard from "../../components/TreasureCard/Index";

const TreasureRoom = () => {

    const [items, setItems] = useState<Treasure[]>([]);

    useEffect(() => {
        setItems(getRandomLoot(15));
    }, []);

    const test = () => {
        console.log(items);
    }

    const renderCards = () => {
        return (
            items.map((item) => (
                <TreasureCard
                    image={item.image}
                    weight={item.weight}
                    value={item.value}
                />
            ))
        )
    }

    return (
        <Container>
            <LootTable>
                <LootGrid>
                    {renderCards()}
                </LootGrid>
            </LootTable>
            <GlobalButton onClick={test} text="test" primary={false} />
        </Container>

    );
};

export default TreasureRoom;