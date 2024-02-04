//Naive solution
function checkArrSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                return false;
            }
        }
    }
    return true;
}

console.log(checkArrSorted([2, 4, 8, 9]));
console.log(checkArrSorted([23]));
console.log(checkArrSorted([23, 21,24]));
console.log(checkArrSorted([12, 14, 81, 19]));

//Efficient method
function checkArrSorted2(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]) return false;
    }
    return true;
}

console.log(checkArrSorted2([2, 4, 8, 9]));
console.log(checkArrSorted2([23]));
console.log(checkArrSorted2([23, 21,24]));
console.log(checkArrSorted2([12, 14, 81, 19]));