import { describe, expect, test } from 'vitest';
import solution from './exam029-181920.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(3, 10)).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
