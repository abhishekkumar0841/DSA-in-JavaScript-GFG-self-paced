//This function match the two brackets and return boolean value
function isMatch(a, b) {
  return (
    (a === "(" && b === ")") ||
    (a === "{" && b === "}") ||
    (a === "[" && b === "]")
  );
}

function checkBalPar(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (curr === "[" || curr === "{" || curr === "(") {
      stack.push(curr);
    } else {
      if (stack.length === 0) {
        return false;
      } else if (!isMatch(stack[stack.length - 1], curr)) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

console.log(checkBalPar("{[()))"));
console.log(checkBalPar("{}([])"));
console.log(checkBalPar("))"));
console.log(checkBalPar("[{([{()}])}]"));
