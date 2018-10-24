class BinarySearchTreeUtils {
  static nodeHasChild(node) {
    return node;
  }

  static traverseLeft(nodeValue, comparand) {
    return Math.max(nodeValue, comparand) === nodeValue;
  }
}

module.exports = {
  BinarySearchTreeUtils
}
