class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(30);
root.left = new Node(40);
root.right = new Node(50);
root.left.left = new Node(70);
root.right.left = new Node(60);
root.right.right = new Node(80);

console.log(root);
