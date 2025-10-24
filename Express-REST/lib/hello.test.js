import { expect, test } from 'vitest';
import hello from './hello.js';

test('hello function', () => {
  expect(hello('world')).toBe('Hello WORLD');
});
