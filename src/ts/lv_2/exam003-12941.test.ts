import { describe, expect, test } from 'vitest';
import solution from './exam003-12941';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    A: [1, 4, 2],
    B: [5, 4, 4],
    expected: 29,
  },
  {
    A: [1, 2],
    B: [3, 4],
    expected: 10,
  },
];
// cspell:enable

describe('최솟값 만들기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ A, B, expected }) => {
    expect(solution(A, B)).toBe(expected);
  });
});
