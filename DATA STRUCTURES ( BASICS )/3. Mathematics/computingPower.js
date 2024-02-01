//COMPUTING POWER
//Naive solution
function computingPower(a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result = result * a;
  }
  return result;
}

// console.log(computingPower(2, 3));
// console.log(computingPower(3, 4));
// console.log(computingPower(4, 5));

//Recursive solution
function myApo(a, b) {
  if (b === 1) return 1;
  return a * computingPower(a, b - 1);
}

// console.log(myApo(2, 3));
// console.log(myApo(3, 5));
// console.log(myApo(4, 5));

//Recursive solution
function computingPower2(x, n) {
  if (n === 0) return 1;
  temp = computingPower(x, Math.floor(n / 2));
  temp = temp * temp;

  if (n % 2 === 0) {
    return temp;
  } else {
    return temp * x;
  }
}

console.log(computingPower2(2, 3));
console.log(computingPower2(3, 5));
console.log(computingPower2(4, 5));
