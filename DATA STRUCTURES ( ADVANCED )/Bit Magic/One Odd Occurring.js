//NAIVE SOLUTION
//TIME: O(n sq)
//SPACE: O(1)
function findOddOcc(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

console.log(findOddOcc([4, 3, 4, 4, 4, 5, 5]));
console.log(findOddOcc([8, 7, 7, 8, 8]));

//NAIVE SOLUTION (using hashing)
//TIME: O(n)
//SPACE: O(n)
function findOddOcc2(arr) {
  let lookup = {};
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    lookup[curr] ? lookup[curr]++ : (lookup[curr] = 1);
  }

  for (let key in lookup) {
    if (lookup[key] % 2 !== 0) {
      return key;
    }
  }
}

console.log(findOddOcc2([4, 3, 4, 4, 4, 5, 5]));
console.log(findOddOcc2([8, 7, 7, 8, 8]));

//EFFICIENT SOLUTION (using XOR bitwise operator)
//TIME: O(1)
//SPACE: O(1)
function findOddOcc3(arr) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res = res ^ arr[i];
  }
  return res;
}

console.log(findOddOcc3([4, 3, 4, 4, 4, 5, 5]));
console.log(findOddOcc3([8, 7, 7, 8, 8]));
console.log(findOddOcc3([4, 4, 7, 4, 8, 7, 7, 7, 8]));
