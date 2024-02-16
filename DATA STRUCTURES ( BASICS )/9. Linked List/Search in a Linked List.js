class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(33);
head.next = new Node(44);
head.next.next = new Node(90);
head.next.next.next = new Node(200);
head.next.next.next.next = new Node(99);

// ---------Iterative approach search---------
//Time: O(n)
//Space: O(1)
function search(head, el) {
  let curr = head;
  let pos = 1;
  while (curr !== null) {
    if (curr.data === el) return pos;
    curr = curr.next;
    pos++;
  }
  return -1;
}

console.log(search(head, 41));
console.log(search(head, 33));
console.log(search(head, 44));
console.log(search(head, 90));

// ---------Recursive approach search---------
//Time: O(n)
//Space: O(n)
function search2(head, el) {
  if (head === null) return -1;
  if (head.data === el) return 1;
  let pos = search2(head.next, el);
  if (pos === -1) return -1;
  return pos + 1;
}

console.log(search2(head, 41));
console.log(search2(head, 33));
console.log(search2(head, 44));
console.log(search2(head, 99));
