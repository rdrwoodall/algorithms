const BinaryTreeNode = require('./binary-tree-node');
const BinarySearchTreeUtils = require('./binary-search-tree-utils');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add = (value) => {
    const node = new BinaryTreeNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      if (BinarySearchTreeUtils.traverseLeft(
        current.value,
        value
      )) {
        if (!BinarySearchTreeUtils.nodeHasChild(current.left)) {
          current.left = node;
          return;
        }

        current = current.left;
      } else {
        if (!BinarySearchTreeUtils.nodeHasChild(current.right)) {
          current.right = node;
          return;
        }

        current = current.right;
      }
    }
  }
}
