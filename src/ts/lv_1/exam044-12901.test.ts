import { describe, expect, test } from 'vitest';
import solution from './exam044-12901';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    a: 5,
    b: 24,
    expected: 'TUE',
  },
  {
    a: 1,
    b: 1,
    expected: 'FRI',
  },
];
// cspell:enable

describe('2016년', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ a, b, expected }) => {
    expect(solution(a, b)).toEqual(expected);
  });
});
