//Super naive solution with O(n) time
function countOcc(arr, el) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (el === arr[i]) {
      count++;
    }
  }
  return count;
}

// console.log(countOcc([10,20,20,20,30,30], 20));
// console.log(countOcc([10,10,10,10,10], 10));
// console.log(countOcc([5,8,10], 7));

//Efficient solution using binary search which takes O(log n) time
function countOcc2(arr, el) {
  let first = firstOcc(arr, el); // firstOcc() takes O(log n) time
  if (first === -1) {
    return 0;
  } else {
    // firstOcc() takes O(log n) time
    return lastOcc(arr, el) - first + 1;
  }
}
// So overall this countOcc() takes O(log n) time
console.log(countOcc2([10, 20, 20, 20, 30, 30], 20));
console.log(countOcc2([10, 10, 10, 10, 10], 10));
console.log(countOcc2([5, 8, 10], 7));

//function of finding index of first occurrence of element
function firstOcc(arr, el) {
  let len = arr.length;
  let low = 0;
  let high = len - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === el) {
      if (mid === 0 || arr[mid - 1] !== el) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] < el) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

//function of finding index of last occurrence of element
function lastOcc(arr, el) {
  let len = arr.length;
  let low = 0;
  let high = len - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === el) {
      if (mid === len - 1 || arr[mid + 1] !== el) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] < el) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
