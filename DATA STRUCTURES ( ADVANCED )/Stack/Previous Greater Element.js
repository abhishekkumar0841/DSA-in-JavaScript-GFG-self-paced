//NAIVE SOLUTION
//TIME: O(N Sq.)
//SPACE: O(N)
function prevG(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = i; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        str += arr[j] + " ";
        flag = true;
        break;
      }
    }
    if (!flag) {
      str += -1 + " ";
    }
  }

  return str;
}

console.log(prevG([15, 10, 18, 12, 4, 6, 2, 8]));
console.log(prevG([8, 10, 12]));
console.log(prevG([12, 10, 8]));

//EFFICIENT SOLUTION
//TIME: O(N)
//SPACE: O(N)
function prevG2(arr) {
  let res = "";
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    let prev = stack.length === 0 ? -1 : stack[stack.length - 1];
    res += prev + " ";
    stack.push(arr[i]);
  }
  return res;
}

console.log(prevG2([15, 10, 18, 12, 4, 6, 2, 8]));
console.log(prevG2([8, 10, 12]));
console.log(prevG2([12, 10, 8]));
