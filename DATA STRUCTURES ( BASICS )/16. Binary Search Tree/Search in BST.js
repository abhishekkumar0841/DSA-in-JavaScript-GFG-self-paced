class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

// let root = new Node(50);
// root.left = new Node(30);
// root.right = new Node(40);
// root.left.left = new Node(20);

// root.right = new Node(70);
// root.right.left = new Node(60);
// root.right.left.left = new Node(55);
// root.right.left.right = new Node(65);
// root.right.right = new Node(80);

let root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(10);
root.right = new Node(30);
root.right.left = new Node(25);
root.right.right = new Node(40);

//RECURSIVE APPROACH
//Time: O(h)
//Aux Space: O(h)
function searchInBST(root, key) {
  if (root === null) {
    return false;
  } else if (root.key === key) {
    return true;
  } else if (root.key > key) {
    return searchInBST(root.left, key);
  } else {
    return searchInBST(root.right, key);
  }
}

console.log(searchInBST(root, 5));

//ITERATIVE APPROACH
//Time: O(h)
//Aux Space: O(1)
function searchInBST2(root, key) {
  while (root !== null) {
    if (root.key === key) {
      return true;
    } else if (root.key > key) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return false;
}

console.log(searchInBST2(root, 25));
