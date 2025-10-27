
import { expect, test } from 'vitest';
import * as MyMath from './my-maths.js';

test('sum function adds two numbers', () => {
  expect(MyMath.sum(2, 3)).toBe(5);
  expect(MyMath.sum(-2, -3)).toBe(-5);
  expect(MyMath.sum(0, 0)).toBe(0);
});

test('square function squares a number', () => {
  expect(MyMath.square(4)).toBe(16);
});

test('squareRoot function computes the square root of a number', () => {
  expect(MyMath.squareRoot(9)).toBe(3);
  expect(MyMath.squareRoot(0)).toBe(0);
});

test('squareRoot function throws error for negative input', () => {
  expect(() => MyMath.squareRoot(-4)).toThrow('Cannot compute square root of negative number');
});
