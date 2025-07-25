import { describe, expect, test } from 'vitest';
import solution from './exam047-12921';
import solution_a from './exam047-12921-a';
import solution_b from './exam047-12921-b';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 10,
    expected: 4,
  },
  {
    n: 5,
    expected: 3,
  },
];
// cspell:enable

describe('소수 찾기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution(n)).toBe(expected);
  });
});

describe('소수 찾기 - 나누는 수를 먼저 구한 소수들로 사용', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution_a(n)).toBe(expected);
  });
});

describe('소수 찾기 - "에라토스테네스의 체" 알고리즘 사용', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution_b(n)).toBe(expected);
  });
});
