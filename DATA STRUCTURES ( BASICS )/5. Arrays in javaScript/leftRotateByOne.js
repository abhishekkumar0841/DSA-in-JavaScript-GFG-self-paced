//my solution
function leftRotateByOne(arr){
    let f = arr.shift();
    arr.push(f)
    return arr;
}

console.log(leftRotateByOne([1,2,3,4,5]));
console.log(leftRotateByOne([30,5,20]));
console.log(leftRotateByOne([10]));

//naive solution
function leftRotateByOne2(arr){
    let temp = []
    for(let i = 1; i < arr.length; i++){
        temp.push(arr[i])
    }
    temp.push(arr[0])
    return temp
}

console.log(leftRotateByOne2([1,2,3,4,5]));
console.log(leftRotateByOne2([30,5,20]));
console.log(leftRotateByOne2([10]));

//Efficient Solution
function leftRotateByOne3(arr){
    let x = arr[0]
    for(let i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = x;
    return arr;
}

console.log(leftRotateByOne3([1,2,3,4,5]));
console.log(leftRotateByOne3([30,5,20]));
console.log(leftRotateByOne3([10]));