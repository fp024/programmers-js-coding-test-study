import { describe, expect, test } from 'vitest';
import solution from './exam018-181931.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(3, 4, [true, false, false, true, true])).toBe(37);
  });

  test('TestCase 02', () => {
    expect(solution(7, 1, [false, false, false, true, false, false, false])).toBe(10);
  });
});
