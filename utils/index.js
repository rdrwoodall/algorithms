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
}

module.exports = {
  LinkedListUtils
}
