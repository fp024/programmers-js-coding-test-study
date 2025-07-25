import { describe, expect, test } from 'vitest';
import solution from './exam010-87377';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    line: [
      [2, -1, 4],
      [-2, -1, 4],
      [0, -1, 1],
      [5, -8, -12],
      [5, 8, 12],
    ],
    expected: [
      '....*....',
      '.........',
      '.........',
      '*.......*',
      '.........',
      '.........',
      '.........',
      '.........',
      '*.......*',
    ],
  },
  {
    line: [
      [0, 1, -1],
      [1, 0, -1],
      [1, 0, 1],
    ],
    expected: ['*.*'],
  },
  {
    line: [
      [1, -1, 0],
      [2, -1, 0],
    ],
    expected: ['*'],
  },
  {
    line: [
      [1, -1, 0],
      [2, -1, 0],
      [4, -1, 0],
    ],
    expected: ['*'],
  },
];

// cspell:enable

describe('교점에 별 만들기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ line, expected }) => {
    expect(solution(line)).toEqual(expected);
  });
});
