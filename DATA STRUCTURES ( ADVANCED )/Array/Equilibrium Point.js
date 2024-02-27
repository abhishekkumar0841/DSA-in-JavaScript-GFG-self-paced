//Naive solution
//Time: O(n square)
//Space: O(1)
function checkEqu(arr) {
  for (let i = 0; i < arr.length; i++) {
    let ls = 0,
      rs = 0;
    for (let j = 0; j < i; j++) {
      ls += arr[j];
    }

    for (let j = i + 1; j < arr.length; j++) {
      rs += arr[j];
    }

    if (ls === rs) return true;
  }

  return false;
}

console.log(checkEqu([3, 4, 8, -9, 20, 6]));
console.log(checkEqu([4, 2, -2]));
console.log(checkEqu([4, 2, 2]));

//Efficient solution
//Time: O(n) --> Three traversal
//Space: O(n)
function checkEqu2(arr) {
  let n = arr.length;
  let pS = new Array(n);
  let sS = new Array(n);
  pS[0] = arr[0];
  sS[n - 1] = arr[n - 1];

  //filling prefix sum
  for (let i = 1; i < n; i++) {
    pS[i] = pS[i - 1] + arr[i];
  }

  //filling suffix sum
  for (let i = n - 2; i >= 0; i--) {
    sS[i] = sS[i + 1] + arr[i];
  }

  //finding equilibrium point
  for (let i = 0; i < n; i++) {
    if (pS[i] === sS[i]) return true;
  }

  return false;
}

console.log(checkEqu2([3, 4, 8, -9, 9, 7]));
console.log(checkEqu2([4, 2, -2]));
console.log(checkEqu2([4, 2, 2]));

//Most Efficient solution
//Time: theta(n)
//Space: O(1)
function ePoint(arr) {
  //calculating total array sum
  let rs = 0;
  for (let i = 0; i < arr.length; i++) {
    rs += arr[i];
  }

  //finding equilibrium point
  let ls = 0;
  for (let i = 0; i < arr.length; i++) {
    rs -= arr[i];
    if (rs === ls) return true;
    ls += arr[i];
  }

  return false;
}

console.log(ePoint([3, 4, 8, -9, 9, 7]));
console.log(ePoint([4, 2, -2]));
console.log(ePoint([4, 2, 2]));
