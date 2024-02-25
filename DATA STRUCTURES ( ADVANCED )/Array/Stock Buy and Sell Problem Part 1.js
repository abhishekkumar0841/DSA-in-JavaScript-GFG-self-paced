function stockBuyNSell(arr, b, e) {
  if (b >= e) return 0;
  let res = 0;
  for (let i = b; i < e; i++) {
    for (let j = i + 1; j <= e; j++) {
      if (arr[j] > arr[i]) {
        let curr =
          arr[j] -
          arr[i] +
          stockBuyNSell(arr, b, i - 1) +
          stockBuyNSell(arr, j + 1, e);
        res = Math.max(res, curr);
      }
    }
  }
  return res;
}

let arr = [1, 5, 3, 8, 12];
let n = arr.length;
console.log(stockBuyNSell(arr, 0, n - 1));