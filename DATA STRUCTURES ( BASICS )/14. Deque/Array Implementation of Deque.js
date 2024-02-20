class Deque {
  constructor(c) {
    this.cap = c;
    this.size = 0;
    this.front = 0;
    this.arr = new Array(c);
  }

  insertFront(x) {
    if (this.size === this.cap) return;
    this.front = (this.front + this.cap - 1) % this.cap;
    this.arr[this.front] = x;
    this.size++;
  }

  deleteFront() {
    if (this.size === 0) return;
    this.front = (this.front + 1) % this.cap;
    this.size--;
  }

  insertRear(x) {
    if (this.size === this.cap) return;
    let new_rear = (this.front + this.size) % this.cap;
    this.arr[new_rear] = x;
    this.size++;
  }

  deleteRear() {
    if (this.size === 0) return;
    this.size--;
  }
}
