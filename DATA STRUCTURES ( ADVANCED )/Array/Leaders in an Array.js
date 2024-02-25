//Naive approach
//Time: O(n square)
//Space: O(1)
function leadersInArr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let flag = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > curr) {
        flag = false;
        break;
      }
    }
    if (flag) res.push(curr);
  }
  return res;
}

console.log(leadersInArr([7,10,4,3,6,5,2]));
console.log(leadersInArr([10,20,30]));
console.log(leadersInArr([30,20,10]));

//Efficient approach
//Time: O(n square)
//Space: O(1)
function leadersInArr(arr) {
  let res = [];
  let n = arr.length;
  let currLead = arr[n - 1];
  res.push(currLead);
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= currLead) {
      currLead = arr[i];
      res.push(currLead);
    }
  }

  for (let i = res.length - 1; i >= 0; i--) {
    console.log(res[i]);
  }
}

leadersInArr([7, 4, 10, 5, 10, 6]);
leadersInArr([10, 20, 30]);
leadersInArr([30, 20, 10]);
