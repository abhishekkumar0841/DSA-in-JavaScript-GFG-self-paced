//My solution
//Time: O(n square)
//Space: O(1)
function subArrOfSum(arr, s) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === s) return "Yes";
    let sum = arr[i];
    for (let j = i + 1; j < n; j++) {
      sum += arr[j];
      if (sum === s) return "Yes";
    }
  }
  return "No";
}

console.log(subArrOfSum([3, 2, 0, 4, 7], 6));
console.log(subArrOfSum([1, 4, 20, 3, 10, 5], 33));
console.log(subArrOfSum([1, 4, 0, 0, 3, 10, 5], 7));
console.log(subArrOfSum([2, 4], 3));

//Naive solution
//Time: O(n square)
//Space: O(1)
function subArrOfSum2(arr, s) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let curr = 0;
    for (let j = i; j < n; j++) {
      curr += arr[j];
      if (curr === s) return true;
    }
  }
  return false;
}

console.log(subArrOfSum2([3, 1, 4, 7], 1));
console.log(subArrOfSum2([1, 4, 20, 3, 10, 5], 33));
console.log(subArrOfSum2([1, 4, 0, 0, 3, 10, 5], 7));
console.log(subArrOfSum2([2, 4], 3));

//Efficient solution
//Using sliding window technique with variable size window
//Time: O(n)
//Space: O(1)
function subArrOfSum3(arr, sum) {
  let start = 0,
    currSum = 0;
  for (let end = 0; end < arr.length; end++) {
    currSum += arr[end];
    while (sum < currSum) {
      currSum -= arr[start];
      start++;
    }
    if (currSum === sum) return true;
  }
  return false;
}

console.log(subArrOfSum3([3, 1, 4, 7], 1));
console.log(subArrOfSum3([1, 4, 20, 3, 10, 5], 33));
console.log(subArrOfSum3([1, 4, 0, 0, 3, 10, 5], 7));
console.log(subArrOfSum3([2, 4], 3));
console.log(subArrOfSum3([8, 4, 12, 5], 17));
