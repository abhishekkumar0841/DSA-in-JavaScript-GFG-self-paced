function mergeFunc(arr, low, mid, high) {
  let n1 = mid - low + 1;
  let n2 = high - mid;
  let left = [];
  let right = [];

  for (let i = 0; i < n1; i++) {
    left.push(arr[low + i]);
  }

  for (let i = 0; i < n2; i++) {
    right.push(arr[mid + i + 1]);
  }

  let i = 0;
  let j = 0;
  let k = low;

  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }

  while (i < n1) {
    arr[k] = left[i];
    i++;
  }

  while (j < n2) {
    arr[k] = right[j];
    k++;
  }

  return arr;
}

console.log(mergeFunc([10, 20, 40, 20, 30], 0, 2, 4));