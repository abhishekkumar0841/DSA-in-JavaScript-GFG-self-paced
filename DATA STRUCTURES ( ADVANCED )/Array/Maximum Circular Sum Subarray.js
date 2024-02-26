//Naive solution
//Time: O(n square)
//Space: O(1)
function maxCirSumSubArr(arr) {
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    res = Math.max(res, curr);

    for (let j = 1; j < arr.length; j++) {
      let index = (i + j) % arr.length;
      curr += arr[index];
      res = Math.max(curr, res);
    }
  }

  return res;
}

console.log(maxCirSumSubArr([10, -5, 5]));
console.log(maxCirSumSubArr([5, -2, 3, 4]));
console.log(maxCirSumSubArr([3, -4, 5, 6, -8, 7]));

//Efficient solution
//Time: theta(n)
//Space: theta(1)
function maxCirSumSubArr2(arr) {
  let sum = 0;
  arr.forEach((x) => (sum += x));
  let maxEnd = arr[0],
    minEnd = arr[0],
    maxNormal = arr[0],
    minNormal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEnd = Math.max(maxEnd + arr[i], arr[i]);
    maxNormal = Math.max(maxNormal, maxEnd);
    minEnd = Math.min(minEnd + arr[i], arr[i]);
    minNormal = Math.min(minNormal, minEnd);
  }

  if(maxNormal < 0) return maxNormal;

  return Math.max(maxNormal, sum - minNormal)
}

console.log(maxCirSumSubArr2([10, -5, 5]));
console.log(maxCirSumSubArr2([5, -2, 3, 4]));
console.log(maxCirSumSubArr2([3, -4, 5, 6, -8, 7]));
console.log(maxCirSumSubArr2([10, -5, 4, -9, 15, 2]));
