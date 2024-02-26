//Naive solution
//Time: O(n square)
//Space: O(1)
function maxLenEvnOdd(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let curr = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (
        (arr[j] % 2 === 0 && arr[j - 1] % 2 !== 0) ||
        (arr[j] % 2 !== 0 && arr[j - 1] % 2 === 0)
      ) {
        curr++;
      } else {
        break;
      }
    }
    res = Math.max(curr, res);
  }

  return res;
}

console.log(maxLenEvnOdd([5, 10, 6, 3, 8]));

//Efficient solution
//Time: O(n)
//Space: O(1)
function maxLenEvnOdd2(arr) {
  let res = 1;
  let count = 1; //3
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) ||
      (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0)
    ) {
      count = 1;
    } else {
      count++;
    }
    res = Math.max(res, count);
  }
  return res;
}

console.log(maxLenEvnOdd2([5, 10, 6, 3, 8]));

// -------------other way of efficient solution-----------------
//Efficient solution
//Time: O(n)
//Space: O(1)
function maxLenEvnOdd3(arr) {
  let res = 1;
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (
      (arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) ||
      (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)
    ) {
      count++;
      res = Math.max(res, count);
    } else {
      count = 1;
    }
  }
  return res;
}

console.log(maxLenEvnOdd3([5, 10, 6, 3, 8]));
console.log(maxLenEvnOdd3([5, 10, 20, 6, 3, 8]));

//---------using sum approach----------
// We know that: sum of even + even is even, sum of odd + even is odd and sum of even + even is even
//Time: O(n)
//Space: O(1)
function sumApproachMaxEvOd(arr) {
  let res = 1;
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    let sum = arr[i] + arr[i - 1];
    if (sum % 2 !== 0) {
      count++;
      res = Math.max(res, count);
    } else {
      count = 1;
    }
  }
  return res;
}

console.log(sumApproachMaxEvOd([5, 10, 6, 3, 8]));
console.log(sumApproachMaxEvOd([5, 10, 20, 6, 3, 8]));
