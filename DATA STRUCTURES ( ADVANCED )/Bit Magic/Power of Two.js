//NAIVE SOLUTION
//TIME: O(log n)
function isPowOf2(n) {
  if (n === 0) return false;
  while (n !== 1) {
    if (n % 2 !== 0) return false;
    n = Math.floor(n / 2);
  }
  return true;
}

console.log(isPowOf2(2));
console.log(isPowOf2(6));
console.log(isPowOf2(1));
console.log(isPowOf2(0));
console.log(isPowOf2(8));

//EFFICIENT SOLUTION (USING BRAIN KERNINGAM'S ALGORITHM)
//TIME: O(1)
function isPowOf22(n) {
  if (n === 0) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowOf22(2));
console.log(isPowOf22(6));
console.log(isPowOf22(1));
console.log(isPowOf22(0));
console.log(isPowOf22(8));
