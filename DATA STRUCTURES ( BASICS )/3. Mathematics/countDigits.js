function countDigits (n){
    let count = 0;
    if(n === 0) return 1;
    while(n > 0){
        last = n % 10;
        count++;
        n = Math.floor(n / 10)
    }
    return count;
}

console.log(countDigits(12378));
console.log(countDigits(0));
// Time complexity = Theta(d)