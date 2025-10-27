export function sum(a, b) {
  return a + b;
}

export function square(a) {
  return a * a;
}

export function squareRoot(a) {
  if (a < 0) {
    throw new Error('Cannot compute square root of negative number');
  }
  return Math.sqrt(a);
}

// export class Test {}
// export const name = '';

