//Naive solution
//Time: O((n - m + 1) * m)
function scPat(txt, pat) {
  let m = pat.length;
  let n = txt.length;
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m) {
      if (pat[j] !== txt[i + j]) {
        break;
      }
      j++;
    }
    if (j === m) {
      console.log(i);
    }
  }
}

scPat("ABABABCD", "ABAB");
scPat("ABCABCD", "ABCD");

