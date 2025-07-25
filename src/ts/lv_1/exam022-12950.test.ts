import { describe, expect, test } from 'vitest';
import solution from './exam022-12950';

describe('행렬의 덧셈', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(
      solution(
        [
          [1, 2],
          [2, 3],
        ],
        [
          [3, 4],
          [5, 6],
        ]
      )
    ) //
      .toEqual([
        [4, 6],
        [7, 9],
      ]);
    expect(solution([[1], [2]], [[3], [4]])) //
      .toEqual([[4], [6]]);
  });
});
