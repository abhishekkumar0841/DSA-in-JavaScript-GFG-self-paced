//NAIVE SOLUTION
//Time: theta(d), d is the number of bits from most significant bits to end
function cSetBits(n) {
  let res = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      res++;
    }
    n = Math.floor(n / 2);
  }
  return res;
}

console.log(cSetBits(5));
console.log(cSetBits(7));
console.log(cSetBits(71));

//SLIGHTLY OPTIMIZED
//Time: theta(d), d is the number of bits from most significant bits to end
function cSetBits2(n) {
  let res = 0;
  while (n > 0) {
    res = res + (n & 1);
    n = Math.floor(n / 2);
  }
  return res;
}

console.log(cSetBits2(5));
console.log(cSetBits2(7));
console.log(cSetBits2(71));

//BRAIN KERNINGAM'S ALGORITHM
//Time: theta(set bit count) --> theta(n)
function cSetBits3(n) {
  let res = 0;
  while (n > 0) {
    n = n & (n - 1);
    res++;
  }
  return res;
}

console.log(cSetBits3(5));
console.log(cSetBits3(7));
console.log(cSetBits3(71));
console.log(cSetBits3(40));

//LOOKUP TABLE SOLUTION
//Time: O(1)
//preprocessing function
let tbl = [];
function initialize() {
  tbl[0] = 0;
  for (let i = 1; i < 256; i++) {
    tbl[i] = tbl[i & (i - 1)] + 1;
  }
  return tbl;
}

initialize();

//counting set bits function
function setBits(n) {
  return (
    tbl[n & 255] + tbl[(n >> 8) & 255] + tbl[(n >> 16) & 255] + tbl[n >> 24]
  );
}

console.log(setBits(5));
console.log(setBits(7));
console.log(setBits(71));
console.log(setBits(40));
console.log(setBits(13));
