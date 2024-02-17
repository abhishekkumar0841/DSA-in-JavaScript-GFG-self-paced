class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.prev = null;
  }
}

// let head = null
let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;

//Time: theta(n)
//Space: theta(1)
function insAtEnd(head, el) {
  let temp = new Node(el);
  if (head === null) return temp;

  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }

  curr.next = temp;
  temp.prev = curr;
  return head;
}

console.log(insAtEnd(head, 999));
