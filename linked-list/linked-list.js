const ListNode = require('./list-node');
const LinkedListHelpers = require('../utils/helpers').LinkedListHelpers;

class LinkedList {  
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFront(value) {
    if (!value) {
      this.handleValueError('addFront');
    }

    const node = new ListNode(value);
    this.head = node;
    return this.head;
  }

  addBack(value) {
    if (!value) { // no value
      this.handleValueError('addBack');
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

  removeFront() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) { // 1 node in list
      this.head = null;
      this.tail = null;
      return this.head;
    }

    const next = this.head.next;
    this.head = next;

    return this.head;
  }

  removeBack() {
    if (!this.tail) {
      return null;
    }

    if (this.head === this.tail) { // 1 node in list
      this.head = null;
      this.tail = null;
      return null;
    }

    const secondToLast = LinkedListHelpers.getSecondToLastNode(this);

    if (secondToLast) {
      this.tail = secondToLast;
    }

    return this.tail;
  }

  // TODO: implement following methods and tests:
  // contains

  handleValueError(methodName) {
    throw new Error(`${method} expectas a value as an argument`)
  }
}

module.exports = LinkedList;
