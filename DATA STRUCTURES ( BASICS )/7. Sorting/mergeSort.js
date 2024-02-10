// merge function
// time and space of this mergeFunc is 👇
// Time: theta(n)
// Space: theta(n)
function mergeFunc(arr, low, mid, high) {
  let ltArr = [];
  let rtArr = [];
  let ltLen = mid - low + 1;
  let rtLen = high - mid;

  for (let i = 0; i < ltLen; i++) {
    ltArr.push(arr[low + i]);
  }

  for (let j = 0; j < rtLen; j++) {
    rtArr.push(arr[mid + 1 + j]);
  }

  let i = 0;
  let j = 0;
  let k = low;

  while (i < ltLen && j < rtLen) {
    if (ltArr[i] <= rtArr[j]) {
      arr[k] = ltArr[i];
      i++;
      k++;
    } else {
      arr[k] = rtArr[j];
      j++;
      k++;
    }
  }

  while (i < ltLen) {
    arr[k] = ltArr[i];
    i++;
    k++;
  }

  while (j < rtLen) {
    arr[k] = rtArr[j];
    j++;
    k++;
  }

  return arr;
}

// merge sort function
// Overall time and space complexity is 👇
// Time: theta(n log n)
// Space: theta(n)
function mergeSort(arr, low, high) {
  if (high > low) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    mergeFunc(arr, low, mid, high);
  }

  return arr;
}

console.log(mergeSort([4, 2, 7, 4, 0, 1, 33, 88, 29], 0, 8));
console.log(mergeSort([78, 49, 22, 75, 90], 0, 4));
console.log(mergeSort([24, 893, 9, 900, 1, 0], 0, 5));
