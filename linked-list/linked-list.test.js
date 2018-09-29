const LinkedList = require('./linked-list');

test('instantiates an instance of LinkedList', () => {
  const actual = new LinkedList();
  expect(actual).toBeInstanceOf(LinkedList);
})
