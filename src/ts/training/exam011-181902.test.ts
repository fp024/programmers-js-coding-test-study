import { describe, expect, test } from 'vitest';
import solution from './exam011-181902';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution('Programmers')) //
      .toEqual([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
        0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0,
      ]);
  });
});
