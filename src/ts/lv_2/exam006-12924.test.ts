import { describe, expect, test } from 'vitest';
import solution from './exam006-12924';
import solution_a from './exam006-12924-a';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 15,
    expected: 4,
  },
  {
    n: 1,
    expected: 1,
  },
  {
    n: 2,
    expected: 1,
  },
];
// cspell:enable

describe('숫자의 표현', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution(n)).toBe(expected);
  });
});

describe('숫자의 표현 - 투포인터 방식', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution_a(n)).toEqual(expected);
  });
});
