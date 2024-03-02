function powSet(s) {
  let n = s.length;
  let pSize = 1 << n;
  console.log('p:', pSize);
  for (let i = 0; i < pSize; i++) {
    let curr = "";
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        curr = curr + s[j];
      }
    }
    console.log("-->", curr);
  }
}

powSet("ab");
powSet("abc");
