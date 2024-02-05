//Linear Search
function search(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    let currEl = arr[i];
    if (currEl === el) {
      return i;
    }
  }

  return -1;
}

console.log(search([2, 3, 4, 5, 7], 7));
console.log(search([2, 3, 4, 5, 7, 9, 0], 5));

//Binary Search
function binarySearch(arr, el) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    //min = 0; max = 4 //min = 3; max = 4 //min = 4
    console.log("check loop times");
    let mid = Math.floor((min + max) / 2); // 2 //3 //4
    if (el === arr[mid]) {
      //false //false //true
      return mid;
    } else if (el > arr[mid]) {
      //true //true
      min = mid + 1; // min = 2 + 1 = 3 //min = 3 + 1 = 4
    } else {
      // false //false
      max = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 3, 4, 5, 7], 7));
console.log(binarySearch([2, 3, 4, 5, 7], 3));
console.log(binarySearch([2, 3, 4, 5, 7, 9, 10], 5));

//Binary Search
function binarySearch2(arr, el) {
  let min = 0;
  let max = arr.length - 1;

  while (max >= min) {
    //min = 0; max = 4 //min = 3; max = 4 //min = 4
    console.log("check loop times");
    let mid = Math.floor((min + max) / 2); // 2 //3 //4
    if (el === arr[mid]) {
      //false //false //true
      return mid;
    } else if (el > arr[mid]) {
      //true //true
      min = mid + 1; // min = 2 + 1 = 3 //min = 3 + 1 = 4
    } else {
      // false //false
      max = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch2([2, 3, 4, 5, 7], 7));
console.log(binarySearch2([2, 3, 4, 5, 7], 3));
console.log(binarySearch2([2, 3, 4, 5, 7, 9, 0], 5));
