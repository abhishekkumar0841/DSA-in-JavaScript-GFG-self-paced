//This only apply if the given pattern contains only distinct chars
//Time: theta(n - m + 1)
function sPattern(txt, pat) {
  let n = pat.length;
  let m = txt.length;
  let i = 0;
  while (i <= m - n) {
    let j = 0;
    for (j; j < m; j++) {
      if (pat[j] !== txt[i + j]) {
        break;
      }
    }
    if (j === m) {
      console.log(i);
    }

    if (j === 0) {
      i++;
    } else {
      i = i + j;
    }
  }
}

sPattern("ABCEABFABCD", "ABCD");
