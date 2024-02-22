//creating tree
class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(80);
root.right.left = new Node(5);
root.right.left.right = new Node(50);

function getSizeRoot(root) {
  if (root === null) return 0;
  return 1 + getSizeRoot(root.left) + getSizeRoot(root.right);
}

console.log(getSizeRoot(root));
