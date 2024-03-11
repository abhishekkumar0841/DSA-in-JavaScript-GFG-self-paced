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

//EFFICIENT SOLUTION
//TIME: theta(n)
//SPACE: O(n)
function genNum(num) {
  let res = "";
  let q = new Queue();
  q.enqueue("5");
  q.enqueue("6");
  for (let i = 0; i < num; i++) {
    let curr = q.dequeue();
    res += curr + " ";
    q.enqueue(curr + "5");
    q.enqueue(curr + "6");
  }
  return res;
}

console.log(genNum(10));

//EFFICIENT SOLUTION
//TIME: theta(n)
//SPACE: O(n)
function genNum2(num) {
  let res = "";
  let q = new Queue();
  q.enqueue("5");
  q.enqueue("6");
  let i;
  for (i = 0; i + q.size < num; i++) {
    let curr = q.dequeue();
    res += curr + " ";
    q.enqueue(curr + "5");
    q.enqueue(curr + "6");
  }
  while (i < num) {
    res += q.dequeue() + " ";
    i++;
  }
  return res;
}

console.log(genNum2(3));
