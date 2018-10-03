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

  // TODO: expand findNode test further
});

// TODO: complete test for
// - findNode
// - findPrecedingNode
// - getSecondToLastNode
// - prependNode
// - appendNode
