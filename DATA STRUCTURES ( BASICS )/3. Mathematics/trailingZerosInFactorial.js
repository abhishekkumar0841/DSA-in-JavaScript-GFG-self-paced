//This is naive method
//Issues:- 1. TC is linear, 2. Integer overflow due to larger values of factorial
function trailingZerosInFact(n){
    let fact = 1;
    let zerosCount = 0;
    while(n > 0){
        fact = fact * n;
        n--
    }

    while(fact % 10 === 0){
        zerosCount++;
        fact = Math.floor(fact / 10)
    }
    return zerosCount
}

console.log(trailingZerosInFact(10));
console.log(trailingZerosInFact(100)); //👈this give O/P is 0 because of int overflow

//EFFICIENT METHOD
//By counting the total number of 2s and 5s
// Interesting fact about factorial is the number of 5s is always going less then number of 2s
// So, I have only need to count how many 5s we have in prime factorization
function trailingZerosInFact2(n){
    let zerosCount = 0;
    for(let i = 5; i <= n; i = i * 5){
        zerosCount = zerosCount + Math.floor(n / i)
    }
    return zerosCount
}

console.log(trailingZerosInFact2(10));
console.log(trailingZerosInFact2(100));
console.log(trailingZerosInFact2(251));
