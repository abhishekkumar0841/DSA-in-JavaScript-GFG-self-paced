//Here we have to put the pivot element on correct position in array and return the index of that pivot element after putting it on correct position.

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

console.log(lomutoPartition([10, 80, 30, 90, 70], 0, 4));
console.log(lomutoPartition([1, 9, 5, 3, 8, 2, 4, 6, 7], 0, 7));
