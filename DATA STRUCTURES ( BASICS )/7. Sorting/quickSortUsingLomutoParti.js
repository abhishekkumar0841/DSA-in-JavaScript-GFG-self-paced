function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = lomutoPartition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}

console.log(quickSort([8, 4, 7, 9, 3, 10, 5], 0, 6));

function lomutoPartition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
