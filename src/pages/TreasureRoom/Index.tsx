import { useEffect, useState } from "react";
import { Treasure, getRandomLoot } from "../../utils/Treasures";
import GlobalButton from "../../components/GlobalButton/Index";
import { ButtonArea, Container, HeaderText, LootGrid, LootTable, TableText, Variables } from "./Style";
import TreasureCard from "../../components/TreasureCard/Index";
import { knapsack } from "../../utils/Knapsack";

const TreasureRoom = () => {

    const [items, setItems] = useState<Treasure[]>([]);
    const [lootWeight, setLootWeight] = useState<number>(0);
    const [lootValue, setLootValue] = useState<number>(0);
    const [bestLoot, setBestLoot] = useState<number>(0);
    const capacity = 100;

    useEffect(() => {
        setItems(getRandomLoot(18));
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            setBestLoot(knapsack(items, capacity));
        }
    }, [items]);

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
                    setLootValue={setLootValue}
                    setLootWeight={setLootWeight}
                    lootValue={lootValue}
                    lootWeight={lootWeight}
                />
            ))
        )
    }

    return (
        <Container>
            <HeaderText>Treasure Room</HeaderText>
            <LootTable>
                <TableText>
                    <Variables>{lootValue}/{bestLoot} $</Variables>
                    <Variables>{lootWeight}/{capacity} oz</Variables>
                    <Variables>00:00</Variables>
                </TableText>
                <LootGrid>
                    {renderCards()}
                </LootGrid>
            </LootTable>
            <ButtonArea>
                <GlobalButton onClick={test} text="Run" primary={false} />
                <GlobalButton onClick={test} text="Loot" primary={false} />
            </ButtonArea>
        </Container>

    );
};

export default TreasureRoom;