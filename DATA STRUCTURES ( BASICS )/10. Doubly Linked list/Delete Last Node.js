class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.prev = null;
  }
}

let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;

function deleteLastN(head) {
  if (head === null || head.next === null) return head;
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.prev.next = null;
  return head;
}

console.log(deleteLastN(head));
