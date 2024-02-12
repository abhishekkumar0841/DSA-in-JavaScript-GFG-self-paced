//Iterative solution
//Time: theta(m + n)
//Aux space: O(1)
function isSubSeq(str1, str2) {
  let j = 0;

  for (let i = 0; i < str1.length && j < str2.length; i++) {
    if (str1[i] === str2[j]) {
      j++;
    }
  }

  return j === str2.length;
}

console.log(isSubSeq("ABCD", "AD"));
console.log(isSubSeq("ABCDE", "AED"));
console.log(isSubSeq("ABFE", "AF"));

//Recursive solution
//Time: theta(m + n)
//Aux space: O(m + n)
function isSubSeq2(str1, str2, l1, l2) {
  if (l2 === 0) return true;
  if (l1 === 0) return false;

  if (str1[l1 - 1] === str2[l2 - 1]) {
    return isSubSeq2(str1, str2, l1 - 1, l2 - 1);
  } else {
    return isSubSeq2(str1, str2, l1 - 1, l2);
  }
}

console.log(isSubSeq2("ABCD", "AD", 4, 2));
console.log(isSubSeq2("ABCDE", "AED", 5, 3));
console.log(isSubSeq2("ABFE", "AF", 4, 2));
