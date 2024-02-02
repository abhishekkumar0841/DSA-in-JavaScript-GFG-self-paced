function sumOfDigit1(n) {
  if (n === 0) return 0;
  let lastDigit = n % 10;
  n = Math.floor(n / 10);
  return sumOfDigit1(n) + lastDigit;
}

console.log(sumOfDigit1(123));
console.log(sumOfDigit1(5583));

// Little optimize solution
function sumOfDigit2(n){
    if(n <= 9) return n;
    let lastDigit = n % 10;
    n = Math.floor(n / 10)
    return sumOfDigit2(n) + lastDigit
 }

 console.log(sumOfDigit2(123));
 console.log(sumOfDigit2(5583));
