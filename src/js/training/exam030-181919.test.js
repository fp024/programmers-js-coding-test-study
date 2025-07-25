import { describe, expect, test } from 'vitest';
import solution from './exam030-181919.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(10)).toEqual([10, 5, 16, 8, 4, 2, 1]);
  });
});
