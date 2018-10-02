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

describe('LinkedList.addFront method', () => {
  test('throws an Error if no value is passed as an argument', () => {
    const list = new LinkedList();
    expect(list.addFront).toThrowError();
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

describe('LinkedList.addBack method', () => {
  test('throws an Error if no value is passed as an argument', () => {
    const list = new LinkedList();
    expect(list.addBack).toThrowError();
  });

  test('creates a new node and assigns it to the tail property', () => {
    const list = new LinkedList();
    
    list.addBack(1);
    expect(list.head).toBe(list.tail); // 1 node in list
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();

    list.addBack(2);
    expect(list.head).not.toBe(list.tail);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);

    list.addBack(3);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(3);
  });
});

describe('LinkedList.removeFront method', () => {
  test('returns null if the list is empty', () => {
    const list = new LinkedList();
    
    const head = list.removeFront();
    expect(head).toBeNull();
  });

  test('returns null if there is one item in the list', () => {
    const list = new LinkedList();
    list.addBack(1);
    
    const head = list.removeFront();
    expect(head).toBeNull();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test('removes the front item and assigns head to the next node', () => {
    const list = new LinkedList();
    list.addBack(1);
    list.addBack(2);
    list.addBack(3);

    const head = list.removeFront();
    expect(head).not.toBe(list.tail);
    expect(head.value).toBe(2);
    expect(list.tail.value).toBe(3);
  });
});

describe('LinkedList.removeBack method', () => {
  test('returns null if the list is empty', () => {
    const list = new LinkedList();
    const tail = list.removeBack();
    expect(tail).toBeNull();
  });

  test('returns null if there is one item in the list', () => {
    const list = new LinkedList();
    list.addBack(1);
    
    const tail = list.removeBack();
    expect(tail).toBeNull();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test('removes the last item and assigns tail to the next to last node', () => {
    const list = new LinkedList();
    list.addBack(1);
    list.addBack(2);
    list.addBack(3);

    const tail = list.removeBack();
    expect(tail).not.toBe(list.head);
    expect(tail.value).toBe(2);
    expect(list.head.value).toBe(1);
  });
});

describe('LinkedList.contains method', () => {
  test('throws an error if no value is passed as an argument', () => {
    const list = new LinkedList();
    
    expect(list.contains).toThrowError();
  });

  test('returns null if the list is empty', () => {
    const list = new LinkedList();

    const contains = list.contains(1);
    expect(contains).toBe(false);
  });

  test('returns true if the list contains value', () => {
    const list = new LinkedList();
    list.addBack(1);
    list.addBack(2);
    list.addBack(3);

    const contains = list.contains(2);
    expect(contains).toBe(true);
  });

  test('returns false if the list contains value', () => {
    const list = new LinkedList();
    list.addBack(1);
    list.addBack(2);

    const contains = list.contains(3);
    expect(contains).toBe(false);
  });
});

describe('LinkedList.front method', () => {
  test('returns null if the list is empty', () => {
    const list = new LinkedList();
    expect(list.front()).toBeNull();
  });

  test('returns the first node in the list', () => {
    const list = new LinkedList();
    list.addBack(1);
    list.addBack(2);
    list.addBack(3);

    const front = list.front();
    expect(front).toBe(list.head);
    expect(front.value).toBe(1);
  });
});

describe('LinkedList.back method', () => {
  test('returns null if the list is empty', () => {
    const list = new LinkedList();
    const back = list.back();
    expect(back).toBeNull();
  });

  test('returns the last node in the list', () => {
    const list = new LinkedList();
    list.addBack(1);
    list.addBack(2);
    list.addBack(3);

    const back = list.back();
    expect(back).toBe(list.tail);
    expect(back.value).toBe(3);
  });
});

describe('LinkedList.length method', () => {
  test('is initialized to 0', () => {
    const list = new LinkedList();
    const length = list.length();
    expect(length).toBe(0);
  });

  test('increments length by 1 after adding node', () => {
    const list = new LinkedList();
    list.addBack(1);
    
    let length = list.length();
    expect(length).toBe(1);

    list.addFront(0);
    length = list.length();
    expect(length).toBe(2);
  });

  test('decrements length by 1 after removing node', () => {
    const list = new LinkedList();
    list.addBack(1);
    list.addBack(2);
    
    let length = list.length();
    expect(length).toBe(2);

    list.removeBack();
    length = list.length();
    expect(length).toBe(1);

    list.removeFront();
    length = list.length();
    expect(length).toBe(0);
  });
});
