function hoaresPartition(arr, low, high) {
  let pivot = arr[low];
  let i = low - 1;
  let j = high + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i <= j) {
      return j;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

console.log(hoaresPartition([5, 3, 8, 4, 2, 7, 1, 10], 0, 7));
