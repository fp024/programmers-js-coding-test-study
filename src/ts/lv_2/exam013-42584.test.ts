import { describe, expect, test } from 'vitest';
import solution from './exam013-42584';
import solution_a from './exam013-42584-a';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    prices: [1, 2, 3, 2, 3],
    expected: [4, 3, 1, 1, 0],
  },
  {
    prices: [5, 4, 3, 2, 1],
    expected: [1, 1, 1, 1, 0],
  },
];

// 💡 15_000_000 (천오백만)로 설정했을 때는
//     solution: 9.171s
//     solution_a: 8.406s
// 위처럼 0.7초 정도 스택 방식이 빨랐다.
//
// 💡 10만개로도 차이가 확실히 있었음.
//     solution: 64.748ms
//     solution_a: 38.753ms
const LARGE_TEST_DATA = 100_000;

const EXTRA_TEST_CASES = [
  {
    prices: Array.from({ length: LARGE_TEST_DATA }, (_, i) => LARGE_TEST_DATA - i),
    expected: Array(LARGE_TEST_DATA - 1)
      .fill(1)
      .concat(0),
  },
];

// cspell:enable
describe('주식 가격', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ prices, expected }) => {
    expect(solution(prices)).toEqual(expected);
  });

  test.each(EXTRA_TEST_CASES)('추가 테스트 케이스 검증', ({ prices, expected }) => {
    console.time('solution');
    expect(solution(prices)).toEqual(expected);
    console.timeEnd('solution');
  });
});

describe('주식 가격', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ prices, expected }) => {
    expect(solution_a(prices)).toEqual(expected);
  });

  test.each(EXTRA_TEST_CASES)('추가 테스트 케이스 검증', ({ prices, expected }) => {
    console.time('solution_a');
    expect(solution_a(prices)).toEqual(expected);
    console.timeEnd('solution_a');
  });
});
