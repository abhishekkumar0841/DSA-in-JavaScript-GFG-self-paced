function factorialOfN (n){
    let fact = 1;
    for(let i = 2; i <= n; i++){
        fact = fact * i
    }
    return fact
}
//TC:- Theta(n)
//SC:- Theta(1)
console.log(factorialOfN(5));

function factorialOfN2 (n){
    let fact = 1;
    while(n > 1){
        fact = fact * n
        n--
    }
    return fact
}
//TC:- Theta(n)
//SC:- Theta(1)
console.log(factorialOfN2(5));  

//using recursion 👇
function factorialOfN2 (n){
    if(n === 0) return 1;
    return n * factorialOfN(n - 1)
}
//TC:- Theta(n)
//SC:- Theta(n)
console.log(factorialOfN2(5));