class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(33)
head.next = new Node(44)
head.next.next = new Node(90)


//Time: theta(pos)
//Aux Space: O(1)
function insertAtPos(head, pos, el) {
  let temp = new Node(el);
  if (pos === 1) {
    temp.next = head;
    return temp;
  }

  let curr = head;
  for (let i = 1; i <= pos - 2 && curr !== null; i++) {
    curr = curr.next;
  }

  if (curr === null) return head;
  temp.next = curr.next;
  curr.next = temp;
  return head;
}

head = insertAtPos(head, 2, 77)
console.log(head);
