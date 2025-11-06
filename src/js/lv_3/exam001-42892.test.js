import { describe, expect, test } from 'vitest';
import solution from './exam001-42892.js';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    nodeInfo: [
      [5, 3],
      [11, 5],
      [13, 3],
      [3, 5],
      [6, 1],
      [1, 3],
      [8, 6],
      [7, 2],
      [2, 2],
    ],
    expected: [
      [7, 4, 6, 9, 1, 8, 5, 2, 3],
      [9, 6, 5, 8, 1, 4, 3, 2, 7],
    ],
  },
];

describe('길 찾기 게임', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ nodeInfo, expected }) => {
    expect(solution(nodeInfo)).toEqual(expected);
  });
});
