//NAIVE METHOD
//check prime program 
function isPrime(n){
    if(n <= 1) return false
    if(n === 2 || n === 3) return true;
    if(n % 2 === 0 || n % 3 === 0) return false;

    for(let i = 5; i * i <= n; i = i + 6){
        if(n % i === 0 || n % (i + 2) === 0) return false
    }
    return true
}

function primeFactors(n){
    for(let i = 2; i < n; i++){
        if(isPrime(i)){
            let x = i;
            while(n % x === 0){
                console.log(i);
                x = x * i; 
            }
        }
    }
}
//TC:- O(n^3/2 log n)
primeFactors(12);
primeFactors(48);
primeFactors(315);
primeFactors(1);

// EFFICIENT METHOD
function primeFactors2(n){
    if(n <= 1) return
    for(let i = 2; i * i <= n; i++){
        while(n % i === 0){
            console.log(i);
            n = n / i;
        }
    }

    if(n > 1){
        console.log(n);
    }
}
//TC:- O(n^1/2 log n)
primeFactors2(12);
primeFactors2(48);
primeFactors2(315);
primeFactors2(1);

//MOST EFFICIENT METHOD
function primeFactors3(n){
    if(n <= 1) return;
    while(n % 2 === 0){
        console.log(2);
        n = n / 2;
    }

    while(n % 3 === 0){
        console.log(3);
        n = n / 3
    }

    for(let i = 5; i * i <= n; i = i + 6){
        while(n % i === 0){
            console.log(i);
            n = n / i
        }

        while(n % (i + 2) === 0){
            console.log(i + 2);
            n = n / (i + 2)
        }
    }

    if(n > 3){
        console.log(n);
    }
}
//TC:- O(n^1/2 log n) <-- TC is same but this solution is much more efficient than primeFactors2()
primeFactors3(450);
primeFactors3(12);