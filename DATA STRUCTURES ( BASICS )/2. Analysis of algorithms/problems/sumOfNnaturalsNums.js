function sumOfN(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}

console.log(sumOfN(5));

function sumOfN2(n){
    return n * (n + 1) / 2
}

console.log(sumOfN2(10));