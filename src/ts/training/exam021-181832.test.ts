import { describe, expect, test } from 'vitest';
import solution from './exam021-181832';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(4)) //
      .toEqual([
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ]);
  });

  test('TestCase 02', () => {
    expect(solution(5)) //
      .toEqual([
        [1, 2, 3, 4, 5],
        [16, 17, 18, 19, 6],
        [15, 24, 25, 20, 7],
        [14, 23, 22, 21, 8],
        [13, 12, 11, 10, 9],
      ]);
  });
});
