const ListNode = require('./list-node');

class LinkedList {  
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    if (!value) { // no value
      this.handleValueError('add');
    }

    const node = new ListNode(value);

    if (!this.head) { // empty list
      this.head = node;
      this.tail = node;
      return this.head;
    }
    
    // add node to end
    const prevTail = this.tail;
    prevTail.next = node;
    this.tail = node;
  }

  addFront(value) {
    if (!value) {
      this.handleValueError('addFront');
    }

    const node = new ListNode(value);
    this.head = node;
    return this.head;
  }

  removeFront() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
    return this.head;
  }

  // TODO: implement following methods and tests:
  // removeFront
  // contains

  handleValueError(methodName) {
    throw new Error(`${method} expectas a value as an argument`)
  }
}

module.exports = LinkedList;
