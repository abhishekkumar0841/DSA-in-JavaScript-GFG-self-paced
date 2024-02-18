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

function delKthNode(head, k) {
  if (head === null) return head;
  if (k === 1) {
    return deleteHead(head);
  }

  let curr = head;
  for (let i = 0; i < k - 2; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
}

function deleteHead(head) {
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

console.log(delKthNode(head, 5));
