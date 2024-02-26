//Naive solution
//Time: O(n square)
//Space: O(1)
function majorityEl1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > arr.length / 2) return arr[i];
  }

  return null;
}

console.log(majorityEl1([8, 3, 4, 8, 8]));
console.log(majorityEl1([3, 7, 4, 7, 7, 5]));
console.log(majorityEl1([20, 30, 40, 50, 50, 50, 50]));

//My solution
function majorityEl2(arr) {
  let n = arr.length;
  let minVal = Math.floor(n / 2);

  let lookup = {};
  for (let i = 0; i < n; i++) {
    let curr = arr[i];
    lookup[curr] ? lookup[curr]++ : (lookup[curr] = 1);
  }

  for (let key in lookup) {
    if (lookup[key] > minVal) {
      return key;
    }
  }

  return null;
}

console.log(majorityEl2([8, 3, 4, 8, 8]));
console.log(majorityEl2([3, 7, 4, 7, 7, 5]));
console.log(majorityEl2([20, 30, 40, 50, 50, 50, 50]));

//Efficient solution (MOORE'S VOTING ALGORITHM)
//Time: O(n)
//Space: O(1)
function majorityEl3(arr) {
  //find the candidate
  let res = arr[0],
    votes = 1;
  for (let i = 1; i < arr.length; i++) {
    if (votes === 0) {
      res = arr[i];
      votes = 1;
    } else if (res === arr[i]) {
      votes++;
    } else {
      votes--;
    }
  }

  //validating the candidate
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === res) count++;
  }
  if (count > arr.length / 2) {
    return res;
  } else {
    return null;
  }
}

console.log(majorityEl3([8, 3, 4, 8, 8]));
console.log(majorityEl3([3, 7, 4, 7, 7, 5]));
console.log(majorityEl3([20, 30, 40, 50, 50, 50, 50]));
