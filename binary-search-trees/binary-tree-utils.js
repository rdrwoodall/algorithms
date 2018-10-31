const BinarySearchTree = require('./binary-search-tree');

class BinaryTreeUtils {
  static nodeHasChild(node) {
    return node;
  }

  static traverseLeft(nodeValue, comparand) {
    return Math.max(nodeValue, comparand) === nodeValue;
  }

  static subTreeHeight(treeRoot) {
    return treeRoot === undefined
      ? 0
      : Math.max(subTreeHeight(treeRoot.left), subTreeHeight(treeRoot.right))
  }

  static countNodes(node) {
    if (!node) {
      return 0;
    }

    return countNodes(node.left)
      + countNodes(node.right)
      + 1;
  }

  static arrayToBst(arr) {
    // local helpers
    const validLeftIndex = index => index >= 0;
    const validRightIndex = index => index <= (arr.length - 1);

    const mid = arr.length / 2;
    const bst = new BinarySearchTree();

    // only 1 item in array
    if (mid === 0) {
      bst.add(arr[0]);
      return bst;
    }

    let leftIndex = mid - 1;
    let rightIndex = mid;

    while(validLeftIndex || validRightIndex) {
      if (validLeftIndex) {
        // add item and decrement left index
        bst.add(arr[leftIndex--]);
      }

      if (validRightIndex) {
        // add item and increment right index
        bst.add(arr[rightIndex++]);
      }
    }

    return bst;
  }
}

module.exports = {
  BinaryTreeUtils
};
