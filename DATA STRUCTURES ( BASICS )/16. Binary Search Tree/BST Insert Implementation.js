class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

// let root = null
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);

//RECURSIVE SOLUTION TO INSERT NEW KEY IN BST
function insBST(root, key) {
  if (root === null) {
    return new Node(key);
  } else if (root.key === key) {
    return root;
  } else if (root.key > key) {
    root.left = insBST(root.left, key);
  } else {
    root.right = insBST(root.right, key);
  }

  return root;
}

console.log(insBST(root, 7));

//ITERATIVE SOLUTION TO INSERT NEW KEY IN BST
function insBST2(root, key) {
  //this parent is used to get hold of the previous node
  let par = null;
  let curr = root;
  while (curr !== null) {
    par = curr;
    if (curr.key === key) {
      return key;
    } else if (curr.key < key) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }

  if (par === null) {
    return new Node(key);
  } else if (par.key > key) {
    par.left = new Node(key);
  } else {
    par.right = new Node(key);
  }

  return root;
}

console.log(insBST2(root, 7));
