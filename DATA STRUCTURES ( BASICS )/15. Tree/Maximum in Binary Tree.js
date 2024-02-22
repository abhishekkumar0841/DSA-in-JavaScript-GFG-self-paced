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

// let root = new Node(10);
// root.left = new Node(100);
// root.right = new Node(80);
// root.right.left = new Node(5);

function maxInBinTree(root) {
  if (root === null) return Number.NEGATIVE_INFINITY;
  return Math.max(root.key, maxInBinTree(root.left), maxInBinTree(root.right));
}

console.log(maxInBinTree(root));
