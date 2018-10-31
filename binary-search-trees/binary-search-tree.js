const BinaryTreeNode = require('./binary-tree-node');
const BinaryTreeUtils = require('./binary-tree-utils');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  size = () => {
    return BinaryTreeUtils.countNodes(this.root);
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
      if (BinaryTreeUtils.traverseLeft(
        current.value,
        value
      )) {
        if (!BinaryTreeUtils.nodeHasChild(current.left)) {
          current.left = node;
          return;
        }

        current = current.left;
      } else {
        if (!BinaryTreeUtils.nodeHasChild(current.right)) {
          current.right = node;
          return;
        }

        current = current.right;
      }
    }
  }

  height = () => {
    return BinaryTreeUtils.subTreeHeight(this.root);
  }

  isBalanced = () => {
    if (this.root === null) {
      return false;
    }

    const leftTreeHeight = BinaryTreeUtils.subTreeHeight(this.root.left);
    const rightTreeHeight = BinaryTreeUtils.subTreeHeight(this.root.right);

    return leftTreeHeight === rightTreeHeight
      || leftTreeHeight === (rightTreeHeight + 1)
      || leftTreeHeight === (rightTreeHeight - 1);
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
