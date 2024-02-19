class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(x) {
    this.arr.push(x);
  }

  dequeue() {
    if (this.arr.length === 0) return null;
    let res = this.arr.shift();
    return res;
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  getRear() {
    if (this.arr.length === 0) return null;
    return this.arr[this.arr.length - 1];
  }

  getFront() {
    if (this.arr.length === 0) return null;
    return this.arr[0];
  }
}
