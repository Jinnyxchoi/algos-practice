function maxProfit(prices) {
  let smallest = Infinity;
  let greatest = -Infinity;
  let difference = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice < smallest) {
      smallest = currentPrice;
      greatest = -Infinity;
    } else if (currentPrice > greatest) {
      greatest = currentPrice;
      difference = Math.max(greatest - smallest, difference);
    }
  }
  return difference;
}
