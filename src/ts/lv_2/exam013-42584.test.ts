import { describe, expect, test } from 'vitest';
import solution from './exam013-42584';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    prices: [1, 2, 3, 2, 3],
    expected: [4, 3, 1, 1, 0],
  },
];

// cspell:enable
describe('주식 가격', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ prices, expected }) => {
    expect(solution(prices)).toEqual(expected);
  });
});
