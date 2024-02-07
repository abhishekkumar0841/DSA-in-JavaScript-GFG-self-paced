function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
  }
  return arr;
}

// console.log(selectionSort([24, 65, 22, 3, 9, 98]));

function selectionSort2(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

console.log(selectionSort([24, 65, 22, 3, 9, 98]));
