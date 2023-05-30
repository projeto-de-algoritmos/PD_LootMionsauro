import { useEffect, useState } from "react";
import { BossArea, ButtonsArea, Container, Health, HealthBar, HealthValue, Mionsauro, Turns, ModalText } from "./Style";
import GlobalButton from "../../components/GlobalButton/Index";
import { CoinChange } from "../../utils/CoinChanging";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Index";

const FightRoom = () => {

    const [isBlinking, setIsBlinking] = useState<boolean>(false);
    const [attackList, setAttackList] = useState<number[]>([]);
    const [bossLifeTotal, setBossLifeTotal] = useState<number>(-1);
    const [bossLifeCurrent, setBossLifeCurrent] = useState<number>(-1);
    const [totalTurns, setTotalTurns] = useState<number>(-1);
    const [remainngTurns, setRemainingTurns] = useState<number>(-1);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [healthBarPercentage, setHealthBarPercentage] = useState<number>(100);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [win, setWin] = useState<boolean>(false);

    const navigate = useNavigate();
    const attacks: number[] = [5, 10, 15, 25, 40, 50, 55, 80, 100, 120, 155, 175, 250];

    const generateBossLifeTotal = () => {
        const min = 200;
        const max = 1000;
        const multipleOf = 5;

        const range = Math.floor((max - min) / multipleOf) + 1;
        const randomMultiple = Math.floor(Math.random() * range);
        const randomNumber = min + randomMultiple * multipleOf;

        setBossLifeTotal(randomNumber);
        setBossLifeCurrent(randomNumber);
    };

    const getRandomAttacks = () => {
        const numAttacks = 4;
        const randomAttacks: number[] = [];

        while (randomAttacks.length < numAttacks) {
            const randomIndex = Math.floor(Math.random() * attacks.length);
            const attack = attacks[randomIndex];

            if (!randomAttacks.includes(attack)) {
                randomAttacks.push(attack);
            }
        }

        setAttackList(randomAttacks);
    }

    const generateValues = () => {
        setWin(false);
        getRandomAttacks();
        generateBossLifeTotal();
    };

    const Blink = () => {
        setIsBlinking(true);
        setTimeout(() => {
            setIsBlinking(false);
            setTimeout(() => {
                setIsBlinking(true);
                setTimeout(() => {
                    setIsBlinking(false);
                    setTimeout(() => {
                        setIsBlinking(true);
                        setTimeout(() => {
                            setIsBlinking(false);
                        }, 150);
                    }, 150);
                }, 150);
            }, 150);
        }, 150);
        console.log(bossLifeTotal, totalTurns, attackList);
    };

    const Run = () => {
        navigate('./menu');
    }

    const UseAttack = async (damage: number) => {
        setBossLifeCurrent(bossLifeCurrent - damage);
        setRemainingTurns(remainngTurns - 1);
        Blink();
    }

    const Retry = () => {
        setBossLifeCurrent(bossLifeTotal);
        setRemainingTurns(totalTurns);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const PlayAgain = () => {
        setBossLifeTotal(-1);
        setBossLifeCurrent(-1);
        setTotalTurns(-1);
        setRemainingTurns(-1);
        setIsLoading(true);
    };

    useEffect(() => {
        if (totalTurns < 0) {
            setIsLoading(true);
            generateValues();
        }
    }, [totalTurns]);
    
    useEffect(() => {
        if (bossLifeTotal !== 0 && attackList.length > 0) {
            setIsLoading(false);
        }
    }, [bossLifeTotal, attackList]);

    useEffect(() => {
        if (isLoading === false) {
            const turns = CoinChange(attackList, bossLifeTotal);
            setTotalTurns(turns);
            setRemainingTurns(turns);
            if (totalTurns === -1) {
                setIsLoading(true);
                generateValues();
            }
        }
    }, [isLoading]);



    useEffect(() => {
        if (bossLifeCurrent < 0) {
            setBossLifeCurrent(bossLifeTotal);
        }
        setHealthBarPercentage((bossLifeCurrent * 100) / bossLifeTotal);
    }, [bossLifeCurrent])

    useEffect(() => {
        if (bossLifeCurrent === 0 || remainngTurns === 0) {
            if (bossLifeCurrent === 0) {
                setWin(true);
            }
            toggleModal();
        }else if(remainngTurns <= 0 && totalTurns > 0){
            toggleModal();
        }
    }, [bossLifeCurrent, remainngTurns]);



    return (
        <Container>
            <BossArea>
                <HealthBar>
                    <Health health={healthBarPercentage} />
                    <HealthValue>{bossLifeCurrent}/{bossLifeTotal}</HealthValue>
                    <Turns>Remaining Turns {remainngTurns}/{totalTurns}</Turns>
                </HealthBar>
                <Mionsauro src={require("../../assets/Boss.png")} isBlinking={isBlinking} />
            </BossArea>
            <ButtonsArea>
                <GlobalButton onClick={() => { UseAttack(attackList[0]) }} text={attackList[0]?.toString()} primary={false} />
                <GlobalButton onClick={() => { UseAttack(attackList[1]) }} text={attackList[1]?.toString()} primary={false} />
                <GlobalButton onClick={() => { UseAttack(attackList[2]) }} text={attackList[2]?.toString()} primary={false} />
                <GlobalButton onClick={() => { UseAttack(attackList[3]) }} text={attackList[3]?.toString()} primary={false} />
                <GlobalButton onClick={Run} text="Run" primary={false} />
            </ButtonsArea>
            <Modal isShown={showModal}>
                {win ? <ModalText>You've beaten Mionsauro!</ModalText> : <ModalText>You lost to Mionsauro.</ModalText>}
                {!win && <GlobalButton onClick={() => {
                    Retry();
                    toggleModal();
                }} text='Retry' primary={true} />}
                <GlobalButton onClick={() => {
                    PlayAgain();
                    toggleModal();
                }} text='Play again' primary={true} />
                <GlobalButton onClick={Run} text='Menu' primary={true} />
            </Modal>
        </Container>
    )
}

export default FightRoom;