//TIME: O((n - m + 1) * m)
//q is user provided highest possible prime number
let d = 256;
function rkAlgo(txt, pat, q) {
  let m = pat.length,
    n = txt.length;
  let h = 1;
  for (let i = 1; i < m; i++) {
    h = (h * d) % q;
  }

  let p = 0,
    t = 0;
  for (let i = 0; i < m; i++) {
    p = (p * d + pat[i].charCodeAt()) % q;
    t = (t * d + txt[i].charCodeAt()) % q;
  }

  //checking for spurious hit
  for (let i = 0; i <= n - m; i++) {
    if (p === t) {
      let j;
      for (j = 0; j < m; j++) {
        if (txt[i + j] !== pat[j]) {
          break;
        }
      }
      if (j === m) {
        console.log(i);
      }
    }

    if (i < n - m) {
      t = (d * (t - h * txt[i].charCodeAt()) + txt[i + m].charCodeAt()) % q;
      if (t < 0) {
        t = t + q;
      }
    }
  }
}

rkAlgo("ABABABCD", "ABAB", 5);
rkAlgo("ABCABCD", "ABCD", 5);
