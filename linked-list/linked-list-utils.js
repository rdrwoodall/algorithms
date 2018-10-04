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

  // returns the precedingNode to the valueNode and the valueNode
  static findPrecedingNode(linkedList, value) {
    if (!linkedList || !linkedList.head) {
      return null;
    }

    let current = linkedList.head;
    let prev = null;

    while(current) {
      if (current.value === value) {
        return { preceding: prev, node: current };
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
    let { preceding, node: following} = LinkedListUtils.findPrecedingNode(before);

    const node = new ListNode(insert);

    // insert node in between preceding and following
    preceding.next = node;
    node.next = following;

    return linkedList;
  }
}

module.exports = {
  LinkedListUtils
}
