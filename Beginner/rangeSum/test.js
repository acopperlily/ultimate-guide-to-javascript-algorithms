const rangeSum = require('./index-START');

test('rangeSum is a function', () => {
  expect(typeof rangeSum).toEqual('function');
});

test('rangeSum adds positive nums', () => {
  expect(rangeSum([1, 9])).toEqual(45);
});
