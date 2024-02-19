class Queue {
  constructor(cap) {
    this.cap = cap;
    this.arr = new Array(cap);
    this.front = 0;
    this.size = 0;
  }

  getFront() {
    if (this.size === 0) return null;
    return this.arr[this.front];
  }

  getRear() {
    if (this.size === 0) return null;
    let r = (this.front + this.size - 1) % this.cap;
    return this.arr[r];
  }

  enqueue(x) {
    if (this.size === this.cap) return;
    let r = (this.front + (this.size - 1)) % this.cap;
    r = (r + 1) % this.cap;
    this.arr[r] = x;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return;
    let res = this.arr[this.front];
    this.front = (this.front + 1) % this.cap;
    this.size--;
    return res;
  }
}

let q1 = new Queue(3);
q1.enqueue(9);
q1.enqueue(20);
q1.enqueue(10);

console.log(q1.dequeue());
console.log(q1);

console.log("rear:", q1.getRear());
console.log("front:", q1.getFront());
