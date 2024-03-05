//EFFICIENT SOLUTION
//TIME: O(R * C), Where r -> rows, c -> column
//SPACE: O(C)
function largestRect1s(mat) {
  let res = largeRecAr(mat[0]);
  for (let i = 1; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        mat[i][j] += mat[i - 1][j];
      }
    }
    res = Math.max(res, largeRecAr(mat[i]));
  }
  return res;
}

let matrix = [
  [1, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

function largeRecAr(arr) {
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

console.log(largestRect1s(matrix));
