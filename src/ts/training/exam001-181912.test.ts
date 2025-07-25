import { describe, expect, test } from 'vitest';
import solution from './exam001-181912';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5)) //
      .toEqual([56789, 99999]);
  });
});
