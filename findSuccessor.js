class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if (node.right) {
    let currentNode = node.right;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  } else {
    //if it doesn't have a right subtree
    let currentNode = node;
    while (currentNode) {
      //for when we've hit the root node. if it's the parent node, just return null
      if (!currentNode.parent) return null;
      if (currentNode.parent.left === currentNode) return currentNode.parent;
      currentNode = currentNode.parent;
    }
  }
}
