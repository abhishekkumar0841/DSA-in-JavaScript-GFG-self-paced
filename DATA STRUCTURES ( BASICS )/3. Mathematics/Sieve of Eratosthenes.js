//Sieve Of Eratosthenes (find out all the prime numbers which are smaller than or equal to give n)
// NAIVE METHOD
function sieveOfEratosthenes(n){
    for(let i = 2; i <= n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

sieveOfEratosthenes(29);

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false;
    }
    return true
}

// SIMPLE IMPLEMENTATION OF SIEVE  METHOD
function sieve(n){
    let isPrime = new Array(n + 1).fill(true)
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(isPrime[i]){
            for(let j = i * 2; j <= n; j = j + i){
                isPrime[j] = false;
            }
        }
    }

    for(let i = 2; i <= n; i++){
        if(isPrime[i]){
            console.log(i);
        }
    }
}

sieve(9)
sieve(29)

// OPTIMIZED IMPLEMENTATION OF SIEVE  METHOD
function sieve2(n){
    let isPrime = new Array(n + 1).fill(true)
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j = j + i){
                isPrime[j] = false;
            }
        }
    }

    for(let i = 2; i <= n; i++){
        if(isPrime[i]){
            console.log(i);
        }
    }
}

sieve2(9)
sieve2(29)

// SHORTER IMPLEMENTATION OF SIEVE  METHOD
function sieve3(n){
    let isPrime = new Array(n + 1).fill(true)
    for(let i = 2; i <= n; i++){
        if(isPrime[i]){
            console.log(i);
            for(let j = i * i; j <= n; j = j + i){
                isPrime[j] = false
            }
        }
    }
}
//TC:- O(n log log n) <-- this is almost linear
sieve3(9)
sieve3(29)
