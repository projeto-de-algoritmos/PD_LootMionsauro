export const CoinChange = (coins: number[], amount: number): number => {
  const dp: number[] = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  console.log('cg', amount, coins);
  
  const usedCoins: number[][] = new Array(amount + 1).fill([]);

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin && dp[i - coin] + 1 < dp[i]) {
        dp[i] = dp[i - coin] + 1;
        usedCoins[i] = [...usedCoins[i - coin], coin];
      }
    }
  }

  console.log('Caminho percorrido:', usedCoins[amount]);
  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};
