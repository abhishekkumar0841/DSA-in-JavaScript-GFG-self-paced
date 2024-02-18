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

//Method 1
//Time: theta(n)
//Space: O(1)
function insertAtBeg(head, x) {
  let temp = new Node(x);

  if (head === null) {
    temp.next = temp;
    return temp;
  }

  let curr = head;
  while (curr !== head) {
    curr = curr.next;
  }
  curr.next = temp;
  temp.next = head;
  return temp;
}

console.log(insertAtBeg(head, 99));

//Method 2
//Time: theta(1)
//Space: O(1)
function insertAtBeg2(head, x) {
  let temp = new Node(x);

  if (head === null) {
    temp.next = temp;
    return temp;
  }

  temp.next = head.next;
  head.next = temp;
  [head.data, temp.data] = [temp.data, head.data];
  return head;
}

console.log(insertAtBeg2(head, 99));
