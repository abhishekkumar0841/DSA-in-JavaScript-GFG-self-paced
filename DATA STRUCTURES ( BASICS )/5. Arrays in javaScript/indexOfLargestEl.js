//My solution
function indexOfLargestEl(arr) {
  if (arr.length <= 0) return;
  let largest = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      index = i;
    }
  }
  return index;

    // let max = Math.max(...arr)
    // return arr.indexOf(max)
}

console.log(indexOfLargestEl([2, 3, 5, 8]));
console.log(indexOfLargestEl([12, 3, 500, 8, 12, 999]));
console.log(indexOfLargestEl([55, 8, 9, 55]));

//Naive Solution
function indexOfLargestEl2(arr) {
    for(let i = 0; i < arr.length; i++){
        let largest = true;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                largest = false;
                break;
            }
        }

        if(largest){
            return i;
        }
    }

    return -1;
  }
  
  console.log(indexOfLargestEl2([2, 3, 5, 8]));
  console.log(indexOfLargestEl2([12, 3, 500, 8, 12, 999]));
  console.log(indexOfLargestEl2([55, 8, 9, 55]));

  //Optimize solution
  function indexOfLargestEl3(arr) {
    let res = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[res]){
            res = i;
        }
    }

    return res;
  }
  
  console.log(indexOfLargestEl3([2, 3, 5, 8]));
  console.log(indexOfLargestEl3([12, 3, 500, 8, 12, 999]));
  console.log(indexOfLargestEl3([55, 8, 9, 55]));
