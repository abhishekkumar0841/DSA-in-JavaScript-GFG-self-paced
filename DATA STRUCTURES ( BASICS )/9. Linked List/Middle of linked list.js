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

//------TWO TRAVERSAL METHOD-------
//Time: theta(n)
function findMidEl(head) {
  if (head === null) return;
  let count = 0;
  for (let curr = head; curr !== null; curr = curr.next) {
    count++;
  }

  let curr = head;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    curr = curr.next;
  }

  console.log(curr.data);
}

findMidEl(head);

//------ONE TRAVERSAL METHOD-------
//Time: theta(n)
function findMidEl2(head) {
    if(head === null) return;
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log(slow.data);
}

findMidEl2(head);
