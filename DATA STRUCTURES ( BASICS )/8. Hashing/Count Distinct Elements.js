function countDistinctEl(arr) {
  let lookup = {};
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    lookup[curr] ? lookup[curr]++ : (lookup[curr] = 1);
  }
  return lookup;
}

console.log(countDistinctEl(["a", "b", "c", "d", "c", "b", "a", "f"]));

// --------------REDUCE METHOD---------------------

let arr = ["a", "b", "c", "d", "c", "b", "a", "f"];

let res = arr.reduce(
  (acc, curr) =>
    curr in acc ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
  {}
);

console.log(res);

// Write a function which takes an array of integers including even and odd integers and return an object containing the sum of even numbers and sum of odd numbers like if the given array is [1,2,3,4,5,6] then output should be --> {even: 12, odd: 9}

function calc(arr) {
  let counter = {};
  counter["even"] = 0;
  counter["odd"] = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      counter["even"] += arr[i];
    } else {
      counter["odd"] += arr[i];
    }
  }

  return counter;
}

console.log(calc([1, 2, 3, 4, 5, 6]));

// ---------------REDUCE METHOD--------------

let numArr = [1, 2, 3, 4, 5, 6];
const result = numArr.reduce(
  (acc, curr) => {
    if (curr % 2 === 0) {
      acc.even += curr;
    } else {
      acc.odd += curr;
    }
    return acc;
  },
  { even: 0, odd: 0 }
);

console.log(result);

// ---------------SINGLE LINE REDUCE METHOD--------------
let numArr2 = [1, 2, 3, 4, 5, 6];
const result2 = numArr.reduce(
  (acc, curr) =>
    curr % 2 === 0 ? ((acc.even += curr), acc) : ((acc.odd += curr), acc),
  { even: 0, odd: 0 }
);

console.log(result2);
