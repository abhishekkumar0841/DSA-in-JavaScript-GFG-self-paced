class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.left.left = new Node(40);
root.left.right = new Node(50);

root.right = new Node(30);
root.right.right = new Node(70);
root.right.right.right = new Node(80);

function printKDist(root, k) {
  if (root === null) return;
  if (k === 0) {
    console.log(root.key);
  } else {
    printKDist(root.left, k - 1);
    printKDist(root.right, k - 1);
  }
}

printKDist(root, 2);
