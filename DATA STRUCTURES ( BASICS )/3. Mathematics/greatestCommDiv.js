// I/P:- a = 4, b = 6 --> O/P:- 2
// because 2 divides clearly both 4 and 6
// I/P:- a = 100, b = 200 --> O/P:- 100
// because 100 divides clearly both 100 and 200
// I/P:- a = 7, b = 13 --> O/P:- 1
// because 1 divides clearly both 7 and 13

//NAIVE METHOD
//Since GCD has to divide both a and b so the maximum possible value is going to be min(a,b)
//TC:- O(min(a,b))
function greatestCommonDivisor(a, b){
    let min = Math.min(a, b)
    for(let i = min; i > 0; i--){
        if(b % i === 0 && a % i === 0){
            return i;
        }
    }
}

// console.log(greatestCommonDivisor(4, 6));
// console.log(greatestCommonDivisor(400, 80));

//EUCLIDEAN ALGORITHM
// Idea of this algorithm
// We can rewrite the GCD of a, b as GCD of b, r, where r is remainder where you divide a / b

//Understand with example:-
// let a >= b
    // if b divides a for ex:- a = 20 and b = 5
    // so, here b fully divides a, with 0 remainder
    // in this case our GCD is simply b = 5

// Other case, when b doesn't divides a
    // then, we can write a = qb + r
    // where q is quotient, when you divide a by b
        // 0 < r < b
        // 0 < q
    // and r is the remainder
function greatestCommonDivisor2(a, b){
    if(b === 0) return a;
    console.log("mod", a % b);
    console.log("a", a);
    console.log("b", b);
    return greatestCommonDivisor2(b, a % b);
}
//TC:- O(log min(a,b))
//SC(auxiliary space):- O(log min(a,b))
console.log(greatestCommonDivisor2(4, 6));
console.log(greatestCommonDivisor2(400, 80));

//OPTIMIZING PROGRAM MORE (Iterative version)
function greatestCommonDivisor3(a, b){
    while(b !== 0){
        a = a % b;
        [a, b] = [b, a]
    }
    return a;
}   
//TC:- O(log min(a,b))
//SC(auxiliary space):- O(1)
console.log(greatestCommonDivisor3(10, 15));
console.log(greatestCommonDivisor3(4, 6));
console.log(greatestCommonDivisor3(400, 80));



