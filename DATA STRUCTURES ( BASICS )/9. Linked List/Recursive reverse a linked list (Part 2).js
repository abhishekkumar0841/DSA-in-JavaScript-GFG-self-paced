class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(33);
head.next = new Node(44);
head.next.next = new Node(90);
head.next.next.next = new Node(99);
head.next.next.next.next = new Node(200);
head.next.next.next.next.next = new Node(399);

function reverseList(curr, prev = null) {
  if (curr === null) return prev;
  let next = curr.next;
  curr.next = prev;
  return reverseList(next, curr);
}

console.log(reverseList(head));
