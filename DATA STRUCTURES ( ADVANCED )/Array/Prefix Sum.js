//Naive solution
//Time: O(n)
//Space: O(1)
function prefixSum(a, b) {
  let arr = [2, 8, 3, 9, 6, 5, 4];
  let res = 0; //8, 11, 20
  for (let i = a; i <= b; i++) {
    res += arr[i];
  }
  return res;
}

console.log(prefixSum(0, 2));
console.log(prefixSum(1, 3));
console.log(prefixSum(2, 6));

//Efficient solution
//Time: O(1)
//Space:
let arr = [2, 8, 3, 9, 6, 5, 4];
let n = arr.length;
let pSum = new Array(n);
pSum[0] = arr[0];

for (let i = 1; i < n; i++) {
  pSum[i] = pSum[i - 1] + arr[i];
}

function getSum(l, r) {
  if (l === 0) {
    return pSum[r];
  } else {
    return pSum[r] - pSum[l - 1];
  }
}

console.log(getSum(0, 2));
console.log(getSum(1, 3));

//WEIGHTED SUM PROBLEM TO BE DONE!!!!!!!!!!!