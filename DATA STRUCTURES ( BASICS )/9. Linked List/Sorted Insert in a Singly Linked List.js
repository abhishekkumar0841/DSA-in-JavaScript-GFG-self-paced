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

function sortedInsert(head, el) {
  let temp = new Node(el);
  if (head === null) {
    return temp;
  }
  if (el < head.data) {
    temp.next = head;
    return temp;
  }

  let curr = head;
  while (curr.next !== null && curr.next.data < el) {
    curr = curr.next;
  }

  temp.next = curr.next;
  curr.next = temp;

  return head;
}

head = sortedInsert(head, 20);
head = sortedInsert(head, 100);
head = sortedInsert(head, 10);
// console.log(head);

//function👇 for iterate the values 
let curr = head;
while(curr !== null){
    console.log(curr.data);
    curr = curr.next
}
