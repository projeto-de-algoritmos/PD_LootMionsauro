import { useEffect, useState } from "react";
import { BossArea, ButtonsArea, Container, Health, HealthBar, HealthValue, Mionsauro } from "./Style";
import GlobalButton from "../../components/GlobalButton/Index";
import { CoinChange } from "../../utils/CoinChanging";
import { useNavigate } from "react-router-dom";

const FightRoom = () => {

    const [isBlinking, setIsBlinking] = useState<boolean>(false);
    const [attackList, setAttackList] = useState<number[]>([]);
    const [bossLifeTotal, setBossLifeTotal] = useState<number>(0);
    const [bossLifeCurrent, setBossLifeCurrent] = useState<number>(0);
    const [turns, setTurns] = useState<number>(-1);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [healthBarPercentage, setHealthBarPercentage] = useState<number>(100);

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


    useEffect(() => {
        generateValues();
    }, []);

    useEffect(() => {
        if (isLoading === false) {
            setTurns(CoinChange(attackList, bossLifeTotal));
            if (turns === -1) {
                setIsLoading(true);
                generateValues();
            }
        }
    }, [isLoading]);

    useEffect(() => {
        if (bossLifeTotal !== 0 && attackList.length > 0) {
            setIsLoading(false);
        }
    }, [bossLifeTotal, attackList]);

    const generateValues = () => {
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
        console.log(bossLifeTotal, turns, attackList);
    };

    const Run = () => {
        navigate('./menu');
    }

    const UseAttack = async (damage: number) => {
        setBossLifeCurrent(bossLifeCurrent - damage);
        Blink();
    }

    useEffect(() => {
        if (bossLifeCurrent < 0) {
            setBossLifeCurrent(bossLifeTotal);
        }
        setHealthBarPercentage((bossLifeCurrent * 100) / bossLifeTotal);
    }, [bossLifeCurrent])

    return (
        <Container>
            <BossArea>
                <HealthBar>
                    <Health health={healthBarPercentage} />
                    <HealthValue>{bossLifeCurrent}/{bossLifeTotal}</HealthValue>
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
        </Container>
    )
}

export default FightRoom;