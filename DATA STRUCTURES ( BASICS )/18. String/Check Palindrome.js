//NAIVE APPROACH
//TIME: theta(n)
//AUX Space: theta(n)
function checkPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  if (str === rev) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("abcdcba"));
console.log(checkPalindrome("abba"));
console.log(checkPalindrome("geefs"));

//NAIVE APPROACH
//TIME: theta(n)
//AUX Space: theta(n)
function checkPalindrome2(str) {
  let revStr = str.split("").reverse().join("");
  return revStr === str;
}

console.log(checkPalindrome2("abcdcba"));
console.log(checkPalindrome2("abba"));
console.log(checkPalindrome2("geefs"));

//EFFICIENT APPROACH
//TIME: O(n)
//AUX Space: O(1)
function checkPalindrome3(str) {
  let low = 0;
  let high = str.length - 1;

  while (low < high) {
    if (str[low] !== str[high]) {
      return false;
    } else {
      low++;
      high--;
    }
  }

  return true;
}

console.log(checkPalindrome3("abcdcba"));
console.log(checkPalindrome3("abba"));
console.log(checkPalindrome3("geefs"));
