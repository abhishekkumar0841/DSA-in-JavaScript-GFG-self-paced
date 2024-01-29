//NAIVE SOLUTION
function lcm(a, b) {
  let max = Math.max(a, b);
  for (let i = max; i <= a * b; i++) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}
// O(a * b - max(a,b)) OR O(lcm - max(a,b))
console.log(lcm(4, 6));
console.log(lcm(15, 17));

function lcm2(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}
// O(a * b - max(a,b)) OR O(lcm - max(a,b))
console.log(lcm2(4, 6));
console.log(lcm2(15, 17));

// EFFICIENT SOLUTION
// O(log min(a, b))
function lcm3(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}

function greatestCommonDivisor(a, b) {
  while (b !== 0) {
    a = a % b;
    [a, b] = [b, a];
  }
  return a;
}

console.log(lcm3(4, 6));
console.log(lcm3(15, 17));
console.log(lcm3(15, 20));
