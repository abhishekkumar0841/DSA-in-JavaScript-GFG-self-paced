//We have to find the maximum sum of size k sub arrays
//My solution
//Time: O(n square)
//Space: O(1)
function sumOfK(arr, k) {
  let maxSum = 0,
    n = arr.length;
  for (let i = 0; i < n - k + 1; i++) {
    let currSum = 0;
    for (let j = i; j < i + k; j++) {
      currSum += arr[j];
    }
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

console.log(sumOfK([1, 8, 30, -5, 20, 7], 3));

//Naive solution
//Time: O(n square)
//Space: O(1)
function sumOfK2(arr, k) {
  let res = Number.NEGATIVE_INFINITY;
  for (let i = 0; i + k - 1 < arr.length; i++) {
    let curr = 0;
    for (let j = 0; j < k; j++) {
      curr += arr[i + j];
    }
    res = Math.max(curr, res);
  }
  return res;
}
console.log(sumOfK2([1, 8, 30, -5, 20, 7], 3));

//Efficient solution (SLIDING WINDOW TECHNIQUE)
//Time: O(n square)
//Space: O(1)
function sumOfK3(arr, k) {
  let curr = 0,
    n = arr.length;
  for (let i = 0; i < k; i++) {
    curr += arr[i];
  }

  let res = curr;
  for (let i = k; i < n; i++) {
    curr += arr[i] - arr[i - k];
    res = Math.max(curr, res);
  }

  return res;
}
console.log(sumOfK3([1, 8, 30, -5, 20, 7], 3));
console.log(sumOfK3([1, 8, 30, -5, 20], 4));
