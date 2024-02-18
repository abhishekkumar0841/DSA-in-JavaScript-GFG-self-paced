//This represent single Node of linked list
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

//This class is the main Stack in which all the Node are insert or delete and it also contains all the methods. Basically it is the Linked-list which takes care of their all Nodes.
class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.head === null;
  }

  push(x) {
    let temp = new Node(x);
    temp.next = this.head;
    this.head = temp;
    this.size += 1;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    let res = this.head.data;
    this.head = this.head.next;
    this.size -= 1;
    return res;
  }

  peek() {
    if (this.head === null) return null;
    return this.head.data;
  }
}

let stack = new Stack();
stack.push(44);
stack.push(99);
stack.push(50);
stack.push(2);
console.log(stack.size);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
