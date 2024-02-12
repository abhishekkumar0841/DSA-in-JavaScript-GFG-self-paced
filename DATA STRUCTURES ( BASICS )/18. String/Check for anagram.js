//My implementation
//Time: O(n + m)
//Aux Space: O(n)
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  let lookup = {};
  for (let i = 0; i < s1.length; i++) {
    let curr = s1[i];
    lookup[curr] ? lookup[curr]++ : (lookup[curr] = 1);
  }

  for (let j = 0; j < s2.length; j++) {
    let curr = s2[j];
    if (!lookup[curr]) {
      return false;
    } else {
      lookup[curr]--;
    }
  }

  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("aaacb", "cabaa"));
console.log(isAnagram("aab", "bab"));
console.log(isAnagram("aab", "ba"));

//Naive solution
//Time: O(n log n)
//Aux Space: O(n)
function isAnagram2(s1, s2) {
  if (s1.length !== s2.length) return false;
  let newS1 = s1.split("").sort().join("");
  let newS2 = s2.split("").sort().join("");
  return newS1 === newS2;
}

console.log(isAnagram2("listen", "silent"));
console.log(isAnagram2("aaacb", "cabaa"));
console.log(isAnagram2("aab", "bab"));
console.log(isAnagram2("aab", "ba"));

//Efficient solution
//Time: theta(n + alphabetSize)
//Aux Space: theta(alphabetSize)
function isAnagram3(s1, s2) {
  if (s1.length !== s2.length) return false;
  let countArr = new Array(256).fill(0);

  for (let i = 0; i < s1.length; i++) {
    countArr[s1.charCodeAt(i)]++;
    countArr[s2.charCodeAt(i)]--;
  }

  for (let j = 0; j < countArr.length; j++) {
    if (countArr[j] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram3("LISTEN", "SILENT"));
console.log(isAnagram3("AAACB", "CABAA"));
console.log(isAnagram3("aab", "bab"));
console.log(isAnagram3("aab", "ba"));
