//creating queue
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

  isEmpty() {
    return this.size === 0;
  }
}

//creating tree
class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);

function printLevelLineByLine(root) {
  let ans = "";
  if (root === null) return ans;
  let q = new Queue(10);
  q.enqueue(root);
  q.enqueue(null);
  while (q.size > 1) {
    let curr = q.dequeue();
    if (curr === null) {
      ans += "\n";
      q.enqueue(null);
      continue;
    }
    ans += curr.key + " ";
    if (curr.left !== null) {
      q.enqueue(curr.left);
    }
    if (curr.right !== null) {
      q.enqueue(curr.right);
    }
  }
  return ans;
}

console.log(printLevelLineByLine(root));
