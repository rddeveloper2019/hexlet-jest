const fill = require('../src/index');

let array;
beforeEach(() => {
  array = [1, 2, 3, 4];
});
test('fill array - 1', () => {
  fill(array, '*', 1, 3);
  expect(array).toEqual([1, '*', '*', 4]);
});
test('fill array - 2', () => {
  fill(array, '*');
  expect(array).toEqual(['*', '*', '*', '*']);
});
test('fill array - 3', () => {
  fill(array, '*', 4);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('fill array - 4', () => {
  fill(array, '*', 0, 10);
  expect(array).toEqual(['*', '*', '*', '*']);
});
