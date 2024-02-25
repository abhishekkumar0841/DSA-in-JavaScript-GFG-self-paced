//NAIVE APPROACH
// function rotateByD(arr, d) {
//   let temp = [];
//   for (let i = d; i < arr.length; i++) {
//     temp.push(arr[i]);
//   }

//   for (let i = 0; i < d; i++) {
//     temp.push(arr[i]);
//   }

//   return temp;
// }

// console.log(rotateByD([1, 2, 3, 4, 5], 2));
// console.log(rotateByD([10, 35, 20, 15], 3));
// console.log(rotateByD([10, 20, 30], 3));

//Naive approach 2
//Time: O(n * d)
//Space: O(1)
function rotateByD(arr, d) {
  for (let i = 0; i < d; i++) {
    leftRotateByOne(arr);
  }
  return arr;
}

//This function rotate the array from left by one
function leftRotateByOne(arr) {
  let x = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = x;
}

// console.log(rotateByD([1, 2, 3, 4, 5], 2));
// console.log(rotateByD([10, 35, 20, 15], 3));
// console.log(rotateByD([10, 20, 30], 3));

//Better approach
//Time: O(n)
//Space: O(d)
function rotateByD2(arr, d) {
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }

  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }

  for (let i = 0; i < d; i++) {
    arr[arr.length - d + i] = temp[i];
  }
  return arr;
}

// console.log(rotateByD2([1, 2, 3, 4, 5], 3));
// console.log(rotateByD2([10, 35, 20, 15], 3));
// console.log(rotateByD2([10, 20, 30], 3));

//Better approach
//Time: theta(n)
//Space: theta(1)
function rotateByD3(arr, d) {
  reverse(arr, 0, d - 1);
  reverse(arr, d, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}

function reverse(arr, l, r) {
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    r--;
    l++;
  }
  return arr;
}

console.log(rotateByD3([1, 2, 3, 4, 5], 3));
console.log(rotateByD3([10, 35, 20, 15], 3));
console.log(rotateByD3([10, 20, 30], 3));
console.log(rotateByD3([1, 2, 3, 4, 5, 6, 7], 3));
