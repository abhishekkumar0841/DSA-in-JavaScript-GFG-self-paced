class Queue {
  constructor() {
    this.m = {};
    this.front = -1;
    this.rear = -1;
  }

  enqueue(x) {
    this.rear++;
    this.m[this.rear] = x;
    if (this.front === -1) this.front++;
  }

  dequeue() {
    if (this.front === -1) return null;
    let res = this.m[this.front];
    delete this.m[this.front];
    this.front++;

    if (this.front > this.rear) {
      this.front = this.rear = -1;
    }

    return res;
  }

  size() {
    return this.rear - this.front + 1;
  }

  isEmpty() {
    return this.front === -1;
  }

  getRear() {
    if (this.front === -1) return null;
    return this.m[this.rear];
  }

  getFront() {
    if (this.front === -1) return null;
    return this.m[this.front];
  }
}
