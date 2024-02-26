//Naive solution
//Time: O(n)
//Space: O(1)
function maxCons1s(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      let count = 0;
      while (arr[i] === 1) {
        count++;
        i++;
      }
      res = Math.max(count, res);
    }
  }
  return res;
}

console.log(maxCons1s([0, 1, 1, 1, 0, 1, 1]));
console.log(maxCons1s([0, 1, 1, 0, 1, 0]));
console.log(maxCons1s([1, 1, 1, 1]));
console.log(maxCons1s([0, 0, 0]));

//Naive solution
//Time: theta(n)
//Space: theta(1)
function maxCons1s2(arr) {
  let res = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count = 0;
    } else {
      count++;
      res = Math.max(count, res);
    }
  }
  return res;
}

console.log(maxCons1s2([0, 1, 1, 1, 0, 1, 1]));
console.log(maxCons1s2([0, 1, 1, 0, 1, 0]));
console.log(maxCons1s2([1, 1, 1, 1]));
console.log(maxCons1s2([0, 0, 0]));
