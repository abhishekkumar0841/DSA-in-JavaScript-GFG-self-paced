//NAIVE SOLUTION
//TIME: O(n sq)
//SPACE: O(1)
function stockSp(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i; j >= 0; j--) {
      if (arr[i] >= arr[j]) {
        count++;
      } else {
        break;
      }
    }
    res += count + " ";
  }
  return res;
}

console.log(stockSp([30, 20, 25, 28, 27, 29]));
console.log(stockSp([18, 12, 13, 14]));
console.log(stockSp([10, 20, 30, 40]));
console.log(stockSp([9, 6, 4, 2, 1]));
console.log(stockSp([10, 8, 4, 7, 9]));

//EFFICIENT SOLUTION
//TIME: O(n)
//SPACE: O(n)
function stockSp2(arr) {
  let st = [];
  st.push(0);
  // console.log(1);
  let res = "1 ";
  for (let i = 1; i < arr.length; i++) {
    while (st.length > 0 && arr[st[st.length - 1]] <= arr[i]) {
      st.pop();
    }
    let span = st.length === 0 ? i + 1 : i - st[st.length - 1];
    // console.log(span);
    res += span + " ";
    st.push(i);
  }
  return res;
}

console.log(stockSp2([30, 20, 25, 28, 27, 29]));
console.log(stockSp2([18, 12, 13, 14]));
console.log(stockSp2([10, 20, 30, 40]));
console.log(stockSp2([9, 6, 4, 2, 1]));
console.log(stockSp2([10, 8, 4, 7, 9]));
console.log(stockSp2([60, 10, 20, 15, 35, 50]));
