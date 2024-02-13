//NAIVE SOLUTION
//TIME: O(N square)
//SPACE: O(1)
function leftMostRep(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return i;
      }
    }
  }
  return -1;
}

console.log(leftMostRep("geeksforgeeks"));
console.log(leftMostRep("abbcc"));
console.log(leftMostRep("abcd"));

//BETTER APPROACH
//TIME: theta(N + alphabetSize)
//SPACE: O(alphabetSize)
function leftMostRep2(str) {
  let countStr = new Array(256).fill(0);
  for (let i = 0; i < str.length; i++) {
    countStr[str.charCodeAt(i)]++;
  }

  for (let i = 0; i < str.length; i++) {
    if (countStr[str.charCodeAt(i)] > 1) {
      return i;
    }
  }
  return -1;
}

console.log(leftMostRep2("geeksforgeeks"));
console.log(leftMostRep2("abbcc"));
console.log(leftMostRep2("abcd"));
console.log(leftMostRep2("abcda"));

//BETTER APPROACH
//TIME: theta(N + alphabetSize)
//SPACE: theta(alphabetSize)
function leftMostRep3(str) {
  let visited = new Array(256).fill(false);
  let res = -1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (visited[str.charCodeAt(i)]) {
      res = i;
    }
    visited[str.charCodeAt(i)] = true;
  }
  return res;
}

console.log(leftMostRep3("geeksforgeeks"));
console.log(leftMostRep3("abbcc"));
console.log(leftMostRep3("abcd"));
console.log(leftMostRep3("abcda"));
