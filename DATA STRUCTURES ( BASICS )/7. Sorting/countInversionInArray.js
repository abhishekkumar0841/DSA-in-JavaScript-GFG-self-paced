//NAIVE SOLUTION
//TIME: Theta(n square)
//Aux Space: Theta(1)
function countInversionInArr(arr){
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                count++;
            }
        }
    }
    return count
}

console.log(countInversionInArr([2,4,1,3]));
console.log(countInversionInArr([5, 8, 2, 9, 3, 6]));