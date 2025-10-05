import { describe, expect, test } from 'vitest';
import solution from './exam014-12985';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    N: 8,
    A: 4,
    B: 7,
    expected: 3,
  },
];

// cspell:enable
describe('예상 대진표', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ N, A, B, expected }) => {
    expect(solution(N, A, B)).toEqual(expected);
  });
});
