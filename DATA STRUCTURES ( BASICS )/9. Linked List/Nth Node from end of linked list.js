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

//-------NAIVE APPROACH--------
function findNthNode(head, n) {
  let length = 0;

  for (let curr = head; curr !== null; curr = curr.next) {
    length += 1;
  }

  if (n > length) return;

  let curr = head;
  //LOGIC 👉 (length - n) + 1
  for (let i = 1; i < length - n + 1; i++) {
    curr = curr.next;
  }
  console.log(curr.data);
}

findNthNode(head, 3);
findNthNode(head, 1);
findNthNode(head, 6);

//-------TWO POINTER/REFERENCES APPROACH--------
function findNthNode2(head, n) {
  if (head === null) return;
  let first = head;
  for (let i = 0; i < n; i++) {
    if (first === null) return;
    first = first.next;
  }

  let second = head;
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  console.log(second.data);
}

findNthNode2(head, 3);
findNthNode2(head, 1);
findNthNode2(head, 6);
