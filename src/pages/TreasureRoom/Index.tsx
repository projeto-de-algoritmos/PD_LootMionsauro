import { useEffect, useState, useRef } from "react";
import { Treasure, getRandomLoot } from "../../utils/Treasures";
import GlobalButton from "../../components/GlobalButton/Index";
import { ButtonArea, Container, HeaderText, IconImage, IconText, LootGrid, LootTable, TableText, Variables } from "./Style";
import TreasureCard from "../../components/TreasureCard/Index";
import { knapsack, knapsackDivideAndConquer } from "../../utils/Knapsack";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Index";
import { ModalText } from "../FightRoom/Style";
import LocalStorage from "../../LocalStorage";

const TreasureRoom = () => {

    const [items, setItems] = useState<Treasure[]>([]);
    const [lootWeight, setLootWeight] = useState<number>(0);
    const [lootValue, setLootValue] = useState<number>(0);
    const [bestLoot, setBestLoot] = useState<number>(0);
    const [success, setSuccess] = useState<boolean>(false);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(59);
    const [showModal, setShowModal] = useState<boolean>(false);
    const difficulty: string = LocalStorage.getDifficulty();
    const capacity = 100;

    const navigate = useNavigate();
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const initialTime = () => {
        if (difficulty === 'easy') {
            setMinutes(1);
            setSeconds(59);
        } else if (difficulty === 'medium') {
            setMinutes(1);
            setSeconds(29);
        } else {
            setMinutes(0);
            setSeconds(59);
        }
    };

    const startTimer = () => {
        if (timerRef.current) {
            return;
        }

        const newTimer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        timerRef.current = newTimer;
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    useEffect(() => {
        setItems(getRandomLoot(18));
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            setBestLoot(knapsack(items, capacity));
            // setBestLoot(knapsackDivideAndConquer(items, capacity, 0, items.length - 1));
            initialTime();
            startTimer();
        }
    }, [items]);

    useEffect(() => {
        if (seconds < 0 && minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
        } else if (seconds === 0 && minutes === 0) {
            stopTimer();
            toggleModal();
        }
    }, [seconds, minutes]);

    const Run = () => {
        navigate('./menu');
    };

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
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const PlayAgain = () => {
        setItems(getRandomLoot(18));
        setLootValue(0);
        setLootWeight(0);
        setSuccess(false);
    };

    const Loot = () => {
        if (lootValue >= bestLoot && lootWeight <= capacity) {
            setSuccess(true);
        }
        stopTimer();
        toggleModal();
    };

    return (
        <Container>
            <HeaderText>Treasure Room</HeaderText>
            <LootTable>
                <TableText>
                    <IconText>
                        <Variables>{lootValue < 100 && 0}{lootValue < 10 && 0}{lootValue}/{bestLoot}</Variables>
                        <IconImage size={30} src={require('../../assets/Coin.png')} />
                    </IconText>
                    <IconText>
                        <Variables>{lootWeight < 10 && 0}{lootWeight}/{capacity}</Variables>
                        <IconImage size={30} src={require('../../assets/Weight.png')} />
                    </IconText>
                    <IconText>
                        <Variables>{minutes < 10 && 0}{minutes}:{seconds >= 0 && seconds < 10 && 0}{seconds}</Variables>
                        <IconImage size={30} src={require('../../assets/time.png')} />
                    </IconText>
                </TableText>
                <LootGrid>
                    {renderCards()}
                </LootGrid>
            </LootTable>
            <ButtonArea>
                <GlobalButton onClick={Run} text="Run" primary={false} />
                <GlobalButton onClick={Loot} text="Loot" primary={false} />
            </ButtonArea>
            <Modal isShown={showModal}>
                {success ?
                    <>
                        <ModalText>You've successfully looted the treasure room!</ModalText>
                    </> : <>
                        <ModalText>Mionsauro caught you looting his treasures.</ModalText>
                    </>}
                <GlobalButton onClick={() => {
                    PlayAgain();
                    toggleModal();
                }} text='Play again' primary={true} />
                <GlobalButton onClick={Run} text='Menu' primary={true} />
            </Modal>
        </Container>

    );
};

export default TreasureRoom;