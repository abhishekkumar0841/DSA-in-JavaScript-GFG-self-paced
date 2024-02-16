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

//Time: theta(n)
//Space: theta(n)
function reverseList(head) {
  if (head === null || head.next === null) return head;
  let restHead = reverseList(head.next);
  let restTail = head.next;
  restTail.next = head;
  head.next = null;
  return restHead;
}

console.log(reverseList(head));
