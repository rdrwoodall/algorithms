const ListNode = require('./list-node');

test('Instantiates an instance of ListNode', () => {
  const node = new ListNode(1);
  expect(node).toBeInstanceOf(ListNode);
});

test('ListNode instance stores the value it is initialized with', () => {
  const expected = 1;
  const node = new ListNode(expected);
  expect(node.value).toBe(expected);
});

test('ListNode instance is initialized with a null next value', () => {
  const expected = null;
  const node = new ListNode(1);
  expect(node.next).toBeNull();
});

test('ListNode instance can modify the next value', () => {
  const node = new ListNode(1);
  const nextNode = new ListNode(2)
  node.next = nextNode;
  expect(node.next).toBe(nextNode);
});
