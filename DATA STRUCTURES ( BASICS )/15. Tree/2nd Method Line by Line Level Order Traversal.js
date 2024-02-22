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
root.left = new Node(40);
root.right = new Node(30);
root.right.left = new Node(50);
root.right.left.left = new Node(70);
root.right.right = new Node(60);

function printLevelLineByLine2(root) {
  let ans = "";
  if (root === null) return ans;
  let q = new Queue(10);
  q.enqueue(root);
  while (!q.isEmpty()) {
    let count = q.size;
    for (let i = 0; i < count; i++) {
      let curr = q.dequeue();
      ans += curr.key + " ";
      if (curr.left !== null) q.enqueue(curr.left);
      if (curr.right !== null) q.enqueue(curr.right);
    }
    ans += "\n";
  }
  return ans;
}

console.log(printLevelLineByLine2(root));
