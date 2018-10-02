const ListNode = require('./list-node');
const LinkedListUtils = require('../utils/').LinkedListUtils;

class LinkedList {  
  constructor() {
    this.head = null;
    this.tail = null;
    this.nodeCount = 0;
  }

  contains(value) {
    if (!value) {
      this.handleValueError('contains');
    }

    return LinkedListUtils.findNode(this, value) !== null;
  }

  addFront(value) {
    if (!value && LinkedListUtils.isInvalidFalsey(value)) {
      this.handleValueError('addFront');
    }

    const node = new ListNode(value);
    this.head = node;
    this.nodeCount++;
    
    return this.head;
  }

  addBack(value) {
    if (!value) { // no value
      this.handleValueError('addBack');
    }

    const node = new ListNode(value);
    this.nodeCount++;

    if (!this.head) { // empty list
      this.head = node;
      this.tail = node;
      return this.head;
    }
    
    // add node to end
    const prevTail = this.tail;
    prevTail.next = node;
    this.tail = node;

    return this.tail;
  }

  removeFront() {
    if (!this.head) {
      return null;
    }

    this.nodeCount--;

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

    this.nodeCount--;

    if (this.head === this.tail) { // 1 node in list
      this.head = null;
      this.tail = null;
      return null;
    }

    const secondToLast = LinkedListUtils.getSecondToLastNode(this);

    if (secondToLast) {
      this.tail = secondToLast;
    }

    return this.tail;
  }

  front() {
    return this.head ? this.head : null;
  }

  back() {
    return this.tail ? this.tail : null;
  }

  length() {
    return this.nodeCount;
  }

  // TODO: implement following methods and tests:
  // min
  // max
  // util methods

  handleValueError(methodName) {
    throw new Error(`${methodName} expectas a value as an argument`)
  }
}

module.exports = LinkedList;
