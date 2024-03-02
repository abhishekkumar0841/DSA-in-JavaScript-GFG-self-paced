//NAIVE SOLUTION
//TIME: O(n sq)
//SPACE: O(1)
function twoOddOcc(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }

    if (count % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}

twoOddOcc([3, 4, 3, 4, 5, 4, 4, 6, 7, 7]);
twoOddOcc([1, 3, 2, 3, 3, 1]);

//NAIVE SOLUTION (hashing)
//TIME: O(n)
//SPACE: O(n)
function twoOddOcc2(arr) {
  let res = "";
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (hash[curr]) {
      hash[curr]++;
    } else {
      hash[curr] = 1;
    }
  }

  for (let key in hash) {
    if (hash[key] % 2 !== 0) {
      res += key + " ";
    }
  }

  return res;
}

console.log(twoOddOcc2([3, 4, 3, 4, 5, 4, 4, 6, 7, 7]));
console.log(twoOddOcc2([1, 3, 2, 3, 3, 1]));

//EFFICIENT SOLUTION
//TIME: O(1)
//SPACE: O(1)
function twoOddOcc3(arr) {
  let x = arr[0];
  for (let i = 1; i < arr.length; i++) {
    x = x ^ arr[i];
  }

  let k = x & ~(x - 1);
  let res1 = 0,
    res2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & (k !== 0)) {
      res1 = res1 ^ arr[i];
    } else {
      res2 = res2 ^ arr[i];
    }
  }

  console.log(res1);
  console.log(res2);
}

twoOddOcc3([3, 4, 3, 4, 5, 4, 4, 6, 7, 7]);
twoOddOcc3([1, 3, 2, 3, 3, 1]);
