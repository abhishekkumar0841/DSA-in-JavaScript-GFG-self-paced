//NAIVE SOLUTION
//TIME: Theta(n square)
//Aux Space: Theta(1)
function countInversionInArr(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countInversionInArr([2, 4, 1, 3]));
console.log(countInversionInArr([5, 8, 2, 9, 3, 6]));

//NAIVE SOLUTION
//TIME: Theta(n)
//Aux Space: Theta(n)
function countInversionInArr2(arr, low, high) {
  let res = 0;
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    res += countInversionInArr2(arr, low, mid);
    res += countInversionInArr2(arr, mid + 1, high);
    res += countMerge(arr, low, mid, high);
  }
  return res;
}

console.log(countInversionInArr2([2, 4, 1, 3], 0, 3));
console.log(countInversionInArr2([5, 8, 2, 9, 3, 6], 0, 5));

// Count merge function
function countMerge(arr, low, mid, high) {
  let left = [];
  let right = [];
  for (let i = low; i <= mid; i++) {
    left.push(arr[i]);
  }

  for (let j = mid + 1; j <= high; j++) {
    right.push(arr[j]);
  }

  let res = 0;
  let i = 0;
  let j = 0;
  let k = low;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
      res += left.length - i;
    }
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }

  return res;
}
