//NAIVE SOLUTION
//TIME: O(N sq.)
//TIME: O(N)
function nextGre(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    let j;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        res += arr[j] + " ";
        break;
      }
    }

    if (j === arr.length) {
      res += -1 + " ";
    }
  }
  return res;
}

console.log(nextGre([5, 15, 8, 10]));
console.log(nextGre([5, 15, 10, 8, 6, 12, 7]));
console.log(nextGre([10, 15, 20, 25]));
console.log(nextGre([25, 20, 15, 10]));

//EFFICIENT SOLUTION
//TIME: O(N)
//TIME: O(N)
function nextGre2(arr) {
  let st = [];
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (st.length > 0 && st[st.length - 1] <= arr[i]) {
      st.pop();
    }
    let ng = st.length === 0 ? -1 : st[st.length - 1];
    res.push(ng);
    st.push(arr[i]);
  }

  for (let i = res.length - 1; i >= 0; i--) {
    console.log(res[i]);
  }
}

nextGre2([5, 15, 8, 10]);
nextGre2([5, 15, 10, 8, 6, 12, 7]);
nextGre2([10, 15, 20, 25]);
nextGre2([25, 20, 15, 10]);
