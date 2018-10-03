const ListNode = require('./list-node');

class LinkedListUtils {
  static isInvalidFalsey(input) {
    return (input === null) || (input === undefined);
  }

  static findNode(linkedList, value) {
    if (!linkedList || !linkedList.head) { // no list or empty list
      return null;
    }

    let current = linkedList.head;

    while(current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  // returns the node prior to the node with the supplied value
  // has an optional return of the valueNode
  static findPrecedingNode(linkedList, value, includeValueNode = true) {
    if (!linkedList || !linkedList.head) {
      return null;
    }

    let current = linkedList.head;
    let prev = null;

    while(current) {
      if (current.value === value) {
        return includeValueNode 
          ? { preceding: prev, node: current }
          : prev;
      }

      prev = current;
      current = current.next;
    }

    return null;
  }

  static getSecondToLastNode(linkedList) {
    if (!linkedList || !linkedList.head) { // no list or empty list
      return null;
    }

    let current = linkedList.head;
    let prev = null;

    while(current.next) {
      prev = current;
      current = current.next;
    }

    return prev;
  }

  static prependNode(linkedList, insert, before) {
    // insert will be inserted between preceding and following nodes (hence alias for before node)
    let { preceding, node: following} = LinkedListUtils.findPrecedingNode(before);

    const node = new ListNode(insert);

    preceding.next = node;
    node.next = following;

    return linkedList;
  }
}

module.exports = {
  LinkedListUtils
}
