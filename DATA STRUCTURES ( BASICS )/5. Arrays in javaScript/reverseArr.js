//Naive solution
function revArr(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
//TC-> O(n)
//SC-> O(n)
console.log(revArr([34, 22, 9, 8]));
console.log(revArr([4, 29, 18]));
console.log(revArr([94]));

//Naive Solution (without using push method)
function revArr2(arr) {
  let newArr = [];
  for (let i = arr.length - 1, j = 0; i >= 0, j < arr.length; i--, j++) {
    newArr[j] = arr[i];
  }
  return newArr;
}
//TC-> O(n)
//SC-> O(n)
console.log(revArr2([34, 22, 9, 8]));
console.log(revArr2([4, 29, 18]));
console.log(revArr2([94]));

//Efficient solution
function revArr3(arr) {
//   if (arr.length === 1) return arr[0];
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]]
    low++;
    high--;
  }
  return arr;
}
//TC-> O(1)
//SC-> O(1)
console.log(revArr3([34, 22, 9, 8]));
console.log(revArr3([4, 29, 18]));
console.log(revArr3([94]));
