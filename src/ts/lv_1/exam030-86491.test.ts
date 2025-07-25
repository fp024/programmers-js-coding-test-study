import { describe, expect, test } from 'vitest';
import solution from './exam030-86491';

describe('최소직사각형', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(
      solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40],
      ])
    ).toBe(4000);

    expect(
      solution([
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15],
      ])
    ).toBe(120);

    expect(
      solution([
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11],
      ])
    ).toBe(133);
  });
});
