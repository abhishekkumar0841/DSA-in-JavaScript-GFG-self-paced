//NAIVE SOLUTION
//Time: O(n square)
//Space: theta(1)
function rainWaterTrap(arr) {
  let res = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let lMax = arr[i];
    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, arr[j]);
    }

    let rMax = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      rMax = Math.max(rMax, arr[j]);
    }

    res += Math.min(lMax, rMax) - arr[i];
  }
  return res;
}

console.log(rainWaterTrap([3, 0, 1, 2, 5]));
console.log(rainWaterTrap([2, 0, 2]));
console.log(rainWaterTrap([1, 2, 3]));
console.log(rainWaterTrap([3, 6, 1, 2, 5]));

//EFFICIENT SOLUTION
//Time: theta(n)
//Space: theta(n)
function rainWaterTrap2(arr) {
  let res = 0;
  let n = arr.length;
  let lMax = [];
  lMax[0] = arr[0];

  for (let i = 1; i < n; i++) {
    lMax[i] = Math.max(arr[i], lMax[i - 1]);
  }

  let rMax = [];
  rMax[n - 1] = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    rMax[i] = Math.max(arr[i], rMax[i + 1]);
  }

  for (let i = 1; i < n - 1; i++) {
    res += Math.min(rMax[i], lMax[i]) - arr[i];
  }

  return res;
}

console.log(rainWaterTrap2([3, 0, 1, 2, 5]));
console.log(rainWaterTrap2([2, 0, 2]));
console.log(rainWaterTrap2([1, 2, 3]));
console.log(rainWaterTrap2([3, 6, 1, 2, 5]));
console.log(rainWaterTrap2([5, 0, 6, 2, 3]));
