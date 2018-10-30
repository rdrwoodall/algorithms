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
}

module.exports = {
  BinaryTreeUtils
};
