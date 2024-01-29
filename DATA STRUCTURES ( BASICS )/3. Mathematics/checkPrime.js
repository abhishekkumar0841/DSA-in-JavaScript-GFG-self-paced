//NAIVE METHOD
function checkPrime(n){
    if(n <= 1) return false;
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}
//TC:- O(n)
//Aux S:- O(1)
console.log(checkPrime(7));
console.log(checkPrime(2));
console.log(checkPrime(8));

//EFFICIENT METHOD
function checkPrime2(n){
    if(n <= 1) return false;
    for(let i = 2; i * i <= n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}
//TC:- O(square-root(n))
//Aux S:- O(1)
console.log(checkPrime2(7));
console.log(checkPrime2(19));
console.log(checkPrime2(8));

//MOST EFFICIENT METHOD
//EFFICIENT METHOD
function checkPrime3(n){
    if(n <= 1) return false;
    if(n === 2 || n === 3) return true;
    if(n % 2 === 0 || n % 3 === 0) return false;
    for(let i = 5; i * i <= n; i = i + 6){
        if(n % i === 0 || n % (i + 2) === 0){
            return false
        }
    }
    return true
}

console.log(checkPrime3(7));
console.log(checkPrime3(19));
console.log(checkPrime3(8));
console.log(checkPrime3(1999));