function recBinarySearch(arr, el, low, high) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === el) return mid;
  if (arr[mid] < el) return recBinarySearch(arr, el, mid + 1, high);
  if (arr[mid] > el) return recBinarySearch(arr, el, low, mid - 1);
}

let arr1 = [2, 3, 4, 5, 7];
let arr2 = [2, 3, 4, 5, 7];
let arr3 = [2, 3, 4, 5, 7, 9, 10];
let arr4 = [
  2, 3, 4, 5, 7, 9, 10, 11, 13, 18, 20, 22, 39, 40, 44, 55, 66, 77, 99, 100,
  300,
];

console.log(recBinarySearch(arr1, 7, 0, arr1.length - 1));
console.log(recBinarySearch(arr2, 3, 0, arr2.length - 1));
console.log(recBinarySearch(arr3, 5, 0, arr3.length - 1));
console.log(recBinarySearch(arr4, 77, 0, arr4.length - 1));
