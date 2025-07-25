import { describe, expect, test } from 'vitest';
import solution from './exam046-161989';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 8,
    m: 4,
    section: [2, 3, 6],
    expected: 2,
  },
  {
    n: 5,
    m: 4,
    section: [1, 3],
    expected: 1,
  },
  {
    n: 4,
    m: 1,
    section: [1, 2, 3, 4],
    expected: 4,
  },
];
// cspell:enable

describe('덧칠하기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, m, section, expected }) => {
    expect(solution(n, m, section)).toBe(expected);
  });
});
