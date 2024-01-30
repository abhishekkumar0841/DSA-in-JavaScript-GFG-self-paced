//NAIVE SOLUTION
function divisorOfNumber(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
//TC:- Theta(n)
//Aux S:- Theta(1)
// divisorOfNumber(15);
// divisorOfNumber(30);
// divisorOfNumber(7);
// divisorOfNumber(100);

//EFFICIENT SOLUTION
//not printing in order
function divisorOfNumber2(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i);

      if (i !== n / i) {
        console.log(n / i);
      }
    }
  }
}
//TC:- O(√n)
//Aux S:- O(1)
//divisorOfNumber2(15);
//divisorOfNumber2(30);
//divisorOfNumber2(7);
//divisorOfNumber2(100);

//EFFICIENT SOLUTION
//printing in order
function divisorOfNumber3(n) {
  let i;
  for (i = 1; i * i < n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }

  for (; i >= 1; i--) {
    if (n % i === 0) {
      console.log(n / i);
    }
  }
}
//TC:- O(√n)
//Aux S:- O(1)
divisorOfNumber3(15);
divisorOfNumber3(30);
divisorOfNumber3(7);
divisorOfNumber3(100);
