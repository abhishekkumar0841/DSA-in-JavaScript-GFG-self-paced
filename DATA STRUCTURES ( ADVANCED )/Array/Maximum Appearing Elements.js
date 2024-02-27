// //My solution
function maxAppEl(a1, a2) {
  if (a1.length !== a2.length) return;
  let temp = [];
  for (let i = 0; i < a1.length; i++) {
    let j = a1[i];
    while (j <= a2[i]) {
      temp.push(j);
      j++;
    }
  }

  let lookup = {};
  for (let i = 0; i < temp.length; i++) {
    let curr = temp[i];
    lookup[curr] ? lookup[curr]++ : (lookup[curr] = 1);
  }

  let high = 0;
  let highest = null;
  for (let key in lookup) {
    if (lookup[key] > high) {
      high = lookup[key];
      highest = key;
    }
  }
  return highest;
}

console.log(maxAppEl([1, 2, 5, 15], [5, 8, 7, 18]));
console.log(maxAppEl([1, 2], [5, 4]));

//Naive approach
//Time Complexity: O(N*M). Here N is the number of ranges and M is the maximum number of elements in any of the ranges.
//Auxiliary Space: O(M). For Hash table.
function maxAppEl2(left, right) {
  let freq = new Array(100).fill(0);
  let n = left.length;
  for (let i = 0; i < n; i++) {
    for (let j = left[i]; j <= right[i]; j++) {
      freq[j]++;
    }
  }

  let res = 0;
  for (let i = 1; i < freq.length; i++) {
    if (freq[i] > freq[res]) {
      res = i;
    }
  }
  return res;
}

console.log(maxAppEl2([1, 2, 5, 15], [5, 8, 7, 18]));
console.log(maxAppEl2([1, 2], [5, 4]));

//Efficient approach
//Time Complexity: theta(N + M). Here N is the number of ranges and M is the maximum number of elements in any of the ranges.
//Auxiliary Space: O(M). For Hash table.
function maxAppEl3(left, right) {
  let freq = new Array(100).fill(0);
  let n = left.length;
  for (let i = 0; i < n; i++) {
    freq[left[i]]++;
    freq[right[i] + 1]--;
  }
  let res = 0;
  for (let i = 1; i < freq.length; i++) {
    freq[i] += freq[i - 1];
    if (freq[i] > freq[res]) {
      res = i;
    }
  }
  return res;
}

console.log(maxAppEl3([1, 2, 4], [4, 5, 7]));
console.log(maxAppEl3([1, 2, 5, 15], [5, 8, 7, 18]));
console.log(maxAppEl3([1, 2], [5, 4]));
