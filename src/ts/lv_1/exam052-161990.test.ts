import { describe, expect, test } from 'vitest';
import solution from './exam052-161990';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    wallpaper: [
      '.#...', //
      '..#..',
      '...#.',
    ],
    expected: [0, 1, 3, 4],
  },
  {
    wallpaper: [
      '..........', //
      '.....#....',
      '......##..',
      '...##.....',
      '....#.....',
    ],
    expected: [1, 3, 5, 8],
  },
  {
    wallpaper: [
      '.##...##.', //
      '#..#.#..#',
      '#...#...#',
      '.#.....#.',
      '..#...#..',
      '...#.#...',
      '....#....',
    ],
    expected: [0, 0, 7, 9],
  },
  {
    wallpaper: [
      '..', //
      '#.',
    ],
    expected: [1, 0, 2, 1],
  },
];
// cspell:enable

describe('바탕화면 정리', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ wallpaper, expected }) => {
    expect(solution(wallpaper)).toEqual(expected);
  });
});
