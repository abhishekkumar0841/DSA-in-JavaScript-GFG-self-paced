//Time: O(m * n). It can be optimized with using binary search instead of linear search.
function intersectionOf2SortedArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr1[i - 1]) continue;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i]);
        break;
      }
    }
  }
}

intersectionOf2SortedArr([1, 1, 3, 3, 3], [1, 1, 1, 1, 3, 5, 7]);
intersectionOf2SortedArr([1, 20, 20, 40, 60], [2, 20, 20, 20]);
intersectionOf2SortedArr([1, 20, 20, 40, 60], [2, 20, 20, 20, 60]);

//Efficient solution
// Time: O(m + n)
// Aux space: O(1)
function intersectionOf2SortedArr2(arr1, arr2) {
  let l1 = arr1.length;
  let l2 = arr2.length;

  let i = 0;
  let j = 0;

  while (i < l1 && j < l2) {
    if (i > 0 && arr1[i] === arr1[i - 1]) {
      i++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      console.log(arr1[i]);
      i++;
      j++;
    }
  }
}

intersectionOf2SortedArr2([1, 1, 3, 3, 3], [1, 1, 1, 1, 3, 5, 7]);
intersectionOf2SortedArr2([1, 20, 20, 40, 60], [2, 20, 20, 20]);
intersectionOf2SortedArr2([1, 20, 20, 40, 60], [2, 20, 20, 20, 60]);
