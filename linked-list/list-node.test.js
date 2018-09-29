const ListNode = require('./list-node');

test('Instantiates an instance of ListNode', () => {
  const actual = new ListNode(1);
  expect(actual).toBeInstanceOf(ListNode);
});
