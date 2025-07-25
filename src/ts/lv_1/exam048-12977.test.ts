import { describe, expect, test } from 'vitest';
import solution from './exam048-12977';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    nums: [1, 2, 3, 4],
    expected: 1,
  },
  {
    nums: [1, 2, 7, 6, 4],
    expected: 4,
  },
];
// cspell:enable

describe('소수 만들기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ nums, expected }) => {
    expect(solution(nums)).toBe(expected);
  });
});
