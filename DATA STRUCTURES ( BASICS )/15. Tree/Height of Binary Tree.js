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
root.left.left.left = new Node(100);
root.right.left = new Node(60);
root.right.right = new Node(80);

// let root = new Node(10)
// root.left = new Node(20)
// root.right = new Node(30)
// root.right.left = new Node(40)
// console.log(root);

//Method 1
function height(root) {
  if (root === null) {
    return 0;
  } else {
    let lh = height(root.left);
    let rh = height(root.right);
    return Math.max(lh, rh) + 1;
  }
}

console.log('Height:', height(root));

//Method 2
function height2(root) {
  if (root === null) {
    return 0;
  } else {
    return Math.max(height2(root.left), height2(root.right)) + 1;
  }
}

console.log("Height2:", height2(root));
