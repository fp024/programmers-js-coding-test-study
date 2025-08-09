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

// 💡 5만개의 배드케이스 데이터를 적용했을 때, 확실히 스택의 우위가 드러난다.
//     - 완전 탐색: solution: 3.200s
//     - 스택 활용: solution_a: 21.053ms
//     수행시간 차이가 엄청남 👍
const LARGE_TEST_DATA_COUNT = 50_000;

const EXTRA_TEST_CASES = [
  {
    prices: Array.from({ length: LARGE_TEST_DATA_COUNT }, (_, i) => i + 1),
    expected: Array.from(
      { length: LARGE_TEST_DATA_COUNT },
      (_, i) => LARGE_TEST_DATA_COUNT - 1 - i
    ),
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

describe('주식 가격 - 개선코드', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ prices, expected }) => {
    expect(solution_a(prices)).toEqual(expected);
  });

  test.each(EXTRA_TEST_CASES)('추가 테스트 케이스 검증', ({ prices, expected }) => {
    console.time('solution_a');
    expect(solution_a(prices)).toEqual(expected);
    console.timeEnd('solution_a');
  });
});
