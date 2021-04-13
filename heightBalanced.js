class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  const boolean = !rec(tree) ? false : true;
  return boolean;
}

function rec(tree) {
  if (tree === null) return 0;
  const left = rec(tree.left);
  const right = rec(tree.right);
  if (left === false || right === false) return false;
  if (Math.abs(left - right) > 1) return false;
  return Math.max(left, right) + 1;
}
