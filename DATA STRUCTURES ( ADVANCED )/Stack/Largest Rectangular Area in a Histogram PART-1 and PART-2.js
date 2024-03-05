//NAIVE SOLUTION
//TIME: O(N sq.)
//SPACE: O(1)
function largeRecAr(arr) {
  let n = arr.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let currSum = arr[i];
    for (let j = i + 1; j < n; j++) {
      if (arr[j] >= arr[i]) {
        currSum += arr[i];
      } else {
        break;
      }
    }

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] >= arr[i]) {
        currSum += arr[i];
      } else {
        break;
      }
    }

    res = Math.max(res, currSum);
  }

  return res;
}

console.log(largeRecAr([6, 2, 7, 3, 1]));
console.log(largeRecAr([6, 6, 7, 3, 3]));
console.log(largeRecAr([6, 2, 5, 4, 1, 5, 6]));
console.log(largeRecAr([60, 20, 50, 40, 30]));

// Largest Rectangular Area in a Histogram (Part 2)
//EFFICIENT SOLUTION
//TIME: O(N)
//SPACE: O(1)
function largeRecAr2(arr) {
  let n = arr.length;
  let st = [];
  let res = 0;
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
      let tp = st.pop();
      let curr = arr[tp] * (st.length === 0 ? i : i - st[st.length - 1] - 1);
      res = Math.max(res, curr);
    }
    st.push(i);
  }

  while (st.length > 0) {
    let tp = st.pop();
    let curr = arr[tp] * (st.length === 0 ? n : n - st[st.length - 1] - 1);
    res = Math.max(res, curr);
  }

  return res;
}

console.log(largeRecAr2([6, 2, 7, 3, 1]));
console.log(largeRecAr2([6, 6, 7, 3, 3]));
console.log(largeRecAr2([6, 2, 5, 4, 1, 5, 6]));
console.log(largeRecAr2([60, 20, 50, 40, 30]));
