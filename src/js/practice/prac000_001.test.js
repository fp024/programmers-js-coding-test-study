import { describe, expect, test } from 'vitest';
import solution from './prac000_001.js';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    nums: [100, 4, 200, 1, 3, 2],
    expected: 4,
  },
  {
    nums: [],
    expected: 0,
  },
  {
    nums: [5],
    expected: 1,
  },
  {
    nums: [100, 4, 200, 1, 3, 2, 11, 12, 13, 14, 15, 16, 501, 502, 503, 504, 505, 506, 507],
    expected: 7,
  },
];

describe('가장 긴 연속된 숫자 찾기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ nums, expected }) => {
    expect(solution(nums)).toEqual(expected);
  });
});
