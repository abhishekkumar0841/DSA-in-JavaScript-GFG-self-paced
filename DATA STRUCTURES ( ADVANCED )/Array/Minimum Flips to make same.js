function minFlip(arr) {
  let res = "",
    n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] !== arr[0]) {
        res += "From " + i + " to ";
      } else {
        res += i - 1 + "\n";
      }
    }
  }

  if (arr[n - 1] !== arr[0]) {
    res += n - 1 + "\n";
  }

  console.log(res);
}

minFlip([0, 1, 1, 1, 0, 0, 1, 1, 0, 1]);
minFlip([0, 0, 1, 1, 0, 0, 1, 1, 0]);
