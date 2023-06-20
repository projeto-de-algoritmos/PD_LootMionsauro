import { Treasure } from "./Treasures";

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