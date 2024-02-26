//Naive Solution
//Time: theta(n square)
//Space: O(1)
function maxSubArr(arr) {
  let res = arr[0]; //1,2, 3
  for (let i = 0; i < arr.length; i++) {
    let curr = 0;
    for (let j = i; j < arr.length; j++) {
      curr = curr + arr[j];
      res = Math.max(curr, res);
    }
  }
  return res;
}

console.log(maxSubArr([1, -2, 3, -1]));

//Efficient Solution
//Time: theta(n)
//Space: O(1)
function maxSubArr2(arr) {
  let res = arr[0];
  let maxEnding = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);
    res = Math.max(maxEnding, res);
  }
  return res;
}

console.log(maxSubArr2([1, -2, 3, -1]));
console.log(maxSubArr2([-3, 8, -2, 4]));
