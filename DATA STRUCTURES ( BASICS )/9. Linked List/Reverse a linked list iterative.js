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

//NAIVE APPROACH (two traversal)
//Time: theta(n)
//Space: theta(n)
function reverseList(head) {
  let arr = [];
  for (let curr = head; curr !== null; curr = curr.next) {
    arr.push(curr.data);
  }

  for (let curr = head; curr !== null; curr = curr.next) {
    curr.data = arr.pop();
  }

  return head;
}

console.log(reverseList(head));

//EFFICIENT APPROACH
//Time: theta(n)
//Space: theta(1)
function reverseList(head) {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

console.log(reverseList(head));
