//NAIVE SOLUTION
//TIME: theta(k)
function isSet(n, k) {
  let x = 1;
  for (let i = 0; i < k - 1; i++) {
    x = x * 2;
  }

  if (n & (x !== 0)) {
    // console.log("check:", n & x);
    console.log("SET");
  } else {
    // console.log("check:", n & x);
    console.log("NOT SET");
  }
}

isSet(5, 3);
isSet(8, 2);

//NAIVE SOLUTION 2
//TIME: theta(k)
function isSet2(n, k) {
  for (let i = 0; i < k - 1; i++) {
    n = Math.floor(n / 2);
  }

  if (n & (1 !== 0)) {
    console.log("SET");
  } else {
    console.log("NOT SET");
  }
}

isSet2(5, 3);
isSet2(8, 2);

//EFFICIENT SOLUTION 1 (using Left shift operator)
//TIME: theta(1)
function isSet3(n, k) {
  let x = 1 << (k - 1);
  if ((n & x) !== 0) {
    console.log("SET");
  } else {
    console.log("NOT SET");
  }
}

isSet3(5, 3);
isSet3(8, 2);
isSet3(15, 3);

//EFFICIENT SOLUTION 2 (using Right shift operator)
//TIME: theta(1)
function isSet4(n, k) {
  let x = n >> (k - 1);
  if ((x & 1) !== 0) {
    console.log("SET");
  } else {
    console.log("NOT SET");
  }
}

isSet4(5, 3);
isSet4(8, 2);
isSet4(15, 3);
