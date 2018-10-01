class LinkedListHelpers {
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
  LinkedListHelpers
}
