class kStacks {
  constructor(n, k) {
    this.cap = n;
    this.k = k;
    this.arr = new Array(n);
    this.top = new Array(k).fill(-1);
    this.next = new Array(n);
    this.freeTop = 0;

    for (let i = 0; i < n - 1; i++) {
      this.next[i] = i + 1;
    }

    this.next[n - 1] = -1;
  }

  //sn is the stack number
  push(sn, x) {
    let i = this.freeTop;
    this.freeTop = this.next[i];
    this.arr[i] = x;
    this.next[i] = this.top[sn];
    this.top[sn] = i;
  }

  pop(sn) {
    let i = this.top[sn];
    this.top[sn] = this.next[i];
    this.next[i] = this.freeTop;
    this.freeTop = i;
    return this.arr[i];
  }

  isEmpty(sn) {
    return this.top[sn] === -1;
  }
}

let kst = new kStacks(5, 2)
kst.push(1, 10)
kst.push(1, 20)
kst.pop(1)
console.log(kst);
