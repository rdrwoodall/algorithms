const LinkedList = require('./linked-list');
const LinkedListUtils = require('./linked-list-utils').LinkedListUtils;

describe('LinkedListUtils.isInvalidFalsey method', () => {
  test('returns true if null is supplied as argument', () => {
    const isInvalidFalsey = LinkedListUtils.isInvalidFalsey(null);
    expect(isInvalidFalsey).toBe(true);
  });

  test('returns true if undefined is supplied as argument', () => {
    const isInvalidFalsey = LinkedListUtils.isInvalidFalsey(undefined);
    expect(isInvalidFalsey).toBe(true);
  });

  test('returns false for all other falsey value types supplied as an argument', () => {
    const validFalseys = ['', 0, -1, [], {}];

    validFalseys.forEach((falsey) => {
      expect(LinkedListUtils.isInvalidFalsey(falsey)).toBe(false);
    })
  });
});

describe('LinkedListUtils.findNode method', () => {
  test('returns null if the list is empty', () => {
    const node = LinkedListUtils.findNode(new LinkedList(), 1);
    expect(node).toBeNull();
  });

  test('returns null if the list is not supplied as an argument', () => {
    const node = LinkedListUtils.findNode(null, 1);
    expect(node).toBeNull();
  });

  test('returns null if a node with value is not in the list', () => {
    const linkedList = new LinkedList();
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);

    const node = LinkedListUtils.findNode(linkedList, -1);
    expect(node).toBeNull();
  });

  test('returns a node with supplied value', () => {
    const linkedList = new LinkedList();
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);

    const node = LinkedListUtils.findNode(linkedList, 3);
    expect(node).not.toBeNull();
    expect(node.value).toBe(3);
  });
});

describe('LinkedListUtils.findPrecedingNode function', () => {
  test('returns null if the list is empty', () => {
    const nodes = LinkedListUtils.findPrecedingNode(new LinkedList(), 1);
    expect(nodes).toBeNull();
  });

  test('returns null if the list is not supplied as an argument', () => {
    const nodes = LinkedListUtils.findPrecedingNode(null, 1);
    expect(nodes).toBeNull();
  });

  test('returns null if a node with value is not in the list', () => {
    const linkedList = new LinkedList();
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);

    const nodes = LinkedListUtils.findPrecedingNode(linkedList, -1);
    expect(nodes).toBeNull();
  });

  test('returns an object with keys "preceding" and "node"', () => {
    const linkedList = new LinkedList();
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);

    const nodes = LinkedListUtils.findPrecedingNode(linkedList, 1);
    expect(nodes).toBeInstanceOf(Object);

    const keys = Object.keys(nodes);
    expect(keys.length).toBe(2);
    expect(keys).toContain('preceding');
    expect(keys).toContain('node');
  });

  test('returns null for preceding if node is the first item in the list', () => {
    const linkedList = new LinkedList();
    linkedList.addBack(1);

    const { preceding, node } = LinkedListUtils.findPrecedingNode(linkedList, 1);
    expect(preceding).toBeNull();
    expect(node).not.toBeNull();
    expect(node.value).toBe(1);
  });

  test('returns non-null values for preceding and node', () => {
    const linkedList = new LinkedList();
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);

    const { preceding, node } = LinkedListUtils.findPrecedingNode(linkedList, 3);
    expect(preceding).not.toBeNull();
    expect(node).not.toBeNull();
    expect(preceding.value).toBe(2);
    expect(node.value).toBe(3);
  });
});

// TODO: complete implementations/tests for
// - getSecondToLastNode
// - prependNode
// - appendNode
