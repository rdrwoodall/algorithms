const LinkedList = require('./linked-list');

describe('LinkedList instance', () => {
  test('instantiates an instance of LinkedList', () => {
    const list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
  });

  test('a new instance defines a null head and tail property', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });
});

describe('LinkedList.add method', () => {
  test('throws an Error if no value is passed as an argument', () => {
    const list = new LinkedList();
    expect(list.addFront).toThrow(Error);
  });

  test('creates a new node and assigns it to the tail property', () => {
    const list = new LinkedList();
    
    list.add(1);
    expect(list.head).toBe(list.tail); // 1 node in list
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();

    list.add(2);
    expect(list.head).not.toBe(list.tail);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);

    list.add(3);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(3);
  });
});

describe('LinkedList.addFront method', () => {
  test('throws an Error if no value is passed as an argument', () => {
    const list = new LinkedList();
    expect(list.addFront).toThrow(Error);
  });

  test('creates a new ListNode and assigns it to head property', () => {
    const expected = 1;
    const list = new LinkedList();
    const head = list.addFront(expected);
    
    expect(list.head).toBe(head);
    expect(list.head.value).toBe(expected);
    expect(list.head.next).toBeNull();
  });
});

describe('LinkedList.removeFront method', () => {
  test('returns null if the list is empty', () => {
    const list = new LinkedList();
    const head = list.removeFront();
    expect(head).toBeNull();
  });

  test('removes the front item and assigns head to the next node', () => {
    const list = new LinkedList();
  });
});

