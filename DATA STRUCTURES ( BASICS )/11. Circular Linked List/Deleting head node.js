class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

let head = new Node(3);
head.next = new Node(4);
head.next.next = new Node(5);
head.next.next.next = head;
console.log('HEAD:', head);

function delHeadNode(head) {
  if (head === null) return head;
  if (head.next === head) {
    delete head;
    return null;
  }

  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }

  curr.next = head.next;
  delete head;
  return curr.next;
}

console.log(delHeadNode(head));
