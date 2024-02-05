//Linear search O(n)
function findIdxOfLastOcc(arr, el) {
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === el){
            return i;
        }
    }
    return -1;
}

// console.log(findIdxOfLastOcc([1, 10, 10, 10, 20, 20, 40], 20));
// console.log(findIdxOfLastOcc([10, 20, 30], 15));
// console.log(findIdxOfLastOcc([15, 15, 15], 15));
// console.log(
//   findIdxOfLastOcc(
//     [1, 1, 1, 10, 10, 10, 20, 20, 40, 50, 50, 50, 50, 70, 70, 90, 90],
//     70
//   )
// );

//Optimize Binary search with O(log n) time
function findIdxOfLastOcc2(arr, el) {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
        let mid = Math.floor((min + max) / 2)
        if(arr[mid] === el){
            if(mid === arr.length - 1 || arr[mid + 1] !== el){
                return mid;
            }else{
                min = mid + 1;
            }
        }else if(arr[mid] > el){
            max = mid - 1;
        }else{
            min = mid + 1;
        }
    }

    return -1;
}

console.log(findIdxOfLastOcc2([1, 10, 10, 10, 20, 20, 40], 20));
console.log(findIdxOfLastOcc2([10, 20, 30], 15));
console.log(findIdxOfLastOcc2([15, 15, 15], 15));
console.log(
  findIdxOfLastOcc2(
    [1, 1, 1, 10, 10, 10, 20, 20, 40, 50, 50, 50, 50, 70, 70, 90, 90],
    70
  )
);
