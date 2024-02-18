class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

let head = new Node(3);
// head.next = head;
head.next = new Node(4);
head.next.next = new Node(5);
head.next.next.next = new Node(6);
head.next.next.next.next = head;

//For loop implementation
function printCircularL(head) {
  if (head === null) return;
  console.log(head.data);

  for (let curr = head.next; curr !== head; curr = curr.next) {
    console.log(curr.data);
  }
}

// printCircularL(head);

//Do while loop implementation
function printCircularL2(head) {
  if (head === null) return;
  let curr = head;

  do {
    console.log(curr.data);
    curr = curr.next;
  } while (curr !== head);
}

printCircularL2(head);
