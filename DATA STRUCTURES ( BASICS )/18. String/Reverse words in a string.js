//Efficient solution of overall time complexity👇 
//Time: O(n)
//Aux space: O(n)
function reverse(str, l, h) {
  let arr = str.split("");
  while (l <= h) {
    [arr[l], arr[h]] = [arr[h], arr[l]];
    l++;
    h--;
  }
  str = arr.join("");
  return str;
}

function reverseWords(str) {
  let n = str.length;
  let start = 0;
  for (let end = 0; end < n; end++) {
    if (str[end] === " ") {
      str = reverse(str, start, end - 1);
      start = end + 1;
    }
  }
  str = reverse(str, start, n - 1);
  return reverse(str, 0, n - 1);
}

console.log(reverseWords("Welcome to gfg"));
console.log(reverseWords("I love coding"));
console.log(reverseWords("abc"));
