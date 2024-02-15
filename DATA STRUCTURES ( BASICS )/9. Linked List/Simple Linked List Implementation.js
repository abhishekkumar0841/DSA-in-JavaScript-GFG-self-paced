class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

// let temp1 = new Node(10)
// let temp2 = new Node(20)
// let temp3 = new Node(30)

// temp1.next = temp2
// temp2.next = temp3

// let head = temp1;
// console.log('head:', head);

//-------SHORTER SYNTAX👇 FOR ABOVE IMPLEMENTATION--------
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
// console.log('head:', head);

//Traversing Linked List (ITERATIVE traversal)
function traverseLinkedList(h) {
  let str = "";
  //   console.log(h);
  let curr = h;
  while (curr !== null) {
    // console.log(curr);
    str += curr.data + " ";
    curr = curr.next;
  }
  return str;
}

console.log(traverseLinkedList(head));

//Traversing Linked List (RECURSIVE traversal)
function traverseLinkedList2(h) {
  if (h === null) return;
  console.log(h.data);
  traverseLinkedList2(h.next);
}

traverseLinkedList2(head);

// ---------ADDING STRINGS INSTEAD OF NUMBERS IN LINKED LIST----------

class Node2 {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

let temp11 = new Node2("John");
let temp22 = new Node2("Shun");
let temp33 = new Node2("Smith");

temp11.next = temp22;
temp22.next = temp33;

let head2 = temp11;

console.log("head 2:", head2);
