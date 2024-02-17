class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.prev = null;
  }
}

// let head = new Node(20)
// head.next = new Node(30)
// head.next.next = new Node (40)
// // console.log(head);

// function ins(head, el){
//     let temp = new Node(1)
//     temp.next = head;
//     return temp
// }

// console.log(ins(head));

// let head = null
let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;

function insAtBeg(head, el){
    let temp = new Node(el)
    temp.next = head;
    if(head !== null){
        head.prev = temp;
    }
    return temp
}

console.log(insAtBeg(head, 999));
