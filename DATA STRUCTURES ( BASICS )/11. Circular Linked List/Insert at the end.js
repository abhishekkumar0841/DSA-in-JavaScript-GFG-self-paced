class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

let head = new Node(3);
// head.next = head;
head.next = new Node(4);
head.next.next = head;

//Method 1
//Time: theta(n)
//Space: O(1)
function insertAtEnd(head, x) {
  let temp = new Node(x);
  if (head === null) {
    temp.next = temp;
    return temp;
  }

  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }

  curr.next = temp;
  temp.next = head;
  return head;
}

console.log(insertAtEnd(head, 102));

//Method 2
//Time: theta(1)
//Space: O(1)
function insertAtEnd2(head, x) {
  let temp = new Node(x);
  if (head === null) {
    temp.next = temp;
    return temp;
  }

  temp.next = head.next;
  head.next = temp;
  [head.data, temp.data] = [temp.data, head.data];
  return temp;
}

console.log(insertAtEnd2(head, 102));
