class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(50);
root.left = new Node(30);
root.right = new Node(40);
root.left.left = new Node(20);

root.right = new Node(70);
root.right.left = new Node(60);
root.right.left.left = new Node(55);
root.right.left.right = new Node(65);
root.right.right = new Node(80);

function getFloor(root, x) {
  let res = null;
  while (root !== null) {
    if (root.key === x) {
      return root;
    } else if (root.key > x) {
      root = root.left;
    } else {
      res = root;
      root = root.right;
    }
  }

  return res;
}

console.log(getFloor(root, 58));
