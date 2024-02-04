//NAIVE SOLUTION
function moveZerosToEnd(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] !== 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          break;
        }
      }
    }
  }
  return arr;
}

console.log(moveZerosToEnd([0, 0, 2, 0]));
console.log(moveZerosToEnd([1, 2, 0, 0, 9, 0, 2, 0]));

//EFFICIENT SOLUTION
function moveZerosToEnd2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

console.log(moveZerosToEnd2([0, 0, 2, 0]));
console.log(moveZerosToEnd2([1, 2, 0, 0, 9, 0, 2, 0]));
console.log(moveZerosToEnd2([10, 8, 0, 0, 12, 0]));
