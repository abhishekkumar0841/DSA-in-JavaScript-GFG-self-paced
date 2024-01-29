function palindromeNumber(n){
    let revNum = 0;
    let copyOfN = n;
    while(n > 0){
        let last = n % 10;
        revNum = revNum * 10 + last;
        n = Math.floor(n /10)
    }
    
    if(copyOfN === revNum){
        return true
    }
    return false
}

console.log(palindromeNumber(12321));
console.log(palindromeNumber(123421));
console.log(palindromeNumber(1231));
console.log(palindromeNumber(9119));
console.log(palindromeNumber(1001));
console.log(palindromeNumber(0));
