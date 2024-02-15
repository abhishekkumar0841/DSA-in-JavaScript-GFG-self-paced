class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Time: theta(n)
//Space: theta(1)
function insertAtEnd(head, x) {
  let temp = new Node(x);
  if (head === null) {
    return temp;
  }
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = temp;
  return head;
}

let head = null;
head = insertAtEnd(head, 10);
console.log("1st:", head);
head = insertAtEnd(head, 20);
console.log("2nd:", head);
head = insertAtEnd(head, 30);
console.log("3rd", head);

// ------------Delete First Node of Singly Linked List-------------
//Time: theta(1)
//Space: theta(1)
function deleteFirst(head) {
  if (head === null) {
    return head;
  }
  return head.next;
}

head = deleteFirst(head)
console.log("1st Deleted:", head);
