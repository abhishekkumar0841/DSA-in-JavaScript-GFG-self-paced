//Linear search O(n)
function find1stOcc(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    console.log("loop runs:");
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
}

console.log(find1stOcc([1, 10, 10, 10, 20, 20, 40], 20));
console.log(find1stOcc([10, 20, 30], 15));
console.log(find1stOcc([15, 15, 15], 15));

//Linear search O(n) little optimized
function find1stOcc2(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    console.log("loop runs:");
    if (arr[i] === x) {
      return i;
    } else if (arr[i] > x) {
      return -1;
    }
  }

  return -1;
}

console.log(find1stOcc2([1, 10, 10, 10, 20, 20, 40], 20));
console.log(find1stOcc2([10, 20, 30], 15));
console.log(find1stOcc2([15, 15, 15], 15));

//Simple binary search implementation: TC--> theta(n)
function find1stOcc3(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    console.log("loop");

    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      while (mid > 0 && arr[mid - 1] === x) {
        mid--;
      }
      return mid;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(find1stOcc3([1, 10, 10, 10, 20, 20, 40], 20));
console.log(find1stOcc3([10, 20, 30], 15));
console.log(find1stOcc3([15, 15, 15], 15));
console.log(
  find1stOcc3(
    [1, 1, 1, 10, 10, 10, 20, 20, 40, 50, 50, 50, 50, 70, 70, 90, 90],
    70
  )
);

//Optimized binary search implementation: TC--> O(log n)
function find1stOcc4(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    console.log("loop");
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      if (mid === 0 || arr[mid - 1] !== x) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(find1stOcc4([1, 10, 10, 10, 20, 20, 40], 20));
console.log(find1stOcc4([10, 20, 30], 15));
console.log(find1stOcc4([15, 15, 15], 15));
console.log(
  find1stOcc4(
    [1, 1, 1, 10, 10, 10, 20, 20, 40, 50, 50, 50, 50, 70, 70, 90, 90],
    70
  )
);

//****NOTE:- Considering the time complexity, find1stOcc2 is generally more efficient because it has a lower worst-case time complexity of O(log n). It directly finds the first occurrence without iterating through all consecutive occurrences, making it more optimized for the given task. Therefore, find1stOcc2 is recommended for better performance.
