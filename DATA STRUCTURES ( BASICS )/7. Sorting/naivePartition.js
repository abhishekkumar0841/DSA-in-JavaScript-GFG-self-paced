//Naive partition approach
// Time: theta(n)
// Aux Space: theta(n)
function naivePartition(arr, p) { //p -> pivot
  let l = arr.length;
  [arr[p], arr[l - 1]] = [arr[l - 1], arr[p]];

  let temp = [];

  for (let i = 0; i < l; i++) {
    if (arr[i] <= arr[l - 1]) {
      temp.push(arr[i]);
    }
  }

  for (let j = 0; j < l - 1; j++) {
    if (arr[j] > arr[l - 1]) {
      temp.push(arr[j]);
    }
  }

  for (let i = 0; i < l; i++) {
    arr[i] = temp[i];
  }

  return arr;
}

console.log(naivePartition([5, 13, 6, 9, 12, 8, 11], 5));
console.log(naivePartition([7, 9, 4, 8], 2));
