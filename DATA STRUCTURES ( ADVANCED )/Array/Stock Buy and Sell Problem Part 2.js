// Efficient Approach
function stockBuyNSell(arr) {
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      maxProfit += arr[i] - arr[i - 1];
    }
  }
  return maxProfit;
}

console.log(stockBuyNSell([1, 5, 3, 8, 12]));
console.log(stockBuyNSell([1, 5, 3, 1, 2 ,8]));
