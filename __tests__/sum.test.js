import { sum } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
  //wrong :(
  expect(4 + 2).toBe(7)
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
});