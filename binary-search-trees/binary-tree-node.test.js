const BinaryTreeNode = require('./binary-tree-node');

describe('BinaryTreeNode instance', () => {
  test('Instantiates an instance of BinaryTreeNode', () => {
    const node = new BinaryTreeNode(1);
    expect(node).toBeInstanceOf(BinaryTreeNode);
  });

  test('BinaryTreeNode instance stores the value it is initialized with', () => {
    const expected = 1;
    const node = new BinaryTreeNode(expected);
    expect(node.value).toBe(expected);
  });

  test('BinaryTreeNode instance is initialized with a null left value', () => {
    const node = new BinaryTreeNode(1);
    expect(node.left).toBeNull();
  });

  test('BinaryTreeNode instance can modify the left value', () => {
    const node = new BinaryTreeNode(10);
    const leftNode = new BinaryTreeNode(5);
    node.left = leftNode;
    expect(node.left).toBe(leftNode);
  });
  
  test('BinaryTreeNode instance is initialized with a null right value', () => {
    const node = new BinaryTreeNode(1);
    expect(node.right).toBeNull();
  });

  test('BinaryTreeNode instance can modify the right value', () => {
    const node = new BinaryTreeNode(10);
    const rightNode = new BinaryTreeNode(15);
    node.right = rightNode;
    expect(node.right).toBe(rightNode);
  });
});
