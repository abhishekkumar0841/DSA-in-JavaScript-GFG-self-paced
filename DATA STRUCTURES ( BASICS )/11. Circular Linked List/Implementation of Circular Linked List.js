class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

let head = new Node(3);
head.next = new Node(4);
head.next.next = new Node(5);
head.next.next.next = new Node(6);
head.next.next.next.next = head;

console.log(head);