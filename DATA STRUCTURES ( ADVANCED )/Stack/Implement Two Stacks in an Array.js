class TwoStacks {
  constructor(n) {
    this.cap = n;
    this.arr = new Array(n);
    this.top1 = -1;
    this.top2 = n;
  }

  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.top1 = this.top1 + 1;
      this.arr[this.top1] = x;
      return true;
    } else {
      return false;
    }
  }

  push2(x) {
    if (this.top1 < this.top2 - 1) {
      this.top2 = this.top2 - 1;
      this.arr[this.top2] = x;
      return true;
    } else {
      return false;
    }
  }

  pop1() {
    if (this.top1 >= 0) {
      let x = this.arr[this.top1];
      this.top1 = this.top1 - 1;
      return x;
    } else {
      return null;
    }
  }

  pop2() {
    if (this.top2 < this.cap) {
      let x = this.arr[this.top2];
      this.top2 = this.top2 + 1;
      return x;
    } else {
      return null;
    }
  }

  size1() {
    return this.top1 + 1;
  }

  size2() {
    return this.cap - this.top2;
  }
}

let ts = new TwoStacks(5)
ts.push1(5)
ts.push1(10)
ts.push1(20)
ts.push2(60)
ts.push2(50)
ts.push2(90)

console.log(ts.pop1());
console.log(ts.pop2());
ts.push2(99)

console.log(ts.arr);

console.log(ts.size1());
console.log(ts.size2());