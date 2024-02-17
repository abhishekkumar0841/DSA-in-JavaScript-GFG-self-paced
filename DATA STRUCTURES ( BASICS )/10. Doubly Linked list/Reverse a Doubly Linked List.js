class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.prev = null;
  }
}

let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;

function revDLL(head){
    if(head === null) return head;
    let prev = null;
    let curr = head;
    while(curr !== null){
        prev = curr;
        [curr.prev, curr.next] = [curr.next, curr.prev]
        curr = curr.prev;
    }
    return prev;
}

console.log(revDLL(head));
