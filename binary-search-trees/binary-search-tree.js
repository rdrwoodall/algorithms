const BinaryTreeNode = require('./binary-tree-node');
const BinarySearchTreeUtils = require('./binary-search-tree-utils');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  size = () => {
    return BinarySearchTreeUtils.countNodes(this.root);
  }

  contains = (value) => {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = value < current.value ? current.left : current.right;
    }

    return true;
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

  static min = () => {
    let current = this.root;

    while (current.left) {
      current = current.left;
    }

    return current.value;
  };

  static max = () => {
    let current = this.root;

    while (current.right) {
      current = current.right;
    }

    return current.value;
  };
}

module.exports = {
  BinarySearchTree
};
