import { Treasure } from "./Treasures";

//Divide and Conquer

export const knapsackDivideAndConquer = (
    items: Treasure[],
    capacity: number,
    start: number,
    end: number,
): number => {
    if (start === end) {
        if (items[start].weight <= capacity) {
            return items[start].value;
        } else {
            return 0;
        }
    }

    const mid = Math.floor((start + end) / 2);
    const leftValue = knapsackDivideAndConquer(items, capacity, start, mid);
    const rightValue = knapsackDivideAndConquer(items, capacity, mid + 1, end);

    let maxValue = Math.max(leftValue, rightValue);

    for (let i = start; i <= mid; i++) {
        if (items[i].weight <= capacity) {
            const remainingCapacity = capacity - items[i].weight;
            const subProblemValue = knapsackDivideAndConquer(items, remainingCapacity, mid + 1, end);
            maxValue = Math.max(maxValue, items[i].value + subProblemValue);
        }
    }

    return maxValue;
};

//Dynamic Programing

export const knapsack = (items: Treasure[], capacity: number): number => {
    const numItems = items.length;
    const dp: number[][] = [];

    for (let i = 0; i <= numItems; i++) {
        dp[i] = [];
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                dp[i][w] = 0;
            } else if (items[i - 1].weight <= w) {
                const valueWithItem = items[i - 1].value + dp[i - 1][w - items[i - 1].weight];
                const valueWithoutItem = dp[i - 1][w];
                dp[i][w] = Math.max(valueWithItem, valueWithoutItem);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[numItems][capacity];
};

