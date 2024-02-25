function freqInArr(arr) {
  let i = 0;
  let n = arr.length;
  while (i < n) {
    let j = i + 1,
      freqCount = 1;
    while (j < n) {
      if (arr[j] === arr[i]) {
        j++;
        freqCount++;
      } else {
        break;
      }
    }
    console.log(`${arr[i]} ${freqCount}`);
    i = j; // i = i + freqCount;
  }
}

freqInArr([10, 10, 10, 25, 30, 30]);
freqInArr([10, 10, 10, 10]);
freqInArr([10, 20, 30]);
