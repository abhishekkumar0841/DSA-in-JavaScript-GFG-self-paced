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

// console.log(head);
// console.log(temp1);
// console.log(temp2);

let curr = head;
let n = []
while(curr !== null){
  // console.log(curr.data);
  n.push(curr.data)
  curr = curr.next;
}
console.log(n);
