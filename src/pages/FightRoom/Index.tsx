import { useEffect, useState } from "react";
import { Container, Mionsauro } from "./Style";
import GlobalButton from "../../components/GlobalButton/Index";
import { CoinChange } from "../../utils/CoinChanging";

const FightRoom = () => {

    const [isBlinking, setIsBlinking] = useState<boolean>(false);
    const [attackList, setAttackList] = useState<number[]>([]);
    const [bossLifeTotal, setBossLifeTotal] = useState<number>(0);
    const [turns, setTurns] = useState<number>(-1);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const attacks: number[] = [5, 10, 15, 25, 40, 50, 55, 80, 100, 120];

    const generateBossLifeTotal = () => {
        const min = 200;
        const max = 1000;
        const multipleOf = 5;

        const range = Math.floor((max - min) / multipleOf) + 1;
        const randomMultiple = Math.floor(Math.random() * range);
        const randomNumber = min + randomMultiple * multipleOf;

        setBossLifeTotal(randomNumber);
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

    return (
        <Container>
            <Mionsauro src={require("../../assets/Boss.png")} isBlinking={isBlinking} />
            <GlobalButton onClick={Blink} text="blink" primary={false} />
        </Container>
    )
}

export default FightRoom;