class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);
console.log(root);

function inOrder(root) {
  if (root !== null) {
    inOrder(root.left);
    console.log(root.key);
    inOrder(root.right);
  }
}

inOrder(root);
