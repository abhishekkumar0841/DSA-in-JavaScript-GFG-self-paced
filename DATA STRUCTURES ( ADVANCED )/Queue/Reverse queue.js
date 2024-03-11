class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(x) {
    let temp = new Node(x);
    if (this.front === null) {
      this.front = temp;
    } else {
      this.rear.next = temp;
    }
    this.rear = temp;
    this.size += 1;
  }

  dequeue() {
    if (this.front === null) return null;
    let res = this.front.data;
    this.front = this.front.next;
    this.size -= 1;
    return res;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

let q = new Queue();
q.enqueue(90);
q.enqueue(50);
q.enqueue(14);

//ITERATIVE SOLUTION
function revQ(q) {
  let st = [];
  while (!q.isEmpty()) {
    st.push(q.dequeue());
  }
  while (st.length > 0) {
    q.enqueue(st.pop());
  }
  return q;
}

console.log(revQ(q));

//RECURSIVE SOLUTION
function revQ2(q) {
  if (q.isEmpty()) {
    return;
  }
  let x = q.dequeue();
  revQ2(q);
  q.enqueue(x);
  return q;
}

console.log(revQ2(q));
