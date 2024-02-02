function checkPalindromeStr(str, start, end) {
  if (start >= end) return true;
  return str[start] === str[end] && checkPalindromeStr(str, start + 1, end - 1);
}

console.log(checkPalindromeStr("madam", 0, 4));
console.log(checkPalindromeStr("abhi", 0, 3));
console.log(checkPalindromeStr("papa", 0, 3));
console.log(checkPalindromeStr("abba", 0, 3));
