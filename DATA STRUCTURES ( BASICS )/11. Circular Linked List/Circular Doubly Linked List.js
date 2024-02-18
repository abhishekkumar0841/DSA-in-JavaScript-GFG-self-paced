//CREATING CIRCULAR DOUBLY LINKED LIST
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.prev = null;
  }
}

let temp1 = new Node(3);
let temp2 = new Node(5);
let temp3 = new Node(7);

temp1.next = temp2;
temp1.prev = temp3;

temp2.next = temp3;
temp2.prev = temp1;

temp3.next = temp1;
temp3.prev = temp2;

//INSERT AT BEGIN
function insertAtBeg(head, x) {
  let temp = new Node(x);

  if (head === null) {
    temp.next = head;
    temp.prev = temp;
    return temp;
  }

  temp.next = head;
  temp.prev = head.prev;
  head.prev.next = temp;
  head.prev = temp;
  return temp;
}

console.log(insertAtBeg(temp1, 99));
