//😊😊 funny solution
function squareRoot(n) {
  return Math.floor(Math.sqrt(n));
}

// console.log(squareRoot(4));
// console.log(squareRoot(14));
// console.log(squareRoot(25));

//Naive solution
// Time: Theta(root n)
// Aux Space: O(1)
function squareRoot2(n) {
  let i = 1;
  while (i * i <= n) {
    i++;
  }
  return i - 1;
}

// console.log(squareRoot2(4));
// console.log(squareRoot2(14));
// console.log(squareRoot2(15));
// console.log(squareRoot2(25));

//Naive solution
// Time: O(log n)
// Aux Space: O(1)
function squareRoot3(n) {
  let low = 1;
  let high = n;
  let res = 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
      res = mid;
    }
  }
  return res;
}

console.log(squareRoot3(4));
console.log(squareRoot3(14));
console.log(squareRoot3(15));
console.log(squareRoot3(25));
console.log(squareRoot3(8));
