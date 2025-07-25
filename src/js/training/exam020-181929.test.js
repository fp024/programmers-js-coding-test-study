import { describe, expect, test } from 'vitest';
import solution from './exam020-181929.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution([3, 4, 5, 2, 1])).toBe(1);
  });

  test('TestCase 02', () => {
    expect(solution([5, 7, 8, 3])).toBe(0);
  });
});
